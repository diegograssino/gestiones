import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  Link,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {VscMention, VscInfo} from "react-icons/vsc";

import COLORS from "../constants/colors";
import logo from "../assets/big-logo-white.png";

function Header() {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      backgroundColor={COLORS.darkBackground}
      borderBottomColor={COLORS.darkBorderArticleContent}
      borderEndColor={COLORS.darkBackground}
      borderStartColor={COLORS.darkBackground}
      borderTopColor={COLORS.darkBackground}
      borderWidth="1px"
      boxShadow="dark-lg"
      position="fixed"
      w="full"
      zIndex="1100"
    >
      <Box color="white" paddingX="3" paddingY="3">
        <Flex>
          <RouterLink to="/">
            <Heading
              as="h1"
              paddingTop={isDesktop ? "" : "1"}
              size={isDesktop ? "md" : "xs"}
            >
              <HStack spacing="2">
                <Image alt="Dan Abramov" height="30" objectFit="contain" src={logo} />
              </HStack>
            </Heading>
          </RouterLink>
          <Spacer />

          <HStack spacing="3">
            <Box
              paddingEnd="1
			  "
            >
              {/* <CategoryMenu /> */}
            </Box>
            {/* <Link to="/info"> */}
            <Box color={COLORS.darkText} fontWeight="bold">
              MIS GESTIONES
            </Box>
            {/* </Link> */}
            {/* <Link to="/contact">
              <Box color={COLORS.darkText} fontSize="xl">
                <VscMention />
              </Box>
            </Link> */}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
