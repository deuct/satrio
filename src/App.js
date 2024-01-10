import { Link } from "react-router-dom";
import Routes from "./routes";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-2 col-md-2 col-sm-12" style={{ margin: "0px" }}>
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-10 col-sm-12">
          <div className="container">
            <Routes />
          </div>
        </div>
      </div>
    </>
  );
}
