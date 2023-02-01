import { Image } from "@mui/icons-material";
import { Box, Divider, Link, Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import ReactMarkdown from "react-markdown";

interface MdProps {
  content: string;
}

export const Md: FC<MdProps> = ({ content }) => {
  const theme = useTheme();
  return (
    <ReactMarkdown
      components={{
        h1: (props) => {
          return (
            <Typography
              variant="h1"
              className="letter-spacing-1"
              sx={{
                mt: 10,
                mb: 2,
              }}
            >
              {props.children}
            </Typography>
          );
        },
        h2: (props) => {
          return (
            <Typography
              variant="h2"
              className="letter-spacing-1"
              sx={{
                mt: 10,
                mb: 2,
              }}
            >
              {props.children}
            </Typography>
          );
        },
        h3: (props) => {
          return (
            <Typography
              variant="h3"
              className="letter-spacing-1"
              sx={{
                mt: 10,
                mb: 2,
              }}
            >
              {props.children}
            </Typography>
          );
        },
        h4: (props) => {
          return (
            <Typography
              variant="h4"
              sx={{
                mt: 8,
                mb: 2,
              }}
            >
              {props.children}
            </Typography>
          );
        },
        h5: (props) => {
          return (
            <Typography
              variant="h5"
              sx={{
                mt: 8,
                mb: 2,
              }}
            >
              {props.children}
            </Typography>
          );
        },
        h6: (props) => {
          return (
            <Typography
              variant="h6"
              sx={{
                mt: 8,
                mb: 2,
              }}
            >
              {props.children}
            </Typography>
          );
        },
        p: (props) => {
          return (
            <Box
              sx={{
                mt: 2,
                mb: 4,
              }}
            >
              {props.children}
            </Box>
          );
        },
        code: (props) => {
          return (
            <Typography
              display="inline"
              sx={{
                backgroundColor: "#7d7d7d30",
                padding: "2px 8px",
                borderRadius: "4px",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {props.children}
            </Typography>
          );
        },
        hr: (props) => {
          return (
            <Divider
              sx={{
                my: 2,
              }}
            />
          );
        },
        blockquote: (props) => {
          return (
            <Box
              p={2}
              sx={{
                backgroundColor: "#2e2e2e",
                borderRadius: "12px",
                color: "white"
              }}
            >
              {props.children}
            </Box>
          );
        },
        img: (props) => {
          return (
            <Stack sx={{ width: "100%" }} spacing={2} alignItems="center">
              <img
                src={props.src}
                width="100%"
                style={{ borderRadius: "8px" }}
              />

              <Link
                href={props.src}
                sx={{
                  fontSize: 12,
                }}
              >
                {props.alt || props.src}
              </Link>
            </Stack>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
