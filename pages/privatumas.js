import Footer from "../Components/Layout/Footer/Footer";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import Head from "next/head";

export default function privacy({ footer, page }) {
  return (
    <>
      <Head>
        {/* <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} /> */}
      </Head>
      <Footer data={footer.data} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  locale === "en" && (locale = "en-eu");
  const client = prismic.createClient(sm.apiEndpoint);
  // const page = await client.getByUID("privacy", "privacy", { lang: locale });
  const footer = await client.getByUID("footer", "footer", { lang: locale });

  return {
    props: {
      // page,
      footer,
    },
  };
}
