const buildStyleKey = ({ color = 'primary', variant = 'filled' }) => {
    return variant.concat('-', color);
};

export default buildStyleKey;
