import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const goToContact = () => {
    history.push("/contact");
  };
  return (
    <div className="page-content">
      <div className="btn" onClick={goToContact}>
        GO TO CONTACT
      </div>
    </div>
  );
};

export default Home;
