import * as React from 'react';

function SvgIq(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#fff" d="M0 160h640v160H0z" />
            <path fill="#ce1126" d="M0 0h640v160H0z" />
            <path d="M0 320h640v160H0z" />
            <g transform="translate(-179.27 -92.847) scale(1.75182)" fill="#007a3d">
                <path d="M325.525 173.177c-.558-.294-1.186-.767-1.395-1.053-.314-.44-.13-.456 1.163-.105 2.32.628 3.815.383 5.298-.873l1.31-1.103 1.54.784c.847.428 1.747.724 2.007.656.667-.176 2.05-1.95 2.005-2.564-.054-.76.587-.57.896.263.615 1.63-.28 3.503-1.865 3.918-.774.203-1.488.128-2.66-.28-1.438-.5-1.683-.494-2.405.058-1.617 1.24-3.87 1.356-5.893.3zm5.733-5.242c-.563-.716-1.24-3.423-1.02-4.088.192-.575.39-.69.914-.526.918.288 1.13.92.993 3.064-.107 1.748-.366 2.207-.887 1.55zm-67.515-1.945c-.185 1.31 2.325 4.568 3.458 5.158-.77.345-1.727.19-2.433.577-3.948 3.948-18.367 18.005-21 21.366 7.8.155 16.45-.105 23.76-.44-.006-5.298 5.02-5.572 8.382-7.502 1.73 2.725 6.074 2.516 6.617 6.618 0 4.91.01 12.306.01 17.646H215.91c-1.17 5.176-5.843 9.125-12.353 7.5 2.014-2.103 5.406-2.827 6.62-5.734 1.024-6.365-2.046-10.296-4.032-13.907 3.284-1.194 3.782-1.492 7.12-3.736-2.342 7.12 6.092 6.338 12.354 6.175.21-2.418.088-5.272-1.767-5.625 2.396-.87 2.794-1.168 6.62-4.412v9.592c14.885 0 30.942-.11 46.138-.11 0-3.003.796-7.825-1.58-7.825-2.27 0-.107 6.173-1.87 6.173h-35.63c0-1.328-.034-4.104-.034-6.104 1.51-1.512 1.33-1.38 11.648-11.7 1.028-1.028 8.266-7.566 14.6-13.71zm89.06-.253c2.488 1.338 4.457 3.19 7.502 3.97-.353 1.26-1.475 1.76-1.77 3.088v26.91c3.403.75 4.12-1.178 5.738-2.205.442 4.307 3.185 8.53 3.088 11.91h-14.558v-43.673zM333.39 180.15s5.297-4.472 5.297-4.644v23.485l3.814-.005c0-8.948-.117-18.023-.117-26.338 1.548-1.55 4.58-3.792 5.338-5.36v42.06c-10.745 0-30.792.013-33.442.013-.493-8.73-.577-17.77 9.6-15.827v-3.562c-.31-.608-.87.148-1-.644 1.617-1.617 2.164-2.03 6.54-5.85 0 4.61.08 15.498.08 15.498 1.07 0 3.153.004 3.857.004 0 0 .036-18.228.036-18.83zm-12.553 18.6c.716 1.076 3.155 1.057 3.04-.754-.41-1.493-3.615-.924-3.04.755z" />
                <circle cx={224.026} cy={214.369} r={2.042} />
                <path d="M287.048 165.78c2.488 1.338 4.457 3.19 7.502 3.97-.353 1.26-1.476 1.76-1.768 3.087v26.91c3.4.75 4.117-1.178 5.736-2.205.44 4.307 3.185 8.53 3.088 11.91h-14.56c.002-14.555.002-29.114.002-43.673z" />
            </g>
        </svg>
    );
}

export default SvgIq;
