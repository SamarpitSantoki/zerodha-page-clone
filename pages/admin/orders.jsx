
import React, { useState } from 'react'
import { useEffect } from 'react'   
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Input, FormGroup, Label } from 'reactstrap'
import Layout from '../../components/Layout'
import EditableTable from '../../components/Table'
import { OrderPage } from '../../data'
import axios from 'axios'
function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [positionsColumns, setpositionsColumns] = useState([]);
  const [rowData, setRowData] = useState(OrderPage);
  const newEntry = { ...OrderPage[0] };
  function getColumns(data) {
    const columns = Object.keys(data[0])?.map((item) => ({
      name: item,
      selector: (row) => row[item],
    }));
    return columns;
  }
  useEffect(() => {
    setpositionsColumns(() => getColumns(OrderPage));
  }, []);

  async function saveData() {
    const data = rowData.filter((item) => item.tradingsymbol !== "");
    const responce = await axios.post("/api/saveData", {
      data: data,
      field: "OrderPage",
    });
  }

  async function calculatePosition() {
    const data = rowData.filter((item) => item.tradingsymbol !== "");
    let positions = {};
    data.forEach((item) => {
      let key =
        item.product +
        ":" +
        item.tradingsymbol +
        ":" +
        item.expiryDate +
        ":" +
        item.expiryMonth +
        ":" +
        item.placePrice +
        ":" +
        item.option +
        ":" +
        item.exchange +
        ":" +
        "0" +
        ":" +
        "0" +
        ":" +
        "0.00";
      if (positions[key]) {
        if (item.type === "BUY")
          positions[key] -=
            parseFloat(item.Qty.split("/")[0]) * parseFloat(item.Avg);
        else {
          positions[key] +=
            parseFloat(item.Qty.split("/")[0]) * parseFloat(item.Avg);
        }
      } else {
        if (item.type === "BUY")
          positions[key] =
            -parseFloat(item.Qty.split("/")[0]) * parseFloat(item.Avg);
        else {
          positions[key] =
            parseFloat(item.Qty.split("/")[0]) * parseFloat(item.Avg);
        }
      }
    });
    let positionsData = [];
    for (let key in positions) {
      let product = key.split(":");
      positionsData.push({
        product: product[0],
        tradingsymbol: product[1],
        expiryDate: product[2],
        expiryMonth: product[3],
        placePrice: product[4],
        option: product[5],
        exchange: product[6],
        Qty: product[7],
        LTP: product[8],
        Avg: product[9],
        Chg: "0.00",
        status: "closed",
        pl: positions[key],
      });
    }
    const responce = await axios.post("/api/saveData", {
      data: positionsData,
      field: "cards",
    });
    console.log(positionsData);
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
          onClick={() => calculatePosition()}
        >
          Calculate Positions
        </Button>
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
        {/* <DataTable columns={positionsColumns} data={OrderPage} /> */}
      </div>
    </Layout>
  );
}

export default Admin;