import { PrismTheme } from 'prism-react-renderer'

const theme: PrismTheme = {
  plain: {
    color: '#abb2bf',
    backgroundColor: '#282c34',
  },
  styles: [
    {
      types: ['variable', 'keyword', 'selector'],
      style: {
        color: 'rgb(198, 120, 221)',
      },
    },
    {
      types: ['constant', 'deleted', 'tag'],
      style: {
        color: 'rgb(224, 108, 117)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(171, 178, 191)',
      },
    },
    {
      types: ['builtin', 'changed', 'namespace', 'class-name'],
      style: {
        color: 'rgb(229, 192, 123)',
      },
    },
    {
      types: ['operator', 'symbol'],
      style: {
        color: 'rgb(86, 182, 194)',
      },
    },
    {
      types: ['inserted', 'char'],
      style: {
        color: 'rgb(152, 195, 121)',
      },
    },
    {
      types: ['attr-name', 'comment'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['function', 'string'],
      style: {
        color: 'rgb(97, 175, 239)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(209, 154, 102)',
      },
    },
  ],
}

export default theme
