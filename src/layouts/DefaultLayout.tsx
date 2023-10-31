// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { URL } from "../constants";
import { ILayoutProps } from "../models";

export default function DefaultLayout(props: ILayoutProps) {
  const { children } = props;
  // const navigate = useNavigate();

  return <div>{children}</div>;
}
