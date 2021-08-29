import clsx from 'clsx';
import Div from '../atoms/Div';
import Divider from '../atoms/Divider';
import Column from '../atoms/Column';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { rich_text } from '../types';
import bgClass from '../utils/bgClass';
import { AsBox } from '../as';
import { WithDescription, WithTitle } from '../withs';

export function AppPush({
    btnLabelAppStore,
    btnLabelGooglePlay,
    className,
    color = 'dark',
    description,
    title,
    variant = 'contained',
}: AppPushProps) {
    return (
        <Column center mx={'auto'} px={'md'} py={'hl'}>
            <Div center>
                <Text m={'sm'} text={title} variant={'title6'} className={'leading-loose'} />
                <Divider color={'warning'} size={'xs'} variant={'contained'} className={'w-1/2 justify-center'} />
            </Div>
            <Text m={'sm'} py={'xmd'} text={description} variant={'description'} className={'leading-loose'} />
            <Div m={'sm'}>
                <Button
                    color={color}
                    corner={'circle'}
                    variant={variant}
                    className={clsx(
                        bgClass({ color, variant }),
                        'border-t-1 flex justify-between items-center p-3 m-2',
                        className,
                    )}
                    label={btnLabelAppStore}
                />
                <Button
                    color={color}
                    variant={variant}
                    corner={'circle'}
                    className={clsx(
                        bgClass({ color, variant }),
                        'border-t-1 flex justify-between items-center',
                        className,
                    )}
                    label={btnLabelGooglePlay}
                />
            </Div>
        </Column>
    );
}

export interface AppPushProps extends AsBox, WithTitle, WithDescription {
    btnLabelAppStore?: rich_text;
    btnLabelGooglePlay?: rich_text;
}

// noinspection JSUnusedGlobalSymbols
export default AppPush;
