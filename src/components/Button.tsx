type TButtonProps = {
  label: string | React.ReactNode;
  style?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  type?: "primary" | "secondary";
  href: string;
};

export const DownloadLink = ({
  label,
  subtitle,
  style,
  icon,
  type = "primary",
  href,
}: TButtonProps) => {
  return (
    <div className={`flex flex-col ${style}`}>
      <a
        className={`px-3.5 py-2 border rounded flex items-center font-medium text-sm hover:scale-105 hover:z-10 duration-300 ${
          type === "primary"
            ? "border-transparent  bg-violet-800 text-violet-50"
            : ""
        } ${
          type === "secondary"
            ? "border-violet-600  bg-violet-900/30 text-slate-50 hover:bg-violet-900/50 hover:border-violet-500"
            : ""
        }`}
        href={href}
      >
        {icon} {label}
      </a>
      {subtitle && (
        <span className="text-xs mt-1 text-slate-300">{subtitle}</span>
      )}
    </div>
  );
};
