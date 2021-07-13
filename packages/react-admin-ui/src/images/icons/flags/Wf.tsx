import * as React from 'react';

function SvgWf(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0-.001h640v480H0z" />
                <path fill="#00267f" d="M0-.001h213.337v480H0z" />
                <path fill="#f31830" d="M426.662-.001H640v480H426.662z" />
            </g>
        </svg>
    );
}

export default SvgWf;
