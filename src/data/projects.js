const projects = [
  {
    name: 'Image Gallery',
    pic: require('@/assets/images/projects/imggallery.jpg'),
    description: 'Image slider gallery made with jQuery and anime.js. The transitions and animations can be easily customized by just updating a variable.',
    urls: [
      { type: 'browser', url: 'sites/imggallery/gallery.html'}
    ],
    tags: ['jQuery', 'anime.js', 'JavaScript']
  },
  {
    name: 'Bislite',
    pic: require('@/assets/images/projects/bislite.jpg'),
    description: 'Fully responsive template made by converting a PSD template with CSS, media queries, and Font Awesome.',
    urls: [
      { type: 'browser', url: 'sites/bislite/index.html'}
    ],
    tags: ['Font Awesome', 'CSS', 'responsive']
  },
  {
    name: 'JavaScript Calculator',
    pic: require('@/assets/images/projects/calculator.jpg'),
    description: 'Fully functional calculator made with JavaScript. It chains operations, cancels inputs, uses decimals, throws errors and more.',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/yoeeag/'}
    ],
    tags: ['JavaScript']
  },
  {
    name: 'Grammar test',
    pic: require('@/assets/images/projects/correcting.jpg'),
    description: 'Interactive step-by-step correction of a grammar test. Made for a Codepen challenge with jQuery and anime.js, plus the HTML5 tags del and ins.',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/XqEZyq/'}
    ],
    tags: ['jQuery', 'anime.js']
  },
  {
    name: 'Old Portfolio',
    pic: require('@/assets/images/projects/correcting.jpg'),
    description: 'A version of my portfolio made with Bootstrap. Fully customized and responsive.',
    urls: [
      { type: 'browser', url: 'sites/portfolioold/index.html'}
    ],
    tags: ['Bootstrap', 'CSS', 'responsive']
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
  {
    name: 'Pomodoro Clock',
    pic: require('@/assets/images/projects/pomodoro.jpg'),
    description: 'Pomodoro clock made with JavaScript that will automatically switch between a working session and a break; also has a pause functionality.',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/owoGGp/'}
    ],
    tags: ['CSS', 'JavaScript']
  },
  {
    name: 'Elvis Lives!',
    pic: require('@/assets/images/projects/elvis.jpg'),
    description: 'Elvis tribute page. Responsive, includes a timeline, and uses pseudo-classes.',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/JbJGyg/'}
    ],
    tags: ['CSS', 'responsive']
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
    name: 'Tic Tac Toe',
    pic: require('@/assets/images/projects/tictactoe.jpg'),
    description: 'Play tic-tac-toe against the computer. Does not use AI, but a set of rules and algorithms instead.',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/OjMeGd/'}
    ],
    tags: ['jQuery', 'JavaScript']
  },
  {
    name: 'WeatHer App',
    pic: require('@/assets/images/projects/weather.jpg'),
    description: 'Local weather: displays the weather in the fom of an old time telegram. Must be allowed to get location in order to work.',
    urls: [
      { type: 'codepen', url: 'https://codepen.io/marianissimus/full/MvjdNr/'}
    ],
    tags: ['jQuery', 'CSS', 'JavaScript']
  }
]

export default projects
