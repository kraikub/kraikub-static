import { NextPage } from "next";
import { GetStaticProps } from "next";
import { loader } from "../../src/servers/articles/loader";
import metadata from "../../articles/feature-organization/metadata.json";
import { ArticlePage } from "../../src/layouts/ArticlePage";

interface PageProps {
  metadata: ArticleMetadata;
  content: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const content = (await loader("feature-organization")).toString();
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
