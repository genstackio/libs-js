import * as React from 'react';

function SvgMm(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <defs>
                <path id="mm_svg__a" transform="scale(8.844)" fill="#fff" d="M0-.5l.162.5h-.324z" />
                <g id="mm_svg__b">
                    <use xlinkHref="#mm_svg__a" transform="rotate(-144)" width={18} height={12} />
                    <use xlinkHref="#mm_svg__a" transform="rotate(-72)" width={18} height={12} />
                    <use xlinkHref="#mm_svg__a" width={18} height={12} />
                    <use xlinkHref="#mm_svg__a" transform="rotate(72)" width={18} height={12} />
                    <use xlinkHref="#mm_svg__a" transform="rotate(144)" width={18} height={12} />
                </g>
            </defs>
            <path d="M0-.1h640V160H0z" fill="#fecb00" />
            <path d="M0 320h640v160H0z" fill="#ea2839" />
            <path d="M0 160h640v160H0z" fill="#34b233" />
            <use xlinkHref="#mm_svg__b" x={9} y={6.422} width={18} height={12} transform="matrix(40 0 0 40 -40 0)" />
        </svg>
    );
}

export default SvgMm;
