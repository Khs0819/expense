import { useContext } from "react";
import Row from "./Row";
import AppContext from "../context/app-context";

function Table() {
  let context = useContext(AppContext);
  return (
    <table className="table ">
      <thead>
        <tr>
          <th> Title</th>
          <th> Date</th>
          <th>value</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {context.data.map((element) => (
          <Row key={element.id} item={element} />
        ))}
      </tbody>
    </table>
  );
}
export default Table;
