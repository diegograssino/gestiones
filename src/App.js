import { Box, ChakraProvider, Flex, Spacer, useMediaQuery } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/700.css";
import { useState } from "react";

import theme from "./theme/theme";
import COLORS from "./constants/colors";
import Header from "./components/Header";
import ArticleListContainer from "./list/ArticleListContainer";
import ContentContainer from "./content/ContentContainer";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Padron from "./components/Padron";
import Login from "./components/Login";
import Proceso from "./components/Proceso";

function App() {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const [loginData, setLoginData] = useState(null);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box backgroundColor={COLORS.darkBackground} h="100%" minHeight="76.5vh">
          <Header loginData={loginData} setLoginData={setLoginData} />
          <Box
            backgroundColor={COLORS.darkBackground}
            h="100%"
            paddingY={isDesktop ? "50px" : "45px"}
          >
            <Routes>
              <Route
                exact
                element={
                  loginData ? (
                    <ArticleListContainer />
                  ) : (
                    <Login setLoginData={setLoginData} />
                  )
                }
                path="/"
              />
              <Route
                exact
                element={loginData ? <Contact /> : <Login setLoginData={setLoginData} />}
                path="/contact"
              />
              <Route
                exact
                element={loginData ? <Info /> : <Login setLoginData={setLoginData} />}
                path="/info"
              />
              <Route
                exact
                element={
                  loginData ? (
                    <ArticleListContainer />
                  ) : (
                    <Login setLoginData={setLoginData} />
                  )
                }
                path="/category/:id"
              />
              <Route
                exact
                element={
                  loginData ? <ContentContainer /> : <Login setLoginData={setLoginData} />
                }
                path="/article/:id"
              />
              <Route
                exact
                element={loginData ? <Padron /> : <Login setLoginData={setLoginData} />}
                path="/gestiones/padron"
              />
              <Route
                exact
                element={
                  loginData ? (
                    <Proceso user={loginData} />
                  ) : (
                    <Login setLoginData={setLoginData} />
                  )
                }
                path="/gestiones/proceso"
              />
            </Routes>
            <Spacer />
          </Box>
        </Box>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
