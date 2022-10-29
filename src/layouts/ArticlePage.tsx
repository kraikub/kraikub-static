import { Box, Container, Divider, Typography } from "@mui/material";
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
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{props.metadata.title}</title>
        <meta name="description" content={props.metadata.description} />
      </Head>
      <StaticNavbar />
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
            position: "sticky",
            top: 0,
            pt: 5,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            {props.metadata.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              my: 1,
            }}
          >
            By {props.metadata.author}
          </Typography>
          <Divider
            sx={{
              mt: 3,
            }}
          />
        </Box>
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
