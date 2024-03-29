import * as React from 'react';

function SvgMr(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path d="M0 0h640v480H0z" fill="#cd2a3e" />
            <path d="M0 72h640v336H0z" fill="#006233" />
            <path
                d="M470 154.6c-.4 82.48-67.44 149.2-150 149.2s-149.6-66.72-150-149.2a154.864 154.864 0 00-5.04 39.2c0 85.6 69.36 155.04 155.04 155.04 85.68 0 155.04-69.36 155.04-155.04 0-13.52-1.76-26.72-5.04-39.2z"
                className="mr_svg__st1"
                fill="#ffc400"
            />
            <path
                d="M320 93.8l-13.472 41.457-43.591.002 35.265 25.624-13.469 41.458L320 176.72l35.267 25.62-13.469-41.457 35.265-25.624-43.591-.002z"
                fill="#ffc400"
            />
        </svg>
    );
}

export default SvgMr;
