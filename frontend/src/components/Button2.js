import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["button--primary", "button--outline", "button--test"];

const SIZES = ["button--medium", "button--large"];

export const Button2 = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-in" className="button-mobile">
      <button
        style={{
          marginTop: "-40px",
          height: "38px",
          marginBottom: "18px",
          fontSize: "18px",
        }}
        className={`button ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
