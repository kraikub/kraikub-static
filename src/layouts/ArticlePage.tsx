import { Box, Container, Divider, Typography, useTheme } from "@mui/material";
import { minHeight } from "@mui/system";
import Head from "next/head";
import { FC } from "react";
import { Md } from "../libs/react-markdown";
import { Footer } from "./Footer";
import { StaticNavbar } from "./StaticNavbar";

interface ArticlePageProps {
  content: string;
  metadata: ArticleMetadata;
}

export const ArticlePage: FC<ArticlePageProps> = (props) => {
  const theme = useTheme()
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{props.metadata.title} - Kraikub</title>
        <meta name="description" content={props.metadata.description} />
      </Head>
      <StaticNavbar />
      <Box
        sx={{
          position: {
            xs: "relative",
            sm: "relative",
            md: "sticky",
          },
          top: 0,
          pt: 5,
          pb: 3,
          backgroundColor: theme.palette.background.default,
          boxShadow: "0 10px 10px #00000010"
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} letterSpacing={-1}>
            {props.metadata.title}
          </Typography>
          <Typography
            sx={{
              my: 1,
            }}
          >
            By {props.metadata.author}
          </Typography>
        </Container>
      </Box>

      <Container
        maxWidth="md"
        sx={{
          pt: "50px",
          pb: "120px",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            py: "80px",
          }}
        >
          <Md content={props.content} />
        </Box>
      </Container>
      <Footer />
    </>
  );
};
