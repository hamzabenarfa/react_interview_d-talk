import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ReactionButtonProps {
  title: string;
  count: number;
  icon: LucideIcon;
  onClick: () => void;
  disabled: boolean;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({
  title,
  count,
  icon: Icon,
  onClick,
  disabled,
}) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      disabled={disabled}
      className={"flex items-center gap-2 w-full justify-center text-gray-500"}
    >
      <Icon className="w-5 h-5" />
      <span>
        {count} {title}
      </span>
    </Button>
  );
};

export default ReactionButton;
