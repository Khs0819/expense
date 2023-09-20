import { useContext } from "react";
import Expense from "../models/Expense";
import AppContext from "../context/app-context";

class ExpenseController {
  appContext = useContext(AppContext);

  async index() {
    let data = await Expense.all();
    this.appContext.setItems(data);
  }
  store(object) {
    let expense = new Expense();

    expense.title = object.title;
    expense.date = object.date;
    expense.value = object.value;
    expense.desc = object.desc;

    let isSaved = expense.save();
    if (isSaved) {
      this.appContext.addItem(expense);
    }
    return isSaved;
  }
  update() {
    //
  }
  async delete(id) {
    let expense = this.appContext.data.find((element) => element.id == id);
    let deleted = expense.delete();
    if (deleted) {
      this.appContext.deleteItem(expense);
    }
  }
}
export default ExpenseController;
