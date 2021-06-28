import * as React from 'react';

function SvgCy(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <path fill="#fff" d="M0 0h640v480H0z" />
            <path
                id="cy_svg__a"
                d="M307.84 398.6a.815.815 0 01-.278-.196l-.1-.094c-.26-.237-.688-.657-1.265-1.314-1.066-1.21-2.495-2.982-3.752-4.548-2.492-3.106-4.55-5.782-4.94-6.286l-.634-.826-6.212-1.916-4.537-2.115 2.425-2.725 8.326 3.565 6.215 1.275 11.49 8.45-.01.008c-.022.02-1.67 1.39-3.308 2.88-.73.663-1.65 1.516-2.3 2.226-.3.326-.565.65-.745.912-.11.16-.172.306-.202.377l.714-.444.773.6-1.574.147-.072.016zm-42.672-12.816c-5.422 0-10.777-1.5-15.916-4.454l-.006-.003.002-.006s.672-1.28 2.302-2.475c1.553-1.14 4.354-2.503 8.88-2.52h.094c5.36 0 11.92 1.822 19.498 5.416-.256.17-6.204 4.045-14.852 4.045l.008.008zm-23.496-5.208c-1.002 0-1.903-.38-2.536-1.066-.52-.565-.89-1.317-1.138-2.303-.403-1.614-.292-3.22-.28-3.373a3.48 3.48 0 011.25-.284l.09-.002c2.008 0 3.59 1.743 4.27 3.47.384.982.458 1.807.218 2.454-.24.648-.992 1.096-1.872 1.096zm41.344-4.792c-13.887-1.983-19.774-7.004-22.266-10.866-2.66-4.12-2.113-7.93-2.108-7.968l.002-.012.01-.003c.005 0 .85-.228 2.127-.234 3.696 0 13.145 1.86 22.24 19.075l.006.01-.016-.007zm-28.464-2.752c-5.933 0-10.45-1.024-13.426-3.043-1.71-1.16-2.547-2.436-2.948-3.3a5.408 5.408 0 01-.476-1.62c.157-.072 2.586-1.15 6.212-1.32.307-.014.616-.023.94-.024 4.585 0 11.558 1.496 18.916 8.624l.007.007h-.01c-3.36.44-6.463.673-9.223.673zm-28.728-1.104c-6.256 0-14.85-1.91-20.21-7.27l-.006-.006.016-.004c.056-.014 5.873-1.49 12.418-1.65.39-.01.783-.014 1.18-.014 5.866 0 10.355 1.137 13.346 3.38 1.044.783 1.614 1.512 1.742 2.226.107.597-.208 1.24-.845 1.72-1.346 1.017-3.753 1.56-7.156 1.614l-.48.016zm-20.272-10.4a2.56 2.56 0 01-1.983-.934c-.406-.49-.688-1.132-.888-2.017-.334-1.48-.233-2.925-.232-2.94v-.014a2.43 2.43 0 01.974-.22h.002c.926 0 1.63.504 2.07.927a5.57 5.57 0 011.352 2.116c.292.824.34 1.513.144 2.108-.16.472-.704.968-1.44.968zm46.824-1.056c-1.002 0-1.903-.38-2.536-1.066-.52-.565-.89-1.317-1.138-2.303-.403-1.614-.292-3.22-.28-3.373a3.48 3.48 0 011.25-.284l.09-.002c2.008 0 3.59 1.743 4.27 3.47.384.982.458 1.807.218 2.454-.24.656-1 1.096-1.872 1.096zm-22.808-.944c-12.59-.443-19.123-4.022-22.387-6.946-1.837-1.647-2.858-3.28-3.39-4.358-.504-1.02-.694-1.8-.728-1.95l.017-.007s1.19-.426 3.107-.464l.295-.003c4.245 0 12.888 1.784 23.08 13.723v.008zm13.672-1.272c-10.13-1.542-15.867-5.89-18.898-9.268-3.176-3.54-4.128-6.837-4.17-6.99.018-.006 1.256-.328 3.12-.376a14.24 14.24 0 01.862 0c5.094.112 14.347 2.42 19.084 16.628h.008zm-52-4.864c-3.32 0-6.54-.384-9.57-1.142-5.303-1.326-7.578-3.35-8.552-4.816-.554-.832-.755-1.562-.825-2.028a3.414 3.414 0 01-.025-.858l.025-.01c.013-.002 3.52-.987 8.37-1.06a35.027 35.027 0 017.43.66c8.43 1.683 12.802 8.046 12.845 8.11l.004.007-.01.002c-.05.008-4.065 1.136-9.697 1.136zm23.512-8.544c-1.015 0-1.916-.37-2.538-1.043-.51-.553-.883-1.315-1.136-2.327-.404-1.612-.292-3.2-.28-3.348a3.48 3.48 0 011.25-.283l.09-.002c2.004 0 3.59 1.743 4.27 3.47.374.95.44 1.767.194 2.428-.248.672-.976 1.104-1.848 1.104zm-17.68-2.424c-.076-.018-4.782-1.23-9.574-4.18-4.435-2.73-9.86-7.56-10.522-15.064v-.004l.01-.003c.002 0 .414-.1 1.024-.123.084-.003.173-.005.267-.005 1.325 0 4.037.373 7.317 2.867 4.176 3.184 8.032 8.736 11.48 16.52zm11.544-.424c-.03-.012-3.383-1.354-7.575-4.867-3.905-3.274-9.396-9.168-13.372-18.664.002-.002.914-.488 2.31-.576a3.31 3.31 0 01.244-.007c.12 0 .244.004.37.007 1.93.055 4.866.856 8.123 4.37 3.74 4.038 7.08 10.673 9.923 19.722l.008.025-.024-.007zm-29.912-.872c-3.857 0-5.177-2.092-5.566-2.992-.638-1.48-.444-2.95-.443-2.966l.002-.016a8.498 8.498 0 011.92-.25l.13-.002c3.04 0 5.44 1.544 6.468 3.073.204.303.83 1.355.312 2.177-.416.648-1.36.976-2.824.976zm-8.544-10.776c-2.154 0-5.45-.132-8.913-.762-3.435-.624-5.382-3.545-6.41-5.884-1.12-2.548-1.435-4.98-1.44-5.004h.01c10.627.312 15.645 3.417 17.984 5.966 2.415 2.632 2.558 5.365 2.566 5.538h-.007c-.017 0-1.513.144-3.793.144zm11.064-11.056a42.733 42.733 0 01-2.426-3.382c-1.26-1.956-2.423-3.997-2.423-5.668 0-1.612-.38-5.012-.605-6.895-.287-2.387-.576-4.43-.6-4.604l.01.003c.27.097 6.646 2.49 6.646 8.47 0 5.993-.59 12.013-.596 12.073v.01h-.008zm-8.264-.568c-.067 0-.134-.006-.2-.017-1.885-.313-5.197-1.754-8.858-3.853-4.066-2.33-7.368-4.83-9.296-7.033-1.76-2.01-2.803-5.166-3.104-9.38-.214-2.992.042-5.484.07-5.73.33-.11.68-.164 1.05-.164 1.412.023 2.92.658 4.952 2.06 1.585 1.09 3.332 2.576 5.192 4.41 3.21 3.166 5.735 6.346 5.76 6.377l.025.032c.213.38 2.03 3.656 3.447 6.845.9 2.026 1.413 3.486 1.62 4.597.117.633.15 1.048-.004 1.425a.721.721 0 01-.308.358.866.866 0 01-.352.072z"
                fill="#435125"
            />
            <use height="100%" width="100%" xlinkHref="#cy_svg__a" transform="matrix(-1 0 0 1 593.742 0)" />
            <path
                d="M519.064 76.38l-1.884.75-.738.296-2.284-.126-2.138 1.026-3.792 2.592-.167.12-1.413.368-1.313-.566-.745.34-.258 1.535-.71 1.103-.873.614-3.028.31-2.552 1.316-3.32-.89-1.542.605-3.28 2.953-1.675.794-.586-.034-2.222-.114-.94.307-1.4 1.354-2.652.206-.827.572-1.294 2.608-1.402 1.446-.803.17-.87-.318-.653.115-.296 1.67-.634.698-1.776.612-1.418 1.182-1.245.64-1.667-.043h-.383l-1.66.918-3.125.274-1.3 1.24-.286.264-.606.366-.992.592-.243.147-1.196-.212-1.4.554-.567-.87-.968.58-1.284.056-1.598-.712-1.218-.542-.89.13-.31 1.55-.03.166-.937 1.245-1.747 1.06-.238.308-1.988 2.567-3.777 3.972-3.195 1.623-3.31 1.007-2.318 1.904-6.08 3.014-9.595 4.773-1.962.63-2.816.45-5.024 1.848-4.43 1.338-.247.075-.878.266-6.248 1.89-2.908-.308-1.722.626-4.484-.498-3.118.062-1.974.41-3.71 1.78-6.26 3.01-2.07 1.892-3.22 1.68-3.773 1.195.01-1.586-.024-.067-1.307.413-.945.3-3.06.47h-1.703l-1.056-.306-.165.055-6.254 2.06-6.974.673-3.49 1.12-2.61-.042-1.63.486-3.195.39-1.14-.304-.26-.07-9.4.408-4.297-.486-2.05.466-3.438-1.156-5.015-.58-1.172-.352-2.636-.783-1.193.686-.893.096-2.134-.774-.768-.02-1.762.637-1.013-.26-.942-.75-2.21-.33-1.344-1.13-7.522.996-2.04-.6-6.844-1.992-1.09.055-1.355 1.017-2.04.743-1.768.46-2.41.084-2.798-.735-2.884-1.398-1.067-.254-2.38.24-.727.067-4.374-2.346-5.633-3.522-3.823-1.837-1.435-.232-.193.683.712 2.245.243 2.22-.073 2.05-.04 1.27.357 1.14 1.38 1.53.577 1.535.42 4.227-.005 4.29-.67 6.84-.227 1.042-.8 3.543-.732 3.255-2.837 8.666-.78 1.075-1.912 1.304-4.335 2.95-3.193 1.84-1.01.42-2.592.195-1.614-.085-2.01-1.09-1.973-.507-2.586-1.86-2.875-.594-3.153-1.822-.82-.987-1.717-.16-2.38-.716v-.005l-.873-.26-.604-.177-3.037-.084-2.83-1.308-1.492-.36-2.038-.103-2.133.99v-.002l-1.08.505-1.367-.543-.988.062-1.12 1.692-.166.262-.772.408-.96-.013-.75-.02-.814.355-1.094.474v.002l-.966.422-.472.204-.008-.008-.29.058-.517.09-.64.122-1.128-.66-.6-.353-1.005-.205-.542.39-.106 1.842-.495 1.102-1.57 1.386-1.593 1.404-1.11 1.638-2.942 6.712-1.842 2.708-.572.63-1.927 2.126-1.708 1.325-3.937 3.05-3.727 1.394-3.21.656-1.562.006-2.956-.393-2.66-.816-2.92-1.826-3.2-2.573-4.636-4.58-.656-.393-.137-.09-1.46-.935-1.082.027-.424.7-.232 1.01-.196.896-.532 5.093.04.295.28 2.1 3.52 4.92 1.086 2.613.178.298.727 1.22.553.93.055.096 1.203 3.59-.846 2.027.428 1.358-1.07.83-.195 1.173 3.16 3.962.69 1.748-.77 2.423-1.23 1.337-.342.366.174 1.023 1.454 1.308 2.47 2.2 1.32 3.27 1 .876 1.166-.248.648.495.982-.017.967.966.626.303.99.493.78 1.018.174 3.13 1.457 3.887.023 2.108.008.3.907 1.558.285 1.23-.484 3.256 1.156 1.045 1.254-.257.81.128 1.3 1.084 1.576 2.4 1.54-.225.978.47 4.722 4.267 1.07.54.06.035.77.386.958.967 1.485-.986.165-.018 1.614-.142.71.477 1.362.92 1.787-.024 3.875 1.188 1.696.436 3.408 2.118 1.45.896.857.697 1.138.93 2.276.978 1.952.467 1.058.25.796.31.02-.05.01.002-.018.05 4.227 1.62 2.288.533 2.12.78 1.54.563 1.132.018 1.6-1.346 1.55-.09 1.286.322 1.256-.21 1.988-1.226.388-.575 1.41-.67 4.755-.59 1.39.45 3.568-1.552 2.39.666 2.117-.75 4.623 1.026 1.23.865 1.373 1.572.168.006 1.53.03-.64 1.065 2.02 2.118 1.823 2.756.123.364 1.326 3.89.985 1.38.69 1.924.033 1.254-1.072.818-.176.466-.06.173.217.524.404-.22.77-.427.933-.145 1.653.176 1.09.115 1.724-.855 1.142-.568 1.834.79 2.016-.023.847.376 2.396 1.087 1.222.115.452-.297.288-.684-.148-.797-.916-1.06-2.025-2.35-.83-1.207-.63-1.75-.196-2.234-.14-1.51.252-1.98.543-.708.4-1.575h.007l.103-.412 1.125-1.492 2.98-1.915 3.2-2.865 2.53-1.668 2.607-1.13.07-.317.29.117 6.634-2.255.108-.013 2.954-.514 19.936 1.404.74-.224.002-.005.664-1.864.358-.345.237-.227 2.19-.965 1.026-.146 2.845.702 1.166.288 1.865-1.046 1.324.022 2.734-1.492 1.69.042.64-.257 3.29-2.363 3.17-.908.824-.44.29-.158 3.248-1.716 2.063-1.584 1.78-.947 1.95-.503 5.105-.36 1.027-1.71 2.195-.292 1.326-1.496 1.516-.617 1.088-1.567.91-1.312 1.274-.737 4.08-.255 4.836.6.64-.39 1.092-3.9 1.144-.73 3.08-4.49.01-1.637.004-1.366.506-1.946-.344-3.512.408-3.557 1.915-4.52 1.688-1.823 2.72-1.84 1.384-.604 1.96-.33v-.004l.287-.05.5-.085 6.745-.09c.093-.07 2.453-.035 2.453-.035l2.25-.03 5.69 1.012.406.07 1.923.624 2.22 1.727 2.348 2.294.44.43 1.523.64.46.2 1.257-.2 1.79-.932 1.35-1.142 1.84-1.005.045-.063 1.036-1.56.033-.03.022.005.002-.01-.018-.003.408-.62 3.558-1.387 4.184-.243.47-.255.262-.14 1.105-1.298 1.036-.01 2.508.908 1.765-.35 1.4.56 1.088-.13 2.052-.242 2.203 1.55 1.284.164 4.526 2.648.235.038.122.023.26.042.536-.16.8-.23.105-.03.1.138.515.725.706.102.835-1.114-.33-.506-.127-.184-1.616-.33-1.452-2.48 1.382-1.49-2.17-2.66-.36-.44-.12-.19-.75-1.137-3.798-5.787-4.946-3.948-.002.003-1.732-1.386-.01-.008-.608-.476-2.64-2.687-1.888-2.503-.247-.54-.39-.85-1.13-2.46-1.97-1.518-1.604-1.754-.08-.103-3.31-4.5-.545-.755-.782-.452-1.653-.01-.156-.158-.093-.097.056-.058.793-.788.884-.222.38-.872-1.686-4.883-.01-.17-.125-1.56 1.374-7.084.175-.863 2.342-4.767 1.452-1.19 1.583-3.112 1.356-1.99 1.3-1.265.227-.135 2.347-1.42 1.972-.278 1.878-.265 3.28 1.01 3.12-.06.61-.064 1.415-.163 2.328-.733 1.1-.68.57-.873 1.19-3.99.38-1.27.735-1.378 4.245-4.887 3.21-2.97 7.214-5.29 3.532-2.11 1.803-1.078 16.1-7.157 4.185-4.24 2.18-2.207 3.857-2.588 4.51-1.85 3.885-3.072.848-1.068 1.068-3.442.892-.215.804-1.74.23-.494 3.167-2.234.36-.18 12.31-6.167 1.788.245.96-1.435 3.58-.6.66-.112.883-.44.75-1.28v-.253l.104-3.42.765-.923.417-2.252.39-.52.412-.54 1.014-.714-.176-.425z"
                fill="#d47600"
            />
        </svg>
    );
}

export default SvgCy;
