export const defaultPalette = {
  type: 'light',
  primary: {
    50: '#e1e8ed',
    100: '#b5c6d1',
    200: '#84a0b3',
    300: '#537995',
    400: '#2e5d7e',
    // 500: '#094067', //main 192A65
    500: '#192A65', //main 
    600: '#083a5f',
    700: '#063254',
    800: '#052a4a',
    900: '#021c39',
    A100: '#6fa7ff',
    A200: '#3c88ff',
    A400: '#0969ff',
    A700: '#005def',
    contrastDefaultColor: 'light',
  },

  secondary: {
    50: '#ecedef',
    100: '#cfd3d7',
    200: '#afb6bd',
    300: '#8f98a3',
    400: '#77828f',
    500: '#5f6c7b', //main
    600: '#576473',
    700: '#4d5968',
    800: '#434f5e',
    900: '#323d4b',
    A100: '#9cc5ff',
    A200: '#69a8ff',
    A400: '#368aff',
    A700: '#1d7bff',
    contrastDefaultColor: 'light',
  },
  error: {
    50: '#fde9ed',
    100: '#fac7d1',
    200: '#f7a2b2',
    300: '#f47d93',
    400: '#f1617c',
    500: '#ef4565',
    600: '#ed3e5d',
    700: '#eb3653',
    800: '#e82e49',
    900: '#e41f37',
    A100: '#ffffff',
    A200: '#ffe7ea',
    A400: '#ffb4bc',
    A700: '#ff9ba5',
    contrastDefaultColor: 'light',
  },
};

// export const customPalette = {

// // SETUP COLORS
//    grey: {
//     0: '#FFFFFF',
//     100: '#F9FAFB',
//     200: '#F4F6F8',
//     300: '#DFE3E8',
//     400: '#C4CDD5',
//     500: '#919EAB',
//     600: '#637381',
//     700: '#454F5B',
//     800: '#212B36',
//     900: '#161C24',
//     500_8: alpha('#919EAB', 0.08),
//     500_12: alpha('#919EAB', 0.12),
//     500_16: alpha('#919EAB', 0.16),
//     500_24: alpha('#919EAB', 0.24),
//     500_32: alpha('#919EAB', 0.32),
//     500_48: alpha('#919EAB', 0.48),
//     500_56: alpha('#919EAB', 0.56),
//     500_80: alpha('#919EAB', 0.8)
//   },

//   primary: {
//     lighter: '#C8FACD',
//     light: '#5BE584',
//     main: '#00AB55',
//     dark: '#007B55',
//     darker: '#005249',
//     contrastText: '#fff'
//   },

//   secondary: {
//     lighter1: '#2f9fee',
//     light1: '#2F9FEE',
//     fore: '#1D96ED',
//     darkLight: '#128CE2',
//     darkens: '#1180D0',
//     lighter: '#0F74BD',
//     light: '#0E69AA',
//     main: '#0C5D97',
//     dark: '#0B5284',
//     darker: '#094671',
//     contrastText: '#fff'
//   },

//   info: {
//     lighter: '#D0F2FF',
//     light: '#74CAFF',
//     main: '#1890FF',
//     dark: '#0C53B7',
//     darker: '#04297A',
//     contrastText: '#fff'
//   },

//   success: {
//     lighter: '#E9FCD4',
//     light: '#AAF27F',
//     main: '#54D62C',
//     dark: '#229A16',
//     darker: '#08660D',
//     contrastText: GREY[800]
//   },

//   warning: {
//     lighter: '#FFF7CD',
//     light: '#FFE16A',
//     main: '#FFC107',
//     dark: '#B78103',
//     darker: '#7A4F01',
//     contrastText: GREY[800]
//   },

//   error: {
//     lighter: '#FFE7D9',
//     light: '#FFA48D',
//     main: '#FF4842',
//     dark: '#B72136',
//     darker: '#7A0C2E',
//     contrastText: '#fff'
//   },

//   gradients: {
//     primary: createGradient(PRIMARY.light, PRIMARY.main),
//     info: createGradient(INFO.light, INFO.main),
//     success: createGradient(SUCCESS.light, SUCCESS.main),
//     warning: createGradient(WARNING.light, WARNING.main),
//     error: createGradient(ERROR.light, ERROR.main)
//   },

//  chart_color:{
//     violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
//     blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
//     green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
//     yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
//     red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
//   },

//    palette: {
//     common: { black: '#000', white: '#fff' },
//     primary: { ...PRIMARY },
//     secondary: { ...SECONDARY },
//     info: { ...INFO },
//     success: { ...SUCCESS },
//     warning: { ...WARNING },
//     error: { ...ERROR },
//     grey: GREY,
//     gradients: GRADIENTS,
//     chart: CHART_COLORS,
//     divider: GREY[500_24],
//     text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
//     background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
//     action: {
//       active: GREY[600],
//       hover: GREY[500_8],
//       selected: GREY[500_16],
//       disabled: GREY[500_80],
//       disabledBackground: GREY[500_24],
//       focus: GREY[500_24],
//       hoverOpacity: 0.08,
//       disabledOpacity: 0.48
//     }
//   }
// }