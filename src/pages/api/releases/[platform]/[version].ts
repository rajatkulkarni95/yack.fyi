// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { platform, version } = req.query

  if (!platform || !version) {
    res.status(204).json({})
    return
  }

  const getUpdaterJson = async () => {
    const response = await fetch(`${process.env.R2_PUBLIC_URL}/updater.json`)

    const data = await response.json()

    return data
  }

  const response = await getUpdaterJson()

  if (response) {
    const latestVersion = response.version

    const [latestMajor, latestMinor, latestPatch] = latestVersion
      .substring(1)
      .split('.')
    const [currentMajor, currentMinor, currentPatch] = (
      version as string
    ).split('.')

    if (
      Number(currentMajor) === Number(latestMajor) &&
      Number(currentMinor) === Number(latestMinor) &&
      Number(currentPatch) === Number(latestPatch)
    ) {
      res.status(204).json({})
      return
    }

    if (
      Number(latestMajor) > Number(currentMajor) ||
      Number(latestMinor) > Number(currentMinor) ||
      Number(latestPatch) > Number(currentPatch)
    ) {
      res.status(200).json(response)
      return
    }

    res.status(204).json({})
    return
  }
}
