import * as React from 'react';

function SvgBb(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <path fill="#00267f" d="M0 0h640v480H0z" />
            <path fill="#ffc726" d="M213.333 0h213.333v480H213.333z" />
            <path
                id="bb_svg__a"
                d="M319.77 135.527c-6.933 18.907-14 38.587-29.12 53.654 4.694-1.546 12.907-2.933 18.187-2.8v79.52l-22.453 3.334c-.8-.08-1.067-1.333-1.067-3.04-2.16-24.693-8-45.44-14.72-66.907-.48-2.933-8.987-14.133-2.427-12.16.8.107 9.574 3.68 8.187 1.974-11.947-12.373-29.413-21.28-46.373-23.92-1.494-.373-2.374.374-1.04 2.107 22.506 34.64 41.333 75.52 41.173 124.027 8.747 0 29.947-5.173 38.72-5.173v56.107h11.067l2.533-156.693z"
            />
            <use height="100%" width="100%" xlinkHref="#bb_svg__a" transform="matrix(-1 0 0 1 639.54 0)" />
        </svg>
    );
}

export default SvgBb;
