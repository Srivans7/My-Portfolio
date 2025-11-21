// Small plugin: when a rule contains -webkit-appearance but not appearance,
// insert the standard `appearance` declaration after the vendor-prefixed one.
const addAppearancePlugin = () => ({
  postcssPlugin: 'postcss-add-appearance',
  Once(root) {
    root.walkDecls((decl) => {
      if (decl.prop === '-webkit-appearance') {
        const parent = decl.parent;
        const hasStandard = parent.nodes.some(
          (n) => n.type === 'decl' && n.prop === 'appearance'
        );
        if (!hasStandard) {
          parent.insertAfter(decl, { prop: 'appearance', value: decl.value });
        }
      }
    });
  },
});

module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer'), addAppearancePlugin()],
};
