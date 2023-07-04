export default function Home() {
  const ssg = fetch("");

  return (
    <main>
      <article>hello, resume</article>
      <article>
        <p className="text-azure text-[2.8rem] font-bold">font-color</p>
        <p className="text-lavender text-[2.8rem] font-bold">font-color</p>
        <p className="text-mint text-[2.8rem] font-bold">font-color</p>
        <p className="text-white text-[2.8rem] font-bold">font-color</p>
        <p className="text-gray text-[2.8rem] font-bold">font-color</p>
        <p className="text-black text-[2.8rem] font-bold">font-color</p>
      </article>
      <article>
        <p className="text-[1.4rem] font-medium">font-size</p>
        <p className="text-[1.6rem] font-medium">font-size</p>
        <p className="text-[2.1rem] font-semibold">font-size</p>
        <p className="text-[2.8rem] font-bold">font-size</p>
      </article>
      <article>
        <div className="max-w-[20rem] max-h-[20rem] bg-azure p-[0.2rem]">
          padding-size
        </div>
        <div className="max-w-[20rem] max-h-[20rem] bg-azure p-[0.4rem]">
          padding-size
        </div>
        <div className="max-w-[20rem] max-h-[20rem] bg-azure p-[0.8rem]">
          padding-size
        </div>
        <div className="max-w-[20rem] max-h-[20rem] bg-azure p-[1.0rem]">
          padding-size
        </div>
        <div className="max-w-[20rem] max-h-[20rem] bg-azure p-[1.6rem]">
          padding-size
        </div>
        <div className="max-w-[20rem] max-h-[20rem] bg-azure p-[2.8rem]">
          padding-size
        </div>
        <div className="max-w-[20rem] max-h-[20rem] bg-azure p-[4.0rem]">
          padding-size
        </div>
      </article>
    </main>
  );
}
