import {Box, Button, HStack, Stack, Text} from "@chakra-ui/react";
import React, {useState} from "react";

import COLORS from "../constants/colors";
import {userTest} from "../process/user1.js";
import {user1} from "../process/user1.js";
import {user2} from "../process/user1.js";
import {user3} from "../process/user1.js";
import {app} from "../database/firebase";

const Proceso = ({user}) => {
  function addUsers(userList) {
    if (user.email === "admin@colodontucuman.com.ar") {
      userList.map((user) => {
        app
          .auth()
          .createUserWithEmailAndPassword(user.user, user.pass)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            console.log("User " + user.email + " added");
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode + " " + errorMessage);
          });
      });
    } else {
      console.log("No admin privileges for run this process");
    }
  }

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
          PROCESO MASIVO
        </Text>

        <Stack>
          <Button
            colorScheme="teal"
            marginY="4"
            mt={4}
            onClick={() => addUsers(userTest)}
          >
            Alta de listado test
          </Button>
          <Button colorScheme="teal" marginY="4" mt={4} onClick={() => addUsers(user1)}>
            Alta de listado 1
          </Button>
          <Button colorScheme="teal" marginY="4" mt={4} onClick={() => addUsers(user2)}>
            Alta de listado 2
          </Button>
          <Button colorScheme="teal" marginY="4" mt={4} onClick={() => addUsers(user3)}>
            Alta de listado 3
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Proceso;
