import * as MegaMenu from './components/MegaMenu/demo'
import * as MultiCarousel from './components/MultiCarousel/demo'
import * as ProductCard from './components/ProductCard/demo'
import * as RadioCollapse from './components/RadioCollapse/demo'
import * as StatCard from './components/StatCard/demo'
import * as TrackerTooltip from './components/TrackerTooltip/demo'
import * as RevealCard from './components/RevealCard/demo'

// import fs from 'fs'
// import path from 'path'

// const beginComment = '/** BEGIN DEMO */\r\n'
// const endComment = '/** END DEMO */'

// const getDemoCode = (componentName: string) => {
//   const rawCode = fs.readFileSync(
//     path.resolve(__dirname, 'components', componentName, 'demo.tsx'),
//     'utf8',
//   )
//   const codeStart = rawCode.indexOf(beginComment) + beginComment.length
//   const codeEnd = rawCode.indexOf(endComment) - 2
//   return rawCode.substring(codeStart, codeEnd)
// }

export default [
  {
    component: MegaMenu.Demo,
    // code: getDemoCode('MegaMenu'),
    description:
      'The MegaMenu is an extra sized menu for extra sized option lists. Items can be grouped into categories to allow for easier navigation.',
    useCases: ['Insane applications', 'Freaking out users'],
    gif: MegaMenu.gif,
    path: '/MegaMenu',
    title: 'Mega Menu',
  },
  {
    component: MultiCarousel.Demo,
    // code: getDemoCode('MultiCarousel'),
    description:
      "The MultiCarousel behaves just like a regular carousel but allows for multiple items to be displayed at a time. It's great for showing collections of cards without taking up a lot of vertical space.",
    useCases: ['Dashboards', 'News feeds', 'Content lists'],
    gif: MultiCarousel.gif,
    path: '/MultiCarousel',
    title: 'Multi Carousel',
  },
  {
    component: StatCard.Demo,
    // code: getDemoCode('StatCard'),
    description:
      'The StatCard is a wrapper around the @nivo/line chart trend that provides supporting metric information.',
    useCases: ['Dashboards', ''],
    gif: StatCard.gif,
    path: '/StatCard',
    title: 'Stat Card',
  },
  {
    component: ProductCard.Demo,
    description:
      'The ProductCard is a wrapper around the Card component that adds a bit more structure to the default layout.',
    useCases: ['Lists', ''],
    gif: ProductCard.gif,
    path: '/ProductCard',
    title: 'Product Card',
  },
  {
    component: RadioCollapse.Demo,
    // code: getDemoCode('RadioCollapse'),
    description:
      'The RadioCollapse is a thin wrapper around a radio group that allows sets of radio buttons to be collapsed. The selected value is displayed in the header.',
    useCases: ['Filter panels', 'Busy forms'],
    gif: RadioCollapse.gif,
    path: '/RadioCollapse',
    title: 'Radio Collapse',
  },
  {
    component: TrackerTooltip.Demo,
    benchmark: TrackerTooltip.Benchmark,
    // code: getDemoCode('TrackerTooltip'),
    description:
      'The TrackerTooltip allows any content to be attached to the mouse as a sticky tooltip when contained content is hovered.',
    exact: true,
    useCases: ['Content previews', 'Enhanced tooltips'],
    gif: TrackerTooltip.gif,
    path: '/TrackerTooltip',
    title: 'Tracker Tooltip',
  },
  {
    component: RevealCard.Demo,
    // code: getDemoCode('RevealCard'),
    description:
      'The RevealCard provides a mechanism for displaying informational content over a card using a smooth circular reveal animation.',
    useCases: ['Helper text'],
    gif: RevealCard.gif,
    path: '/RevealCard',
    title: 'Reveal Card',
  },
]
