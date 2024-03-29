import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import React from 'react'
import { DownloadLink } from '~/components/Button'
import Capsule from '~/components/Capsule'
import FeatureCard from '~/components/FeatureCard'
import { features } from '~/data/features'
import { DownloadIcon, LogoLarge, RightArrow } from '~/svg'

type TRelease = {
  version: string
  downloadLinks: {
    intel: string
    arm: string
  }
}

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className={`flex min-h-screen flex-col px-4 md:px-8 py-4 xl:py-8 bg-gradient-to-b xl:bg-gradient-to-bl from-violet-950 via-zinc-950 to-black`}
    >
      <section className="w-full xl:w-5/6 2xl:w-3/4 flex flex-col mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <LogoLarge className="w-20 xl:w-24 text-white" />
          </Link>
          <div className="flex items-center justify-between">
            <Link href="/changelog">
              <div className="text-sm text-slate-300 hover:text-slate-50 px-4 py-2 bg-transparent rounded-md hover:bg-violet-300/20 cursor-pointer">
                Changelog
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-between mt-8 xl:mt-20">
          <div className="flex flex-col items-center xl:items-start justify-start w-full xl:max-w-[640px]">
            <a
              href="https://github.com/rajatkulkarni95/yack"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Capsule
                text={`Yack is now Open Source!`}
                additionalStyles="mb-2 xl:mb-4 hover:bg-violet-700/20 pointer"
                icon={
                  <RightArrow className="w-4 h-4 text-violet-300 group-hover:text-violet-400 ml-1" />
                }
              />
            </a>
            <h1 className="text-4xl md:text-6xl py-2 tracking-tighter text-transparent font-bold bg-clip-text bg-gradient-to-br from-slate-50 to-violet-700">
              Get going faster.
            </h1>
            <p className="mt-2 mx-1 xl:mx-0 xl:mt-4 text-base xl:text-xl text-slate-300">
              Yack is a MacOS app that lets you access ChatGPT right at your
              fingertips.{' '}
            </p>
            <p className="mt-2 mx-1 xl:mx-0 xl:mt-4 text-base xl:text-xl text-slate-300">
              Your favourite AI assistant now lives in your{' '}
              <strong className="text-slate-50 border-b border-dotted border-slate-300 pb-0.5">
                menu bar
              </strong>
              .
            </p>
            <p className="!mt-4 text-slate-300 text-sm">
              Requires an Open AI key for usage.
            </p>
            <div className="flex items-center mt-8">
              <DownloadLink
                label="for Apple Silicon"
                subtitle="2020 and later models"
                icon={<DownloadIcon className="w-4 h-4 mr-1.5 text-slate-50" />}
                href={data.downloadLinks.arm}
              />
              <DownloadLink
                label="for Intel Chips"
                subtitle="earlier models"
                style="ml-3"
                icon={
                  <DownloadIcon className="w-4 h-4 mr-1.5 text-slate-200" />
                }
                type="secondary"
                href={data.downloadLinks.intel}
              />
            </div>
          </div>
          <video
            className="w-full mt-8 md:w-3/4 lg:w-3/5 xl:mt-0 xl:w-2/5 rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/yack_demo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="w-full xl:w-5/6 2xl:w-3/4 flex flex-col mx-auto mt-12 xl:mt-24">
        <h3 className="text-2xl md:text-4xl w-full font-bold text-transparent text-center bg-clip-text bg-gradient-to-br from-slate-50 to-slate-600">
          Built with you in mind.
        </h3>
        <p className="text-sm md:text-base text-center mt-2 text-slate-300">
          Yack is purpose-built to help make accessing ChatGPT as easy as
          possible. Lightweight, fast, and simple.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 mt-8">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.id} />
          ))}
        </div>
      </section>
      <section className="w-full lg:w-4/5 2xl:w-3/4 flex flex-col mx-auto my-12 xl:my-24">
        <h3 className="text-lg md:text-2xl w-full font-bold text-zinc-100 text-center">
          Wanna get going faster?
        </h3>
        <div className="flex items-center mx-auto mt-4">
          <DownloadLink
            label="for Apple Silicon"
            subtitle="2020 and later models"
            icon={<DownloadIcon className="w-4 h-4 mr-1.5 text-slate-50" />}
            href={data.downloadLinks.arm}
          />
          <DownloadLink
            label="for Intel Chips"
            subtitle="earlier models"
            style="ml-3"
            icon={<DownloadIcon className="w-4 h-4 mr-1.5 text-slate-200" />}
            type="secondary"
            href={data.downloadLinks.intel}
          />
        </div>
      </section>
      <p className="text-xs text-zinc-400 w-full text-center">
        Built by{' '}
        <a
          href="https://twitter.com/JokingRajat"
          className="underline hover:text-amber-400"
        >
          Rajat
        </a>
      </p>
    </main>
  )
}

export const getStaticProps: GetStaticProps<{
  data: TRelease
}> = async () => {
  const getUpdaterJson = async () => {
    const response = await fetch(`${process.env.R2_PUBLIC_URL}/updater.json`)
    const data = await response.json()
    return data
  }

  const response = await getUpdaterJson()

  let latestVersion = response.version
  latestVersion = latestVersion.replace('v', '')

  return {
    props: {
      data: {
        version: latestVersion,
        downloadLinks: {
          arm: `${process.env.R2_PUBLIC_URL}/${latestVersion}/arm/yack_${latestVersion}_aarch64.dmg`,
          intel: `${process.env.R2_PUBLIC_URL}/${latestVersion}/intel/yack_${latestVersion}_x64.dmg`,
        },
      },
    },
    revalidate: 3600,
  }
}
