module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1024px'

    },
    fontFamily:{
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      fontSize:{
        "heading-1":['64px', '76px'],
        "heading-2":['36px', '44px'],
        "heading-3":['28px', '36px'],
        "heading-4":['20px', '28px'],
        "body-1":['18px', '28px'],
        "body-2":['16px', '24px'],
        "body-3":['14px', '20px'],
        "body-4":['12px', '16px'],

      },
      colors:{
        "color-primary":"#28CB8B",
        "color-secondary":"#263238",
        "color-info":"#2194f3",
        "color-danger":"#E53835",
        "color-warning":"#FBC02D",
        "color-success":"#2E7D31",

        "color-neutral-black":"#263238",
       "color-neutral-d-grey":"#4D4D4D",
       "color-neutral-grey":"#717171",
       "color-neutral-l-grey":"#89939E",
       "color-neutral-grey-blue":"#ABBED1",
       "color-neutral-silver":"#F5F7FA",
       "color-white":"#FFFFFF",

      "color-primary-shade-1":"#42A046",
      "color-primary-shade-2":"#388E38",
      "color-primary-shade-3":"#237D31",
      "color-primary-shade-4":"#1B5E1F",
      "color-primary-shade-5":"#103E13",

      "color-primary-tint-1":"#66BB69",
      "color-primary-tint-2":"#81C784",
      "color-primary-tint-3":"#A5D6A7",
      "color-primary-tint-4":"#C8E6C9",
      "color-primary-tint-5":"#E8F5E9",

      }
    },
  },
  plugins: [],
}