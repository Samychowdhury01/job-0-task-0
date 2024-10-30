/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from "react";

const SectionTag = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex items-center justify-center gap-2 text-center text-2xl border-1 rounded-full w-56 mx-auto">
      <p>{title}</p>
      {children}
    </div>
  );
};

export default SectionTag;
