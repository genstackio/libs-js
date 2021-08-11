export const headingTextVariants = {
    none: { title: 'title1', subtitle: 'subtitle' },
    section: { title: 'section', subtitle: 'subsection' },
    xsection: { title: 'section', subtitle: 'xsmall' },
    small: { title: 'title6', subtitle: 'body' },
    xxsmall: { title: 'title6', subtitle: 'overline' },
    xxsmall2: { title: 'title6', subtitle: 'title3' },
    xxsmall3: { title: 'title6', subtitle: 'subtitle' },
    xsmall: { title: 'subtitle', subtitle: 'xsmall' },
    smmd: { title: 'title5', subtitle: 'overline' },
    smmd2: { title: 'title5', subtitle: 'subtitle' },
    medium: { title: 'title3', subtitle: 'subtitle' },
    medium2: { title: 'title3', subtitle: 'subtitle', description: 'body' },
    medium3: { title: 'body', subtitle: 'title4' },
    large: { title: 'title2', subtitle: 'title6' },
    xlarge: { title: 'title1', subtitle: 'title5' },
    underlined: { title: 'underline', subtitle: 'small' },
};

export const headingTextVariantValues = Object.keys(headingTextVariants);

export type heading_text_variant =
    | 'none'
    | 'xsection'
    | 'section'
    | 'xxsmall'
    | 'xxsmall2'
    | 'xxsmall3'
    | 'xsmall'
    | 'small'
    | 'smmd'
    | 'smmd2'
    | 'medium'
    | 'medium2'
    | 'medium3'
    | 'large'
    | 'xlarge'
    | 'underlined';

export const defaultHeadingTextVariant = 'none';

export const headingTextVariantDescription = (variant?: heading_text_variant) =>
    headingTextVariants[variant || 'none'] || headingTextVariants['none'];

export default headingTextVariantDescription;
