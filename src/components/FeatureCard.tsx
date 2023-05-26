// Color combinations array for the background, text, and border colors.
// Background should have 20% opacity. border should have 50% opacity. Text should be 100% opacity.
// Colors should be some variation of the following:
// red, green, blue, yellow, purple, pink, orange, teal, indigo, gray, coolGray, trueGray, warmGray, cyan, fuchsia, rose

import { TFeature } from "~/data/features";

const colors = [
  {
    background: "bg-red-700/10",
    border: "border-red-500/50",
    text: "text-red-500",
  },
  {
    background: "bg-green-700/10",
    border: "border-green-500/50",
    text: "text-green-500",
  },
  {
    background: "bg-blue-700/10",
    border: "border-blue-500/50",
    text: "text-blue-500",
  },
  {
    background: "bg-yellow-700/10",
    border: "border-yellow-500/50",
    text: "text-yellow-500",
  },
];

const FeatureCard = ({ feature }: { feature: TFeature }) => {
  return (
    <div className="flex flex-col p-4 w-full border border-zinc-600">
      <div className="flex items-center justify-between">
        <p className="text-zinc-50 font-bold text-base">{feature.title}</p>
        {feature.comingSoon && (
          <span className="text-violet-400 bg-violet-700/30 border-violet-600/50 border rounded uppercase text-[9px] px-2 py-1">
            Coming Soon{" "}
          </span>
        )}
      </div>
      <p className="text-zinc-200 font-normal mt-4 text-sm">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;
