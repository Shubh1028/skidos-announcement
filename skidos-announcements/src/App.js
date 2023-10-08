import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import AppProvider from "./contextAPI/contextProvider";

/*It is our first and main component through which my whole application is controlled. Used Outled component of react-router-dom 
to show all the components which will change on different actions used by user Header is fixed at top for all the components so. It is directly writtten. */

const AppLayout = () => {
  return (
    <AppProvider>
      <div>
        <Header />
        <Outlet />
      </div>
    </AppProvider>
  );
};

export default AppLayout;
