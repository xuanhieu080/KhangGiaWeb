import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      screens: {
        'lg': '992px',
      },
      colors: {
        none: {
          500: 'black',
        }
      }
    }
  }
}