import translations from '../src/translations';

const localeList = Object.keys(translations);

export const defaults = {
};

export const args = {
    flag: { control: { type: 'boolean' } },
    object: { control: { type: 'object' } },
    text: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    image: { control: { type: 'object' } },
    logo: { control: { type: 'object' } },
    message: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    onChange: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onClose: { table: { disable: true } },
    opened: { control: { type: 'boolean' } },
    overline: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    alignment: { control: { type: 'select' }, options: ['left', 'center', 'right'] },
    progress: { control: { type: 'number' } },
    quantity: { control: { type: 'number' } },
    rating: { control: { type: 'number' } },
    corner: { control: { type: 'select' }, options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'] },
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    subtitle: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    helper: { control: { type: 'text' } },

    locale: { options: localeList, control: { type: 'select' } },

    children: { control: { type: 'text' } },
    code: { control: { type: 'text' } },
    color: { control: { type: 'select' }, options: ['primary', 'secondary'] },
    comments: { control: { type: 'number' } },
    content: { control: { type: 'text' } },
    dashboardItems: { control: { type: 'object' } },
    datas: { control: { type: 'object' } },
    date: { control: { type: 'number' } },
    default: { control: { type: 'text' } },
    definition: { control: { type: 'object' } },
    defaultValue: { control: { type: 'any' } },
    dropdownItems: { control: { type: 'object' } },
    error: { control: { type: 'boolean' } },
    errorText: { control: { type: 'text' } },
    rows: { control: { type: 'number' } },
    form: { control: { type: 'object' } },
    icon: { table: { disable: true } },
    index: { control: { type: 'number' } },
    items: { control: { type: 'object' } },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    target: { control: { type: 'text' } },
    status: { control: { type: 'text' } },
    value: { control: { type: 'number' } },
};

export default args;
