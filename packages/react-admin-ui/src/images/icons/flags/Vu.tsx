import * as React from 'react';

function SvgVu(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="vu_svg__a">
                    <path fillOpacity={0.67} d="M0 0h682.67v512H0z" />
                </clipPath>
            </defs>
            <g clipPath="url(#vu_svg__a)" transform="scale(.9375)">
                <g fillRule="evenodd">
                    <path d="M0 0l347.415 219.424h420.56v73.142h-420.56L0 511.98V-.003z" />
                    <path
                        d="M0 493.705l354.733-226.732h413.242v-21.941H354.733L0 18.29V51.2l332.79 204.789L0 460.789V493.7z"
                        fill="#ff0"
                    />
                    <path d="M0 511.984l354.733-226.732h413.242v226.732H0z" fill="#40aa40" />
                    <path d="M0 0l354.733 226.732h413.242V0H0z" fill="#ce0000" />
                    <path
                        d="M95.806 266.623c1.227.27 1.55.62 2.766-1.162.261-.897 1.023-2.152 1.686-3.264.887-1.456 1.276-2.04 2.11-.933.54.633 2.69-.534 3.582.078 1.379.917.55.784 1.68-.207.867-1.848.103-1.63-1.12-2.47-.859-.59-3.052.626-3.91.037.3-1.846.888-2.044 1.95-2.403.804.552 3.146-.42 3.87-.404 1.022.214 1.932.327 2.254-1.174.505-1.063.285-.33-.12-1.103-.858-.589-3.051.627-3.91.037-1.115-.844-.931-1.158-.28-2.573.872-.479 1.521-.247 2.599.423 1.109.762 2.856-.718 3.829-.772.875-.995 1.907-1.327 1.255-2.54-.365-.921-.639-1.025-1.84-1.263-1.227-.842-2.826.7-3.293-.56.974-1.395 1.337-1.097 2.518-.312.76.26 3.054-1.1 3.79-1.14 1.092-.316.563.913 1.334-1.805-.267-1.178-2.243.723-3.358.416-1.07.143-1.922-.236-2.023-1.389.016-1.55.785-1.656 1.887-1.426.97.174 3.159-1.031 3.973-1.014 1.159.616 1.526.386 2.438-1.047.673-1.692-.073-.993-1.223-1.86-.858-.59-3.051.626-3.91.037.15-.625.422-1.385 1.007-1.69.846.167 1.574.129 2.639.791 1.047.458 2.772-1.565 3.669-2.243-.17-.964-1.884.408-2.926-.308-.66-.453-1.488-.929-1.695-1.504.591-1.688.303-1.604 1.926-1.058.864-.225 2.328-.212 1.335-1.805-.158-.257-1.013-.166-1.759-.527-.9-.618-1.765-1.24-2.718-1.527-.688-.106-1.687-.328-2.231-.17-.058 1.003.195 1.64.136 2.814.448.732 1.295.75 1.472 1.01-.9.79-1.386.386-2.335.438-1.13-.775-.482-3.18-1.815-2.606.307.706.196 3.375.768 3.928.604.415 1.373.82 1.511 1.378-.96 1.478-1.324 1.395-2.478.68-.964-.662-.66-2.833-1.487-2.722-1.016.767-1.033.732-.823 1.816.054 1.417-.512 3.39.624 4.17 1.367.969 1.54.854.464 2.7-.741.898-1.157.734-2.007.323-.914-.628-.716-2.942-1.423-3.7-1.34-.8-.564-.77-1.68.209-.344 1.256-.094 1.587.465 2.7.454.69.425 3.051 1.2 3.204 1.25.716 1.295.572-.128 1.954-1.117.044-1.597.35-2.454-.665-1.04-.784-.39-3.202-1.712-3.216-1.224.1-1.49.132-1.334 1.805.211 1.472-.336 3.788.848 4.664 1.108.506 1.778.473 2.167 1.147-.345.303-.995 1.24-1.375 1.438-.776.055-1.576-.482-2.455-.665-1.044-.481-.572-1.413-1.407-1.987-.966.313-.983-1.037-1.495.334.198 1.126-.183 2.596.872 3.32.858.59 1.613 1.788 2.47 2.377.985 1.165.599 1.368-.007 3.056-.821.023-1.784-.545-2.678-1.159-.858-.589-.71-2.868-1.568-3.457-.742-.73-.527-1.353-1.679.208-.108 1.107.099 1.187.384 1.964.033 1.131-.27 3.216.769 3.93 1.05.211 2.182.76 3.006 1.043.79.926.103.745-.783 2.183-.557 1.44-.563 1.695-1.439 2.414-.76 1.013-1.06 1.458-.375 2.804z"
                        fill="#ff0"
                    />
                    <path
                        d="M120.918 267.849c.736-1.195 1.187-1.398.034-3.402-.72-.636-1.568-1.946-2.325-3.096-.984-1.523-1.366-2.17-.016-2.613.796-.321.58-3.07 1.497-3.773 1.39-1.098.938-.27.477-1.866-1.35-1.66-1.454-.762-2.712.202-.883.676-.64 3.49-1.522 4.167-1.576-1.057-1.523-1.76-1.43-3.032.827-.633.866-3.508 1.169-4.27.603-1.001 1.07-1.922-.18-2.864-.775-.96-.19-.434-1.06-.313-.883.676-.64 3.49-1.522 4.167-1.22.847-1.435.526-2.475-.731-.092-1.118.38-1.714 1.423-2.59 1.141-.874.478-3.32.815-4.376-.565-1.327-.46-2.555-1.832-2.347-.991.018-1.195.268-1.891 1.448-1.262.967-.482 3.281-1.826 3.274-.893-1.592-.475-1.859.716-2.8.541-.701.207-3.682.462-4.479.144-1.287 1.062-.233-1.126-2.139-1.188-.187-.23 2.671-.955 3.732-.294 1.194-.982 1.948-2.08 1.594-1.416-.637-1.208-1.496-.558-2.574.546-.96.31-3.767.65-4.624 1.027-.985.962-1.467.01-3.008-1.286-1.391-.941-.319-2.195.555-.883.676-.64 3.491-1.522 4.167-.514-.41-1.104-1.001-1.15-1.745.49-.831.744-1.62 1.776-2.486.837-.929-.333-3.57-.599-4.793-.953-.204-.376 2.164-1.447 2.985-.68.52-1.445 1.209-2.056 1.199-1.314-1.303-1.352-.964-.205-2.47.138-1.006.732-2.556-1.125-2.138-.3.065-.556 1.01-1.184 1.657-.926.709-1.842 1.38-2.484 2.277-.37.688-.973 1.66-1.044 2.3.898.463 1.583.45 2.638.98.85-.182 1.203-1.074 1.513-1.158.367 1.272-.198 1.626-.527 2.654-1.162.89-3.11-.759-3.116.886.771-.044 3.177 1.142 3.913.755.62-.475 1.298-1.131 1.866-1.055.975 1.612.753 1.965-.362 2.904-.992.76-2.864-.43-3.091.492.3 1.385.261 1.39 1.34 1.6 1.322.509 2.908 1.898 4.076 1.003 1.434-1.064 1.398-1.294 2.663.586.53 1.147.214 1.523-.502 2.26-.94.721-2.985-.414-3.962.034-1.268 1.103-.932.29-.477 1.866 1.016.869 1.42.735 2.663.586.815-.206 2.97.769 3.42.007 1.155-1.042 1.04-1.146 1.742.916-.404 1.205-.314 1.837-1.587 2.341-1.134.79-3.095-.865-3.634.532-.395 1.34-.471 1.635 1.126 2.14 1.436.363 3.344 1.87 4.62.962.905-.974 1.141-1.699 1.915-1.842.141.487.742 1.552.772 2.034-.257.847-1.069 1.482-1.587 2.341-.857.918-1.525.043-2.384.701-.097 1.15-1.343.63-.288 1.721 1.113.24 2.31 1.232 3.395.4.882-.675 2.283-.997 3.165-1.673 1.462-.58 1.494-.088 2.803 1.23-.306.88-1.21 1.676-2.13 2.38-.882.677-2.915-.392-3.798.284-.966.496-1.451.02-.477 1.866.973.557 1.13.37 1.956.377 1.052.417 2.845 1.572 3.913.754.612-1.03 1.567-2.013 2.154-2.775 1.165-.47.725.189 1.693 1.704 1.1 1.166 1.332 1.275 1.644 2.493.627 1.21.916 1.708 2.424 1.519z"
                        fill="#ff0"
                    />
                    <path
                        d="M98.007 314.504c0-5.32-.825-10.639 0-10.639 46.81 0 58.511-31.916 58.511-53.195 0-21.277-16.26-42.554-46.809-42.554-35.108 0-46.81 20.787-46.81 42.554 0 21.278 17.555 37.237 35.108 37.237 23.406 0 29.257-5.32 46.81-26.597-5.851 26.597-35.108 37.237-46.81 37.237-23.405 0-46.809-15.958-46.809-47.875 0-26.596 17.554-53.192 58.514-53.192 35.108 0 58.511 26.597 58.511 53.192 0 37.237-29.256 63.833-70.216 63.833z"
                        fill="#ff0"
                    />
                </g>
            </g>
        </svg>
    );
}

export default SvgVu;
