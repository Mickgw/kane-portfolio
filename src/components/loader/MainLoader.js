import { useEffect } from "react";

export const Loader = ({ setLoading }) => {
  const loaderTimer = 1400; //2700 mili seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, loaderTimer);
    return () => clearTimeout(timer);
  });

  return (
      <div className="loader-inner">
        <h2 className="loader-text">Home</h2>
      </div>
  );
};

export default Loader;
