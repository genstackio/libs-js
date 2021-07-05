import {configureGenstackioTypingsIgnore} from "./features";

export const plugin = {
    overrideWebpackConfig: function (opts) {
        return configureGenstackioTypingsIgnore(opts)
    }
};

const factory = function (options: any =  {}) {
    return {plugin, options};
}

export default factory
