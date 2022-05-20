import { createContext, useState } from "react";

const user = createContext({ fulname: null, setfulname: null })
export {user};

const Userprovider = (props) => {
  const [fulname, setfulname] = useState();
  return <user.Provider value={{ fulname, setfulname }} >{props.children}</user.Provider>
};
export default Userprovider;
