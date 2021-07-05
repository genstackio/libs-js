import {configureGenstackioTypingsIgnore} from "./features";

const plugin = {
    overrideWebpackConfig: function (opts) {
        return configureGenstackioTypingsIgnore(opts)
    }
};

export default plugin
