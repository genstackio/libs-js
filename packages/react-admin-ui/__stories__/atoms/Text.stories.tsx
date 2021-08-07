import { args, s, a } from '../utils';
import { Text } from '../../src';

export default {
    title: 'Atoms/Text',
    component: Text,
    argTypes: a({
        color: args.color,
        variant: args.textVariant,
        text: args.text,
    }),
};

const Template = (args) => <Text {...args} />;

export const basic = s(Template, {
    text: 'texte',
    color: 'inherit',
    variant: 'body',
});

export const showcase = s(
    (args) => (
        <div className={'space-y-4 flex flex-row sm:flex-col justify-between'}>
            <div>
                <Text variant={'xsmall'} text={'xsmall'} />
                <Text variant={'small'} text={'small'} />
                <Text variant={'body'} text={'body'} />
                <Text variant={'text'} text={'text'} />
                <Text variant={'section'} text={'section'} />
                <Text variant={'cross'} text={'cross'} />
                <Text variant={'description'} text={'description'} />
                <Text variant={'overline'} text={'overline'} />
                <Text variant={'subsection'} text={'subsection'} />
                <Text variant={'subtitle'} text={'subtitle'} />
                <Text variant={'underline'} text={'underline'} />
            </div>
            <div>
                <Text variant={'title0'} text={'title0'} />
                <Text variant={'title1'} text={'title1'} />
                <Text variant={'title2'} text={'title2'} />
                <Text variant={'title3'} text={'title3'} />
                <Text variant={'title4'} text={'title4'} />
                <Text variant={'title5'} text={'title5'} />
                <Text variant={'title6'} text={'title6'} />
                <Text variant={'title7'} text={'title7'} />
            </div>
        </div>
    ),
    {},
);
