import React, {useState} from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  HStack,
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
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <HStack paddingBottom={2} spacing="0">
            <Text
              color={COLORS.darkText}
              fontSize="xl"
              fontWeight="bold"
              marginBottom="4"
            >
              INICIE SESIÓN
            </Text>
          </HStack>
          <FormLabel htmlFor="email">Usuario</FormLabel>
          <Input id="theUser" marginBottom="4" type="email" />
          <FormLabel htmlFor="email">Contraseña</FormLabel>
          <Input id="thePass" marginBottom="4" type="password" />
          <Button colorScheme="teal" marginBottom="4" mt={4} type="submit">
            Ingresar
          </Button>
          {error && <Text>Usuario o contraseña erróneos.</Text>}
        </FormControl>
      </form>
    </Box>
  );
};

export default Login;
