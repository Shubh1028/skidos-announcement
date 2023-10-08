import React, { useState } from "react";
import AppContext from "./context";

/*Used a context API so data which is required at multiple places can be stored at a central place, this
 helps me in easy access of data and helps me in avoiding props drilling.
 addData helps me in adding newly created announcements to existing one
 toggleIsLogin helps me in loging in and loging out user.
 */

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLogin, setLogin] = useState(false);

  const addData = (newData) => {
    if (data.length === 0) {
      setData([...newData]);
    } else {
      setData((prevData) => [newData, ...prevData]);
    }
  };

  const toggleIsLogin = () => {
    setLogin(!isLogin);
  };
 
  return (
    <AppContext.Provider value={{ data, addData, isLogin, toggleIsLogin }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
