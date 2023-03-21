import Button from "../Components/Button";

export default function ServicesText({ title }) {
  return (
    <div className="flex flex-col max-w-xl gap-12">
      <div className="text-4xl font-semibold">{title}</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia
        eget nisi a suscipit. Duis eu sem faucibus, facilisis arcu non, interdum
        mauris. Morbi at urna quis erat convallis cursus.
      </div>
      <Button />
    </div>
  );
}
