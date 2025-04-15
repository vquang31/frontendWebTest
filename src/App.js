import { useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

function App() {
  const [selected, setSelected] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>CRUD App</h1>
      <ItemForm selected={selected} onSuccess={() => setRefresh(!refresh)} />
      <ItemList onEdit={setSelected} refresh={refresh} />
    </div>
  );
}

export default App;
