/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  className: string;
  title: string;
  subTitle: string;
  text: string;
};
const TechSectionCard = ({
  children,
  className,
  title,
  subTitle,
  text,
}: TProps) => {
  return (
    <div className={`${className} px-10 py-5 rounded-3xl border-1`}>
      <div className="space-y-3">
        {children}
        {/* card heading */}
        <h1 className="text-secondary text-2xl font-bold">{title}</h1>
        {/* sub-heading */}
        <p className="text-secondaryForeground">{subTitle}</p>
      </div>
      {/* text */}
      <p className="text-secondaryForeground mt-5">{text}</p>
    </div>
  );
};

export default TechSectionCard;
