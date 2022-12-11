import { Divider, Typography } from "@mui/material";
import { FC } from "react";
import ReactMarkdown from "react-markdown";

interface MdProps {
  content: string;
}

export const Md: FC<MdProps> = ({ content }) => {
  return (
    <ReactMarkdown components={{
      h1: (props) => {
        return (
          <Typography variant="h1" className="letter-spacing-1" sx={{
            my: 4,
          }}>
            {props.children}
          </Typography>
        )
      },
      h2: (props) => {
        return (
          <Typography variant="h2" className="letter-spacing-1" sx={{
            my: 4,
          }}>
            {props.children}
          </Typography>
        )
      },
      h3: (props) => {
        return (
          <Typography variant="h3" className="letter-spacing-1" sx={{
            my: 4,
          }}>
            {props.children}
          </Typography>
        )
      },
      h4: (props) => {
        return (
          <Typography variant="h4" sx={{
            my: 4,
          }}>
            {props.children}
          </Typography>
        )
      },
      h5: (props) => {
        return (
          <Typography variant="h5" sx={{
            my: 4,
          }}>
            {props.children}
          </Typography>
        )
      },
      h6: (props) => {
        return (
          <Typography variant="h6" sx={{
            my: 4,
          }}>
            {props.children}
          </Typography>
        )
      },
      p: (props) => {
        return (
          <Typography variant="body1" sx={{
            my: 4,
          }}>
            {props.children}
          </Typography>
        )
      },
      hr: (props) => {
        return (
          <Divider sx={{
            my: 2,
          }}/>
        )
      },
    }}>
      { content }
    </ReactMarkdown>
  )
}