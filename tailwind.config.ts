import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionDelay: {
        '6': '0.06s',
        '12': '0.12s',
        '18': '0.18s',
        '30': '0.3s',
        '36': '0.36s',
        '42': '0.42s',
        '48': '0.48s',
        '54': '0.54s',
        '60': '0.60s',
        '66': '0.66s',
        '72': '0.72s',
        '78': '0.78s',
      }
    },
  },
  plugins: [],
}
export default config
