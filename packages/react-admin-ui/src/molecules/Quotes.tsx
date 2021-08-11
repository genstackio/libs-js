import QuoteSlide from './QuoteSlide';
import Row from '../atoms/Row';
import { WithButtonEndIcon, WithButtonIcon, WithButtonLabel, WithButtonTarget, WithItems, WithTitle } from '../withs';
import { QuoteSwiper } from './QuoteSwiper';
import { Container } from '../atoms/Container';
import clsx from 'clsx';
import { Text } from '../atoms/Text';
import Button from '../atoms/Button';
import { AsComponent } from '../as';

export function Quotes({ className, title, items = [], btnTarget, btnLabel, btnIcon, btnEndIcon }: QuotesProps) {
    return items.length ? (
        <Row className={clsx('bg-clear', className)}>
            <Container className={clsx('relative flex flex-col items-center grid-cols-12 max-w-full')}>
                <Text className={clsx('mb-8 sm:mb-4')} variant={'title3'} text={title} />
                <Button
                    size={'lg'}
                    icon={btnIcon}
                    endIcon={btnEndIcon}
                    variant={'outlined'}
                    color={'primary'}
                    className={'mb-4'}
                    onClick={btnTarget}
                    label={btnLabel}
                />
                {items.length === 1 && (
                    <div className={clsx('w-2/3 md:3/4 sm:w-full')}>
                        <QuoteSlide {...items[0]} />
                    </div>
                )}
                {items.length > 1 && <QuoteSwiper items={items} />}
            </Container>
        </Row>
    ) : null;
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
