import React from "react";
import { IonButton } from "@ionic/react";
import "./index.scss";

const Button = ({ color, expand, size, fill, position, text, onClick }) => {
  return (
    <IonButton
      className={`button ${position}`}
      color={color}
      expand={expand}
      size={size}
      fill={fill}
      onClick={onClick}
    >
      {text}
    </IonButton>
  );
};

export default Button;
