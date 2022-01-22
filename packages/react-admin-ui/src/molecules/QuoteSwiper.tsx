import { useRef, useState } from 'react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Controller, Navigation } from 'swiper';
import Icon from '../atoms/Icon';
import QuoteSwiperImages from './QuoteSwiperImages';
import QuoteSwiperTexts from './QuoteSwiperTexts';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { WithItems } from '../withs';

SwiperCore.use([Navigation, Controller]);

const useStyles = makeStyles({
    swiperWrapper: {
        width: '100%',
        flex: '1 0 auto',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        '& .swiper-slide': {
            opacity: 0.01,
            '& img, & div[class*="defaultImage"]': {
                transform: 'scale(.5)',
                borderRadius: '50%',
            },
            '&.swiper-slide-visible': {
                opacity: 0.5,
            },
            '&.swiper-slide-active': {
                opacity: 1,
                '& img, & div[class*="defaultImage"]': {
                    transform: 'scale(1)',
                },
            },
        },
    },
});

const defaultItems = [];

export function QuoteSwiper({ items = defaultItems }: QuoteSwiperProps) {
    const classes = useStyles();
    const [carouselText, setCarouselText] = useState(undefined);
    const [carouselImage, setCarouselImage] = useState(undefined);
    const prevEl = useRef(null);
    const nextEl = useRef(null);

    return (
        <>
            <div className={classes.swiperWrapper}>
                <QuoteSwiperImages
                    controller={carouselText}
                    navLeftController={prevEl}
                    navRightController={nextEl}
                    items={items}
                    onSwiper={(swiper: any) => {
                        setCarouselImage(swiper);
                    }}
                />
                <QuoteSwiperTexts
                    controller={carouselImage}
                    items={items}
                    onSwiper={(swiper: any) => {
                        setCarouselText(swiper);
                    }}
                />
            </div>
            <div
                className={
                    'sm:absolute top-1/2 left-0 sm:transform-gpu -translate-y-1/2 flex justify-between w-full ' +
                    'pointer-events-none relative transform-none'
                }
            >
                <div
                    className={
                        'pointer-events-auto cursor-pointer p-1 p-4 rounded-3xl ' +
                        'w-14 flex justify-center items-center box-border bg-clear filter drop-shadow-lg'
                    }
                    ref={prevEl}
                >
                    <Icon icon={'fa-fas--arrow-left'} />
                </div>
                <div
                    className={
                        'pointer-events-auto cursor-pointer p-1 p-4 rounded-3xl ' +
                        'w-14 flex justify-center items-center box-border bg-clear filter drop-shadow-lg'
                    }
                    ref={nextEl}
                >
                    <Icon icon={'fa-fas--arrow-right'} />
                </div>
            </div>
        </>
    );
}

export type QuoteSwiperProps = WithItems;

// noinspection JSUnusedGlobalSymbols
export default QuoteSwiper;
