import React, {useState} from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  HStack,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";

import {app} from "../database/firebase";
import COLORS from "../constants/colors";

const Login = ({setLoginData}) => {
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.theUser.value;
    const password = e.target.thePass.value;

    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        setLoginData(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        setError(true);
      });
  }

  return (
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
      <Center>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <Center paddingBottom={2} spacing="0">
              <Text
                color={COLORS.darkText}
                fontSize="xl"
                fontWeight="bold"
                marginBottom="4"
                marginTop="0"
              >
                INICIE SESIÓN
              </Text>
            </Center>
            <FormLabel htmlFor="email">Usuario</FormLabel>
            <Input id="theUser" marginBottom="4" minWidth="325" type="email" />
            <FormLabel htmlFor="email">Contraseña</FormLabel>
            <Input id="thePass" marginBottom="4" type="password" />
            {error && (
              <Text color="red.400" fontSize="small" paddingStart="1">
                Usuario o contraseña erróneos.
              </Text>
            )}
            <Center>
              <Button colorScheme="teal" marginBottom="4" mt={4} size="sm" type="submit">
                Ingresar
              </Button>
            </Center>
          </FormControl>
        </form>
      </Center>
    </Box>
  );
};

export default Login;
