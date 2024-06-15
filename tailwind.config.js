/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        'Smallest' : {'max':'320px'},
        'ProSmall' : {'max':'390px'},
        'XtraSmall' : {'max':'400px'},
        'ExtraSmall' : {'max':'500px'},
        'Verysmall' : {'max':'632px'},
        'small' : {'max':'760px'},
        'medium' : {'max':'1000px'},
        'mediumSmall' : {'max':'1050px'},
        'mediumLarge' : {'max':'1130px'},
        'large' : {'max':'1169px'},
      },
      backgroundImage: {
        'bkgimg': "url('/Paytm-assets/asset 30.avif')",
      },
      colors:{
        footText: '#505051',
        footLine: '#e1e2e4',
        nilla: '#00BAF2',
        nilla2: '#0F4A8A',
        nilla3: '#0d3e80',
        bkg_clr: '#f5f7fa',
      }
    },
  },
  plugins: [],
}

