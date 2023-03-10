import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader: React.FC = () => {
  return (
    <ClipLoader color={"#dddbdb"} size={100} aria-label="Loading Spinner" data-testid="loader" />
  );
};

export default Loader;
