import { useEffect } from "react";

export const Loader = ({ setLoading, text }) => {
  const loaderTimer = 2700; //2700 mili seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, loaderTimer);
    return () => clearTimeout(timer);
  });

  return (
    <div className="loader">
      <div className="loader-inner">{text}</div>
    </div>
  );
};

export default Loader;
