type TProps = {
  keys: string[];
  additionalStyles?: string;
  inTooltip?: boolean;
};

const KbdShort = ({ keys, additionalStyles, inTooltip }: TProps) => {
  return (
    <div className={`flex items-center ${additionalStyles}`}>
      {keys.map((key) => (
        <kbd
          key={key}
          className={`ml-0.5 inline-flex items-center justify-center rounded bg-slate-800 px-1.5 py-0.5 font-mono text-slate-300`}
        >
          {key}
        </kbd>
      ))}
    </div>
  );
};

export default KbdShort;
