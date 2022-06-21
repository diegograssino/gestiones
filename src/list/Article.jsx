import {Box, Flex, Heading, HStack, Text, Spacer, Button} from "@chakra-ui/react";
import {VscWatch, VscPerson, VscArrowRight} from "react-icons/vsc";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

import {firestore} from "../database/firebase";
import Badges from "../components/Badges";
import COLORS from "../constants/colors";
import Emoji from "../components/Emoji";
import HrLine from "../components/HrLine";
import LikeButton from "../components/LikeButton";

function Article({article}) {
  return (
    <div>
      <Toaster />
      <Box
        backgroundColor={COLORS.darkBackgroundArticleContent}
        borderColor={COLORS.darkBorderArticleContent}
        borderRadius={10}
        borderWidth="1px"
        color={COLORS.darkText}
        marginX={[4, 8, 25, 50]}
        marginY={6}
        paddingX={[2, 5, 25, 50]}
        paddingY={[2, 5, 5, 7]}
        shadow="dark-lg"
      >
        <Heading as="h3" fontWeight={700} paddingBottom="2" size="md">
          <Link to={`${article.link}`}>
            <Text>{article.title.toUpperCase()}</Text>
          </Link>
        </Heading>
        <HStack paddingBottom={6} spacing="0">
          <Text color={COLORS.darkPrimary} fontSize="xs" fontWeight="bold">
            <VscWatch />
          </Text>
          <Text
            color={COLORS.darkPrimary}
            fontSize="xs"
            fontWeight="bold"
            paddingRight="2"
          >
            {new Intl.DateTimeFormat("es-AR").format(
              new Date(article.date.seconds * 1000),
            )}
          </Text>
        </HStack>
        <HrLine theBorderColor={COLORS.darkBorderArticleContent} />
        <Text color={COLORS.darkText} fontSize="md" marginTop="4">
          {article.description}
        </Text>
        <Flex paddingTop="4">
          <Spacer />
          <Link to={`${article.link}`}>
            <Text color={COLORS.darkSecondary} fontSize="sm">
              Ir a la gestión
            </Text>
          </Link>
          <Text
            color={COLORS.darkSecondary}
            fontSize="sm"
            paddingStart="1"
            paddingTop="1"
          >
            <VscArrowRight />
          </Text>
        </Flex>
      </Box>
    </div>
  );
}

export default Article;
