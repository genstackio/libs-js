import * as React from 'react';

function SvgGe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path d="M0 0h640v480H0z" fill="#fff" />
            <path d="M272.001 0h96v480h-96z" fill="red" />
            <path d="M0 192h640v96H0z" fill="red" />
            <path
                style={{
                    mixBlendMode: 'multiply',
                }}
                d="M146.848 373.155c1.023-16.824 3.969-31.155 3.969-31.155s-9.84 1.008-14.817 1.008c-4.902 0-14.814-1.008-14.814-1.008s2.946 14.331 3.969 31.155C108.33 372.129 94 369.186 94 369.186s1.008 7.407 1.008 14.814c0 7.41-1.008 14.814-1.008 14.814s14.331-2.943 31.155-3.969c-1.023 16.824-3.97 31.155-3.97 31.155s7.41-1.008 14.815-1.008c7.41 0 14.817 1.008 14.817 1.008s-2.946-14.331-3.97-31.155c16.822 1.026 31.153 3.969 31.153 3.969s-1.005-9.84-1.005-14.814c0-4.902 1.005-14.814 1.005-14.814s-14.331 2.943-31.152 3.969zm367.997-288c1.026-16.824 3.97-31.155 3.97-31.155s-9.84 1.008-14.815 1.008c-4.902 0-14.814-1.008-14.814-1.008s2.943 14.331 3.97 31.155C476.33 84.129 462 81.186 462 81.186s1.008 7.407 1.008 14.814c0 7.41-1.008 14.814-1.008 14.814s14.331-2.943 31.155-3.969C492.13 123.669 489.186 138 489.186 138s7.407-1.008 14.814-1.008c7.41 0 14.814 1.008 14.814 1.008s-2.943-14.331-3.969-31.155c16.824 1.026 31.155 3.969 31.155 3.969s-1.008-9.84-1.008-14.814c0-4.902 1.008-14.814 1.008-14.814s-14.331 2.943-31.155 3.969zm-367.997 0C147.87 68.331 150.817 54 150.817 54s-9.84 1.008-14.817 1.008c-4.902 0-14.814-1.008-14.814-1.008s2.946 14.331 3.969 31.155C108.33 84.129 94 81.186 94 81.186S95.008 88.593 95.008 96c0 7.41-1.008 14.814-1.008 14.814s14.331-2.943 31.155-3.969c-1.023 16.824-3.97 31.155-3.97 31.155s7.41-1.008 14.815-1.008c7.41 0 14.817 1.008 14.817 1.008s-2.946-14.331-3.97-31.155c16.822 1.026 31.153 3.969 31.153 3.969s-1.005-9.84-1.005-14.814c0-4.902 1.005-14.814 1.005-14.814s-14.331 2.943-31.152 3.969zm367.997 288c1.026-16.824 3.97-31.155 3.97-31.155s-9.84 1.008-14.815 1.008c-4.902 0-14.814-1.008-14.814-1.008s2.943 14.331 3.97 31.155C476.33 372.129 462 369.186 462 369.186s1.008 7.407 1.008 14.814c0 7.41-1.008 14.814-1.008 14.814s14.331-2.943 31.155-3.969C492.13 411.669 489.186 426 489.186 426s7.407-1.008 14.814-1.008c7.41 0 14.814 1.008 14.814 1.008s-2.943-14.331-3.969-31.155c16.824 1.026 31.155 3.969 31.155 3.969s-1.008-9.84-1.008-14.814c0-4.902 1.008-14.814 1.008-14.814s-14.331 2.943-31.155 3.969z"
                fill="red"
                fillRule="evenodd"
            />
        </svg>
    );
}

export default SvgGe;
