import { createTheme } from "@mui/material/styles"

const green = "#99D898"
const darkGreen = "#708670"
const tan = "#FECEA8"
const lightRed = "#FF847C"
const red = "#E84A5F"
const offBlack = "#2A363B"
const grey = "#747474"

const theme = createTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: darkGreen,
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      fontFamily: "Philosopher",
      fontStyle: "italic",
      fontWeight: 700,
      color: green,
    },
    h2: {
      fontSize: "3rem",
      fontFamily: "Montserrat",
      fontWeight: 500,
      color: "#fff",
    },
    h3: {
      fontSize: "2rem",
      fontFamily: "Montserrat",
      fontWeight: 300,
      color: green,
    },
    h4: {
      fontSize: "3rem",
      fontFamily: "Philosopher",
      fontWeight: 700,
      fontStyle: "italic",
      color: "#fff",
    },
    h5: {
      fontSize: "2rem",
      fontFamily: "Philosopher",
      fontWeight: 700,
      fontStyle: "italic",
      color: "#fff",
    },
    body1: {
      fontSize: "1.5rem",
      fontFamily: "Montserrat",
      color: grey,
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: darkGreen,
      },
      label: {
        fontSize: "1.5rem",
        fontFamily: "Montserrat",
        color: "#fff",
        fontWeight: 500,
      },
    },
  },
})

export default theme
