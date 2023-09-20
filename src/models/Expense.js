import axios from "axios";

class Expense {
  static async all() {
    let response = await axios.get(
      "https://react-expenses-0819-default-rtdb.firebaseio.com/expense.json"
    );
    if (response.status === 200) {
      let data = [];
      for (const key in response.data) {
        let obj = response.data[key];
        let expense = new Expense();
        expense.title = obj.title;
        expense.date = obj.date;
        expense.value = obj.value;
        expense.desc = obj.desc;
        expense.id = key;
        data.push(expense);
      }
      return data;
    }
    return [];
  }
  async save() {
    let response = await axios.post(
      "https://react-expenses-0819-default-rtdb.firebaseio.com/expense.json",
      this
    );
    if (response.status === 200) {
      this.id = response.data.name;
    }
    return response.status === 200;
  }
  update() {
    //
  }
  async delete() {
    let response = await axios.delete(
      `https://react-expenses-0819-default-rtdb.firebaseio.com/expense/${this.id}.json`
    );
    return response.status === 200;
  }
}
export default Expense;
