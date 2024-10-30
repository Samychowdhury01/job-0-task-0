import { Button } from "@nextui-org/react";
import React from "react";

type TRadius = "none" | "sm" | "md" | "lg" | "full";
const ButtonComponent = ({
  text,
  radius,
}: {
  text: string;
  radius: TRadius;
}) => {
  return (
    <Button radius={radius} className="bg-secondary dark:bg-dark-primary text-white dark:text-secondary px-6">
      {text}
    </Button>
  );
};

export default ButtonComponent;
