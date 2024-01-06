import { Outlet } from "react-router-dom";
import Nav from "./nav";
import Header from "./header";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
};

export default App;
