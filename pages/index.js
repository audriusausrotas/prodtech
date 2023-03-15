import HomeMain from "../Components/Home/HomeMain";

export default function Home({}) {
  return <HomeMain />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}
