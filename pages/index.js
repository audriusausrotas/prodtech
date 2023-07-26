import HomeMain from "../Components/Home/HomeMain";
import Head from "next/head";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import Footer from "../Components/Layout/Footer/Footer";

export default function Home({ footer, page }) {
  return (
    <>
      <Head>
        <title>{page.data.seo_title}</title>
        <meta name="description" content={page.data.seo_description} />
        <link rel="canonical" href="https://prodtech.lt/" />
      </Head>
      <HomeMain data={page.data.slices} card={footer.data.contact_card[0]} />
      <Footer data={footer.data} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  locale === "en" && (locale = "en-eu");
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("home", "home", { lang: locale });
  const footer = await client.getByUID("footer", "footer", { lang: locale });

  return {
    props: {
      page,
      footer,
    },
  };
}
