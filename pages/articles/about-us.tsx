import { GetStaticProps, NextPage } from "next";
import { GetServerSideProps } from "next";
import { loader } from "../../src/servers/articles/loader";
import metadata from "../../articles/about-us/metadata.json";
import { ArticlePage } from "../../src/layouts/ArticlePage";

interface PageProps {
  metadata: ArticleMetadata;
  content: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const content = (await loader("about-us")).toString();
  return {
    props: {
      metadata: metadata,
      content: content,
    },
  };
};

const Page: NextPage<PageProps> = (props) => {
  return (
    <>
      <ArticlePage metadata={props.metadata} content={props.content} />
    </>
  );
};

export default Page;
