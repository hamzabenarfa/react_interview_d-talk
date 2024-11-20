import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ReactionButtonProps {
  title: string;
  count: number;
  icon: LucideIcon;
  onClick: () => void;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({
  title,
  count,
  icon: Icon,
  onClick,
}) => {
  return (
    <Button variant="ghost" size="sm" onClick={onClick} className="">
      <Icon className="w-5 h-5" />
      <span>{count} {title}</span>
    </Button>
  );
};

export default ReactionButton;
