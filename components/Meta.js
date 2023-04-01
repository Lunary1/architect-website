import Head from "next/head";

const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>Architect Paul Kindt</title>
    </Head>
  );
};

Meta.defaultProps = {
  keywords: "architect, oudenaarde, maarkedal, vlaamse ardennen",
  description:
    "Op zoek naar een Architect voor uw project? Paul Kindt is een specialist in het bouwen van residentiële woningen en heeft meerdere grote projecten in de industriebouw op zijn naam staan.",
};

export default Meta;
