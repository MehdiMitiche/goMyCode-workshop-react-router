import React from "react";
import { useParams } from "react-router-dom";

const Messages = () => {
  const { id } = useParams();
  return <div className="page-content">{`Messages : ${id}`}</div>;
};

export default Messages;
