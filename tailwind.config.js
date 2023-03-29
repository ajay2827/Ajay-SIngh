/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        darkblue:"#000842",
        mblue:'#1E266D',
        darkblack:"#000000",
        link:'rgba(12, 33, 193, 1)',
        button:'#0C21C1',
        lightblue1:'#F2F9FF',
         lightblue2:'#e8f6fc',
         text:'#455880',
         b1:'#999FE3',
         b2:'#FED892',
         b3:'#F47B9E',
         portfolio:'#FFF9EA',
         cta:"#3751FF",
         p:'#FED385'
         
      },
      width:{
        svg:'700px',
        border:'337px'
      },
      height:
      {
        svg:'540px',
        hero:'700px',
        bg:'500px',
        about:'700px',
        img:'412px',
        ft:'400px'
      },
      fontFamily:{
        popin:['Poppins'],
        DM:['DM+Sans']
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
