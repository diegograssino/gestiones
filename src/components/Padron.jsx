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
    universidad: "",
    fechaGraduacion: "",
    especialidad: "",
    organismoEspecialidad: "",
    fechaRevalidaEspecialidad: "",
    empresaSeguro: "",
    sexo: "",
    direccion: "",
    emailPersonal: "",
    telPersonal: "",
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
  const [errorUniversidad, setErrorUniversidad] = useState(false);
  const [errorFechaGraduacion, setErrorFechaGraduacion] = useState(false);
  const [errorEspecialidad, setErrorEspecialidad] = useState(false);
  const [errorOrganismoEspecialidad, setErrorOrganismoEspecialidad] = useState(false);
  const [errorFechaRevalidaEspecialidad, setErrorFechaRevalidaEspecialidad] =
    useState(false);
  const [errorEmpresaSeguro, setErrorEmpresaSeguro] = useState(false);
  const [errorSexo, setErrorSexo] = useState(false);
  const [errorDireccion, setErrorDireccion] = useState(false);
  const [errorEmailPersonal, setErrorEmailPersonal] = useState(false);
  const [errorTelPersonal, setErrorTelPersonal] = useState(false);
  const [errorRelacionDeDependencia, setErrorRelacionDeDependencia] = useState(false);
  const [errorEsAutonomo, setErrorEsAutonomo] = useState(false);
  const [errorTieneConsultorio, setErrorTieneConsultorio] = useState(false);
  const [errorDirConsultorio1, setErrorDirConsultorio1] = useState(false);
  const [errorFantasiaConsultorio1, setErrorFantasiaConsultorio1] = useState(false);
  const [errorHabilitacionConsultorio1, setErrorHabilitacionConsultorio1] =
    useState(false);
  const [errorDirConsultorio2, setErrorDirConsultorio2] = useState(false);
  const [errorFantasiaConsultorio2, setErrorFantasiaConsultorio2] = useState(false);
  const [errorHabilitacionConsultorio2, setErrorHabilitacionConsultorio2] =
    useState(false);
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

    if (validator.isEmpty(data.nombres)) {
      validationOk = false;
      setErrorNombres(true);
    } else {
      setErrorNombres(false);
    }
    if (validator.isEmpty(data.apellidos)) {
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
    if (validator.isEmpty(data.cuit)) {
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
    if (validator.isEmpty(data.universidad)) {
      validationOk = false;
      setErrorUniversidad(true);
    } else {
      setErrorUniversidad(false);
    }
    if (validator.isEmpty(data.fechaGraduacion)) {
      validationOk = false;
      setErrorFechaGraduacion(true);
    } else {
      setErrorFechaGraduacion(false);
    }
    if (validator.isEmpty(data.especialidad)) {
      validationOk = false;
      setErrorEspecialidad(true);
    } else {
      setErrorEspecialidad(false);
    }
    if (validator.isEmpty(data.organismoEspecialidad)) {
      validationOk = false;
      setErrorOrganismoEspecialidad(true);
    } else {
      setErrorOrganismoEspecialidad(false);
    }
    if (validator.isEmpty(data.fechaRevalidaEspecialidad)) {
      validationOk = false;
      setErrorFechaRevalidaEspecialidad(true);
    } else {
      setErrorFechaRevalidaEspecialidad(false);
    }
    if (validator.isEmpty(data.empresaSeguro)) {
      validationOk = false;
      setErrorEmpresaSeguro(true);
    } else {
      setErrorEmpresaSeguro(false);
    }
    if (!validator.isIn(data.sexo, ["M", "F", "N", "m", "f", "n"])) {
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
    if (validator.isEmpty(data.telPersonal)) {
      validationOk = false;
      setErrorTelPersonal(true);
    } else {
      setErrorTelPersonal(false);
    }
    if (!validator.isIn(data.relacionDeDependencia, ["S", "N", "s", "n"])) {
      validationOk = false;
      setErrorRelacionDeDependencia(true);
    } else {
      setErrorRelacionDeDependencia(false);
    }
    if (!validator.isIn(data.esAutonomo, ["S", "N", "s", "n"])) {
      validationOk = false;
      setErrorEsAutonomo(true);
    } else {
      setErrorEsAutonomo(false);
    }
    if (!validator.isIn(data.tieneConsultorio, ["S", "N", "s", "n"])) {
      validationOk = false;
      setErrorTieneConsultorio(true);
    } else {
      setErrorTieneConsultorio(false);
    }
    if (validator.isEmpty(data.dirConsultorio1) && data.tieneConsultorio === "S") {
      validationOk = false;
      setErrorDirConsultorio1(true);
    } else {
      setErrorDirConsultorio1(false);
    }
    if (validator.isEmpty(data.fantasiaConsultorio1) && data.tieneConsultorio === "S") {
      validationOk = false;
      setErrorFantasiaConsultorio1(true);
    } else {
      setErrorFantasiaConsultorio1(false);
    }
    if (
      validator.isEmpty(data.habilitacionConsultorio1) &&
      data.tieneConsultorio === "S"
    ) {
      validationOk = false;
      setErrorHabilitacionConsultorio1(true);
    } else {
      setErrorHabilitacionConsultorio1(false);
    }

    if (validator.isEmpty(data.dirConsultorio2) && data.tieneConsultorio === "S") {
      validationOk = false;
      setErrorDirConsultorio2(true);
    } else {
      setErrorDirConsultorio2(false);
    }
    if (validator.isEmpty(data.fantasiaConsultorio2) && data.tieneConsultorio === "S") {
      validationOk = false;
      setErrorFantasiaConsultorio2(true);
    } else {
      setErrorFantasiaConsultorio2(false);
    }
    if (
      validator.isEmpty(data.habilitacionConsultorio2) &&
      data.tieneConsultorio === "S"
    ) {
      validationOk = false;
      setErrorHabilitacionConsultorio2(true);
    } else {
      setErrorHabilitacionConsultorio2(false);
    }
    if (validator.isEmpty(data.telFijoLaboral)) {
      validationOk = false;
      setErrorTelFijoLaboral(true);
    } else {
      setErrorTelFijoLaboral(false);
    }
    if (validator.isEmpty(data.telCelularLaboral)) {
      validationOk = false;
      setErrorTelCelularLaboral(true);
    } else {
      setErrorTelCelularLaboral(false);
    }
    if (validator.isEmpty(data.facebook)) {
      validationOk = false;
      setErrorFacebook(true);
    } else {
      setErrorFacebook(false);
    }
    if (validator.isEmpty(data.instagram)) {
      validationOk = false;
      setErrorInstagram(true);
    } else {
      setErrorInstagram(false);
    }
    if (validator.isEmpty(data.twitter)) {
      validationOk = false;
      setErrorTwitter(true);
    } else {
      setErrorTwitter(false);
    }
    if (validator.isEmpty(data.web)) {
      validationOk = false;
      setErrorWeb(true);
    } else {
      setErrorWeb(false);
    }
    if (validator.isEmpty(data.tiktok)) {
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
        .then(
          setData({
            email: "",
            nombres: "",
            apellidos: "",
            dni: "",
            cuit: "",
            matricula: "",
            sexo: "",
            direccion: "",
            emailPersonal: "",
            telPersonal: "",
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
            universidad: "",
            fechaGraduacion: "",
            especialidad: "",
            organismoEspecialidad: "",
            fechaRevalidaEspecialidad: "",
            empresaSeguro: "",
          }),
        )
        .then(
          setTimeout(() => {
            window.location.replace("https://gestiones.vercel.app");
          }, 3000),
        );
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
          <br /> - Ciertos campos se validan automáticamente, si no cumple los requisitos
          revise los mensajes de error para hacer las correcciones. Ejemplo: Si el formato
          del número de teléfono no es correcto, debe corregirlo según lo que indique el
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
              Ejemplo: 20102003002 (sin puntos ni guiones, solo números). Ingrese un - sí
              el dato es inexistente.
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
          <FormLabel htmlFor="text">Universidad que otorga el título</FormLabel>
          <Input
            id="universidad"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                universidad: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorUniversidad && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: Facultad de odontología de Tucumán.</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Fecha de graduación</FormLabel>
          <Input
            id="fechaGraduacion"
            type="date"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                fechaGraduacion: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorFechaGraduacion && "Revise el campo"}
            </Text>
            <FormHelperText>Ejemplo: 10/10/2010.</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Especialidad</FormLabel>
          <Input
            id="matricula"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                especialidad: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorEspecialidad && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ejemplo: Mi Especialidad. Ingrese un - sí el dato es inexistente.
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Organismo que otorga la especialidad</FormLabel>
          <Input
            id="organismoEspecialidad"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                organismoEspecialidad: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorOrganismoEspecialidad && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ejemplo: Facultad de Odontología de Tucumán Ingrese un - sí el dato es
              inexistente..
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Fecha Revalida Especialidad</FormLabel>
          <Input
            id="fechaRevalidaEspecialidad"
            type="date"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                fechaRevalidaEspecialidad: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorMatricula && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ejemplo: 10/10/2010. Ingrese un - sí el dato es inexistente.
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Empresa Seguro Responsabilidad Civil</FormLabel>
          <Input
            id="empresaSeguro"
            type="text"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                empresaSeguro: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorEmpresaSeguro && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ejemplo: Empresa de seguros. Ingrese un - sí el dato es inexistente.
            </FormHelperText>
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
          <FormLabel htmlFor="text">Celular Particular</FormLabel>
          <Input
            id="telParticular"
            type="number"
            onChange={(e) =>
              setData((currState) => ({
                ...currState,
                telPersonal: e.target.value,
              }))
            }
          />
          <Box marginBottom="4" marginTop="2">
            <Text color="red.500" fontSize="sm">
              {errorTelPersonal && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ejemplo: 38141231234 (no debe ingresar el 0). Ingrese un - sí el dato es
              inexistente.
            </FormHelperText>
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
            <Text color="red.500" fontSize="sm">
              {errorTieneConsultorio && "Revise el campo"}
            </Text>
            <FormHelperText>Ingrese S si tiene un consultorio, N si no.</FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Dirección consultorio 1</FormLabel>
          <Input
            id="direccionConsultorio1"
            isDisabled={data.tieneConsultorio === "S" ? false : true}
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
            <FormHelperText>
              Ejemplo: Calle 123 Piso 1 Departamento 2, solo permite/ debe completarlo si
              declaro tener consultorio. Ingrese un - sí el dato es inexistente.
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Nombre de fantasía consultorio 1</FormLabel>
          <Input
            id="fantasiaConsultorio1"
            isDisabled={data.tieneConsultorio === "S" ? false : true}
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
              {errorFantasiaConsultorio1 && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ejemplo: Tu Odontólogo, solo permite/ debe completarlo si declaro tener
              consultorio. Ingrese un - sí el dato es inexistente.
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Número de habilitación consultorio 1</FormLabel>
          <Input
            id="habilitaciónConsultorio1"
            isDisabled={data.tieneConsultorio === "S" ? false : true}
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
              {errorHabilitacionConsultorio1 && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ejemplo: 1234A, solo permite/ debe completarlo si declaro tener consultorio.
              Ingrese un - sí el dato es inexistente.
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Dirección consultorio 2</FormLabel>
          <Input
            id="direccionConsultorio2"
            isDisabled={data.tieneConsultorio === "S" ? false : true}
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
            <FormHelperText>
              Ejemplo: Calle 123 Piso 1 Departamento 2, solo permite/ debe completarlo si
              declaro tener consultorio. Ingrese un - sí el dato es inexistente.
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">
            Nombre de fantasía consultorio 2, solo permite/ debe completarlo si declaro
            tener consultorio. Ingrese un - sí el dato es inexistente.
          </FormLabel>
          <Input
            id="fantasiaConsultorio2"
            isDisabled={data.tieneConsultorio === "S" ? false : true}
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
            <FormHelperText>
              Ejemplo: Tu Odontólogo, solo permite/ debe completarlo si declaro tener
              consultorio. Ingrese un - sí el dato es inexistente.
            </FormHelperText>
          </Box>
          <FormLabel htmlFor="text">Número de habilitación consultorio 2</FormLabel>
          <Input
            id="habilitaciónConsultorio2"
            isDisabled={data.tieneConsultorio === "S" ? false : true}
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
              {errorHabilitacionConsultorio2 && "Revise el campo"}
            </Text>
            <FormHelperText>
              Ejemplo: 1234A, solo permite/ debe completarlo si declaro tener consultorio.
              Ingrese un - sí el dato es inexistente.
            </FormHelperText>
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
            <FormHelperText>
              Ejemplo: 38141231234 (no debe ingresar el 0). Ingrese un - sí el dato es
              inexistente.
            </FormHelperText>
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
              Ejemplo: 38141231234 (no debe ingresar el 0 ni el 15). Ingrese un - sí el
              dato es inexistente.
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
            <FormHelperText>
              Ejemplo: http://facebook.com/odontologo. Ingrese un - sí el dato es
              inexistente.
            </FormHelperText>
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
            <FormHelperText>
              Ejemplo: @odontologo. Ingrese un - sí el dato es inexistente.
            </FormHelperText>
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
            <FormHelperText>
              Ejemplo: @odontologo. Ingrese un - sí el dato es inexistente.
            </FormHelperText>
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
            <FormHelperText>
              Ejemplo: http://www.odontologo.com.ar. Ingrese un - sí el dato es
              inexistente.
            </FormHelperText>
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
            <FormHelperText>
              Ejemplo: odontologo. Ingrese un - sí el dato es inexistente.
            </FormHelperText>
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
