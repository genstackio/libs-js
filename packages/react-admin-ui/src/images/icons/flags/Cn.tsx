import * as React from 'react';

function SvgCn(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <path id="cn_svg__a" fill="#ffde00" d="M-.588.81L0-1 .588.81-.952-.31H.952z" />
            </defs>
            <path d="M0 0h640v480H0z" fill="#de2910" />
            <use xlinkHref="#cn_svg__a" transform="matrix(71.9991 0 0 72 119.999 120)" width={30} height={20} />
            <use
                xlinkHref="#cn_svg__a"
                transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.291 47.996)"
                width={30}
                height={20}
            />
            <use
                xlinkHref="#cn_svg__a"
                transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 287.95 95.796)"
                width={30}
                height={20}
            />
            <use
                xlinkHref="#cn_svg__a"
                transform="matrix(6.5991 -23.0749 23.0746 6.59919 287.959 168.012)"
                width={30}
                height={20}
            />
            <use
                xlinkHref="#cn_svg__a"
                transform="matrix(14.9991 -18.73557 18.73533 14.99929 239.933 216.054)"
                width={30}
                height={20}
            />
        </svg>
    );
}

export default SvgCn;
