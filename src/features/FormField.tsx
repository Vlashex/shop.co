import React from "react";

export const FormField: React.FC<any> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  multiple
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      className='w-full bg-gray-200 p-4 rounded-sm'
      multiple={multiple || false}
    />
    {error && <span className="error-message text-sm text-red-500 -mt-4">{error.message}</span>}
  </>
);