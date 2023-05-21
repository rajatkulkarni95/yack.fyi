import { LogoLarge } from "~/svg";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col py-8 bg-gradient-to-bl from-violet-950 via-zinc-950 to-black`}
    >
      <section className="w-3/4 flex flex-col mx-auto">
        <div className="flex items-center justify-between">
          <LogoLarge className="w-24 h-fit text-white" />
        </div>
        <div className="flex items-center justify-between mt-20">
          <div className="flex flex-col justify-start max-w-[640px]">
            <h1 className="text-6xl py-2 tracking-tighter text-transparent font-bold text- bg-clip-text bg-gradient-to-br from-slate-50 to-violet-700">
              Get going faster.
            </h1>
            <p className="mt-4 text-xl text-slate-300">
              Yack is a MacOS app that lets you access ChatGPT right at your
              fingertips. Your favourite AI assistant now lives in your{" "}
              <strong className="border-b border-dotted border-slate-500 pb-0.5">
                menu bar
              </strong>
              .
            </p>
          </div>
          <video className="w-2/5 rounded-lg" autoPlay loop muted>
            <source src="/yack_demo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}
