import {Box, Stack, Text, VStack, Image} from "@chakra-ui/react";

import COLORS from "../constants/colors";
import logo from "../assets/big-logo-white.png";

import {Copyright} from "./Copyright";
import Emoji from "./Emoji";
import {SocialMediaLinks} from "./SocialMediaLinks";

const Footer = () => {
  return (
    <Box
      as="footer"
      backgroundColor={COLORS.darkBackground}
      borderBottomColor={COLORS.darkBackground}
      borderEndColor={COLORS.darkBackground}
      borderStartColor={COLORS.darkBackground}
      borderTopColor={COLORS.darkBorderArticleContent}
      borderWidth="1px"
      // minHeight="20%"
      mx="auto"
      px={{
        base: "4",
        md: "8",
      }}
      py="0"
      role="contentinfo"
    >
      <Stack>
        <Stack align="center" direction="row" justify="space-between" spacing="4">
          <Image alt="Logo" boxSize="200px" objectFit="contain" src={logo} />
          {/* <VStack spacing="0">
            <Text color={COLORS.darkText}>Dirección</Text>
            <Text color={COLORS.darkText}>Telefonos</Text>
          </VStack> */}

          {/* <SocialMediaLinks /> */}
        </Stack>
        <Copyright
          alignSelf={{
            base: "center",
            sm: "start",
          }}
        />
      </Stack>
    </Box>
  );
};

export default Footer;
