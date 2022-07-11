import React, {useState} from "react";
import {
  Box,
  Flex,
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
  Container,
} from "@chakra-ui/react";
import toast, {Toaster} from "react-hot-toast";
import {VscWatch, VscPerson, VscArrowLeft} from "react-icons/vsc";
import {Link} from "react-router-dom";
import validator from "validator";

import Badges from "../components/Badges";
import COLORS from "../constants/colors";
import HrLine from "../components/HrLine";
import {firestore} from "../database/firebase";

const Padron = () => {
  const [data, setData] = useState({
    email: "",
    nombres: "",
    apellidos: "",
    dni: "",
    cuit: "",
    matricula: "",
    sexo: "",
    direccion: "",
    emailPersonal: "",
    telFijoPersonal: "",
    relacionDeDependencia: "",
    esAutonomo: "",
    tieneConsultorio: "",
    dirConsultorio1: "",
    fantasiaConsultorio1: "",
    habilitacionConsultorio1: "",
    dirConsultorio2: "",
    fantasiaConsultorio2: "",
    habilitacionConsultorio2: "",
    telFijoLaboral: "",
    telCelularLaboral: "",
    facebook: "",
    instagram: "",
    twitter: "",
    web: "",
    tiktok: "",
  });

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorNombres, setErrorNombres] = useState(false);
  const [errorApellidos, setErrorApellidos] = useState(false);
  const [errorDni, setErrorDni] = useState(false);
  const [errorCuit, setErrorCuit] = useState(false);
  const [errorMatricula, setErrorMatricula] = useState(false);
  const [errorSexo, setErrorSexo] = useState(false);
  const [errorDireccion, setErrorDireccion] = useState(false);
  const [errorEmailPersonal, setErrorEmailPersonal] = useState(false);
  const [errorTelFijoPersonal, setErrorTelFijoPersonal] = useState(false);
  const [errorRelacionDeDependencia, setErrorRelacionDeDependencia] = useState(false);
  const [errorEsAutonomo, setErrorEsAutonomo] = useState(false);
  const [errorDirConsultorio1, setErrorDirConsultorio1] = useState(false);
  const [errorFantasiaConsultrio1, setErrorFantasiaConsultrio1] = useState(false);
  const [errorHabilitacionConsultrio1, setErrorHabilitacionConsultrio1] = useState(false);
  const [errorDirConsultorio2, setErrorDirConsultorio2] = useState(false);
  const [errorFantasiaConsultorio2, setErrorFantasiaConsultrio2] = useState(false);
  const [errorHabilitacionConsultrio2, setErrorHabilitacionConsultrio2] = useState(false);
  const [errorTelFijoLaboral, setErrorTelFijoLaboral] = useState(false);
  const [errorTelCelularLaboral, setErrorTelCelularLaboral] = useState(false);
  const [errorFacebook, setErrorFacebook] = useState(false);
  const [errorInstagram, setErrorInstagram] = useState(false);
  const [errorTwitter, setErrorTwitter] = useState(false);
  const [errorWeb, setErrorWeb] = useState(false);
  const [errorTikTok, setErrorTikTok] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let validationOk = true;

    if (!validator.isEmail(data.email)) {
      validationOk = false;
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }

    if (!validator.isAlpha(data.nombres)) {
      validationOk = false;
      setErrorNombres(true);
    } else {
      setErrorNombres(false);
    }
    if (!validator.isAlpha(data.apellidos)) {
      validationOk = false;
      setErrorApellidos(true);
    } else {
      setErrorApellidos(false);
    }
    if (!validator.isNumeric(data.dni)) {
      validationOk = false;
      setErrorDni(true);
    } else {
      setErrorDni(false);
    }
    if (!validator.isNumeric(data.cuit)) {
      validationOk = false;
      setErrorCuit(true);
    } else {
      setErrorCuit(false);
    }
    if (!validator.isNumeric(data.matricula)) {
      validationOk = false;
      setErrorMatricula(true);
    } else {
      setErrorMatricula(false);
    }
    if (!validator.isAlpha(data.sexo)) {
      validationOk = false;
      setErrorSexo(true);
    } else {
      setErrorSexo(false);
    }
    if (validator.isEmpty(data.direccion)) {
      validationOk = false;
      setErrorDireccion(true);
    } else {
      setErrorDireccion(false);
    }
    if (!validator.isEmail(data.emailPersonal)) {
      validationOk = false;
      setErrorEmailPersonal(true);
    } else {
      setErrorEmailPersonal(false);
    }
    if (!validator.isNumeric(data.telFijoPersonal)) {
      validationOk = false;
      setErrorTelFijoPersonal(true);
    } else {
      setErrorTelFijoPersonal(false);
    }
    if (!validator.isAlpha(data.esAutonomo)) {
      validationOk = false;
      setErrorEsAutonomo(true);
    } else {
      setErrorEsAutonomo(false);
    }
    if (validator.isEmpty(data.dirConsultorio1)) {
      validationOk = false;
      setErrorDirConsultorio1(true);
    } else {
      setErrorDirConsultorio1(false);
    }
    if (validator.isEmpty(data.fantasiaConsultorio1)) {
      validationOk = false;
      setErrorFantasiaConsultrio1(true);
    } else {
      setErrorFantasiaConsultrio1(false);
    }
    if (!validator.isAlphanumeric(data.habilitacionConsultorio1)) {
      validationOk = false;
      setErrorHabilitacionConsultrio1(true);
    } else {
      setErrorHabilitacionConsultrio1(false);
    }

    if (validator.isEmpty(data.dirConsultorio2)) {
      validationOk = false;
      setErrorDirConsultorio2(true);
    } else {
      setErrorDirConsultorio2(false);
    }
    if (validator.isEmpty(data.fantasiaConsultorio2)) {
      validationOk = false;
      setErrorFantasiaConsultrio2(true);
    } else {
      setErrorFantasiaConsultrio2(false);
    }
    if (!validator.isAlphanumeric(data.habilitacionConsultorio2)) {
      validationOk = false;
      setErrorHabilitacionConsultrio2(true);
    } else {
      setErrorHabilitacionConsultrio2(false);
    }
    if (!validator.isNumeric(data.telFijoLaboral)) {
      validationOk = false;
      setErrorTelFijoLaboral(true);
    } else {
      setErrorTelFijoLaboral(false);
    }
    if (!validator.isNumeric(data.telCelularLaboral)) {
      validationOk = false;
      setErrorTelCelularLaboral(true);
    } else {
      setErrorTelCelularLaboral(false);
    }
    if (!validator.isAlphanumeric(data.facebook)) {
      validationOk = false;
      setErrorFacebook(true);
    } else {
      setErrorFacebook(false);
    }
    if (!validator.isAlphanumeric(data.instagram)) {
      validationOk = false;
      setErrorInstagram(true);
    } else {
      setErrorInstagram(false);
    }
    if (!validator.isAlphanumeric(data.twitter)) {
      validationOk = false;
      setErrorTwitter(true);
    } else {
      setErrorTwitter(false);
    }
    if (!validator.isAlphanumeric(data.web)) {
      validationOk = false;
      setErrorWeb(true);
    } else {
      setErrorWeb(false);
    }
    if (!validator.isAlphanumeric(data.tiktok)) {
      validationOk = false;
      setErrorTikTok(true);
    } else {
      setErrorTikTok(false);
    }

    if (validationOk) {
      firestore
        .collection("padron")
        .add(data)
        .then((res) => toast.success(`Guardado correctamente! ID:${res.id}`))
        .then(setData({}));
    }
  }

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
        <HStack paddingBottom={2} spacing="0">
          <Text color={COLORS.darkText} fontSize="xl" fontWeight="bold">
            ACTUALIZACIÓN DE PADRÓN
          </Text>
        </HStack>

        <HrLine theBorderColor={COLORS.darkBorderArticleContent} />
        <Text color={COLORS.darkText} fontSize="md" marginY="4">
          Alcance de la gestión:
          <br /> - Cargar sus datos actualizados en el padrón.
          <br />
          <br /> A considerar:
          <br /> - No podrá guardar la gestión con campos vacíos. Ejemplo: No hay datos en
          DNI, entonces la gestión no se completa. Todos los campos son requeridos.
          <br /> - Ciertos campos se validan autmaticamente, si no cumple los requisitos
          revise los mensajes de error para hacer las correcciones. Ejemplo: Si el formato
          del número de telefono no es correcto, debe corregirlo según lo que indique el
          mensaje de error para poder guardar la gestión.
        </Text>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Dirección de Email</FormLabel>
          <Input
            id="email"
            type="email"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                email: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorEmail && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: odontologo@mail.com</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Nombres</FormLabel>
          <Input
            id="nombre"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                nombres: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorNombres && "Revise el campo"}
            </Text>
            <FormHelperText marginBottom="4">Ejemplo: María Laura</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Apellidos</FormLabel>
          <Input
            id="apellido"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                apellidos: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorApellidos && "Revise el campo"}
            </Text>
            <FormHelperText marginBottom="4">Ejemplo: Perez</FormHelperText>
          </Box>
          <FormLabel htmlFor="number">DNI</FormLabel>
          <Input
            id="dni"
            type="number"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                dni: e.target.value,
              }))
            }
          />{" "}
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorDni && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: 10200300 (sin puntos, solo números)</FormHelperText>
          </Box>
          <FormLabel htmlFor="number">CUIT</FormLabel>
          <Input
            id="cuit"
            type="number"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                cuit: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorCuit && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ejemplo: 20102003002 (sin puntos ni guiones, solo números)
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Matrícula</FormLabel>
          <Input
            id="matricula"
            type="number"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                matricula: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorMatricula && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: 1234 (sin puntos, solo números)</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Sexo</FormLabel>
          <Input
            id="sexo"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                sexo: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorSexo && "Revise el campo"}
            </Text>
            <FormHelperText>M:Masculino, F:Femenino, N:No Binario</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Dirección</FormLabel>
          <Input
            id="direccion"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                direccion: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorDireccion && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: Calle 123 Piso 1 Departamento 2</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Email Particular</FormLabel>
          <Input
            id="emailParticular"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                emailPersonal: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorEmailPersonal && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: juan@mail.com</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Teléfono Fijo Particular</FormLabel>
          <Input
            id="telParticular"
            type="number"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                telFijoPersonal: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorTelFijoPersonal && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: 38141231234 (no debe ingresar el 0)</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">¿Está en relación de dependencia?</FormLabel>
          <Input
            id="relacionDeDependencia"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                relacionDeDependencia: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorRelacionDeDependencia && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ingrese S si cobra con recibo de sueldo, N si no lo está.
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">¿Es autónomo?</FormLabel>
          <Input
            id="esAutonomo"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                esAutonomo: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorEsAutonomo && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ingrese S si es monotributista o responsable inscripto, N si no lo es.
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">¿Tiene consultorio?</FormLabel>
          <Input
            id="tieneConsultorio"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                tieneConsultorio: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <FormHelperText>Ingrese S si tiene un consultorio, N si no.</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Dirección consultorio 1</FormLabel>
          <Input
            id="direccionConsultorio1"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                dirConsultorio1: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorDirConsultorio1 && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: Calle 123 Piso 1 Departamento 2</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Nombre de fantasía consultorio 1</FormLabel>
          <Input
            id="fantasiaConsultorio1"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                fantasiaConsultorio1: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorFantasiaConsultrio1 && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: Tu Odontólogo</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Número de habilitación consultorio 1</FormLabel>
          <Input
            id="habilitaciónConsultorio1"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                habilitacionConsultorio1: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorHabilitacionConsultrio1 && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: 1234A</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Dirección consultorio 2</FormLabel>
          <Input
            id="direccionConsultorio2"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                dirConsultorio2: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorDirConsultorio2 && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: Calle 123 Piso 1 Departamento 2</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Nombre de fantasía consultorio 2</FormLabel>
          <Input
            id="fantasiaConsultorio2"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                fantasiaConsultorio2: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorFantasiaConsultorio2 && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: Tu Odontólogo</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Número de habilitación consultorio 2</FormLabel>
          <Input
            id="habilitaciónConsultorio2"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                habilitacionConsultorio2: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorHabilitacionConsultrio2 && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: 1234A</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Teléfono laboral fijo</FormLabel>
          <Input
            id="telefonoLaboralFijo"
            type="number"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                telFijoLaboral: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorTelFijoLaboral && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: 38141231234 (no debe ingresar el 0)</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Teléfono laboral celular</FormLabel>
          <Input
            id="telefonoLaboralCelular"
            type="number"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                telCelularLaboral: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorTelCelularLaboral && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ejemplo: 38141231234 (no debe ingresar el 0 ni el 15)
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Facebook</FormLabel>
          <Input
            id="facebook"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                facebook: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorFacebook && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: http://facebook.com/odontologo</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Instagram</FormLabel>
          <Input
            id="instagram"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                instagram: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorInstagram && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: @odontologo</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Twitter</FormLabel>
          <Input
            id="twitter"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                twitter: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorTwitter && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: @odontologo</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Página web</FormLabel>
          <Input
            id="web"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                web: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorWeb && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: http://www.odontologo.com.ar</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">TikTok</FormLabel>
          <Input
            id="tiktok"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                tiktok: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorTikTok && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: odontologo</FormHelperText>
          </Box>
        </FormControl>
        <Button
          colorScheme="teal"
          marginBottom="4"
          mt={4}
          type="submit"
          onClick={handleSubmit}
        >
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
