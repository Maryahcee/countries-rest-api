module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'Dark-Blue': 'hsl(209, 23%, 22%)',
        'Very-Dark-Blue' : 'hsl(207, 26%, 17%)',
        'Light-Mode-Text': 'hsl(200, 15%, 8%)',
        'Light-Mode-Input': 'hsl(0, 0%, 52%)',
        'Light-Mode-Background':' hsl(0, 0%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
      },
      fonts: {
       ' Nunito': ['Nunito Sans', 'Sans'],
      },
      boxShadow: {
        '3xl': '0px 2px 9px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
