// Color combinations array for the background, text, and border colors.
// Background should have 20% opacity. border should have 50% opacity. Text should be 100% opacity.
// Colors should be some variation of the following:
// red, green, blue, yellow, purple, pink, orange, teal, indigo, gray, coolGray, trueGray, warmGray, cyan, fuchsia, rose

import { TFeature } from "~/data/features";

const FeatureCard = ({ feature }: { feature: TFeature }) => {
  return (
    <div className="flex flex-col p-4 w-full border-dashed border border-zinc-600 hover:border-zinc-400 md:hover:scale-110 duration-300 hover:bg-zinc-900 z-0 hover:z-10">
      <div className="flex items-center justify-between">
        <p className="text-violet-300 font-bold text-base">{feature.title}</p>
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
