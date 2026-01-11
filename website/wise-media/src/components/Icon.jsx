import * as Icons from "lucide-react";

export default function Icon({
  name,
  size = 20,
  className = "",
  ...props
}) {
  const LucideIcon = Icons[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" does not exist in lucide-react`);
    return null;
  }

  return (
    <LucideIcon
      size={size}
      className={`stroke-[1.5] ${className}`}
      {...props}
    />
  );
}
