import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Head from "next/head";
import { FC } from "react";
import { Md } from "../libs/react-markdown";
import ArticleSuggestion from "./ArticleSuggestion";
import { Footer } from "./Footer";
import { StaticNavbar } from "./StaticNavbar";

interface ArticlePageProps {
  content: string;
  metadata: ArticleMetadata;
}

export const articlePageConfig = {
  navbarHeight: "60px",
  topicSideBar: "300px",
};

export const ArticlePage: FC<ArticlePageProps> = (props) => {
  const theme = useTheme();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{props.metadata.title} - Kraikub</title>
        <meta name="description" content={props.metadata.description} />
      </Head>
      <Box
        sx={{
          position: "fixed",
          backgroundColor: theme.palette.background.default + "b0",
          backdropFilter: "blur(20px)",
          top: 0,
          left: 0,
          right: 0,
          height: articlePageConfig.navbarHeight,
          borderStyle: "solid",
          borderWidth: "0 0 1px 0",
          borderColor: theme.palette.divider,
        }}
      >
        <Container
          maxWidth="xl"
        >

          <Grid container>
            <Grid item xs={12} sm={12} md={8}></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{
                display: {},
              }}
            >
              <ArticleSuggestion />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{
        position: "fixed",
        backgroundColor: theme.palette.background.default + "b0",
        backdropFilter: "blur(20px)",
        top: articlePageConfig.navbarHeight,
        bottom: 0,
        right: articlePageConfig.topicSideBar,
        borderStyle: "solid",
        borderWidth: "0 0 0 1px",
        borderColor: theme.palette.divider,
      }}></Box>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <Md content={props.content} />
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};


/* <Typography variant="h6" fontWeight={500} letterSpacing={-1}>
              {props.metadata.title}
            </Typography>
            <Typography
              textTransform="uppercase"
              sx={{
                fontSize: 12,
                fontWeight: 600,
                opacity: 0.6,
              }}
            >
              By {props.metadata.author}
            </Typography> */