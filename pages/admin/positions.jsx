
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "reactstrap";
import Layout from "../../components/Layout";
import EditableTable from "../../components/Table";
import { cards } from "../../data";
import axios from "axios";
function Admin() {
  const [rowData, setRowData] = useState(cards);
  const [showModal, setShowModal] = useState(false);
  const [positionsColumns, setpositionsColumns] = useState([]);

  function getColumns(data) {
    const columns = Object.keys(data[0])?.map((item) => ({
      name: item,
      selector: (row) => row[item],
    }));
    console.log(columns);
    return columns;
  }
  useEffect(() => {
    setpositionsColumns(() => getColumns(cards));
  }, []);
  console.log(rowData);

  async function saveData() {
    const data = rowData.filter((item) => item.tradingsymbol !== "");
    console.log(data.length);
    const responce = await axios.post("/api/saveData", {
      data: data,
      field: "cards",
    });
  }

  return (
    <Layout>
      <div
        style={{
          margin: 10,
        }}
      >
        <Button
          style={{ float: "right", margin: 5 }}
          size="md"
          color="primary"
          onClick={() => saveData()}
        >
          Save
        </Button>
        <Button
          style={{ float: "right", margin: 5 }}
          size="md"
          color="primary"
          onClick={() => setRowData((prev) => [...prev, newEntry])}
        >
          Add
        </Button>
        <EditableTable data={rowData} setData={setRowData} />
        {/* <DataTable columns={positionsColumns} data={cards} /> */}
      </div>
    </Layout>
  );
}

export default Admin;