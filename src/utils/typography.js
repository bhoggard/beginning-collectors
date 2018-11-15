import Typography from 'typography'
import parnassusTheme from 'typography-theme-parnassus'

const typography = new Typography(parnassusTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
