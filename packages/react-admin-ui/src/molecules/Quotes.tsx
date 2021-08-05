import QuoteSlide from './QuoteSlide';
import Row from '../atoms/Row';
import { WithButtonLabel, WithButtonTarget, WithTitle } from '../withs';
import { QuoteSwiper } from './QuoteSwiper';
import { Container } from '../atoms/Container';
import clsx from 'clsx';
import { Text } from '../atoms/Text';
import Button from '../atoms/Button';
import { rich_text } from '../types';
import { Icon } from '../atoms';

export function Quotes({ title, items = [], btnTarget, btnLabel, btnIcon, btnEndIcon }: QuotesProps) {
    if (items.length === 0) return null;
    return (
        <Row className={clsx('bg-clear')}>
            <Container className={clsx('relative flex flex-col items-center grid-cols-12 max-w-full')}>
                <Text className={clsx('mb-8 sm:mb-4')} variant={'title3'} text={title} />
                {btnLabel && (
                    <Button
                        size={'lg'}
                        icon={btnIcon}
                        variant={'outlined'}
                        color={'primary'}
                        className={'mb-4'}
                        onClick={btnTarget}
                    >
                        {btnLabel}
                        {btnEndIcon && <Icon icon={btnEndIcon} className={'ml-4'} />}
                    </Button>
                )}
                {items.length === 1 && (
                    <div className={clsx('w-2/3 md:3/4 sm:w-full')}>
                        <QuoteSlide {...items[0]} />
                    </div>
                )}
                {items.length > 1 && <QuoteSwiper items={items} />}
            </Container>
        </Row>
    );
}

export interface QuotesProps extends WithTitle, WithButtonTarget, WithButtonLabel {
    items?: any[];
    btnIcon?: rich_text;
    btnEndIcon?: rich_text;
}

export default Quotes;
