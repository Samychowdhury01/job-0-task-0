import React, { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  className: string;
  title: string;
  subTitle: string;
  text: string;
};

const shortText = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
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
        <h1 className="text-secondary dark:text-dark-primary text-2xl font-bold">
          {title}
        </h1>
        {/* sub-heading */}
        <p className="text-secondaryForeground dark:text-[#A3A3A3]">
          {subTitle}
        </p>
      </div>
      {/* text */}
      <p className="text-secondaryForeground dark:text-[#A3A3A3] mt-5">
        <span className="block sm:hidden">
          {shortText(text, 5)}
        </span>
        <span className="hidden sm:block">
          {text}
        </span>
      </p>
    </div>
  );
};

export default TechSectionCard;
