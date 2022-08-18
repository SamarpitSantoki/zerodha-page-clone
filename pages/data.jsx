import { useEffect, useState } from "react";
import { USER, PWD, PORT } from "../LiveApiData";
function data() {
  const [socket, setSocket] = useState(null);
  const [data, setData] = useState([]);
  const [niftyPrice, setNiftyPrice] = useState(0);
  const url =
    "wss://push.truedata.in:" + PORT + "?user=" + USER + "&password=" + PWD;
  function connect() {
    const newSocket = new WebSocket(url);

    newSocket.onopen = socketonopen;
    newSocket.onerror = socketonerror;
    newSocket.onmessage = socketonmessage;
    // newSocket.onclose = socketonclose;

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
    if (jsonObj.success !== undefined) {
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
      setNiftyPrice(tradeArray[2] * 1200);
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
    socket.close();
  }

  function addSymbol() {
    var jsonRequest = {
      method: "addsymbol",
      symbols: ["BANKNIFTY22081839000CE"],
    };
    let s = JSON.stringify(jsonRequest);
    socket.send(s);
  }
  function disconnect() {
    socket.close();
  }

  function getOptions() {
    var jsonRequest = {
      method: "getoptions",
    };
    let s = JSON.stringify(jsonRequest);
    socket.send(s);
  }
  return (
    <>
      <div>
        <h1>Data</h1>
        <button onClick={connect}>Connect</button>
        <button onClick={disconnect}>Disconnect</button>
        <button onClick={addSymbol}>Add Symbol</button>
        <button onClick={getOptions}>getOptions</button>
        <div>
          Showing API data
          <div>Real Time Data</div>
          <div>
            <span>BANKNIFTY: </span>
            <span>{niftyPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default data;
