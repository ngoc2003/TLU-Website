import React from "react";
import ForeignAffair from "../layouts/pages/Home/ForeignAffair";
import Information from "../layouts/pages/Home/Information";
import Admission from "../layouts/pages/Home/Admission";
import QuickLinks from "../layouts/pages/Home/QuickLinks";
import Research from "../layouts/pages/Home/Research";
import Training from "../layouts/pages/Home/Training";
import Student from "../layouts/pages/Home/Student";

const HomePage = () => {
  return (
    <>
      <QuickLinks />
      <Information />
      <Admission />
      <Training />
      <ForeignAffair />
      <Research />
      <Student />
    </>
  );
};

export default HomePage;
