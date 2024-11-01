import React, { ReactNode } from "react";

const AboutCard = ({
  children,
  title,
  text,
}: {
  children: ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex-1 bg-accent dark:bg-dark-bg px-10 py-5 rounded-3xl border-1">
      <div className="space-y-1">
        {children}
        {/* card heading */}
        <h3 className="text-secondary dark:text-dark-primary text-2xl">{title}</h3>
        {/* sub-heading */}
      </div>
      {/* text */}
      <p className="text-secondaryForeground dark:text-dark-primary my-5 ">{text}</p>
    </div>
  );
};

export default AboutCard;
