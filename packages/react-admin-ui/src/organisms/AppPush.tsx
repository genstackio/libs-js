import Button from '../atoms/Button';
import Row from '../atoms/Row';
import Text from '../atoms/Text';
import { rich_text } from '../types';
import clsx from 'clsx';
import { WithBox, WithClassName, WithTitle } from '../withs';
import bgClass from '../utils/bgClass';
import Divider from '../atoms/Divider';

export function AppPush({
    title,
    description,
    className,
    color = 'dark',
    variant = 'contained',
    btnLabelAppStore,
    btnLabelGooglePlay,
}: AppPushProps) {
    return (
        <Row center className={clsx('mx-auto flex px-5 py-24 items-center justify-center flex-col')}>
            <div className={'items-center'}>
                <Text className={'m-2 leading-loose'} variant={'title6'} text={title} />
                <Divider size={'xs'} variant={'contained'} color={'warning'} className={clsx('w-1/2 justify-center')} />
            </div>
            <Text className={'mt-2 py-3 m-2 leading-loose'} variant={'description'} text={description} />
            <div className={'m-2'}>
                <Button
                    color={color}
                    variant={variant}
                    corner={'circle'}
                    className={clsx(
                        bgClass({ color, variant }),
                        'border-t-1 flex justify-between items-center p-3 m-2',
                        className,
                    )}
                >
                    {btnLabelAppStore}
                </Button>
                <Button
                    color={color}
                    variant={variant}
                    corner={'circle'}
                    className={clsx(
                        bgClass({ color, variant }),
                        'border-t-1 flex justify-between items-center',
                        className,
                    )}
                >
                    {btnLabelGooglePlay}
                </Button>
            </div>
        </Row>
    );
}

export interface AppPushProps extends WithTitle, WithClassName, WithBox {
    description?: rich_text;
    btnLabelAppStore?: rich_text;
    btnLabelGooglePlay?: rich_text;
}

// noinspection JSUnusedGlobalSymbols
export default AppPush;
