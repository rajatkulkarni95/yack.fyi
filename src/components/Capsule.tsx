type TProps = {
  text: string;
  type?: "info" | "warning";
  additionalStyles?: string;
  icon?: React.ReactNode;
};

const Capsule = ({ text, type = "info", additionalStyles, icon }: TProps) => {
  let typeBg = "bg-slate-800/20";
  let typeColor = "text-slate-300";

  switch (type) {
    case "info":
      typeBg = "bg-blue-800/20";
      typeColor = "text-blue-300";
      break;
    case "warning":
      typeBg = "bg-yellow-800/20";
      typeColor = "text-yellow-300";
      break;
    default:
      break;
  }

  return (
    <div
      className={`flex items-center justify-center group w-fit text-sm px-3 py-1.5 rounded-full ${typeBg} ${typeColor} ${additionalStyles}`}
    >
      {text} {icon}
    </div>
  );
};

export default Capsule;
