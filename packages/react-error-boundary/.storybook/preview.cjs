function getResponsiveViewPorts() {
  return {
    fullWidth: {
      name: 'Full Available Width',
      type: 'desktop',
    },
    desktop_large: {
      name: 'Desktop - Large',
      styles: {padding: '0', width: '1920px', height: '1080px'},
      type: 'desktop',
    },
    desktop_medium: {
      name: 'Desktop - Medium',
      styles: {padding: '0', width: '1680px', height: '1050px',
      },
      type: 'desktop',
    },
    desktop: {
      name: 'Desktop',
      styles: {padding: '0', width: '1440px', height: '900px'},
      type: 'desktop',
    },
    desktop_small: {
      name: 'Desktop - Small',
      styles: {padding: '0', width: '1280px', height: '800px'},
      type: 'tablet',
    },
    tablet_large: {
      name: 'Tablet - Large',
      styles: {padding: '0', width: '1260px', height: '800px'},
      type: 'tablet',
    },
    tablet_medium: {
      name: 'Tablet - Medium',
      styles: {padding: '0', width: '1024px', height: '1366px'},
      type: 'tablet',
    },
    tablet: {
      name: 'Tablet',
      styles: {padding: '0', width: '960px', height: '768px'},
      type: 'tablet',
    },
    mobile_large: {
      name: 'Mobile - Large',
      styles: {padding: '0', width: '896px', height: '414px'},
      type: 'mobile',
    },
    mobile_medium: {
      name: 'Mobile - Medium',
      styles: {padding: '0', width: '414px', height: '896px'},
      type: 'mobile',
    },
    mobile: {
      name: 'Mobile',
      styles: {padding: '0', width: '360px', height: '760px'},
      type: 'mobile',
    },
    mobile_small: {
      name: 'Mobile - Small',
      styles: {padding: '0', width: '340px', height: '660px'},
      type: 'mobile',
    },
  }
}


export const parameters = {
  controls: {
  },
  viewport: {
    viewports: getResponsiveViewPorts(), // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'fullWidth',
  },
}