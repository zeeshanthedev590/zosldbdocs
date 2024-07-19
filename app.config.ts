export default defineAppConfig({
  docus: {
    title: 'ZOSLdb',
    description: 'A simple local json database based models.',
    image: '/img/logo.svg', // Updated path
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: false,
      exclude: [],
      fluid: false
    },
    footer: {
      credits: {
        icon: '',
        text: 'Made by Zeeshan Khalid',
        href: 'https://github.com/zeeshanthedev590',
      }
    } // Correctly closed
  }
})
