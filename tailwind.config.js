module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      borderRadius: {
        inherit: 'inherit',
      },
      boxShadow: {
        input: '0 0 10px #9ecaed;',
      },
      colors: {
        primary: '#2563EB',
      },
      gridTemplateColumns: {
        inputIcon: '10% auto',
        login: '1fr 4fr 1fr',
      },
      height: {
        screen75: '75vh',
      },
      minWidth: {
        2.5: '2.5rem',
      },
    },
  },
  variant: {},
  plugins: [],
};
