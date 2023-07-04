import Button from "@/components/Button";

export default function Home() {
  const ssg = fetch("");

  return (
    <main>
      <article>
        <Button
          text="button"
          linkType="github"
          href="https://github.com/hanyugeon"
        />
        <Button
          text="button"
          linkType="link"
          href="https://github.com/hanyugeon"
        />
        <Button
          text="button"
          linkType="web"
          href="https://github.com/hanyugeon"
        />
      </article>
    </main>
  );
}
