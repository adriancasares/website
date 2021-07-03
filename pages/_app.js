import '../styles/globals.css'

import seed from 'seed-random'
import { chance, choice } from '../lib/utils'

import { useState, useEffect } from 'react'

import Layout from '../components/structure/Layout'

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
        styling.theme = choice(['red', 'yellow', 'green', 'blue'/*, 'navy', 'purple'*/], random);
        styling.subtheme = choice(['pastel', 'vibrant'], random);

        //styling.theme = 'blue'

        // Decide everything else
        switch(styling.theme) {
          case 'red':
            [styling['about-panel-background'], styling['about-panel-header-color'], styling['about-panel-subheader-color'], styling['about-panel-paragraph-color'], styling['about-panel-extra-color-1'], styling['about-panel-extra-color-2'], styling['about-panel-extra-color-3'], styling['about-panel-extra-color-4'], styling['about-panel-extra-color-5'], styling['blog-panel-background'], styling['blog-panel-header-color'], styling['blog-panel-article-preview-background'], styling['blog-panel-article-title-color'], styling['blog-panel-article-excerpt-color'], styling['blog-panel-article-accent-color']] = choice([
              ['#FF3C61', '#5FE37D', '#FFF07E', '#FFFFFF', '#C7756A', '#AF8E6E', '#8EB174', '#5FE37D', '#8EB174', '#BEE1FF', '#3931FF', '#FFFFFF', '#404040', '#989898', '#0020A5'],
              ['#DD003B', '#FFEB3A', '#FFEB3A', '#FFFFFF', '#E9513A', '#EE743A', '#F5A53A', '#FFEB00', '#F5A53A', '#FFCBE1', '#3931FF', '#FFFFFF', '#404040', '#989898', '#A2000D'],
              ['#A30000', '#4ADCFF', '#4ADCFF', '#FFFFFF', '#90344D', '#894A6E', '#7F6A9D', '#7198E0', '#7F6A9D', '#FFEDCB', '#FF6200', '#FFFFFF', '#404040', '#989898', '#F20000'],
              ['#FF533C', '#6A1D58', '#6A1D58', '#FFF8C3', '#CB3F44', '#B53748', '#962D4F', '#6A1D58', '#962C4E', '#BEE1FE', '#FF6200', '#FFFFFF', '#404040', '#989898', '#0020A5'],
              ['#FF7F00', '#1D3E6A', '#1D3E6A', '#FFFFFF', '#B06723', '#8F5E33', '#60514A', '#1D3E6A', '#60514A', '#B5D8B9', '#460046', '#FFFFFF', '#404040', '#989898', '#1F5000'],
              ['#FFFFFF', '#3A3A3A', '#E14689', '#989898', '#F5DDE7', '#F5C6DA', '#F5B2CF', '#F696BF', '#F5B2CF', '#EEEEDC', '#3A3A3A', '#FFFFFF', '#404040', '#989898', '#E14689'],
           ], random)
            break;
          case 'yellow':
            [styling['about-panel-background'], styling['about-panel-header-color'], styling['about-panel-subheader-color'], styling['about-panel-paragraph-color'], styling['about-panel-extra-color-1'], styling['about-panel-extra-color-2'], styling['about-panel-extra-color-3'], styling['about-panel-extra-color-4'], styling['about-panel-extra-color-5'], styling['blog-panel-background'], styling['blog-panel-header-color'], styling['blog-panel-article-preview-background'], styling['blog-panel-article-title-color'], styling['blog-panel-article-excerpt-color'], styling['blog-panel-article-accent-color']] = choice([
              ['#E9FF3C', '#6E5FE3', '#6E5FE3', '#969696', '#BDC775', '#ABAF8E', '#928EB1', '#6E5FE3', '#928EB1', '#004360', '#FFFFFF', '#50778D', '#FFFFFF', '#DDDDDD', '#FCFFAC'],
              ['#FDEB3A', '#3976E9', '#3976E9', '#717171', '#B7C175', '#9BB08F', '#7398B4', '#3976E9', '#7398B4', '#CAD6D5', '#3B3B3B', '#FFFFFF', '#404040', '#989898', '#3976E9'],
              ['#FFE67C', '#6E017C', '#6E017C', '#7F6A9D', '#C9D568', '#B3CF60', '#93C655', '#65BA45', '#93C655', '#CBEBFF', '#0045FF', '#FFFFFF', '#404040', '#989898', '#2345FB'],
              ['#FFE200', '#000000', '#000000', '#7E7E7E', '#FD9737', '#FD7535', '#FD4533', '#FC0030', '#FD4532', '#28A5E8', '#FFFFFF', '#FFFFFF', '#404040', '#989898', '#005A8B'],
              ['#FFCE00', '#3110A1', '#3110A1', '#7E5217', '#EF9421', '#E97C2F', '#E05B43', '#D32C60', '#E05B43', '#365A4B', '#FFFFFF', '#299166', '#FFC700', '#FFFFFF', '#004957'],
              ['#FFFFFF', '#3A3A3A', '#FC7E00', '#989898', '#F7E7AE', '#F8E190', '#FAD963', '#FDCE26', '#FAD963', '#BB9AD6', '#FFFFFF', '#F3DDFF', '#5A03FF', '#818181', '#5A0AFB'],
           ], random)
            break;
          case 'green':
            [styling['about-panel-background'], styling['about-panel-header-color'], styling['about-panel-subheader-color'], styling['about-panel-paragraph-color'], styling['about-panel-extra-color-1'], styling['about-panel-extra-color-2'], styling['about-panel-extra-color-3'], styling['about-panel-extra-color-4'], styling['about-panel-extra-color-5'], styling['blog-panel-background'], styling['blog-panel-header-color'], styling['blog-panel-article-preview-background'], styling['blog-panel-article-title-color'], styling['blog-panel-article-excerpt-color'], styling['blog-panel-article-accent-color']] = choice([
              ['#A9E293', '#3A3A3A', '#3A3A3A', '#838383', '#A4B98B', '#B2A681', '#C68B73', '#E3645F', '#C68B73', '#EAEDC9', '#3A3A3A', '#FFFFFF', '#404040', '#A6A6A6', '#FF7600'],
              ['#83B746', '#FFF500', '#FFF500', '#FFFFFF', '#A1954B', '#B1805B', '#C86371', '#D32D80', '#C86371', '#C6DDEB', '#3B3B3B', '#FFFFFF', '#404040', '#989898', '#3976E9'],
              ['#C0E076', '#2345FB', '#2345FB', '#67779F', '#C7B154', '#D3A146', '#E48B33', '#FF6C00', '#E48B33', '#D5DEFF', '#FD6C18', '#FFFFFF', '#404040', '#989898', '#FD6C18'],
              ['#57BC3F', '#FFE200', '#FFE200', '#FFFFFF', '#8FC436', '#A8C833', '#CBCD2E', '#FCD500', '#CBCD2E', '#28A5E8', '#FFFFFF', '#FFFFFF', '#404040', '#989898', '#005A8B'],
              ['#C0E076', '#FF5800', '#FF5800', '#7E5217', '#90C786', '#79B497', '#5999B0', '#2C73D3', '#5999AF', '#BFEDDA', '#3A3A3A', '#FFFFFF', '#404040', '#989898', '#004957'],
              ['#CAE7E8', '#3A3A3A', '#FC7E00', '#989898', '#9BD9B7', '#88D3A3', '#6DCB87', '#47BF5E', '#6DCB87', '#F295BC', '#FFFFFF', '#FFFFFF', '#404040', '#989898', '#90003D']
           ], random)
            break;
          case 'blue':
            [styling['about-panel-background'], styling['about-panel-header-color'], styling['about-panel-subheader-color'], styling['about-panel-paragraph-color'], styling['about-panel-extra-color-1'], styling['about-panel-extra-color-2'], styling['about-panel-extra-color-3'], styling['about-panel-extra-color-4'], styling['about-panel-extra-color-5'], styling['blog-panel-background'], styling['blog-panel-header-color'], styling['blog-panel-article-preview-background'], styling['blog-panel-article-title-color'], styling['blog-panel-article-excerpt-color'], styling['blog-panel-article-accent-color']] = choice([
              ['#93E2DC', '#3A3A3A', '#3A3A3A', '#838383', '#AEB5AF', '#BAA39D', '#CB8983', '#E3645F', '#CB8983', '#EAEDC9', '#3A3A3A', '#FFFFFF', '#404040', '#A6A6A6', '#FF7600'],
              ['#3682C3', '#FFFFFF', '#FFFFFF', '#FFFCA8', '#65609B', '#79528B', '#963E74', '#BF2253', '#963E74', '#C6DDEB', '#3B3B3B', '#FFFFFF', '#404040', '#989898', '#3976E9'],
              ['#619CE2', '#FCE229', '#FCE229', '#FFFFFF', '#6F7CE8', '#756FEC', '#7536F4', '#7600FF', '#7536F4', '#FFFAD5', '#FD6C18', '#FFFFFF', '#404040', '#989898', '#FD6C18'],
              ['#0058FF', '#FFE200', '#FFE200', '#FFFFFF', '#5682B4', '#7C9594', '#B1AF67', '#FCD500', '#B1AF67', '#E82854', '#FFFFFF', '#FFFFFF', '#404040', '#989898', '#74001B'],
              ['#AADED8', '#FF5800', '#FF5800', '#90806C', '#BBA594', '#C38D78', '#CF6C50', '#E03D17', '#CF6C50', '#EABDC4', '#3A3A3A', '#FFFFFF', '#404040', '#989898', '#D58592'],
              ['#FFFFFF', '#0062FF', '#0062FF', '#989898', '#9BD9B7', '#88D3A3', '#6DCB87', '#47BF5E', '#6DCB87', '#4092BE', '#FFFFFF', '#FFFFFF', '#404040', '#989898', '#005EA3']
           ], random)
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
    <div id="__app" style={styles}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default App
