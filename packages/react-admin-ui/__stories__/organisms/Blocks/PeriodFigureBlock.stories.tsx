import { args, s, a } from '../../utils';
import { PeriodFigureBlock } from '../../../src';

export default {
    title: 'Organisms/Blocks/PeriodFigureBlock',
    component: PeriodFigureBlock,
    argTypes: a({
        items: args.items,
        icon: args.icon,
        color: args.color,
        variant: args.blockVariant,
        p: args.padding,
    }),
};

export const basic = s(PeriodFigureBlock, {
    icon: (
        <div className={'flex justify-center items-center'}>
            <svg width="96" height="96" viewBox="0 0 24 24">
                <path
                    d="M2.897 4.181c2.43-2.828 5.763-4.181 9.072-4.181 4.288 0 8.535 2.273 10.717 6.554-2.722.001-6.984
         0-9.293 0-1.674.001-2.755-.037-3.926.579-1.376.724-2.415 2.067-2.777 3.644l-3.793-6.596zm5.11 7.819c0 2.2
          1.789 3.99 3.988 3.99s3.988-1.79 3.988-3.99-1.789-3.991-3.988-3.991-3.988 1.791-3.988 3.991zm5.536
           5.223c-2.238.666-4.858-.073-6.293-2.549-1.095-1.891-3.989-6.933-5.305-9.225-1.33 2.04-1.945 4.294-1.945
            6.507 0 5.448 3.726 10.65 9.673 11.818l3.87-6.551zm2.158-9.214c1.864 1.734 2.271 4.542 1.007 6.719-.951
             1.641-3.988 6.766-5.46 9.248 7.189.443 12.752-5.36 12.752-11.972 0-1.313-.22-2.66-.69-3.995h-7.609z"
                />
            </svg>
        </div>
    ),
    items: [
        {
            text: 'Daily',
            value: '36%',
        },
        {
            text: 'Mont',
            value: '96%',
        },
        {
            text: 'Week',
            value: '46%',
        },
    ],
});
