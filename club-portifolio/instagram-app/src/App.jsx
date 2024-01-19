import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { Flex, Screen, Tipography } from "./style";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Screen>
          <Tipography>Hellow Word</Tipography>
        </Screen>
      </ThemeProvider>
    </>
  );
}

export default App;

