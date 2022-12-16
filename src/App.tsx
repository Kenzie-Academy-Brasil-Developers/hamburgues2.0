import { ToastContainer } from "react-toastify";
import { MainRout } from "./routes";
import 'react-toastify/dist/ReactToastify.css';
export const  App=()=> {
  return (
    <div className="App">
      <MainRout/>
      <ToastContainer/>
    </div>
  );
}