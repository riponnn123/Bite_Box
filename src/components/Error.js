import { useRouteError } from "react-router-dom";

const Error = () =>{
  const err = useRouteError();
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Oops! Page not found</h2>
    </div>
  );
};

export default Error;