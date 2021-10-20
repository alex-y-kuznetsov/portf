export default [
  {
    id: 1,
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
      'Transition between pages via Vue routing',
      'Desktop and mobile versions'
    ]
  },
  {
    id: 2,
    name: 'Sleep',
    prodUrl: 'https://alex-y-kuznetsov.github.io/sleep-build/',
    devUrl: 'https://github.com/alex-y-kuznetsov/sleep',
    subtitle: 'An app to keep track how many times a month my fiancée falls asleep on the couch',
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
    ]
  },
  {
    id: 3,
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
    ]
  }
]
