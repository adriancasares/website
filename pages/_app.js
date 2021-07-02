import '../styles/globals.css'
import { AnimateSharedLayout, m } from "framer-motion"

import seed from 'seed-random'
import { chance, choice } from '../lib/utils'

import { useState, useEffect } from 'react'

function App({ Component, pageProps }) {
  const config = {
    features: ['polka-dots'/*, 'curves', 'rectangles'*/]
  }

  const generateStyling = () => {
    var random = /*seed(new Date().toDateString());*/ Math.random
    const styling = {}

    styling.feature = choice(config.features, random)

    switch(styling.feature) {
      case 'polka-dots':
        styling.theme = choice(['red', 'yellow', 'green', 'blue', 'navy', 'purple'], random);
        styling.subtheme = choice(['pastel', 'vibrant'], random);

        styling.theme = 'red'
        // Decide everything else
        switch(styling.theme) {
          case 'red':
            [styling['about-panel-background'], styling['about-panel-header-color'], styling['about-panel-subheader-color'], styling['about-panel-paragraph-color'], styling['about-panel-extra-color-1'], styling['about-panel-extra-color-2'], styling['about-panel-extra-color-3'], styling['about-panel-extra-color-4'], styling['about-panel-extra-color-5'], styling['blog-panel-background'], styling['blog-panel-header-color'], styling['blog-panel-article-preview-background'], styling['blog-panel-article-title-color'], styling['blog-panel-article-excerpt-color'], styling['blog-panel-article-accent-color']] = choice([
              ['#FF3C61', '#5FE37D', '#FFF07E', '#FFFFFF', '#C7756A', '#AF8E6E', '#8EB174', '#5FE37D', '#8EB174', '#BEE1FF', '#3931FF', '#FFFFFF', '#404040', '#989898', '#0020A5'],
              ['#DD003B', '#FFEB3A', '#FFEB3A', '#FFFFFF', '#E9513A', '#EE743A', '#F5A53A', '#FFEB00', '#F5A53A', '#BEE1FF', '#3931FF', '#FFFFFF', '#404040', '#989898', '#0020A5'],
              ['#A30000', '#4ADCFF', '#4ADCFF', '#FFFFFF', '#90344D', '#894A6E', '#7F6A9D', '#7198E0', '#7F6A9D', '#BEE1FF', '#3931FF', '#FFFFFF', '#404040', '#989898', '#0020A5'],
              ['#FF533C', '#6A1D58', '#6A1D58', '#FFF8C3', '#CB3F44', '#B53748', '#962D4F', '#6A1D58', '#962C4E', '#BEE1FF', '#3931FF', '#FFFFFF', '#404040', '#989898', '#0020A5'],
              ['#FF533C', '#6A1D58', '#6A1D58', '#FFF8C3', '#CB3F44', '#B53748', '#962D4F', '#6A1D58', '#962C4E', '#BEE1FF', '#3931FF', '#FFFFFF', '#404040', '#989898', '#0020A5'],
              ['#FF7F00', '#1D3E6A', '#1D3E6A', '#FFFFFF', '#B06723', '#8F5E33', '#60514A', '#1D3E6A', '#60514A', '#BEE1FF', '#3931FF', '#FFFFFF', '#404040', '#989898', '#0020A5'],
              ['#FFFFFF', '#3A3A3A', '#E14689', '#989898', '#F5DDE7', '#F5C6DA', '#F5B2CF', '#F696BF', '#F5B2CF', '#BEE1FF', '#3931FF', '#FFFFFF', '#404040', '#989898', '#0020A5'],
            ], random)
            //choice(['#FF3C61' /* Pinkish Reddish */, '#DD003B' /* Raspberry */, '#A30000' /* Royal Red */, '#FF533C' /* Orange */, '  ', /* Mango */], random);
            
            /*if(styling['about-panel-background'] === '#FF3C61' || styling['about-panel-background'] === '#DD003B' || styling['about-panel-background'] === '#A30000' || (styling['about-panel-background'] === '#FF533C' && chance(0.5, random))) {
              styling['about-panel-header-color'] = choice(['#95FFA1', '#EBFF00', '#00F5FF'], random)
              styling['about-panel-subheader-color'] = choice(['#EBFF00', '#FFFFFF', (styling['about-panel-header-color'] !== '#00F5FF' ? styling['about-panel-header-color'] : '#B4FCFF')], random)
              styling['about-panel-paragraph-color'] = choice(['#EBFF00', '#FFFFFF', (styling['about-panel-header-color'] !== '#00F5FF' ? styling['about-panel-header-color'] : '#B4FCFF')], random)
            } else {
              styling['about-panel-header-color'] = choice((styling['about-panel-background'] === '#FF533C' ? ['#145B7B', '#60004A', '#FFFFFF'] : ['#005F0B', '#007BB1', '#FFFFFF']), random)
              styling['about-panel-paragraph-color'] = choice(['#FFFFFF', '#FFF07E', (styling['about-panel-header-color'])], random)
              styling['about-panel-subheader-color'] = choice([(styling['about-panel-header-color']), (styling['about-panel-paragraph-color'])], random)
            }*/
            //#4AE1F5
            break;
          case 'yellow':
            break;
          case 'green':
            break;
          case 'blue':
            break;
          case 'navy':
            break;
          case 'purple':
            break;
        }

        break;
    }

    return styling;
  }

  const convertStyling = (styles) => {
    const css = {}
    Object.entries(styles).forEach(ent => {
      css['--' + ent[0]] = ent[1]
    })
    return css;
  }

  const [styles, setStyles] = useState(convertStyling(generateStyling()))

  return (
    <AnimateSharedLayout>
        <div id="__app" style={styles}>
          <Component {...pageProps} />
        </div>
    </AnimateSharedLayout>
  )
}

export default App
