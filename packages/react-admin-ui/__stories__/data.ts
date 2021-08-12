export const images = {
    mountain:
        'https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    icecube:
        'https://images.unsplash.com/photo-1543854304-597ff8d86035?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    women: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    children: 'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg',
    random_square: 'https://picsum.photos/200/200',
    '240x320': 'https://image-placeholder.com/images/actual-size/240x320.png',
};

export const targets = {
    external: 'https://www.google.com/',
};

export const videos = {
    main: 'https://www.youtube.com/embed/Z3xkHmC-KQE',
};

export const data = {
    item: {
        title: 'Title',
        image: { url: images.random_square },
        target: targets.external,
    },
    user: {
        name: 'Jane Doe',
        firstName: 'Jane',
        lastName: 'Doe',
        title: 'Designer',
        email: 'jane@doe.com',
        image: { url: images.women, alt: 'Jane Doe' },
    },
    tag: {
        text: 'some-tag',
    },
    buttons: {
        button1: { label: 'ClickMe!', target: targets.external },
        button2: { label: 'MeToo!', target: targets.external },
        button3: { label: 'hello', target: targets.external },
        button4: { label: 'world', target: targets.external },
    },
    common: {
        title: 'This is the title',
        title2: 'This is the title 2',
        title3: 'This is the title 3',
        subtitle: 'This is the subtitle',
        subtitle2: 'This is the subtitle 2',
        subtitle3: 'This is the subtitle 3',
        description: 'this is the description',
        description2: 'this is the description 2',
        description3: 'this is the description 3',
        overline: 'this is the overline',
        overline2: 'this is the overline 2',
        overline3: 'this is the overline 3',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        content2:
            'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, cUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        content3:
            'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, cUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        error: 'Field Error',
        helper: 'Field Helper',
        label: 'Field Label',
        property: 'Full Name',
        value: 'Jane Doe',
        number_value: 33,
        icon: 'settings',
        date: 232567444,
        likes: 2,
        comments: 598,
        quantity: 6659,
        image: { url: images.mountain, alt: 'the image' },
        image2: { url: images.icecube, mobile: { url: images.icecube } },
        image3: { url: images.children, mobile: { url: images.children }, tablet: { url: images.children } },
        video: videos.main,
    },
};

export default data;
