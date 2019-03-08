import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

lincolnTheme.googleFonts = [
  {
    name: 'Lucida Sans',
    styles: ['600'],
  },
  {
    name: 'Varela Round',
    styles: ['400'],
  },
  {
    name: 'Karla',
    styles: ['400'],
  },
  {
    name: 'Lora',
    styles: ['400', '400i', '700'],
  },
]

lincolnTheme.headerFontFamily = ['Lucida Sans', 'Varela Round', 'sans-serif']
lincolnTheme.bodyFontFamily = ['Karla', 'Lora', 'serif']

const typography = new Typography(lincolnTheme)

export default typography
