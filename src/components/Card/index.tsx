import React from "react";
import { CardBox } from "./styled";

const Card = (props: { title: string }) => {
  const { title } = props;

  return (
    <CardBox>
      <h3>{title}</h3>
    </CardBox>
  );
};

export default Card;
