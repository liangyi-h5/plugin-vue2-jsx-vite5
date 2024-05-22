import { Plugin } from 'vite';
import { VueJSXPresetOptions } from '@vue/babel-preset-jsx';
import { FilterPattern } from '@rollup/pluginutils';

interface FilterOptions {
    include?: FilterPattern;
    exclude?: FilterPattern;
}
type Options = VueJSXPresetOptions & FilterOptions & {
    babelPlugins?: any[];
};

declare function vue2JsxPlugin(options?: Options): Plugin;

export { FilterOptions, Options, vue2JsxPlugin as default };
