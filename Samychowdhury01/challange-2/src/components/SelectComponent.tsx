/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const SelectComponent = ({
  
  options,
  placeholder,
  register,
  name,
  defaultValue, 
}: any) => {
  return (
    <div className="flex flex-col">
      <select
        id={name}
        {...register(name)}
        defaultValue={defaultValue} 
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="" disabled>
          {placeholder} 
        </option>
        {options.map((option: { value: string; label: string }) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
