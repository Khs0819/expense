const { createContext, useState } = require("react");

const AppContext = createContext({
  data: [],
  addItem: (item) => {},
  setItems: (items) => {},
  deleteItem: (item) => {},
});

export default AppContext;

export const AppContextProvider = (props) => {
  let [data, setData] = useState([]);
  const addItem = (item) => {
    setData((prev) => {
      return [item, ...prev];
    });
  };
  const deleteItem = (item) => {
    let newData = data.filter((element) => element !== item);
    setData(newData);
  };
  const setItems = (items) => {
    setData(items);
  };
  return (
    <AppContext.Provider
      value={{
        data: data,
        addItem: addItem,
        deleteItem: deleteItem,
        setItems: setItems,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
