
import React from "react";
import { LucideProps, icons } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
  fallback?: string;
}

const Icon = ({ name, fallback = "CircleAlert", className, ...props }: IconProps) => {
  const IconComponent = icons[name as keyof typeof icons] || icons[fallback as keyof typeof icons];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={cn("", className)} {...props} />;
};

export default Icon;
