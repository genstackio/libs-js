import * as React from 'react';

function SvgAs(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="as_svg__a">
                    <path fillOpacity={0.67} d="M0 0h640v480H0z" />
                </clipPath>
            </defs>
            <g clipPath="url(#as_svg__a)">
                <path fill="#006" d="M-374-16H650v512H-374z" />
                <path d="M-374 240L650 496V-16L-374 240z" fillRule="evenodd" fill="#bd1021" />
                <path d="M650 11.43v457.14L-264.29 240 650 11.43z" fillRule="evenodd" fill="#fff" />
                <g stroke="#000">
                    <path
                        strokeLinejoin="round"
                        d="M478 297.4s-6.392-5.23 1.163-13.658c-4.068-3.486-.29-10.17-.29-10.17s-6.975-2.615.29-13.366c-5.23-3.487-2.906-11.333-2.906-11.333s-17.144-6.393-.87-12.494c-13.368 5.81-25.863-7.848-25.863-7.848l-19.468.582c-3.302-16.172-28.97-2.127-9.888-48.52-4.94-.872-10.46-2.324-15.982 1.744-5.522 4.067-21.212 12.784-30.51 4.067s6.1-21.212 6.392-21.502c.29-.29 20.63-10.75 23.536-17.725-.29-5.23-6.682-9.298-.872-20.63 6.683-10.753 47.65-20.923 66.26-24.41 9.007-4.068 13.076-11.914 13.076-11.914l2.034 7.555s41.262-12.205 43.296-18.016.872 5.23.872 5.23c16.272-1.453 36.903-15.4 39.81-9.008 13.656-2.615 39.81-14.238 39.81-14.238s9.006-.29 2.613 9.59c4.068 6.392-1.162 11.913-1.452 11.913-.29 0 1.743 6.394-3.487 9.88 1.745 5.522-3.197 9.88-3.197 9.88s2.326 6.684-6.973 10.17c.872 5.812-5.23 6.975-5.23 6.975s.872 6.102-3.196 8.717c0 4.65-4.65 6.974-4.65 6.974s2.906 1.743-1.163 4.65c-4.067 2.905-46.2 28.766-46.2 28.476 0-.29 30.8 5.52 32.834 6.683s25.28 16.564 25.28 16.564l-23.537 29.056s-26.15-2.905-27.312-1.452 5.52 2.034 6.973 4.358c1.455 2.324 3.78 7.847 8.428 7.265 4.65-.582-8.717 8.427-17.434 9.3 0 3.195 11.04 3.485 13.947.87 2.907-2.615-6.973 7.555-8.136 9.008s13.077-2.034 13.077-2.034-2.324 9.59-14.818 12.496c4.94 8.136 2.905 13.367 2.614 13.367s-8.136-8.137-15.69-6.684c2.033 7.845 8.136 15.108 9.88 16.272 1.742 1.162-13.658.87-15.692-3.488s-3.778 10.46 1.743 15.11c-6.392.29-11.914-3.487-11.914-3.487s-3.776 8.717-1.162 13.077c2.617 4.36-9.006-8.718-9.006-8.718l-22.084 9.3-4.94-8.428z"
                        fillRule="evenodd"
                        strokeWidth={1.761}
                        fill="#9c3900"
                    />
                    <path
                        d="M307.325 280.1c.518 0 32.082-.518 46.572-8.797 7.244 11.384 17.076 19.146 17.076 19.146l4.658-16.56s11.385.518 12.42 3.106c-1.553 3.103-2.07 7.243-2.07 7.243s7.76.518 8.28 1.552c.516 1.035-2.07 9.83-2.07 9.83l33.116 7.763s2.587-12.936 5.175-11.384c2.588 1.554 13.972 17.595 30.013 18.63s17.076-13.455 17.076-13.455l3.62 2.07s6.728-14.487 7.763-14.487 2.588 2.07 11.384 2.07c2.587 3.104 3.623 10.347 3.623 10.347s-9.833 9.833-6.728 17.595 3.623 5.69 3.623 5.69l71.408 17.077s3.624 5.693-2.586 8.798c0 .517-71.927-16.56-71.927-16.56s-6.728 7.762-11.902 6.21-1.552 3.105-1.552 3.105l77.618 6.21s5.692 7.244 1.552 9.314c-5.174.517-83.827-5.174-83.827-5.174s-4.66 9.83-9.833 1.552c-3.62 5.69-7.762-1.552-7.762-1.552s-6.726 5.174-7.762-.52c-5.692 4.14-9.314-2.585-9.314-2.585l-33.118-2.07-2.07 3.104s5.692 1.55-3.105 5.174c-8.796 3.622 52.78 2.07 54.333 2.587 1.552.52-4.14 5.176-4.14 5.176s31.566 2.07 37.257-4.657c5.692-6.73-2.07 8.795-2.07 8.795s24.84-1.034 24.84-2.07-.52 7.763-17.595 6.727c10.35 6.728 23.285 10.867 23.285 10.867s-12.936 3.104-27.942-.518c2.586 6.727 13.972 12.936 13.972 12.936s-8.28 7.245-26.91-10.35c5.176 9.315 1.036 12.938.52 11.902-.52-1.035-9.315-13.97-30.013-18.628 12.936 8.28 7.243 11.902 7.243 11.902s-6.726-11.902-17.593 0c-4.14-10.867-20.18-17.076-39.844-18.112-6.21-7.243-9.83-5.174-24.32-9.314-8.28-9.313-20.18-19.663-20.18-19.663s.517-13.97 14.488-12.42c1.552 4.658 1.552 3.106 1.552 3.106s15.524-5.692 20.18 2.07c6.728-11.902 16.042-1.78 17.595 2.36 4.458.654 26.907 1.262 26.907 1.262s-2.588-4.657-1.035-4.14c1.552.518 13.97-4.656 13.454-6.208-.517-1.553-1.034-6.727 1.035-6.21 2.07.517-17.593-2.588-28.46 5.693-3.622-3.623-1.035-13.455-1.035-13.455l-32.08-6.726-1.554 8.28s-9.314 1.55-8.796-.518c.517-2.07-2.07 7.243-2.07 7.243s-12.42-3.104-12.42-3.62 3.623-18.63 3.623-18.112c0 .518-10.35 1.035-24.838 11.902-4.14-12.936-36.74-30.012-36.74-30.53z"
                        fillRule="evenodd"
                        strokeWidth={1.878}
                        fill="#ffc221"
                    />
                    <path
                        d="M385.98 284.763l-6.727 30.013m12.935-18.63l-2.07 9.83m35.189-2.068l-3.105 9.314m60.546 53.808c-.517 0-16.558 2.07-18.63 1.554-2.068-.517 25.357 8.28 25.357 11.9m-35.705-9.818s-16.04-10.348-18.628-9.314c-2.587 1.035 16.04-.517 17.594-2.07m-32.086-.52s-16.558.517-18.11-1.035 16.04 11.384 19.145 10.35m-33.118-16.569c-.518 0-11.385-4.14-16.04-5.176 4.138 4.14 7.243 9.833 17.592 11.902m2.588-13.446c-.518-1.035-20.698-7.245-20.698-10.35 4.656 1.553 11.383 3.622 17.592 2.07m110.221-15.528l-2.07 9.314"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        d="M347.688 237.67s-21.734 18.628 0 29.494c1.034-7.244 2.587-8.278 2.587-8.278s18.11 6.726 28.977-9.315c-4.657-6.725-12.937-4.138-12.937-4.138s-17.076 0-18.628-7.76z"
                        fillRule="evenodd"
                        strokeWidth={1.878}
                        fill="#ffc221"
                    />
                    <path
                        d="M365.8 245.954l-15.006 12.936m61.222 76.91s3.46 3.814.354 8.47m72.45-4.652l-5.692.52m-40.881-3.633l10.35 1.552m17.486-28.162s.29 10.46-8.427 10.17c-8.717-.29-5.812.29-5.812.29"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        d="M472.774 308.148s3.487 1.162 2.616 3.778c-.872 2.614.87 10.17-9.298 17.434-10.753 2.324-9.59-9.007-9.59-9.007"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        d="M476.55 311.346s6.392-3.777 7.264 2.325c.87 6.102-5.23 17.435-9.59 19.18-4.358 1.742-9.297-.292-8.717-3.197m18.889-15.688s5.813-4.65 7.555 1.452c1.745 6.103-4.648 19.76-7.264 20.05m7.837-20.051s2.907-1.453 4.94.29m-14.237 20.629c-1.162.29-6.102.58-7.845-3.196m-18.3-6.975c-.29 0-6.102.292-6.102.292m28.472 22.67l-.58-9.59-2.325-3.195-4.068 4.068s-.583 9.59-2.326 10.46m2.327-10.76c-.292-.58-3.198-6.1-3.198-6.1l-4.94 6.1s-.58 8.72-2.324 9.592m2.318-9.887c0-.29-2.034-5.81-2.034-5.81s-5.81 3.196-6.392 5.52c-.58 2.325-.872 8.717-2.325 9.3m2.327-10.461s.582-5.23-1.162-5.23c-1.742 0-9.59 7.265-9.88 13.657"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        strokeLinejoin="round"
                        d="M348.402 237.825s2.905-2.906 3.777-6.392c.87-3.487-1.163-7.265 2.324-10.46 3.487-3.198 49.397-22.666 53.176-26.444 3.777-3.778 10.75-11.914 11.623-13.658.87-1.743 3.487 8.717-4.36 13.367 8.428-2.326 13.95-4.94 17.435-3.78-3.487 4.94-12.785 13.078-17.144 13.078 10.17-3.778 19.47-6.975 22.084-4.94 2.615 2.034-12.495 12.204-18.597 12.785 10.17-2.615 23.83-6.683 25.572-2.325-5.52 1.744-3.78 3.195-15.11 9.59-1.453 1.163-8.717 1.452-8.717 1.452 8.717-.872 20.63-4.36 21.792 2.034-6.973 2.615-9.588 6.102-15.4 7.555-5.81 1.453-19.178 4.067-27.315 7.264-8.136 3.196-20.05 12.495-20.05 12.495s-25.86.87-25.86.58c0-.29-4.94-11.914-5.23-12.205z"
                        fillRule="evenodd"
                        strokeWidth={1.878}
                        fill="#fff"
                    />
                    <path
                        d="M360.605 235.797s.29-5.81 2.906-7.845c2.616-2.034 15.693-6.975 18.6-11.333 2.904-4.36-4.36 7.554-3.198 10.75m-13.077-.292s6.393 2.326 4.94 7.265"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        d="M373.39 230.422a4.794 4.794 0 11-9.59.001 4.794 4.794 0 019.591-.001z"
                        strokeWidth={1.631}
                        fill="none"
                    />
                    <path
                        d="M570.116 220.104l50.27 9.59s5.52-6.394 2.615-9.88c7.556-1.743 5.522-11.623 5.522-11.623s8.717-3.776 1.452-12.495c4.942-4.94-1.162-8.717-1.162-8.717s2.034-8.717-4.36-9.59c1.745-6.972-11.04-9.297-11.04-9.297s-26.443 7.265-45.04 7.847c6.102 6.102-2.325 9.88-2.325 9.88s4.94 3.486 3.487 6.392c-1.453 2.905.872 6.1-5.52 8.136 8.426 3.778-.873 10.17-.873 10.17s9.3 6.392 6.976 9.588z"
                        fillRule="evenodd"
                        strokeWidth={1.878}
                        fill="#fff"
                    />
                    <path
                        d="M565.17 209.356s44.46 5.23 46.494 5.23 9.88 2.616 11.333 5.23m-55.502-13.081l61.893 1.453m-61.598-2.903s58.698-3.487 62.766-9.59m-61.032-3.195s58.988-6.394 59.57-5.522m-61.599-1.744s57.244-9.007 57.825-7.555m-221.127-29.347s18.016 19.76 16.272 33.126"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        d="M419.303 170.997s5.81 8.426 8.136 9.298 22.665 2.034 23.827 10.752c1.162 5.52-4.358 3.777-3.486 7.845 1.453 5.23 15.11 11.913 29.93 4.068m-13.655 4.07s12.203 18.017 30.22-1.45m-9.301 7.847s14.82 7.845 27.023-12.495M496.3 215.16s7.264 6.102 22.376-2.033m20.927-8.137s22.375 4.647 23.828 6.1m-15.404-11.032c.29 0 15.692.582 15.692.582m-25.285-9.303s26.733-1.743 30.22 3.778m-41.842-12.205s37.486 1.453 39.228 3.487m-30.804 34.863s6.393-1.743 7.265-.87m-21.788 16.562s8.426 7.265 19.18 4.068m-14.533 8.146s9.59 4.358 20.923 1.742m-17.723 5.512s9.588 6.393 15.98 5.23m-20.334-1.44s6.683 4.94 6.973 7.555m-16.269-1.751s2.033 10.46 9.298 14.237m-14.244-9.589s-3.196 13.658 4.94 22.084M501.54 281.41c0 .29-.58 6.393-.29 6.975m-52.015-59.857l15.692-.872s5.81-2.324 1.742-6.1m2.034 3.494c.292 0 14.82 1.16 18.598 5.52 3.778 4.358 8.428 13.075 11.042 14.53 2.616 1.45 3.197-.583 3.197-.583m-6.395-2.325s-7.845 13.368-1.743 17.436m-2.624-2.616s-6.973 9.3-1.453 13.948m-1.449-1.17s-5.52 9.008 1.163 15.11m-3.599-39.003c-.376.375-6.75 4.874-9 3.75m2.25 10.493s2.625 2.624 4.875 2.25M479 273.776l4.19 2.872m-3.626 7.566l3.624 2.186m-69.255-144.7s7.64 3.974 13.75 0c6.112-3.97 35.446-18.943 43.085-21.388 7.638-2.445 11.917-16.5 13.445-22.61M478.41 114.2l42.78-12.527s7.027-5.806 7.332-16.5m-3.062 11.611s42.778-4.278 42.778-20.167m-6.715 10.999S606.44 75.393 610.72 70.81"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        d="M436.233 151.48s27.195-14.057 31.473-15.584c4.277-1.528 14.055-13.75-.61-13.75"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        d="M449.376 156.98c.306 0 22.305-14.363 29.64-16.196 3.972-5.5 1.833-11.305-4.89-10.083"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        d="M480.846 137.118c.612-.306 11.918-.612 7.945 8.25-5.802 4.278-30.86 16.806-30.86 16.806m17.111-34.529l47.67-15.89s3.973-8.25-1.832-9.472m39.727-14.363c0 .307 6.112 3.668 2.445 9.168-6.722 3.973-38.5 11.612-38.5 11.612m84.331-25.667L563.965 95.56m41.551-2.443l-39.11 11.917m35.758-2.139l-34.53 10.39m28.106-.613c-.917 0-25.667 7.64-25.667 7.64m20.173 0l-15.89 6.417m11.917 2.138c-.61 0-13.75 5.805-13.75 5.805m9.777 1.223l-12.22 5.805m-8.867 7.335s1.528.61 1.222 2.445m-32.087 14.36s5.195 1.834.306 6.723c-2.444 3.36-9.472 2.445-13.75 8.556m46.76-83.724s6.418 1.528 1.528 9.778c-12.834 4.89-38.807 12.833-38.807 12.833s-1.22 2.14-4.582 3.973c-3.36 1.832-40.334 12.22-40.334 12.22m84.336-29.332s7.028 3.056 0 8.25c-7.945 4.584-35.75 13.14-35.75 13.14s-.307 2.444-1.528 3.36c-1.223.917-37.89 13.14-37.89 13.14"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        d="M567.636 115.116s7.334 2.14.917 8.25c-7.64 4.584-32.084 12.834-32.084 12.834s-2.445 3.056-6.418 4.278c-3.972 1.222-29.333 11.61-29.333 11.61m68.75-28.721c2.14.917 7.945 1.834.917 7.334-8.25 3.667-28.417 11.612-28.417 11.612l-1.834 3.36-32.083 13.75m63.249-27.805s3.054 3.667-3.668 7.945c-7.334 3.972-23.222 10.083-23.222 10.083m23.226-9.473s3.36 2.14-.915 5.195c-4.89 2.444-24.14 12.528-24.14 12.528l-12.528 8.25"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        d="M523.63 112.06c0 .307 5.194 4.584 3.36 9.473 4.584 3.362 3.667 7.028 3.667 7.028s6.416 3.668 5.5 8.863c6.417 1.528 6.11 5.194 6.11 5.194l-2.138 3.36s6.415-.304.916 7.946c3.36 1.833 1.834 3.972 1.834 3.972m-1.839-3.666c-.917 0-22.305 7.944-27.806 12.833"
                        strokeWidth={1.878}
                        fill="none"
                    />
                    <path
                        d="M489.41 144.757s6.418-.306 5.502 6.722c7.334-2.445 5.805 4.583 5.805 4.583s8.555-3.362 7.028 7.333c5.5-1.222 4.583 4.278 4.583 4.278s4.89-.306 4.89 2.444c3.36-3.055 7.028-1.527 7.028-1.527s2.444-3.36 5.805-2.444m-34.836-14.972c0 .61-28.723 16.5-28.723 16.5m34.218-11.307l-21.696 13.445m29.034-6.722c0 .305-18.945 11.306-18.945 11.306m23.227-7.028s-13.444 11-16.5 10.39m21.08-7.028s-7.64 5.805-14.057 8.555m22.001-11s2.444 3.056-12.833 11"
                        strokeWidth={1.878}
                        fill="none"
                    />
                </g>
            </g>
        </svg>
    );
}

export default SvgAs;