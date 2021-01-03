import React from "react";
import { CardBox } from "./styled";

const Card = (props: { title: string }) => {
  const { title } = props;

  return <CardBox>{title}</CardBox>;
};

export default Card;
