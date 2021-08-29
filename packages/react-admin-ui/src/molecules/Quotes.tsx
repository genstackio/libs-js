import clsx from 'clsx';
import Row from '../atoms/Row';
import Container from '../atoms/Container';
import Div from '../atoms/Div';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import QuoteSlide from './QuoteSlide';
import QuoteSwiper from './QuoteSwiper';
import { AsComponent } from '../as';
import { WithButtonEndIcon, WithButtonIcon, WithButtonLabel, WithButtonTarget, WithItems, WithTitle } from '../withs';

export function Quotes({ btnEndIcon, btnIcon, btnLabel, btnTarget, className, items = [], title }: QuotesProps) {
    if (!items.length) return null;

    return (
        <Row className={clsx('bg-clear', className)}>
            <Container className={clsx('relative flex flex-col items-center grid-cols-12 max-w-full')}>
                <Text mb={'_xl'} text={title} variant={'title3'} />
                <Button
                    color={'primary'}
                    endIcon={btnEndIcon}
                    icon={btnIcon}
                    label={btnLabel}
                    onClick={btnTarget}
                    size={'lg'}
                    variant={'outlined'}
                    className={'mb-4'}
                />
                {items.length === 1 && (
                    <Div full className={clsx('sm:3/4 md:w-2/3')}>
                        <QuoteSlide {...items[0]} />
                    </Div>
                )}
                {items.length > 1 && <QuoteSwiper items={items} />}
            </Container>
        </Row>
    );
}

export interface QuotesProps
    extends AsComponent,
        WithTitle,
        WithButtonTarget,
        WithButtonLabel,
        WithButtonIcon,
        WithButtonEndIcon,
        WithItems {}

// noinspection JSUnusedGlobalSymbols
export default Quotes;
