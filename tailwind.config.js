module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern' : "url('../public/assets/image-hero-desktop.png')",
        'hero-pattern-mobile' : "url('../public/assets/image-hero-mobile.png')"
      },
      
      width : {
        'img' : '480px'
      },
      
      height : {
        'img' : '640px',
        'img-mobile' : '282px'
      },
      
      margin : {
        'main' : '67px',
        '27' : '108px',
        '15' : '60px'
      },
      
      maxWidth : {
        'h1' : '530px',
        'main-text' : '445px',
        'main' : '1145px'
      },
      
      fontSize : {
        '7xl' : ['80px', '80px'],
        'medium' : ['54px', '1'],
        'small' : ['14px', '16px']
      },
      
      letterSpacing : {
        'h1' : '-1.11111px'
      },
      
      fontFamily : {
        'global' : ['"Epilogue"', 'sans-serif']
      },

      screens : {
        'sm' : '375px'
      },

      borderWidth : {
        '1' : '1px'
      }
    },
  },
  plugins: [],
}
