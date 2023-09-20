import { useRef } from "react";
import ExpenseController from "../controllers/ExpenseController";
function Form() {
  let controller = new ExpenseController();

  let titleRef = useRef();
  let dateRef = useRef();
  let valueRef = useRef();
  let descRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      titleRef.current.value != "" &&
      dateRef.current.value != "" &&
      valueRef.current.value != "" &&
      descRef.current.value != ""
    ) {
      saveData();
    } else {
      alert("Please Fill All Input Fields");
    }
  };

  const saveData = () => {
    let object = {
      title: titleRef.current.value,
      date: dateRef.current.value,
      value: valueRef.current.value,
      desc: descRef.current.value,
    };

    controller.store(object);
    clear();
  };
  function clear() {
    titleRef.current.value = "";
    dateRef.current.value = "";
    valueRef.current.value = "";
    descRef.current.value = "";
  }
  return (
    <form className="row" onSubmit={onSubmitHandler}>
      <div className="mb-3 col-md-6">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control addTitle"
          aria-describedby=""
          ref={titleRef}
        />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control addDate"
          aria-describedby=""
          ref={dateRef}
        />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Value</label>
        <input
          type="number"
          className="form-control addValue"
          aria-describedby=""
          ref={valueRef}
        />
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="title" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control addDescrption"
          aria-describedby=""
          ref={descRef}
        />
      </div>
      <div className="mb-3 col-md-12 text-right">
        <button type="submit" className="btn btn-primary addBtn">
          Add
        </button>
      </div>
    </form>
  );
}
export default Form;
