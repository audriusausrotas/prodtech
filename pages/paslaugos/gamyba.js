import ProductionMain from "@/Components/Components/Services/Production/ProductionMain";
import * as prismic from "@prismicio/client";
import sm from "../../sm.json";
import Footer from "@/Components/Components/Layout/Footer/Footer";
import Head from "next/head";

export default function production({ footer, page }) {
  return (
    <>
      <Head>
        {/* <title>{page.data.meta_title}</title>
        <meta name="description" content={page.data.meta_description} /> */}
      </Head>
      <ProductionMain />
      <Footer data={footer.data} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  locale === "en" && (locale = "en-eu");
  const client = prismic.createClient(sm.apiEndpoint);
  // const page = await client.getByUID("production", "production", { lang: locale });
  const footer = await client.getByUID("footer", "footer", { lang: locale });

  return {
    props: {
      // page,
      footer,
    },
  };
}
