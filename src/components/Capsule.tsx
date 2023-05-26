type TProps = {
  text: string;
  type?: "info" | "warning";
  additionalStyles?: string;
  icon?: React.ReactNode;
};

const Capsule = ({ text, type = "info", additionalStyles, icon }: TProps) => {
  let typeBg = "bg-slate-800/20";
  let typeColor = "text-slate-300";
  let typeBorder = "border-slate-500/50";

  switch (type) {
    case "info":
      typeBg = "bg-violet-800/20";
      typeColor = "text-violet-300";
      typeBorder = "border-violet-500/50";
      break;
    case "warning":
      typeBg = "bg-yellow-800/20";
      typeColor = "text-yellow-300";
      typeBorder = "border-yellow-500/50";
      break;
    default:
      break;
  }

  return (
    <div
      className={`flex items-center justify-center group w-fit text-xs xl:text-sm px-3 py-1.5 rounded-full border ${typeBg} ${typeColor} ${typeBorder} ${additionalStyles}`}
    >
      {text} {icon}
    </div>
  );
};

export default Capsule;
