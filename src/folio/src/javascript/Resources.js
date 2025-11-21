import * as THREE from 'three'

import Loader from './Utils/Loader.js'
import EventEmitter from './Utils/EventEmitter.js'

// Matcaps
import matcapBeigeSource from '../models/matcaps/beige.png'
import matcapBlackSource from '../models/matcaps/black.png'
import matcapOrangeSource from '../models/matcaps/orange.png'
import matcapRedSource from '../models/matcaps/red.png'
import matcapWhiteSource from '../models/matcaps/white.png'
import matcapGreenSource from '../models/matcaps/green.png'
import matcapBrownSource from '../models/matcaps/brown.png'
import matcapGraySource from '../models/matcaps/gray.png'
import matcapEmeraldGreenSource from '../models/matcaps/emeraldGreen.png'
import matcapPurpleSource from '../models/matcaps/purple.png'
import matcapBlueSource from '../models/matcaps/blue.png'
import matcapYellowSource from '../models/matcaps/yellow.png'
import matcapMetalSource from '../models/matcaps/metal.png'
// import matcapGoldSource from '../models/matcaps/gold.png'

// Intro
import introStaticBaseSource from '../models/intro/static/base.glb?url'
import introStaticCollisionSource from '../models/intro/static/collision.glb?url'
import introStaticFloorShadowSource from '../models/intro/static/floorShadow.png'

import introInstructionsLabelsSource from '../models/intro/instructions/labels.glb?url'
import introInstructionsArrowsSource from '../models/intro/instructions/arrows.png'
import introInstructionsControlsSource from '../models/intro/instructions/controls.png'
import introInstructionsOtherSource from '../models/intro/instructions/other.png'

import introArrowKeyBaseSource from '../models/intro/arrowKey/base.glb?url'
import introArrowKeyCollisionSource from '../models/intro/arrowKey/collision.glb?url'

import introBBaseSource from '../models/intro/b/base.glb?url'
import introBCollisionSource from '../models/intro/b/collision.glb?url'

import introRBaseSource from '../models/intro/r/base.glb?url'
import introRCollisionSource from '../models/intro/r/collision.glb?url'

import introUBaseSource from '../models/intro/u/base.glb?url'
import introUCollisionSource from '../models/intro/u/collision.glb?url'

import introNBaseSource from '../models/intro/n/base.glb?url'
import introNCollisionSource from '../models/intro/n/collision.glb?url'

import introOBaseSource from '../models/intro/o/base.glb?url'
import introOCollisionSource from '../models/intro/o/collision.glb?url'

import introSBaseSource from '../models/intro/s/base.glb?url'
import introSCollisionSource from '../models/intro/s/collision.glb?url'

import introIBaseSource from '../models/intro/i/base.glb?url'
import introICollisionSource from '../models/intro/i/collision.glb?url'

import introMBaseSource from '../models/intro/m/base.glb?url'
import introMCollisionSource from '../models/intro/m/collision.glb?url'

import introCreativeBaseSource from '../models/intro/creative/base.glb?url'
import introCreativeCollisionSource from '../models/intro/creative/collision.glb?url'

import introDevBaseSource from '../models/intro/dev/base.glb?url'
import introDevCollisionSource from '../models/intro/dev/collision.glb?url'

// Crossroads
import crossroadsStaticFloorShadowSource from '../models/crossroads/static/floorShadow.png'
import crossroadsStaticBaseSource from '../models/crossroads/static/base.glb?url'
import crossroadsStaticCollisionSource from '../models/crossroads/static/collision.glb?url'

// Car default
import carDefaultChassisSource from '../models/car/default/chassis.glb?url'
import carDefaultWheelSource from '../models/car/default/wheel.glb?url'
import carDefaultBackLightsBrakeSource from '../models/car/default/backLightsBrake.glb?url'
import carDefaultBackLightsReverseSource from '../models/car/default/backLightsReverse.glb?url'
import carDefaultAntenaSource from '../models/car/default/antena.glb?url'
// import carDefaultBunnyEarLeftSource from '../models/car/default/bunnyEarLeft.glb'
// import carDefaultBunnyEarRightSource from '../models/car/default/bunnyEarRight.glb'

// Car cyber truck
import carCyberTruckChassisSource from '../models/car/cyberTruck/chassis.glb?url'
import carCyberTruckWheelSource from '../models/car/cyberTruck/wheel.glb?url'
import carCyberTruckBackLightsBrakeSource from '../models/car/cyberTruck/backLightsBrake.glb?url'
import carCyberTruckBackLightsReverseSource from '../models/car/cyberTruck/backLightsReverse.glb?url'
import carCyberTruckAntenaSource from '../models/car/cyberTruck/antena.glb?url'

// Projects
import projectsBoardStructureSource from '../models/projects/board/structure.glb?url'
import projectsBoardCollisionSource from '../models/projects/board/collision.glb?url'
import projectsBoardStructureFloorShadowSource from '../models/projects/board/floorShadow.png'
import projectsBoardPlaneSource from '../models/projects/board/plane.glb?url'

import projectsDistinctionsAwwwardsBaseSource from '../models/projects/distinctions/awwwards/base.glb?url'
import projectsDistinctionsAwwwardsCollisionSource from '../models/projects/distinctions/awwwards/collision.glb?url'
import projectsDistinctionsFWABaseSource from '../models/projects/distinctions/fwa/base.glb?url'
import projectsDistinctionsFWACollisionSource from '../models/projects/distinctions/fwa/collision.glb?url'
import projectsDistinctionsCSSDABaseSource from '../models/projects/distinctions/cssda/base.glb?url'
import projectsDistinctionsCSSDACollisionSource from '../models/projects/distinctions/cssda/collision.glb?url'

import projectsThreejsJourneyFloorSource from '../models/projects/threejsJourney/floorTexture.png'
import projectsMadboxFloorSource from '../models/projects/madbox/floorTexture.png'
import projectsScoutFloorSource from '../models/projects/scout/floorTexture.png'
import projectsChartogneFloorSource from '../models/projects/chartogne/floorTexture.png'
import projectsZenlyFloorSource from '../models/projects/zenly/floorTexture.png'
import projectsCitrixRedbullFloorSource from '../models/projects/citrixRedbull/floorTexture.png'
import projectsPriorHoldingsFloorSource from '../models/projects/priorHoldings/floorTexture.png'
import projectsOranoFloorSource from '../models/projects/orano/floorTexture.png'
// import projectsGleecChatFloorSource from '../models/projects/gleecChat/floorTexture.png'
import projectsKepplerFloorSource from '../models/projects/keppler/floorTexture.png'

// Information
import informationStaticBaseSource from '../models/information/static/base.glb?url'
import informationStaticCollisionSource from '../models/information/static/collision.glb?url'
import informationStaticFloorShadowSource from '../models/information/static/floorShadow.png'

import informationBaguetteBaseSource from '../models/information/baguette/base.glb?url'
import informationBaguetteCollisionSource from '../models/information/baguette/collision.glb?url'

import informationContactTwitterLabelSource from '../models/information/static/contactTwitterLabel.png'
import informationContactGithubLabelSource from '../models/information/static/contactGithubLabel.png'
import informationContactLinkedinLabelSource from '../models/information/static/contactLinkedinLabel.png'
import informationContactMailLabelSource from '../models/information/static/contactMailLabel.png'

import informationActivitiesSource from '../models/information/static/activities.png'

// Playground
import playgroundStaticFloorShadowSource from '../models/playground/static/floorShadow.png'
import playgroundStaticBaseSource from '../models/playground/static/base.glb?url'
import playgroundStaticCollisionSource from '../models/playground/static/collision.glb?url'

// Brick
import brickBaseSource from '../models/brick/base.glb?url'
import brickCollisionSource from '../models/brick/collision.glb?url'

// Horn
import hornBaseSource from '../models/horn/base.glb?url'
import hornCollisionSource from '../models/horn/collision.glb?url'

// // Distinction A
// import distinctionAStaticFloorShadowSource from '../models/distinctionA/static/floorShadow.png'
// import distinctionAStaticBaseSource from '../models/distinctionA/static/base.glb'
// import distinctionAStaticCollisionSource from '../models/distinctionA/static/collision.glb'

// // Distinction B
// import distinctionBStaticFloorShadowSource from '../models/distinctionB/static/floorShadow.png'
// import distinctionBStaticBaseSource from '../models/distinctionB/static/base.glb'
// import distinctionBStaticCollisionSource from '../models/distinctionB/static/collision.glb'

// // Distinction C
// import distinctionCStaticFloorShadowSource from '../models/distinctionC/static/floorShadow.png'
// import distinctionCStaticBaseSource from '../models/distinctionC/static/base.glb'
// import distinctionCStaticCollisionSource from '../models/distinctionC/static/collision.glb'

// // Cone
// import coneBaseSource from '../models/cone/base.glb'
// import coneCollisionSource from '../models/cone/collision.glb'

// // Awwwards trophy
// import awwwardsTrophyBaseSource from '../models/awwwardsTrophy/base.glb'
// import awwwardsTrophyCollisionSource from '../models/awwwardsTrophy/collision.glb'

// Awwwards trophy
import webbyTrophyBaseSource from '../models/webbyTrophy/base.glb?url'
import webbyTrophyCollisionSource from '../models/webbyTrophy/collision.glb?url'

// Lemon
import lemonBaseSource from '../models/lemon/base.glb?url'
import lemonCollisionSource from '../models/lemon/collision.glb?url'

// Bowling ball
import bowlingBallBaseSource from '../models/bowlingBall/base.glb?url'
import bowlingBallCollisionSource from '../models/bowlingBall/collision.glb?url'

// Bowling pin
import bowlingPinBaseSource from '../models/bowlingPin/base.glb?url'
import bowlingPinCollisionSource from '../models/bowlingPin/collision.glb?url'

// Area
import areaKeyEnterSource from '../models/area/keyEnter.png'
import areaEnterSource from '../models/area/enter.png'
import areaOpenSource from '../models/area/open.png'
import areaResetSource from '../models/area/reset.png'
import areaQuestionMarkSource from '../models/area/questionMark.png'

// Tiles
import tilesABaseSource from '../models/tiles/a/base.glb?url'
import tilesACollisionSource from '../models/tiles/a/collision.glb?url'

import tilesBBaseSource from '../models/tiles/b/base.glb?url'
import tilesBCollisionSource from '../models/tiles/b/collision.glb?url'

import tilesCBaseSource from '../models/tiles/c/base.glb?url'
import tilesCCollisionSource from '../models/tiles/c/collision.glb?url'

import tilesDBaseSource from '../models/tiles/d/base.glb?url'
import tilesDCollisionSource from '../models/tiles/d/collision.glb?url'

import tilesEBaseSource from '../models/tiles/e/base.glb?url'
import tilesECollisionSource from '../models/tiles/e/collision.glb?url'

// Konami
import konamiLabelSource from '../models/konami/label.png'
import konamiLabelTouchSource from '../models/konami/label-touch.png'

// Wigs
import wig1Source from '../models/wigs/wig1.glb?url'
import wig2Source from '../models/wigs/wig2.glb?url'
import wig3Source from '../models/wigs/wig3.glb?url'
import wig4Source from '../models/wigs/wig4.glb?url'

// // Egg
// import eggBaseSource from '../models/egg/base.glb'
// import eggCollisionSource from '../models/egg/collision.glb'

export default class Resources extends EventEmitter
{
    constructor()
    {
        super()

        this.loader = new Loader()
        this.items = {}

        this.loader.load([
            // Matcaps
            { name: 'matcapBeige', source: matcapBeigeSource, type: 'texture' },
            { name: 'matcapBlack', source: matcapBlackSource, type: 'texture' },
            { name: 'matcapOrange', source: matcapOrangeSource, type: 'texture' },
            { name: 'matcapRed', source: matcapRedSource, type: 'texture' },
            { name: 'matcapWhite', source: matcapWhiteSource, type: 'texture' },
            { name: 'matcapGreen', source: matcapGreenSource, type: 'texture' },
            { name: 'matcapBrown', source: matcapBrownSource, type: 'texture' },
            { name: 'matcapGray', source: matcapGraySource, type: 'texture' },
            { name: 'matcapEmeraldGreen', source: matcapEmeraldGreenSource, type: 'texture' },
            { name: 'matcapPurple', source: matcapPurpleSource, type: 'texture' },
            { name: 'matcapBlue', source: matcapBlueSource, type: 'texture' },
            { name: 'matcapYellow', source: matcapYellowSource, type: 'texture' },
            { name: 'matcapMetal', source: matcapMetalSource, type: 'texture' },
            // { name: 'matcapGold', source: matcapGoldSource, type: 'texture' },

            // Intro
            { name: 'introStaticBase', source: introStaticBaseSource },
            { name: 'introStaticCollision', source: introStaticCollisionSource },
            { name: 'introStaticFloorShadow', source: introStaticFloorShadowSource, type: 'texture' },

            { name: 'introInstructionsLabels', source: introInstructionsLabelsSource },
            { name: 'introInstructionsArrows', source: introInstructionsArrowsSource, type: 'texture' },
            { name: 'introInstructionsControls', source: introInstructionsControlsSource, type: 'texture' },
            { name: 'introInstructionsOther', source: introInstructionsOtherSource, type: 'texture' },

            { name: 'introArrowKeyBase', source: introArrowKeyBaseSource },
            { name: 'introArrowKeyCollision', source: introArrowKeyCollisionSource },

            { name: 'introBBase', source: introBBaseSource },
            { name: 'introBCollision', source: introBCollisionSource },

            { name: 'introRBase', source: introRBaseSource },
            { name: 'introRCollision', source: introRCollisionSource },

            { name: 'introUBase', source: introUBaseSource },
            { name: 'introUCollision', source: introUCollisionSource },

            { name: 'introNBase', source: introNBaseSource },
            { name: 'introNCollision', source: introNCollisionSource },

            { name: 'introOBase', source: introOBaseSource },
            { name: 'introOCollision', source: introOCollisionSource },

            { name: 'introSBase', source: introSBaseSource },
            { name: 'introSCollision', source: introSCollisionSource },

            { name: 'introIBase', source: introIBaseSource },
            { name: 'introICollision', source: introICollisionSource },

            { name: 'introMBase', source: introMBaseSource },
            { name: 'introMCollision', source: introMCollisionSource },

            { name: 'introCreativeBase', source: introCreativeBaseSource },
            { name: 'introCreativeCollision', source: introCreativeCollisionSource },

            { name: 'introDevBase', source: introDevBaseSource },
            { name: 'introDevCollision', source: introDevCollisionSource },

            // Intro
            { name: 'crossroadsStaticBase', source: crossroadsStaticBaseSource },
            { name: 'crossroadsStaticCollision', source: crossroadsStaticCollisionSource },
            { name: 'crossroadsStaticFloorShadow', source: crossroadsStaticFloorShadowSource, type: 'texture' },

            // Car default
            { name: 'carDefaultChassis', source: carDefaultChassisSource },
            { name: 'carDefaultWheel', source: carDefaultWheelSource },
            { name: 'carDefaultBackLightsBrake', source: carDefaultBackLightsBrakeSource },
            { name: 'carDefaultBackLightsReverse', source: carDefaultBackLightsReverseSource },
            { name: 'carDefaultAntena', source: carDefaultAntenaSource },
            // { name: 'carDefaultBunnyEarLeft', source: carDefaultBunnyEarLeftSource },
            // { name: 'carDefaultBunnyEarRight', source: carDefaultBunnyEarRightSource },

            // Car default
            { name: 'carCyberTruckChassis', source: carCyberTruckChassisSource },
            { name: 'carCyberTruckWheel', source: carCyberTruckWheelSource },
            { name: 'carCyberTruckBackLightsBrake', source: carCyberTruckBackLightsBrakeSource },
            { name: 'carCyberTruckBackLightsReverse', source: carCyberTruckBackLightsReverseSource },
            { name: 'carCyberTruckAntena', source: carCyberTruckAntenaSource },

            // Project
            { name: 'projectsBoardStructure', source: projectsBoardStructureSource },
            { name: 'projectsBoardCollision', source: projectsBoardCollisionSource },
            { name: 'projectsBoardStructureFloorShadow', source: projectsBoardStructureFloorShadowSource, type: 'texture' },
            { name: 'projectsBoardPlane', source: projectsBoardPlaneSource },

            { name: 'projectsDistinctionsAwwwardsBase', source: projectsDistinctionsAwwwardsBaseSource },
            { name: 'projectsDistinctionsAwwwardsCollision', source: projectsDistinctionsAwwwardsCollisionSource },
            { name: 'projectsDistinctionsFWABase', source: projectsDistinctionsFWABaseSource },
            { name: 'projectsDistinctionsFWACollision', source: projectsDistinctionsFWACollisionSource },
            { name: 'projectsDistinctionsCSSDABase', source: projectsDistinctionsCSSDABaseSource },
            { name: 'projectsDistinctionsCSSDACollision', source: projectsDistinctionsCSSDACollisionSource },

            { name: 'projectsThreejsJourneyFloor', source: projectsThreejsJourneyFloorSource, type: 'texture' },
            { name: 'projectsMadboxFloor', source: projectsMadboxFloorSource, type: 'texture' },
            { name: 'projectsScoutFloor', source: projectsScoutFloorSource, type: 'texture' },
            { name: 'projectsChartogneFloor', source: projectsChartogneFloorSource, type: 'texture' },
            { name: 'projectsZenlyFloor', source: projectsZenlyFloorSource, type: 'texture' },
            { name: 'projectsCitrixRedbullFloor', source: projectsCitrixRedbullFloorSource, type: 'texture' },
            { name: 'projectsPriorHoldingsFloor', source: projectsPriorHoldingsFloorSource, type: 'texture' },
            { name: 'projectsOranoFloor', source: projectsOranoFloorSource, type: 'texture' },
            // { name: 'projectsGleecChatFloor', source: projectsGleecChatFloorSource, type: 'texture' },
            { name: 'projectsKepplerFloor', source: projectsKepplerFloorSource, type: 'texture' },

            // Information
            { name: 'informationStaticBase', source: informationStaticBaseSource },
            { name: 'informationStaticCollision', source: informationStaticCollisionSource },
            { name: 'informationStaticFloorShadow', source: informationStaticFloorShadowSource, type: 'texture' },

            { name: 'informationBaguetteBase', source: informationBaguetteBaseSource },
            { name: 'informationBaguetteCollision', source: informationBaguetteCollisionSource },

            { name: 'informationContactTwitterLabel', source: informationContactTwitterLabelSource, type: 'texture' },
            { name: 'informationContactGithubLabel', source: informationContactGithubLabelSource, type: 'texture' },
            { name: 'informationContactLinkedinLabel', source: informationContactLinkedinLabelSource, type: 'texture' },
            { name: 'informationContactMailLabel', source: informationContactMailLabelSource, type: 'texture' },

            { name: 'informationActivities', source: informationActivitiesSource, type: 'texture' },

            // Playground
            { name: 'playgroundStaticBase', source: playgroundStaticBaseSource },
            { name: 'playgroundStaticCollision', source: playgroundStaticCollisionSource },
            { name: 'playgroundStaticFloorShadow', source: playgroundStaticFloorShadowSource, type: 'texture' },

            // Brick
            { name: 'brickBase', source: brickBaseSource },
            { name: 'brickCollision', source: brickCollisionSource },

            // Horn
            { name: 'hornBase', source: hornBaseSource },
            { name: 'hornCollision', source: hornCollisionSource },

            // // Distinction A
            // { name: 'distinctionAStaticBase', source: distinctionAStaticBaseSource },
            // { name: 'distinctionAStaticCollision', source: distinctionAStaticCollisionSource },
            // { name: 'distinctionAStaticFloorShadow', source: distinctionAStaticFloorShadowSource, type: 'texture' },

            // // Distinction B
            // { name: 'distinctionBStaticBase', source: distinctionBStaticBaseSource },
            // { name: 'distinctionBStaticCollision', source: distinctionBStaticCollisionSource },
            // { name: 'distinctionBStaticFloorShadow', source: distinctionBStaticFloorShadowSource, type: 'texture' },

            // // Distinction C
            // { name: 'distinctionCStaticBase', source: distinctionCStaticBaseSource },
            // { name: 'distinctionCStaticCollision', source: distinctionCStaticCollisionSource },
            // { name: 'distinctionCStaticFloorShadow', source: distinctionCStaticFloorShadowSource, type: 'texture' },

            // // Cone
            // { name: 'coneBase', source: coneBaseSource },
            // { name: 'coneCollision', source: coneCollisionSource },

            // // Awwwards trophy
            // { name: 'awwwardsTrophyBase', source: awwwardsTrophyBaseSource },
            // { name: 'awwwardsTrophyCollision', source: awwwardsTrophyCollisionSource },

            // Webby trophy
            { name: 'webbyTrophyBase', source: webbyTrophyBaseSource },
            { name: 'webbyTrophyCollision', source: webbyTrophyCollisionSource },

            // Lemon
            { name: 'lemonBase', source: lemonBaseSource },
            { name: 'lemonCollision', source: lemonCollisionSource },

            // Bownling ball
            { name: 'bowlingBallBase', source: bowlingBallBaseSource },
            { name: 'bowlingBallCollision', source: bowlingBallCollisionSource },

            // Bownling ball
            { name: 'bowlingPinBase', source: bowlingPinBaseSource },
            { name: 'bowlingPinCollision', source: bowlingPinCollisionSource },

            // Areas
            { name: 'areaKeyEnter', source: areaKeyEnterSource, type: 'texture' },
            { name: 'areaEnter', source: areaEnterSource, type: 'texture' },
            { name: 'areaOpen', source: areaOpenSource, type: 'texture' },
            { name: 'areaReset', source: areaResetSource, type: 'texture' },
            { name: 'areaQuestionMark', source: areaQuestionMarkSource, type: 'texture' },

            // Tiles
            { name: 'tilesABase', source: tilesABaseSource },
            { name: 'tilesACollision', source: tilesACollisionSource },

            { name: 'tilesBBase', source: tilesBBaseSource },
            { name: 'tilesBCollision', source: tilesBCollisionSource },

            { name: 'tilesCBase', source: tilesCBaseSource },
            { name: 'tilesCCollision', source: tilesCCollisionSource },

            { name: 'tilesDBase', source: tilesDBaseSource },
            { name: 'tilesDCollision', source: tilesDCollisionSource },

            { name: 'tilesEBase', source: tilesEBaseSource },
            { name: 'tilesECollision', source: tilesECollisionSource },

            // Konami
            { name: 'konamiLabel', source: konamiLabelSource, type: 'texture' },
            { name: 'konamiLabelTouch', source: konamiLabelTouchSource, type: 'texture' },

            // Wigs
            { name: 'wig1', source: wig1Source },
            { name: 'wig2', source: wig2Source },
            { name: 'wig3', source: wig3Source },
            { name: 'wig4', source: wig4Source },

            // // Egg
            // { name: 'eggBase', source: eggBaseSource },
            // { name: 'eggCollision', source: eggCollisionSource },
        ])

        this.loader.on('fileEnd', (_resource, _data) =>
        {
            this.items[_resource.name] = _data

            // Texture
            if(_resource.type === 'texture')
            {
                const texture = new THREE.Texture(_data)
                texture.needsUpdate = true

                this.items[`${_resource.name}Texture`] = texture
            }

            // Trigger progress
            this.trigger('progress', [this.loader.loaded / this.loader.toLoad])
        })

        this.loader.on('end', () =>
        {
            // Trigger ready
            this.trigger('ready')
        })
    }
}
