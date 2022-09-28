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
import bg from "../../../public/bg-8.png";
import dataProtection from "../../../public/data-protection.png";
import anonymous from "../../../public/anonymous.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ArrowForwardIcon } from "@chakra-ui/icons";

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
        <Container
          maxW="container.xl"
          py="14vh"
          position="relative"
          h="full"
          color="white"
        >
          <Box textAlign="start">
            <Heading fontSize="3rem">
              แพลทฟอร์มสำหรับพัฒนาแอปพลิเคชันแห่งแรกใน KU
            </Heading>
            <Text fontWeight={500} fontSize={20} my={6} maxW={800}>
              Kraikub (ใครคับ) คือแพลทฟอร์มที่ให้บริการด้านระบบยืนยันตัวตน และ
              ข้อมูลต่างๆ สำหรับ developers ในมหาวิทยาลัยเกษตรศาสตร์
            </Text>
            <ButtonGroup my={8} flexWrap="wrap" gap={4}>
              <Button
                size="lg"
                h="60px"
                bg="white"
                color="black"
                _hover={{ bg: undefined }}
                onClick={() =>
                  router.push("https://app.kraikub.com/projects/manager")
                }
                gap={2}
              >
                ทดลองใช้ <ArrowForwardIcon />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                color="white"
                _hover={{ bg: "#ffffff30" }}
                h="60px"
              >
                Kraikub คืออะไร?
              </Button>
            </ButtonGroup>
          </Box>
          <Center mt="180px">
            <Box>
              <Box
                px={10}
                py={3}
                mb={8}
                bg="gray.700"
                color="white"
                rounded={4}
                fontSize={18}
                fontWeight={500}
                fontFamily="'Roboto Mono', monospace"
              >
                npm i @kraikub/sdk --save
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
            <VStack
              spacing={16}
              boxShadow="0 0 10px #00000020"
              px={6}
              py={8}
              rounded={10}
            >
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
                เรามีบริการยืนยันตัวตนของผู้ใช้งานแอปพลิเคชันของคุณไว้ว่าจะเป็นนิสิตหรือบุคคลากรให้มหาวิทยาลัยเกษตรศาสตร์
                ช่วยให้คุณสามารถระบุตัวตนของผู้ที่กำลังใช้งานแอปพลิเคชันของคุณได้อย่างง่ายดาย
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
                StudentAPI
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
                StudentAPI คือ API
                สาธารณะที่เปิดโอกาสให้นิสิตให้มหาวิทยาลัยเกษตรศาสตร์สามารถเข้าถึงแหล่งข้อมูลที่เป็นประโยชน์เพื่อนำไปต่อยอดเป็นสิ่งต่างๆได้
                <Box as="span" color="katrade.main" fontWeight={700}>
                  ฟรี
                </Box>{" "}
              </Box>
            </VStack>
            <VStack
              spacing={16}
              boxShadow="0 0 10px #00000020"
              px={6}
              py={8}
              rounded={10}
            >
              <Heading {...headerBaseStyles} size="md">
                Anonymous Sign in
              </Heading>
              <Box h="80px">
                <Image src={anonymous.src} alt="data-icon" h="60px" />
              </Box>
              <Box color="#00000090" maxW={300} fontWeight={500}>
                <Box mb={4}>
                  <Badge colorScheme="green" rounded={6}>
                    Available
                  </Badge>
                </Box>
                เข้าสู่ระบบด้วยโหมดไร้ตัวตน
                จะไม่มีการแชร์ข้อมูลส่วนบุคคลระหว่างผู้ใช้งานและแอปพลิเคชั่นที่มีตัวเลือกการเข้าสู่ระบบแบบไร้ตัวตนทั้งสิ้น
                มีเพียง ID
                ที่ของผู้ใช้งานที่ไม่สามารถอ้างอิงข้อมูลส่วนบุคคลของผู้ใช้งานคนนั้นได้
              </Box>
            </VStack>
          </SimpleGrid>

          <Box my="100px">
            <Heading>
              ใช้ Sign in with KU{" "}
              <Box as="span" color="red.400">
                ด้วยโค้ดไม่ถึง{" "}
                <Box as="span" fontSize={55} fontWeight={800}>
                  10
                </Box>{" "}
                บรรทัด
              </Box>
            </Heading>
            <Box my="20px">
              <Text fontSize={16}>
                เรามี Kraikub SDK ที่สามารถลดเวลาการเขียนโค้ดของคุณลงไปได้ถึง
                70%
              </Text>
            </Box>
            <Box my="40px">
              <SyntaxHighlighter
                language="javascript"
                style={materialLight}
                showLineNumbers
              >
                {codeString}
              </SyntaxHighlighter>
              <ButtonGroup
                my="20px"
                gap={[0, 3, 3]}
                spacing={0}
                flexWrap="wrap"
                display={["block", "flex", "flex"]}
              >
                <Button
                  mb={2}
                  size="lg"
                  bg="black"
                  _hover={{ bg: undefined }}
                  color="white"
                  w={["100%", "auto", "auto"]}
                >
                  เริ่มใช้เลย!
                </Button>
                <a href="https://demo.kraikub.com">
                  <Button size="lg" w={["100%", "auto", "auto"]} mb={2}>
                    ตัวอย่างแอปที่ใช้ Kraikub SDK
                  </Button>
                </a>
                <a href="https://docs.kraikub.com">
                  <Button size="lg" w={["100%", "auto", "auto"]} mb={2}>
                    SDK Docs
                  </Button>
                </a>
              </ButtonGroup>
            </Box>
          </Box>

          <VStack my="200px" gap={6}>
            <Heading {...headerBaseStyles} textAlign="center">
              เรามอบพลังวิเศษ{" "}
              <Box as="span" color="katrade.main" fontWeight={700}>
                ให้กับคุณ
              </Box>
            </Heading>
            <Text fontSize={20} fontWeight={500} maxW={560} textAlign="center">
              เราสร้างเครื่องมือที่ดีที่สุด เพื่อให้คุณนำไปสร้างสิ่งที่ดีที่สุด
            </Text>
            <a href="https://app.kraikub.com/projects/manager">
              <Button
                mb={2}
                size="lg"
                bg="black"
                _hover={{ bg: undefined }}
                color="white"
                w={["100%", "auto", "auto"]}
              >
                เริ่มใช้เลย!
              </Button>
            </a>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};
export default HomePage;
