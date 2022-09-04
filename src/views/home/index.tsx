import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  VStack,
  Text,
  HStack,
  Image,
  ButtonGroup,
  Flex,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import bg from "../../../public/bg-2.png";
import bgx from "../../../public/bg-1.png";
import dataProtection from "../../../public/data-protection.png";
import anonymous from "../../../public/anonymous.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

const codeString = `const myapp = createInstance({
  clientId: "<clientId>",
  secret: "<secret>"
});
signin(myapp, 0, (access, refresh) => {
  console.log("signed in");
});`;

const HomePage: FC = () => {
  const headerBaseStyles = {
    fontWeight: 600,
    letterSpacing: "-1px",
  };

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleToSigninPage = () => {
    setLoading(true);
    return router.push("/projects/manager");
  };
  return (
    <Box pb="100px">
      <Box
        minH="100vh"
        bgImage={bg.src}
        bgPosition="center"
        bgSize="cover"
        borderRadius="0 0 28px 28px"
      >
        <Container maxW="container.xl" py="24vh" position="relative" h="full">
          <Box textAlign="center">
            <Heading fontSize="3rem">Build your KU app with kraikub</Heading>
            <Text fontWeight={600} fontSize={26} my={6}>
              Kraikub is a software development platform for KU.
            </Text>
            <ButtonGroup my={8} flexWrap="wrap" gap={4}>
              <Button
                size="lg"
                bg="black"
                color="white"
                rounded="full"
                _hover={{ bg: undefined }}
                onClick={() => router.push("https://app.kraikub.com/projects/manager")}
              >
                Try now
              </Button>
              <Button
                size="lg"
                bg="#00000010"
                color="black"
                rounded="full"
                _hover={{ bg: "#00000030" }}
              >
                How it works ?
              </Button>
            </ButtonGroup>
          </Box>
          <Center mt="180px">
            <Box>
              <Box
                px={10}
                py={3}
                mb={8}
                // bgImage={bgx.src}
                // bgSize="cover"
                // bgPos="center"
                // color="white"
                bg="gray.800"
                color="white"
                boxShadow="10px 10px 0px #FFBA3C, -10px -10px 0px #0A7142"
                rounded={4}
                fontSize={18}
                fontWeight={600}
                fontFamily="'Roboto Mono', monospace"
              >
                npm install kraikub
              </Box>
              <Text textAlign="center" fontWeight={600} fontSize={16}>
                Proudly made for Developers.
              </Text>
            </Box>
          </Center>
        </Container>
      </Box>
      <Box>
        <Container maxW="container.lg" py="100px">
          <Heading
            {...headerBaseStyles}
            size="lg"
            textAlign="center"
            fontWeight={600}
          >
            Key Features
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} my={16} gap={6}>
            <VStack spacing={16} boxShadow="0 0 10px #00000020" px={6} py={8} rounded={10}>
              <VStack>
                <Heading {...headerBaseStyles} size="md">
                  Users Authentication
                </Heading>
              </VStack>
              <Box h="80px" w="100%">
                <Center
                  bg="katrade.main"
                  h="50px"
                  rounded={6}
                  color="white"
                  fontWeight={500}
                >
                  Sign in with KU
                </Center>
              </Box>
              <Box color="#00000090" maxW={300} fontWeight={500}>
                <Box mb={4}>
                  <Badge colorScheme="green" rounded={6}>
                    Available
                  </Badge>
                </Box>
                We provide authentication service that help developers to
                identify their users identity with Kasetsart University.
              </Box>
            </VStack>
            <VStack
              spacing={16}
              boxShadow="0 0 10px #00000020"
              px={6}
              py={8}
              rounded={10}
              position="relative"
            >
              <Heading {...headerBaseStyles} size="md">
                Students API
              </Heading>
              <Box h="80px">
                <Image src={dataProtection.src} alt="data-icon" h="60px" />
              </Box>
              <Box color="#00000090" maxW={300} fontWeight={500}>
                <Box mb={4}>
                  <Badge colorScheme="orange" rounded={6}>
                    Coming Soon
                  </Badge>
                </Box>
                Students API is an interface which help developers to request
                student’s data from Kasetsart API easily. Students API{" "}
                <Box as="span" color="katrade.main" fontWeight={700}>
                  protect your sensitive data, personal data
                </Box>{" "}
                and let you customize how apps can access your personal data.
              </Box>
            </VStack>
            <VStack spacing={16} boxShadow="0 0 10px #00000020" px={6} py={8} rounded={10}>
              <Heading {...headerBaseStyles} size="md">
                Anonymous Sign in
              </Heading>
              <Box h="80px">
                <Image src={anonymous.src} alt="data-icon" h="60px" />
              </Box>
              <Box color="#00000090" maxW={300} fontWeight={500}>
                <Box mb={4}>
                  <Badge colorScheme="orange" rounded={6}>
                    Coming Soon
                  </Badge>
                </Box>
                Sign in to any app on Kraikub{" "}
                <Box as="span" color="katrade.main" fontWeight={700}>
                  with out revealing any of your personal data
                </Box>
                {". "}
                Apps will only know that you are Kasetsart University student,
                but {"won't"} know who you are.
              </Box>
            </VStack>
          </SimpleGrid>

          <Box my="100px">
            <Heading>Sign in with less than 10 lines of code.</Heading>
            <Box my="40px">
              <SyntaxHighlighter
                language="javascript"
                style={materialLight}
                showLineNumbers
              >
                {codeString}
              </SyntaxHighlighter>
              <ButtonGroup my="20px" gap={3} flexWrap="wrap">
                <Button
                  size="lg"
                  rounded="full"
                  bg="black"
                  _hover={{ bg: undefined }}
                  color="white"
                  w={["100%", "auto", "auto"]}
                >
                  Start now
                </Button>
                <a href="https://demo.kraikub.com">
                  <Button size="lg" rounded="full" w={["full", "auto", "auto"]}>
                    Demo
                  </Button>
                </a>
                <a href="https://docs.kraikub.com">
                  <Button size="lg" rounded="full" w={["full", "auto", "auto"]}>
                    Documentation
                  </Button>
                </a>
              </ButtonGroup>
            </Box>
          </Box>

          <VStack my="200px" gap={6}>
            <Heading {...headerBaseStyles} textAlign="center">
              Unlock your{" "}
              <Box as="span" color="katrade.main" fontWeight={700}>
                ideas
              </Box>
            </Heading>
            <Text fontSize={20} fontWeight={500} maxW={560} textAlign="center">
              Kraikub let you create applications a lot easier. Sign up now, and
              make KU better.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};
export default HomePage;
