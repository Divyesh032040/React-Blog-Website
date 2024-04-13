/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { forwardRef, useCallback, useId } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
function Select({
    options ,
    className = " ",
    label,
    ...props
} , ref) {
    const id = useId();
  return (
    <div>
        {label && <label htmlFor='id' className = " " ></label>}

        <select 
         id={id}
         className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  &{className}`}
        >
        {options?.map((option)=>(
            <option key={option} value={option}>
                {option}
            </option>
        ))}
        </select>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.forwardRef(Select)