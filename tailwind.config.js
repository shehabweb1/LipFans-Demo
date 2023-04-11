/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero.jpg')",
        'card-img': "url('/images/h2.jpg')",
        'flag-img': "url('/images/USA.png')"        
      },
      backgroundColor:{
        'lip-color': "#fd5ecd"
      }
    }
  },
  plugins: [],
}

