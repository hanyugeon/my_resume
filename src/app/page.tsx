import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex">
      <Button label="button" url="https://github.com/hanyugeon" />
      <Button label="button" icon="github" url="https://github.com/hanyugeon" />
      <Button label="button" icon="link" url="https://github.com/hanyugeon" />
      <Button label="button" icon="web" url="https://github.com/hanyugeon" />
    </main>
  );
}
