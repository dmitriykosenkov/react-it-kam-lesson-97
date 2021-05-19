import React from "react";
import styles from "./FormControls.module.css"

const wrapper = (tagName) => ({ input, meta, ...props }) => {
   const hasError = meta.touched && meta.error;
   return (
      <div>
         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {React.createElement(tagName, { ...input, ...props })}
            {hasError && <span>{meta.error}</span>}
         </div>
      </div>)
}

export const Input = wrapper("input")
export const Textarea = wrapper("textarea")
