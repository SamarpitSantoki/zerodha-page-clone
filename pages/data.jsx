import { useEffect, useState } from "react";
import { USER, PWD, PORT } from "../LiveApiData";
function data() {
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState([]);
  const url =
    "wss://push.truedata.in:" + PORT + "?user=" + USER + "&password=" + PWD;
  function connect() {
    const newSocket = new WebSocket(url);

    newSocket.onopen = socketonopen;
    newSocket.onerror = socketonerror;
    newSocket.onmessage = socketonmessage;
    newSocket.onclose = socketonclose;

    setSocket(newSocket);
  }

  function socketonopen(e) {
    console.log("Connected Websocket");
  }
  function socketonerror(e) {
    console.log("Websocket Error " + e.message);
  }

  function socketonmessage(e) {
    var jsonObj = JSON.parse(e.data);
    setData((prev) => [...prev, jsonObj.message]);
    if (jsonObj.success) {
      switch (jsonObj.message) {
        case "TrueData Real Time Data Service":
          console.log(
            "Symbols:" +
              jsonObj.maxsymbols +
              " Data:" +
              jsonObj.subscription +
              " Valid Upto: " +
              jsonObj.validity
          );
          break;
        case "symbols added":
          console.log("Added Symbols:" + jsonObj.symbolsadded);
          break;
        default:
          console.log(jsonObj);
      }
    }
    if (jsonObj.success == false) {
      console.log("Not connected");
    }
    if (jsonObj.trade != null) {
      //console.log(jsonObj.trade)
      var tradeArray = jsonObj.trade;
      console.log(
        "SymbolId: " +
          tradeArray[0] +
          " Time: " +
          tradeArray[1] +
          " LTP:" +
          tradeArray[2] +
          " Volume:" +
          tradeArray[3]
      );
    }
    if (jsonObj.bidask != null) {
      var bidaskArray = jsonObj.bidask;
      console.log(
        "SymbolId: " +
          bidaskArray[0] +
          " Time: " +
          bidaskArray[1] +
          " Bid:" +
          bidaskArray[2] +
          " BidQty:" +
          bidaskArray[3] +
          " Ask:" +
          bidaskArray[4] +
          " AskQty:" +
          bidaskArray[5]
      );
    }
    //setTimeout(closeConnection, 2000);
  }

  function socketonclose() {
    connection.close();
  }

  function addSymbol() {
    var jsonRequest = {
      method: "addsymbol",
      symbols: [
        "NIFTY 50",
        "NIFTY-I",
        "HDFC",
        "CRUDEOIL-I",
        "GOLD-I",
        "SILVER-I",
      ],
    };
    let s = JSON.stringify(jsonRequest);
    socket.send(s);
  }

  return (
    <>
      <div>
        <h1>Data</h1>
        <button onClick={connect}>Connect</button>
        <button>Disconnect</button>
        <button onClick={addSymbol}>Add Symbol</button>
        <div>
          Showing API data
          <div>
            {data.map((item) => {
              return <div>{item}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default data;
