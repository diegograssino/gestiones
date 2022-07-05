import React, {useState} from "react";
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

  console.log(data);

  function handleSubmit(e) {
    e.preventDefault();
    firestore
      .collection("padron")
      .add(data)
      .then((res) => toast.success(`Guardado correctamente! ID:${res.id}`))
      .then(setData({}));
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
          <FormHelperText marginBottom="4">Ejemplo: odontologo@mail.com</FormHelperText>
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
          <FormHelperText marginBottom="4">Ejemplo: María Laura</FormHelperText>
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
          <FormHelperText marginBottom="4">Ejemplo: Perez</FormHelperText>
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
          />
          <FormHelperText marginBottom="4">
            Ejemplo: 10200300 (sin puntos, solo números)
          </FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ejemplo: 20102003002 (sin puntos ni guiones, solo números)
          </FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ejemplo: 1234 (sin puntos, solo números)
          </FormHelperText>
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
          <FormHelperText marginBottom="4">
            M:Masculino, F:Femenino, O:Otro
          </FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ejemplo: Calle 123 Piso 1 Departamento 2
          </FormHelperText>
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
          <FormHelperText marginBottom="4">Ejemplo: juan@mail.com</FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ejemplo: 38141231234 (no debe ingresar el 0)
          </FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ingrese S si cobra con recibo de sueldo, N si no lo está.
          </FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ingrese S si es monotributista o responsable inscripto, N si no lo es.
          </FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ingrese S si tiene un consultorio, N si no.
          </FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ejemplo: Calle 123 Piso 1 Departamento 2
          </FormHelperText>
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
          <FormHelperText marginBottom="4">Ejemplo: Tu Odontólogo</FormHelperText>
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
          <FormHelperText marginBottom="4">Ejemplo: 1234A</FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ejemplo: Calle 123 Piso 1 Departamento 2
          </FormHelperText>
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
          <FormHelperText marginBottom="4">Ejemplo: Tu Odontólogo</FormHelperText>
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
          <FormHelperText marginBottom="4">Ejemplo: 1234A</FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ejemplo: 38141231234 (no debe ingresar el 0)
          </FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ejemplo: 38141231234 (no debe ingresar el 0 ni el 15)
          </FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ejemplo: http://facebook.com/odontologo
          </FormHelperText>
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
          <FormHelperText marginBottom="4">Ejemplo: @odontologo</FormHelperText>
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
          <FormHelperText marginBottom="4">Ejemplo: @odontologo</FormHelperText>
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
          <FormHelperText marginBottom="4">
            Ejemplo: http://www.odontologo.com.ar
          </FormHelperText>
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
          <FormHelperText marginBottom="4">Ejemplo: odontologo</FormHelperText>
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
