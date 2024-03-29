import * as React from 'react';

function SvgCd(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#007fff" d="M0 0h640v480H0z" />
            <path
                d="M28.8 96H96l20.8-67.2L137.6 96h67.2l-54.4 41.6 20.8 67.2-54.4-41.6-54.4 41.6 20.8-67.2L28.8 96zM600 0L0 360v120h40l600-360V0h-40"
                fill="#f7d618"
            />
            <path d="M640 0L0 384v96L640 96V0" fill="#ce1021" />
        </svg>
    );
}

export default SvgCd;
