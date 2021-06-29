import * as React from 'react';

function SvgMo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <path fill="#00785e" d="M0 0h640v480H0z" />
            <path fill="#fbd116" d="M294.915 108.727L335.5 138.21 320 90.5l-15.5 47.71 40.585-29.483z" />
            <g id="mo_svg__a">
                <path
                    d="M320 331.625H217.523a146.33 146.33 0 01-3.805-4H320a2.14 2.14 0 011.425 1.894c.046.92-.533 1.783-1.425 2.105zm0-31.336c.595-1.216 1.753-4.03 1.227-7.55a12.39 12.39 0 00-1.227-3.81c-5.75 5.44-16.555 14.16-32.493 18.982A81.04 81.04 0 01264 311.374h-63.133a144.396 144.396 0 005.852 8h61.03c19.9 0 38.13-7.18 52.25-19.085zm-109.594-24.696a32.286 32.286 0 01-9.695 2.1c14.87 16.818 36.596 27.43 60.79 27.43 22.98 0 43.736-9.572 58.5-24.945a440.94 440.94 0 004.546-58.908 440.923 440.923 0 00-4.546-67.67c-6.595 5.91-18.95 18.684-24.775 38.267a81.045 81.045 0 00-3.35 23.13c0 16.68 5.042 32.188 13.687 45.086-10.616-13.713-16.938-30.914-16.938-49.586 0-12.403 2.79-24.157 7.774-34.673a32.49 32.49 0 01-7.53-12.984c-6.68 11.786-10.494 25.4-10.494 39.907 0 18.042 5.9 34.71 15.875 48.187-17.37-18.21-41.867-29.562-69-29.562-1.458 0-2.91.037-4.353.1a32.644 32.644 0 016.75 8.9c26.992.04 51.36 11.32 68.69 29.4-16.55-13.825-37.853-22.15-61.086-22.15-12.983 0-25.363 2.6-36.647 7.305 11.595 30.638 41.214 52.445 75.898 52.445 2.248 0 4.474-.1 6.673-.28-4.68.84-9.5 1.28-14.42 1.28-21.886 0-41.75-8.68-56.347-22.78zM320 364.374h-53.11c16.437 6.533 34.355 10.125 53.11 10.125a10.912 10.912 0 001.25-4.956 10.927 10.927 0 00-1.25-5.17zm0-24.5h-93.633a143.792 143.792 0 007.82 6.25H320c.215-.22 1.273-1.348 1.273-3.125 0-1.778-1.058-2.906-1.273-3.125zm0 12.5h-76.695a143.623 143.623 0 0014.446 8H320a7.557 7.557 0 001.16-4.193 7.53 7.53 0 00-1.16-3.805z"
                    fill="#fff"
                />
                <path
                    fill="#fbd116"
                    d="M200.484 174.766l25.384 23.67-6.625-34.07-14.664 31.462 30.35-16.836zm36.891-32.009l34.71.603-27.725-20.884 10.148 33.196 11.304-32.828z"
                />
            </g>
            <use height="100%" width="100%" xlinkHref="#mo_svg__a" transform="matrix(-1 0 0 1 640 0)" />
        </svg>
    );
}

export default SvgMo;