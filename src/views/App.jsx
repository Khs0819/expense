import Form from "../components/Form";
import Table from "../components/Table";
import Img from "../resources/img/m1.png";
import "../resources/css/custom.css";
import { useEffect } from "react";
import ExpenseController from "../controllers/ExpenseController";

function App() {
  let controller = new ExpenseController();

  useEffect(() => {
    controller.index();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6">
          <img src={Img} className="img-fluid" alt="" />
        </div>
        <div className="col-sm-6 mt-5">
          <div className="row tit">
            <h4 className="">wellcom to Momen Expense Manager </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <Form />
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="custom-card ">
          <Table />
        </div>
      </div>
    </div>
  );
}
export default App;
