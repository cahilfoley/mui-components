import MegaMenuDemo from './components/MegaMenu/demo'
import MultiCarouselDemo from './components/MultiCarousel/demo'
import RadioCollapseDemo from './components/RadioCollapse/demo'
import StatCardDemo from './components/StatCard/demo'
import TrackerTooltipDemo from './components/TrackerTooltip/demo'
import RevealCardDemo from './components/RevealCard/demo'

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
    component: MegaMenuDemo,
    // code: getDemoCode('MegaMenu'),
    path: '/MegaMenu',
    title: 'Mega Menu',
  },
  {
    component: MultiCarouselDemo,
    // code: getDemoCode('MultiCarousel'),
    path: '/MultiCarousel',
    title: 'Multi Carousel',
  },
  {
    component: StatCardDemo,
    // code: getDemoCode('StatCard'),
    path: '/StatCard',
    title: 'Stat Card',
  },
  {
    component: RadioCollapseDemo,
    // code: getDemoCode('RadioCollapse'),
    path: '/RadioCollapse',
    title: 'Radio Collapse',
  },
  {
    component: TrackerTooltipDemo,
    // code: getDemoCode('TrackerTooltip'),
    path: '/TrackerTooltip',
    title: 'Tracker Tooltip',
  },
  {
    component: RevealCardDemo,
    // code: getDemoCode('RevealCard'),
    path: '/RevealCard',
    title: 'Reveal Card',
  },
]
