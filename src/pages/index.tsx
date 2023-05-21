import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Capsule from "~/components/Capsule";
import { LogoLarge, RightArrow } from "~/svg";

type TRelease = {
  version: string;
  downloadLinks: {
    intel: string;
    arm: string;
  };
};

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log({ data });

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
            <Link href="/changelog">
              <Capsule
                text={`v${data.version} is out! See what's new`}
                additionalStyles="mb-4 hover:bg-blue-700/20 pointer"
                icon={
                  <RightArrow className="w-4 h-4 text-blue-300 group-hover:text-blue-400 ml-2" />
                }
              />
            </Link>
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

export const getStaticProps: GetStaticProps<{
  data: TRelease;
}> = async () => {
  const getUpdaterJson = async () => {
    const response = await fetch(`${process.env.R2_PUBLIC_URL}/updater.json`);
    const data = await response.json();
    return data;
  };

  const response = await getUpdaterJson();

  let latestVersion = response.version;
  latestVersion = latestVersion.replace("v", "");

  return {
    props: {
      data: {
        version: latestVersion,
        downloadLinks: {
          arm: `${process.env.R2_PUBLIC_URL}/${latestVersion}/intel/yack_${latestVersion}_aarch64.dmg`,
          intel: `${process.env.R2_PUBLIC_URL}/${latestVersion}/intel/yack_${latestVersion}_x64.dmg`,
        },
      },
    },
    revalidate: 3600,
  };
};
