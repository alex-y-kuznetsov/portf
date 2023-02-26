export default [
  {
    id: 1,
    name: 'Superbanking',
    prodUrl: 'https://superbanking.ru',
    subtitle: 'A promotional page for an online payment service',
    images: [
      {
        url: '/img/project_previews/superbanking/superbanking_preview_1.jpg',
        description: 'Home page and menu'
      },
      {
        url: '/img/project_previews/superbanking/superbanking_preview_2.jpg',
        description: 'Side scrolling features'
      },
      {
        url: '/img/project_previews/superbanking/superbanking_preview_3.jpg',
        description: 'Parallax scrolling images'
      },
      {
        url: '/img/project_previews/superbanking/superbanking_preview_4.jpg',
        description: 'Adaptive tile sections'
      }
    ],
    features: [
      'Nuxt JS used for better search',
      'Animations used for transitions between pages',
      'Backend interaction via REST API',
      'Transition between pages via Vue routing',
      'Desktop and mobile versions with mobile first approach'
    ],
    tech: [
      'HTML',
      'CSS',
      'SCSS',
      'JavaScript',
      'Nuxt'
    ]
  },
  {
    id: 2,
    name: 'Super Place',
    prodUrl: 'https://superplace.ru',
    subtitle: 'A marketplace interface for small businesses',
    images: [
      {
        url: '/img/project_previews/superplace/superplace_preview_1.jpg',
        description: 'Home page'
      },
      {
        url: '/img/project_previews/superplace/superplace_preview_2.jpg',
        description: 'Catalog'
      },
      {
        url: '/img/project_previews/superplace/superplace_preview_3.jpg',
        description: 'Product card'
      }
    ],
    features: [
      'Vue 3 used',
      'Product search and filtering via REST API',
      'Several search parameters can be applied at the same time',
      'Carousel gallery in product card',
      'Desktop and mobile versions'
    ],
    tech: [
      'HTML',
      'CSS',
      'SCSS',
      'JavaScript',
      'Vue'
    ]
  },
  {
    id: 3,
    name: 'Clash',
    prodUrl: 'https://alex-y-kuznetsov.github.io/clash-build/',
    devUrl: 'https://github.com/alex-y-kuznetsov/clash',
    subtitle: 'A simple fighting game in a fantasy world',
    images: [
      {
        url: '/img/project_previews/clash/clash_preview_1.jpg',
        description: 'Start screen'
      },
      {
        url: '/img/project_previews/clash/clash_preview_2.jpg',
        description: 'Character selection'
      },
      {
        url: '/img/project_previews/clash/clash_preview_3.jpg',
        description: 'Fight zone'
      }
    ],
    features: [
      'Vue store interaction between components',
      'Character stats are affected by items',
      'Stamina and health mechanics',
      'Transition between pages via Vue routing',
      'Desktop and mobile versions'
    ],
    tech: [
      'HTML',
      'CSS',
      'Less',
      'JavaScript',
      'Vue'
    ]
  },
  {
    id: 4,
    name: 'Sleep',
    prodUrl: 'https://alex-y-kuznetsov.github.io/sleep-build/',
    devUrl: 'https://github.com/alex-y-kuznetsov/sleep',
    subtitle: 'An app to track how many times a month my wife falls asleep on the couch',
    images: [
      {
        url: '/img/project_previews/sleep/sleep_preview_1.jpg',
        description: 'Controls panel'
      },
      {
        url: '/img/project_previews/sleep/sleep_preview_2.jpg',
        description: 'Additional visualization'
      }
    ],
    features: [
      'Selection stored in local storage and persists through page reload',
      'Data cleared at the beggining of a new month',
      'Timeline and percentage bar views with titles',
      'Vue store and routing implementation',
      'Mobile and desktop versions'
    ],
    tech: [
      'HTML',
      'CSS',
      'Less',
      'JavaScript',
      'Vue'
    ]
  },
  {
    id: 5,
    name: 'Note',
    prodUrl: 'https://alex-y-kuznetsov.github.io/note-build/',
    devUrl: 'https://github.com/alex-y-kuznetsov/note',
    subtitle: 'A mandatory note app',
    images: [
      {
        url: '/img/project_previews/note/note_preview_1.jpg',
        description: 'Controls panel'
      },
      {
        url: '/img/project_previews/note/note_preview_2.jpg',
        description: 'Tiles view'
      },
      {
        url: '/img/project_previews/note/note_preview_3.jpg',
        description: 'List view'
      },
      {
        url: '/img/project_previews/note/note_preview_4.jpg',
        description: 'Stats'
      }
    ],
    features: [
      'Notes are stored in local storage and persist through page reload',
      'Filtering functionality: showing favorite/marked notes or both',
      'Total note stats',
      'Vue store and routing implementation',
      'Mobile and desktop versions'
    ],
    tech: [
      'HTML',
      'CSS',
      'Less',
      'JavaScript',
      'Vue'
    ]
  },
  {
    id: 6,
    name: 'Swapp',
    prodUrl: 'https://alex-y-kuznetsov.github.io/the-swapp/',
    devUrl: 'https://github.com/alex-y-kuznetsov/swapp',
    subtitle: 'An app to track your M:tG Commander card swap ideas',
    images: [
      {
        url: '/img/project_previews/swapp/swapp_preview_1.jpg',
        description: 'Main table'
      },
      {
        url: '/img/project_previews/swapp/swapp_preview_2.jpg',
        description: 'Item controls'
      },
      {
        url: '/img/project_previews/swapp/swapp_preview_3.jpg',
        description: 'Pop-up with create/edit'
      },
      {
        url: '/img/project_previews/swapp/swapp_preview_4.jpg',
        description: 'Mobile version'
      }
    ],
    features: [
      'Vue 3 used with store and router implementation',
      'Scryfall API integrated for card search',
      'Card names stored in local storage for less request frequency',
      'Swap items stored in local storage for easy edit',
      'Mobile and desktop versions'
    ],
    tech: [
      'HTML',
      'CSS',
      'Less',
      'JavaScript',
      'Vue 3'
    ]
  }
]
