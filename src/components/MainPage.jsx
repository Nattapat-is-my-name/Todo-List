import { useContext } from "react";
import { user } from "../Context/User";
export default function MainPage() {
  const { fulname } = useContext(user);
  return <div>Fucking main page {fulname}</div>;
}
