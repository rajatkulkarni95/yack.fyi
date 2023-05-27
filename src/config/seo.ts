export const baseUrl =
  process.env.NODE_ENV === "production" ? "https://yack.fyi" : "";

export const defaultSEO = {
  title: "yack",
  description: "OpenAI chat in your menubar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "yack",
    images: [
      {
        url: `${baseUrl}/img/og/default.png`,
        alt: "yack",
      },
    ],
  },
  twitter: {
    handle: "@JokingRajat",
    site: "@JokingRajat",
    cardType: "summary_large_image",
  },
};
