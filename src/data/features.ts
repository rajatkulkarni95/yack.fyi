export type TFeature = {
  id: number
  title: string
  description: string
  comingSoon: boolean
}

export const features: TFeature[] = [
  {
    id: 1,
    title: 'Fast and Lightweight',
    description:
      'Built with Rust, Yack weighs in at < 10 MB, none of that 250MB Electron app nonsense.',
    comingSoon: false,
  },
  {
    id: 2,
    title: 'Private',
    description:
      "We don't store any of your data on our servers. Anything to be stored, is stored on your device, and never leaves it.",
    comingSoon: false,
  },
  {
    id: 3,
    title: 'Multiple Themes',
    description:
      'Light, Dark, and colorful! Choose from a variety of themes to suit your mood.',
    comingSoon: false,
  },
  {
    id: 4,
    title: 'Keyboard-first Design',
    description:
      "Is it really 'fast' if you can't use it without a mouse? Yack is designed to be used with a keyboard, so you get going faster.",
    comingSoon: false,
  },
  {
    id: 5,
    title: 'Markdown Support',
    description:
      'Bullets, Numbered Lists, Codeblocks, Tables. You name it, we parse it.',
    comingSoon: false,
  },
  {
    id: 6,
    title: 'Cross App Integration',
    description:
      "Won't it be cool if Yack could pick context from other apps? We think so too.",
    comingSoon: true,
  },
  {
    id: 7,
    title: 'Prompt Templates',
    description:
      "Act as ______. Translate ______ to _______. We get it, you have your own prompts. We'll let you save them.",
    comingSoon: true,
  },
  {
    id: 8,
    title: 'Prompt Completion',
    description:
      "You know how Google suggests the rest of your sentence? We'll do that, but for your prompts.",
    comingSoon: true,
  },
  {
    id: 9,
    title: 'Search',
    description:
      "Look, we know you're going to have a lot of chats. We'll let you search through them.",
    comingSoon: true,
  },
]
