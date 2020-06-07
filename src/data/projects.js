const projects = [
  {
    name: 'Obsession',
    pic: require('@/assets/images/projects/obsession.jpg'),
    description: 'Restaurant site containing an appetizing food menu with filtering options, a mouth-watering image gallery, and some delicious treats. Made with Vue.js, Vuetify, and JavaScript.',
    urls: [
      { type: 'browser', url: 'https://restaurant-f494b.firebaseapp.com/home'},
      { type: 'github', url: 'https://github.com/Marianissimus/restaurant-vuetify-2'},
      { type: 'github', url: 'https://github.com/Marianissimus/restaurant-vuetify-112'}
    ],
    tags: ['Vue.js', 'Vuetify', 'JavaScript', 'CSS', 'Firebase', 'Responsive'],
    featured: true
  },
  {
    name: 'Link Saver',
    pic: require('@/assets/images/projects/portfolioold.jpg'),
    description: 'Save your links and organize them with this app. Has user-defined tags, export, and custom save and filtering functionality. Made with Vue.js, Firebase, Link-prevue. Click \'Demo\' for a test session.',
    urls: [
      { type: 'browser', url: 'https://linksaver-209f4.firebaseapp.com/login'},
      { type: 'github', url: 'https://github.com/Marianissimus/link-saver'}
    ],
    tags: ['Vue.js', 'Vuetify', 'JavaScript', 'CSS', 'Firebase', 'Responsive'],
    featured: true
  },
  {
    name: 'Order Game',
    pic: require('@/assets/images/projects/ordergame.png'),
    description: 'How fast can you sort this? Arrange the Star Wars movies and 5 other lists. Save your best score and boast to your friends! Made with Vue.js, Firebase, Vuedraggable and custom CSS.',
    urls: [
      { type: 'browser', url: 'https://marianissimus.github.io/ordergame/#/'},
      { type: 'github', url: 'https://github.com/Marianissimus/ordergame'}
    ],
    tags: ['Vue.js', 'Vuetify', 'JavaScript', 'CSS', 'Firebase', 'Responsive'],
    featured: true
  },
  {
    name: 'Image Gallery',
    pic: require('@/assets/images/projects/imggallery.jpg'),
    description: 'Image slider gallery made with jQuery and Anime.js. The transitions and animations can be easily customized by just updating a variable.',
    urls: [
      { type: 'browser', url: 'sites/imggallery/gallery.html'}
    ],
    tags: ['jQuery', 'Anime.js', 'JavaScript', 'Responsive'],
    featured: true
  },
  {
    name: 'Bislite',
    pic: require('@/assets/images/projects/bislite.jpg'),
    description: 'Fully Responsive template made by converting a PSD template with CSS, media queries, and Font Awesome.',
    urls: [
      { type: 'browser', url: 'sites/bislite/index.html'}
    ],
    tags: ['Font Awesome', 'CSS', 'Responsive']
  },
  // {
  //   name: 'JavaScript Calculator',
  //   pic: require('@/assets/images/projects/calculator.jpg'),
  //   description: 'Fully functional calculator made with JavaScript. It chains operations, cancels inputs, uses decimals, throws errors and more.',
  //   urls: [
  //     { type: 'codepen', url: 'https://codepen.io/marianissimus/full/yoeeag/'}
  //   ],
  //   tags: ['JavaScript']
  // },
  {
    name: 'Grammar test',
    pic: require('@/assets/images/projects/correcting.jpg'),
    description: 'Interactive step-by-step correction of a grammar test. Made for a Codepen challenge with jQuery and Anime.js, plus the HTML5 tags del and ins.',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/XqEZyq/'}
    ],
    tags: ['jQuery', 'Anime.js'],
    featured: true
  },
  {
    name: 'Portfolio v3',
    pic: require('@/assets/images/projects/portfolioold.jpg'),
    description: '2016 version of my portfolio made with Bootstrap. Fully customized and responsive, includes parallax and other effects.',
    urls: [
      { type: 'browser', url: 'sites/portfolioold/index.html'}
    ],
    tags: ['Bootstrap', 'CSS', 'Responsive']
  },
  {
    name: 'Random Quote Generator',
    pic: require('@/assets/images/projects/himym.jpg'),
    description: 'Random quote generator for the TV series How I Met Your Mother. Made by creating a custom JSON file and using an AJAX call.',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/mBVbRK/'}
    ],
    tags: ['JSON', 'AJAX', 'JavaScript']
  },
  // {
  //   name: 'Pomodoro Clock',
  //   pic: require('@/assets/images/projects/pomodoro.jpg'),
  //   description: 'Pomodoro clock made with JavaScript that will automatically switch between a working session and a break; also has a pause functionality.',
  //   urls: [
  //     { type: 'codepen', url: 'https://codepen.io/marianissimus/full/owoGGp/'}
  //   ],
  //   tags: ['CSS', 'JavaScript']
  // },
  {
    name: 'Elvis Lives!',
    pic: require('@/assets/images/projects/elvis.jpg'),
    description: '2016 Elvis tribute page. Uses pseudo-classes and media queries, and includes a responsive timeline that stacks on smaller viewpoints',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/JbJGyg/'}
    ],
    tags: ['CSS', 'Responsive']
  },
  {
    name: 'Star Rating Widget',
    pic: require('@/assets/images/projects/starwidget.jpg'),
    description: 'Simple star rating widget with a 2 step voting process: 1) select 2) vote. Remembers the first choice until another one is made; made with jQuery.',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/rdgrGL/'}
    ],
    tags: ['JavaScript', 'CSS']
  },
  {
    name: 'Wikipedia API Wiewer',
    pic: require('@/assets/images/projects/wikipediaviewer.jpg'),
    description: 'Wikipedia viewer: searches through Wikipedia, returns results and displays intros to articles. Uses an AJAX/JSON call.',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/XgePVW/'}
    ],
    tags: ['JSON', 'AJAX', 'JavaScript']
  },
  {
    name: 'Weather App',
    pic: require('@/assets/images/projects/weather.jpg'),
    description: 'Local weather: displays the weather in the fom of an old time telegram. Must be allowed to get location in order to work.',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/MvjdNr/'}
    ],
    tags: ['jQuery', 'CSS', 'JavaScript']
  }
]

export default projects
