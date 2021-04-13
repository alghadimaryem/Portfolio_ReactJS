module.exports = {
  email: 'alghadimaryem@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/alghadimaryem',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/maryemalghadi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/maryem-alghadi-a3637b140/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Education',
      url: '/#education',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#F17E84',
    navy: '#F17E84',
    darkNavy: '#F17E84',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
