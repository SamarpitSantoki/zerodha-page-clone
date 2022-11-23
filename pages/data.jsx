import { useEffect, useState } from "react";
import { USER, PWD, PORT } from "../LiveApiData";
import { KiteTicker } from "kiteconnect/lib";
function data() {
  // const [socket, setSocket] = useState(null);
  // const [data, setData] = useState([]);
  // const [niftyPrice, setNiftyPrice] = useState(0);

  return (
    <>
      <div>
        <h1>Data</h1>
        <div>
          Showing API data
          <div>Real Time Data</div>
          <div>
            <span>BANKNIFTY: </span>
            {/* <span>{niftyPrice}</span> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default data;
