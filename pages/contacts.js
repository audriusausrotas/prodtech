import ContactsMain from "../Components/Contacts/ContactsMain";
import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import Footer from "../Components/Layout/Footer/Footer";
import Head from "next/head";

export default function contacts({ footer, page }) {
  return (
    <>
      <Head>
        <title>{page.data.seo_title}</title>
        <meta name="description" content={page.data.seo_description} />
      </Head>
      <ContactsMain data={page.data} />
      <Footer data={footer.data} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  locale === "en" && (locale = "en-eu");
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getByUID("contacts", "contacts", { lang: locale });
  const footer = await client.getByUID("footer", "footer", { lang: locale });
  return {
    props: {
      page,
      footer,
    },
  };
}
