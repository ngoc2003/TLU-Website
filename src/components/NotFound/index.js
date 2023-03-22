import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      Mới có trang{" "}
      <Link
        to="/"
        className="italic mx-2 text-primary font-semibold underline "
      >
        HomePage
      </Link>{" "}
      thôi bạn iu!
    </div>
  );
};

export default NotFoundPage;
