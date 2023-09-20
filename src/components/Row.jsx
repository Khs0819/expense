import ExpenseController from "../controllers/ExpenseController";

function Row(props) {
  let controller = new ExpenseController();

  const onDeleteHandler = () => {
    controller.delete(props.item.id);
  };
  return (
    <tr>
      <td> {props.item.title} </td>
      <td> {props.item.date}</td>
      <td>{props.item.value}$ </td>
      <td>{props.item.desc} </td>
      <td className="text-right">
        <a
          className="delete"
          onClick={onDeleteHandler}
          style={{ cursor: "pointer" }}
        >
          <i className="fa fa-trash-o" aria-hidden="true" />
        </a>
      </td>
    </tr>
  );
}
export default Row;
