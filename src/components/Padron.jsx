import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Spacer,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import toast, {Toaster} from "react-hot-toast";
import {VscWatch, VscPerson, VscArrowLeft} from "react-icons/vsc";
import {Link} from "react-router-dom";

import Badges from "../components/Badges";
import COLORS from "../constants/colors";
import HrLine from "../components/HrLine";

const Padron = () => {
  return (
    <div>
      <Toaster />
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
        {/* <Box paddingTop="2">
          <Badges category={content.category} marginTop="2" />
        </Box> */}
        <HStack paddingBottom={2} spacing="0">
          {/* <Text color={COLORS.darkPrimary} fontSize="xs" fontWeight="bold">
            <VscWatch />
          </Text> */}
          {/* <Text color={COLORS.darkPrimary} fontSize="xs" fontWeight="bold">
            {new Intl.DateTimeFormat("es-AR").format(
              new Date(content.date.seconds * 1000),
            )}
          </Text> */}
          {/* <Text color={COLORS.darkSecondary} fontSize="xs" fontWeight="bold">
            <VscPerson />
          </Text> */}
          {/* <Text color={COLORS.darkSecondary} fontSize="xs" fontWeight="bold">
            {content.author}
          </Text> */}
          {/* <Spacer /> */}
          <Text color={COLORS.darkText} fontSize="xl" fontWeight="bold">
            ACTUALIZACIÓN DE PADRÓN
          </Text>
        </HStack>

        <HrLine theBorderColor={COLORS.darkBorderArticleContent} />
        <Text color={COLORS.darkText} fontSize="md" marginY="4">
          Alcance de la gestión:
          <br /> - Cargar sus datos existentes en el padrón.
          <br /> - Modificar sus datos existentes en el padrón.
          <br />
          <br /> A considerar:
          <br /> - No podrá guardar la gestión con campos vacíos. Ejemplo: No hay datos en
          DNI, entonces la gestión no se completa. Todos los campos son requeridos.
          <br /> - Ciertos campos se validan autmaticamente, si no cumple los requisitos
          revise los errores en rojo para hacer las correcciones. Ejemplo: Si el formato
          del número de telefono no es correcto, debe corregirlo según lo que indique el
          mensaje de error para poder guardar la gestión.
        </Text>
        {/* Aquí irá el formulario */}
        <FormControl isRequired>
          <FormLabel htmlFor="email">Dirección de Email</FormLabel>
          <Input id="email" type="email" />
          <FormHelperText marginBottom="4">Ejemplo: odontologo@mail.com</FormHelperText>
          <FormLabel htmlFor="text">Nombres</FormLabel>
          <Input id="name" type="text" />
          <FormHelperText marginBottom="4">Ejemplo: María Laura</FormHelperText>
          <FormLabel htmlFor="text">Apellidos</FormLabel>
          <Input id="lastName" type="text" />
          <FormHelperText marginBottom="4">Ejemplo: Perez</FormHelperText>
          <FormLabel htmlFor="text">DNI</FormLabel>
          <Input id="dni" type="number" />
          <FormHelperText marginBottom="4">
            Ejemplo: 10200300 (sin puntos, solo números)
          </FormHelperText>
          <FormLabel htmlFor="text">Matrícula</FormLabel>
          <Input id="id" type="number" />
          <FormHelperText marginBottom="4">
            Ejemplo: 1234 (sin puntos, solo números)
          </FormHelperText>
        </FormControl>
        <Button colorScheme="teal" marginBottom="4" mt={4} type="submit">
          Guardar datos
        </Button>
        <Box />
        <HrLine theBorderColor={COLORS.darkBorderArticleContent} />
        <Flex marginTop={2}>
          <Text color={COLORS.darkSecondary} fontSize="sm" paddingEnd="1" paddingTop="1">
            <VscArrowLeft />
          </Text>
          <Link to="/">
            <Text color={COLORS.darkSecondary} fontSize="sm">
              Volver al home
            </Text>
          </Link>
          <Spacer />
        </Flex>
      </Box>
    </div>
  );
};

export default Padron;
