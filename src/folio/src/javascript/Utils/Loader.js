import EventEmitter from './EventEmitter.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Resources extends EventEmitter
{
    /**
     * Constructor
     */
    constructor()
    {
        super()

        this.setLoaders()

        this.toLoad = 0
        this.loaded = 0
        this.items = {}
    }

    /**
     * Set loaders
     */
    setLoaders()
    {
        this.loaders = []

        // Images
        this.loaders.push({
            extensions: ['jpg', 'png'],
            action: (_resource) =>
            {
                const image = new Image()

                image.addEventListener('load', () =>
                {
                    this.fileLoadEnd(_resource, image)
                })

                image.addEventListener('error', () =>
                {
                    this.fileLoadEnd(_resource, image)
                })

                image.src = _resource.source
            }
        })

        // Draco
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('draco/')
        dracoLoader.setDecoderConfig({ type: 'js' })

        this.loaders.push({
            extensions: ['drc'],
            action: (_resource) =>
            {
                dracoLoader.load(_resource.source, (_data) =>
                {
                    this.fileLoadEnd(_resource, _data)

                    DRACOLoader.releaseDecoderModule()
                })
            }
        })

        // GLTF
        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        this.loaders.push({
            extensions: ['glb', 'gltf'],
            action: (_resource) =>
            {
                gltfLoader.load(_resource.source, (_data) =>
                {
                    this.fileLoadEnd(_resource, _data)
                })
            }
        })

        // FBX
        const fbxLoader = new FBXLoader()

        this.loaders.push({
            extensions: ['fbx'],
            action: (_resource) =>
            {
                fbxLoader.load(_resource.source, (_data) =>
                {
                    this.fileLoadEnd(_resource, _data)
                })
            }
        })
    }

    /**
     * Load
     */
    load(_resources = [])
    {
        for(const _resource of _resources)
        {
            this.toLoad++
            // Ensure source exists and is a string
            if (typeof _resource.source === 'string')
            {
                let extension = null

                // Handle data: URIs (data:<mime-type>;base64,....)
                if (_resource.source.indexOf('data:') === 0)
                {
                    // Extract MIME type between 'data:' and ';' or ','
                    const mimeEnd = Math.max(_resource.source.indexOf(';'), _resource.source.indexOf(','))
                    const mime = _resource.source.substring(5, mimeEnd > -1 ? mimeEnd : undefined)

                    if (mime)
                    {
                        if (mime.indexOf('/') !== -1)
                        {
                            const [type, subtype] = mime.split('/')
                            if (type === 'image')
                            {
                                // jpeg -> jpg
                                extension = subtype === 'jpeg' ? 'jpg' : subtype
                            }
                            else if (mime === 'model/gltf-binary')
                            {
                                extension = 'glb'
                            }
                            else if (mime === 'model/gltf+json')
                            {
                                extension = 'gltf'
                            }
                        }
                    }
                }
                else
                {
                    const extensionMatch = _resource.source.match(/\.([a-z]+)$/i)
                    if (extensionMatch && typeof extensionMatch[1] !== 'undefined')
                    {
                        extension = extensionMatch[1].toLowerCase()
                    }
                }

                if (extension)
                {
                    const loader = this.loaders.find((_loader) => _loader.extensions.find((_extension) => _extension === extension))

                    if(loader)
                    {
                        loader.action(_resource)
                    }
                    else
                    {
                        console.warn(`Cannot find loader for resource source: ${_resource.source} (mapped extension: ${extension})`)
                    }
                }
                else
                {
                    console.warn(`Cannot find extension for resource source: ${_resource.source}`)
                }
            }
            else
            {
                // Fallback: resource.source is missing or not a string — log full resource for debugging
                try {
                    console.warn(`Invalid or missing source for resource: ${JSON.stringify(_resource)}`)
                } catch (err) {
                    console.warn('Invalid or missing source for resource (unserializable object)', _resource)
                }
            }
        }
    }

    /**
     * File load end
     */
    fileLoadEnd(_resource, _data)
    {
        this.loaded++
        this.items[_resource.name] = _data

        this.trigger('fileEnd', [_resource, _data])

        if(this.loaded === this.toLoad)
        {
            this.trigger('end')
        }
    }
}
