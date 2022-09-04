import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ArticleTemplate } from "../src/layouts/ArticleTemplate";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
interface CardProps {
  title: string;
  description: string;
  price: number | "free";
}

const Card: FC<CardProps> = ({ title, description, price }) => {
  return (
    <Box
      boxShadow="0 10px 10px #00000016"
      rounded={4}
      overflow="hidden"
      w="100%"
      maxW="380px"
    >
      <Box
        minH="20px"
        bg="linear-gradient(135deg, rgba(94,60,255,1) 0%, rgba(10,113,66,1) 48%)"
      ></Box>
      <Box px={8} py={10}>
        <Heading size="lg" mb={4} color="katrade.main">
          {title}
        </Heading>
        <Text opacity={0.6} mb={8}>
          {description}
        </Text>
        <Flex justifyContent="end">
          <Heading size="md">
            {price === "free" ? "FREE" : `THB ${price}`}
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};

const Pricing: FC = () => {
  return (
    <ArticleTemplate title="ราคาและการใช้งาน kraikub">
      <Heading size="md" mb={5}>
        โปรดอ่าน
      </Heading>
      <Text fontSize={18} lineHeight={2}>
        โดยทั่วไปแล้ว Kraikub จะมีบริการแบบฟรีให้ใช้สำหรับพัฒนา application
        ที่ต้องการข้อมูลเกี่ยวกับมหาวิทยาลัยเกษตรศาสตร์
        หากคุณต้องการเข้าถึงฟีเจอร์ที่มีความซับซ้อน{" "}
        คถณจำเป็นที่จะต้องสนับสนุนทางผู้จัดทำเล็กๆน้อย (ราคามิตรภาพ)
        เนื่องจากผู้จัดทำนั้นมีค่าใช้จ่าย ที่ต้องใช้กับโปรเจ็ค Kraikub
        เช่นค่าเช่า domain และ cloud ต่างๆ
        ถือซะว่าเป็นค่ากาแฟให้ผู้สร้างละกันนะครับ 😊
      </Text>
      <Box my="60px">
        <Heading size="md" mb={6}>
          การซื้อโควตา application
        </Heading>
        <Flex flexWrap="wrap" gap={4}>
          <Card
            title="3 Apps"
            description="ฟรีสำหรับนิสิตมหาวิทยาลัยเกษตรศาสตร์ทุกคน คุณสามารถสร้าง application ได้ไม่เกิน 3 app"
            price="free"
          />
          <Card
            title="10 Apps"
            description="เพิ่มโคตาของคุณให้คุณสามารถสร้าง application ได้ไม่เกิน 10 app"
            price={199}
          />
          <Card
            title="30 Apps"
            description="เพิ่มโคตาของคุณให้คุณสามารถสร้าง application ได้ไม่เกิน 30 app"
            price={299}
          />
        </Flex>

        <Text textAlign="center" my={6}>
          หมายเหตุ: ซื้อเพียงครั้งเดียวและสามารถใช้งานได้ตลอดไป
        </Text>
      </Box>
      <Box my="40px">
        <Heading size="lg" mb={6}>
          หากสนใจ โปรดติดต่อ
        </Heading>
        <Flex alignItems="center" gap={3} fontWeight={600} my={2}>
          <BsInstagram size="20px" /> @beamuuuu
        </Flex>
        <Flex alignItems="center" gap={3} fontWeight={600} my={2}>
          <MdOutlineEmail size="20px" /> nutchanon.chant@ku.th หรือ
          beamuonly@gmail.com
        </Flex>
        <Flex alignItems="center" gap={3} fontWeight={600} my={2}>
          <BsGithub size="20px" /> nutchanonc
        </Flex>
      </Box>
    </ArticleTemplate>
  );
};
export default Pricing;
