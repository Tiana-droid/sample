import React, { useState } from "react"
import "../styles/heroSection.scss"

interface props {
  placeholder: string
  width: string
  height: string
  borderColor: string
  inputValue: string
  handleChange: any
}

const CustomTextInput: React.FC<props> = ({
  placeholder,
  width,
  height,
  borderColor,
  inputValue,
  handleChange,
}) => {
  const styles = {
    width: width ? `${width}px` : `231px`,
    height: height ? `${height}px` : `52px`,
    borderWidth: 1,
    borderColor: borderColor,
    padding: 5,
    outline: "none",
  }

  return (
    <input
      placeholder={placeholder}
      style={styles}
      type="text"
      value={inputValue}
      onChange={handleChange}
      className="input-tag"
    />
  )
}

export default CustomTextInput
