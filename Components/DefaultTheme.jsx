const defaultTheme = {
  typography: {
    p: {
      maxW: "2xl",
      fontSize: "base",
      leading: "7",
      mb: "8"
    },
  },
  headline: {
    h1: {text: ["3xl", "gray-900"], font: "bold", leading: "tight"},
    h2: {text: {xs: ["xl", "gray-900"], md: "2xl"}, font: "semibold", leading: {xs: "7", sm: "8"}},
    h3: {text: 'lg', leading: '6', font: 'bold', text: 'gray-900'},
    h4: {text: 'lg', leading: '6', font: 'medium', text: 'gray-900'},
    h5: {text: 'lg', leading: '6', font: 'light', text: 'gray-900'},
    h6: {text: 'base', leading: '6', font: 'bold', text: 'gray-900'}
  },
  buttons: {
    all: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: ['x-4', 'y-2'],
      rounded: true,
      transition: true,
      duration: '150',
      ease: 'in-out',
      shadow: {focus: 'outline'},
      outline: {focus: 'none'},
      text: 'sm',
      font: 'medium',
    },
    primary: {
      background: {xs: 'purple-800', hover: 'purple-700', focus: 'purple-700'},
      text: 'purple-100',
    },
    secondary: {
      background: {xs: 'gray-600', hover: 'gray-700', focus: 'gray-700'},
      text: 'gray-100',
    },
    warning: {
      background: {xs: 'orange-800', hover: 'orange-700', focus: 'orange-700'},
      text: 'orange-100',
    },
    error: {
      background: {xs: 'red-800', hover: 'red-700', focus: 'red-700'},
      text: 'red-100',
    }
  },
  card: {
    container: {
      background: "white",
      shadow: true,
      overflow: 'hidden',
      rounded: {"sm": "lg"}
    },
    content: {
      padding: {xs: ["x-4", "y-5"], sm: "x-6"},
      gap: {sm: "4"},
    },
    header: {
      padding: {xs: ['x-4', "y-5"], sm: "x-6"},
      border: ['b-2', 'gray-200'],
    },
    footer: {
      padding: {xs: ['x-4', "y-5"], sm: "x-6"},
      backgroundColor: "gray-100",
    }
  },
  input: {
    background: "white",
    outline: {focus: "none"},
    shadow: {focus: "outline", },
    border: true,
    borderColor: {default: "gray-300", focus: 'transparent'},
    rounded: "lg",
    py: "2",
    px: "4",
    display: "block",
    w: "full",
    appearance: "none",
    leading: "normal",
  },
  label: {
    display: "block",
    fontSize: "sm",
    leading: "leading",
    fontWeight: "medium",
    textColor: "gray-700",
  },
  inputGroup: {
    groupContainer: { },
    inputContainer: {
      mt: "1",
      position: "relative",
      rounded: "md",
      shadow: "sm"
    }
  },
  modal: {
    container: {
      position: 'fixed',
      z: '10',
      inset: '0',
    },
    overlay: {
      position: 'absolute',
      inset: '0',
      background: ['gray-500', 'opacity-75']
    },
    content: {
      position: 'absolute',
      inset: '0',
      overflow: 'y-auto',
      display: 'flex',
      padding: '6',
      justifyContent: 'center',
    }

  },
}

export default defaultTheme;