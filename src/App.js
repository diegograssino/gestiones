import {Box, ChakraProvider, Flex, Spacer, useMediaQuery} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/700.css";
import theme from "./theme/theme";
import COLORS from "./constants/colors";
import Header from "./components/Header";
import ArticleListContainer from "./list/ArticleListContainer";
import ContentContainer from "./content/ContentContainer";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Padron from "./components/Padron";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
	const [isLogged, setIsLogged] = useState(false);

	// if (isLogged === false) { return (
	// 	<ChakraProvider theme={theme}>
	// 		  <BrowserRouter>
	// 				<Box backgroundColor={COLORS.darkBackground} h="100%" minHeight="76vh">
	// 					<Header />
	// 					<Box
	// 						backgroundColor={COLORS.darkBackground}
	// 						h="100%"
	// 						paddingY={isDesktop ? "50px" : "45px"}
	// 					>
	// 						<Spacer />
	// 					</Box>
	// 					<Login setisLogged={setIsLogged} />
	// 				</Box>
  //       <Footer />
  //     </BrowserRouter>
	// 	</ChakraProvider>

	// );} else {
	
	return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box backgroundColor={COLORS.darkBackground} h="100%" minHeight="76vh">
          <Header />
          <Box
            // bgGradient={`linear(to-l, ${COLORS.gradientBackgroud})`}
            backgroundColor={COLORS.darkBackground}
            h="100%"
            paddingY={isDesktop ? "50px" : "45px"}
          >
            <Routes>
              <Route exact element={isLogged ? <ArticleListContainer /> : <Login setIsLogged={setIsLogged} />} path="/" />
              <Route exact element={isLogged ? <Contact /> : <Login setIsLogged={setIsLogged}/>} path="/contact" />
              <Route exact element={isLogged ? <Info />: <Login setIsLogged={setIsLogged}/>} path="/info" />
              <Route exact element={isLogged ? <ArticleListContainer /> : <Login setIsLogged={setIsLogged}/>} path="/category/:id" />
              <Route exact element={isLogged ? <ContentContainer /> : <Login setIsLogged={setIsLogged}/>} path="/article/:id" />
              <Route exact element={isLogged ? <Padron /> : <Login setIsLogged={setIsLogged}/>} path="/gestiones/padron" />
            </Routes>
            <Spacer />
          </Box>
        </Box>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  )};


export default App;
