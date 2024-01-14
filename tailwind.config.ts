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
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      }
    }
  }
}