import {Box, Code, Heading, Link, Center, Image, Flex} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import Markdown from "markdown-to-jsx";

import HrLine from "../components/HrLine";
import COLORS from "../constants/colors";

const MdContent = ({mdFile}) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../markdown/${mdFile}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
  const h1 = ({children, ...props}) => (
    <Box paddingBottom="3" paddingTop="7">
      <Heading as="h1" paddingBottom="2" {...props} size="2xl">
        {children}
      </Heading>
      <HrLine />
    </Box>
  );

  const h2 = ({children, ...props}) => (
    <Box paddingBottom="3" paddingTop="7">
      <Heading as="h2" paddingBottom="2" {...props} size="xl">
        {children}
      </Heading>
      <HrLine />
    </Box>
  );

  const h3 = ({children, ...props}) => (
    <Box paddingBottom="3" paddingTop="7">
      <Heading as="h3" {...props} size="md">
        {children}
      </Heading>
    </Box>
  );

  const h4 = ({children, ...props}) => (
    <Box paddingBottom="3" paddingTop="7">
      <Heading as="h4" {...props} size="md">
        {children}
      </Heading>
    </Box>
  );

  const code = ({children, ...props}) => (
    <Code
      backgroundColor={COLORS.darkBackground}
      borderRadius="5px"
      color={COLORS.darkText}
      marginBottom="3"
      marginTop="5"
      overflow="auto"
      padding="5"
      width="100%"
      {...props}
    >
      {children}
    </Code>
  );

  const span = ({children, ...props}) => (
    <Box paddingBottom="3" paddingTop="3">
      <Code
        backgroundColor={COLORS.darkBackground}
        borderRadius="5px"
        color={COLORS.darkText}
        padding="2"
        width="100%"
        {...props}
      >
        {children}
      </Code>
    </Box>
  );

  const div = ({children, ...props}) => (
    <Box paddingBottom="3" paddingTop="3" {...props}>
      {children}
    </Box>
  );

  const p = ({children, ...props}) => (
    <Box paddingBottom="3" paddingTop="3" {...props}>
      {children}
    </Box>
  );

  const a = ({children, ...props}) => (
    <Link color={COLORS.darkPrimary} {...props}>
      {children}
    </Link>
  );

  const img = ({children, ...props}) => <Image maxWidth="66%" {...props} />;

  const ul = ({children, ...props}) => (
    <Box paddingBottom="5" paddingTop="1" {...props}>
      {children}
    </Box>
  );

  const li = ({children, ...props}) => (
    <Box paddingTop="4" {...props}>
      <li>{children}</li>
    </Box>
  );

  return (
    <Box paddingBottom="7">
      <Markdown
        options={{
          overrides: {
            h1: {
              component: h1,
            },
            h2: {
              component: h2,
            },
            h3: {
              component: h3,
            },
            h4: {
              component: h4,
            },
            code: {
              component: code,
            },
            a: {
              component: a,
            },
            span: {
              component: span,
            },
            p: {
              component: p,
            },
            div: {
              component: div,
            },
            img: {
              component: img,
            },
            ul: {
              component: ul,
            },
            li: {
              component: li,
            },
          },
        }}
      >
        {post}
      </Markdown>
    </Box>
  );
};

export default MdContent;
