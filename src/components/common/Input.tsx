import React, { InputHTMLAttributes } from 'react';

interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label = '', ...inputProps }: PropTypes) {
  return (
    <>
      {label && (
        <label className="mb-1 text-sm font-medium leading-[17px] text-[#0B0B0B]">
          {label}
        </label>
      )}
      <input {...inputProps} />
    </>
  );
}
