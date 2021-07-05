import { addBeforeLoader, loaderByName } from '@craco/craco';

export function configureGenstackioTypingsIgnore({ webpackConfig }) {
    const l = {
        test: /node_modules\/@genstackio\/.+\/.+\.d\.ts$/,
        use: 'null-loader',
    };

    addBeforeLoader(webpackConfig, loaderByName('babel-loader'), l);

    return webpackConfig;
}

export default configureGenstackioTypingsIgnore;
