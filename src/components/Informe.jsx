import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";

import COLORS from "../constants/colors";
import { firestore } from "../database/firebase";

const Informe = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const filter = firestore.collection("padron");

    filter.get().then((results) => {
      const finalResult = [];

      results.forEach((result) => {
        const { id } = result;
        const finalData = { id, ...result.data() };

        finalResult.push(finalData);

        return finalResult;
      });
      setArticles(finalResult);
    });
  }, []);

  return (
    <div>
      <Box
        backgroundColor={COLORS.darkBackgroundArticleContent}
        borderColor={COLORS.darkBorderArticleContent}
        borderRadius={10}
        borderWidth="1px"
        color={COLORS.darkText}
        marginX={[2, 5, 25, 50]}
        marginY={6}
        paddingX={[2, 5, 25, 50]}
        paddingY={[2, 5, 5, 7]}
        shadow="dark-lg"
      >
        <Text color={COLORS.darkText} fontSize="xl" fontWeight="bold" paddingBottom={2}>
          INFORME
        </Text>

        <Stack>
          <Button colorScheme="teal" marginY="4" mt={4}>
            <CSVLink data={articles}>Descargar CSV</CSVLink>
          </Button>
          ;
        </Stack>
      </Box>
    </div>
  );
};

export default Informe;
