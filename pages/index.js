import HomeMain from "../Components/Home/HomeMain";

export default function Home({}) {
  return (
    <div>
      <HomeMain />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {},
  };
}
