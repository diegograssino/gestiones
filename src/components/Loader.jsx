import {Spinner, Box, DarkMode} from "@chakra-ui/react";

import COLORS from "../constants/colors";

function Loader() {
  return (
    <Box left="50%" position="absolute" top="50%" transform="translateY(-50%, -50%)">
      <Spinner color={COLORS.darkText} label="loading" size="xl" thickness={4} />
    </Box>
  );
}

export default Loader;
