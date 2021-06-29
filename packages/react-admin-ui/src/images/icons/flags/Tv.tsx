import * as React from 'react';

function SvgTv(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="tv_svg__a">
                    <path fillOpacity={0.67} d="M0 0h640v480H0z" />
                </clipPath>
            </defs>
            <g clipPath="url(#tv_svg__a)">
                <g fillRule="evenodd" transform="matrix(.64508 0 0 .92059 0 23.331)" strokeWidth="1pt" fill="#009fca">
                    <path d="M505.97-19.81h486.16v515.87H505.97z" />
                    <rect ry={0} height={521.41} width={523.49} y={-25.343} />
                </g>
                <path fillRule="evenodd" fill="#fff" d="M.017 0h395.857v196.597H.017z" />
                <path d="M.016 0L0 14.757l94.465 48.539 35.543 1.029L.017 0z" fill="#c00" />
                <path d="M40.463 0l114.523 59.822V0H40.463z" fill="#006" />
                <path
                    fill="#c00"
                    d="M170.26 0v76.368H.018v43.639H170.26v76.367h52.385v-76.367H392.89V76.368H222.646V.001H170.26z"
                />
                <path d="M237.921 0v56.368L349.967.438 237.921 0z" fill="#006" />
                <path d="M241.462 62.513l31.514-.253L395.394.437l-32.49.53-121.442 61.546z" fill="#c00" />
                <path d="M.016 132.736v41.82l78.576-41.39-78.576-.435z" fill="#006" />
                <path
                    d="M302.588 134.462l-32.755-.255 123.474 61.477-.813-14.065-89.904-47.157zm-271.884 62.25l115.774-60.777-30.407.2L.02 196.63"
                    fill="#c00"
                />
                <path
                    d="M394.55 17.271l-93.502 46.368 92.257.345v69.093H314.73l77.848 42.181 1.143 21.458-41.581-.497-113.8-55.869v56.366H155.4V140.35L48.65 196.565l-48.213.152v196.37h785.75V.347l-390.82-.34M.417 22.171L.002 62.954l82.722 1.037L.417 22.171z"
                    fill="#006"
                />
                <g fillRule="evenodd" transform="matrix(.79241 0 0 .79977 .006 0)" fill="#009fca">
                    <path d="M496.06 0h496.06v496.06H496.06z" />
                    <rect rx={0} ry={0} height={251.45} width={525.79} y={244.61} x={-2.303} />
                </g>
                <path
                    d="M593.34 122.692l27.572-.018-22.32 15.232 8.54 24.674-22.293-15.27-22.293 15.266 8.544-24.67-22.316-15.24 27.571.026 8.498-24.684zm-69.2 196.78l27.571-.019-22.32 15.233 8.54 24.673-22.293-15.269-22.293 15.266 8.544-24.67-22.316-15.24 27.571.026 8.498-24.685zm69.2-44.545l27.572-.018-22.32 15.232 8.54 24.673-22.293-15.269-22.293 15.266 8.544-24.67-22.316-15.24 27.571.026 8.498-24.684zM295.788 417.646l27.572-.019-22.32 15.233 8.54 24.673-22.293-15.269-22.293 15.266 8.544-24.67-22.317-15.24 27.572.026 8.498-24.684zm62.574-76.486l-27.572.018 22.32-15.232-8.54-24.674 22.293 15.27 22.293-15.266-8.544 24.67 22.316 15.24-27.571-.026-8.498 24.684zm81.306-112.444l-27.571.018 22.32-15.233-8.54-24.673 22.293 15.27 22.293-15.266-8.544 24.67 22.316 15.24-27.571-.026-8.498 24.684zm68.336-23.361l-27.572.018 22.32-15.232-8.54-24.674 22.293 15.27 22.293-15.266-8.544 24.67 22.316 15.24-27.571-.026-8.498 24.684zm-68.336 194.617l-27.571.018 22.32-15.233-8.54-24.673 22.293 15.27 22.293-15.266-8.544 24.67 22.316 15.24-27.571-.026-8.498 24.684zm-81.306 19.898l-27.572.018 22.32-15.233-8.54-24.673 22.293 15.269 22.293-15.266-8.544 24.67 22.316 15.24-27.571-.026-8.498 24.684z"
                    fillRule="evenodd"
                    fill="#fff40d"
                />
            </g>
        </svg>
    );
}

export default SvgTv;