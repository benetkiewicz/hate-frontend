import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Header from "./header";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Nav />
        <Outlet />
      </div>
    </>
  );
};

export default App;
