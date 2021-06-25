const buildStyleKey = (actuals: any, keys = ['variant', 'color']) => {
    actuals['color'] = actuals['color'] || 'primary';
    actuals['variant'] = actuals['variant'] || 'filled';
    actuals['size'] = actuals['size'] || 'md';

    return keys.map((k) => actuals[k]).join('-');
};

export default buildStyleKey;
