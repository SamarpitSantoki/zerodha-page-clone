/* eslint-disable @next/next/no-img-element */
//  eslint-disable @next/next/no-img-element
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { useState } from "react";
import LoadingContext from "../context/loadingContext";
import { OrderPage, EventMessage, headerData, SideBarData } from "../data";

function App() {
  const {
    positionsLoading,
    setInitialLoader,
    initialLoader,
    setPositionLoading,
  } = useContext(LoadingContext);
  const [plTotal, setPlTotal] = useState(0);
  let total = 0;
  const arr = OrderPage.forEach((card) => {
    total = total + card.pl;
  });
  useEffect(() => {
    setTimeout(() => {
      setPositionLoading(false);
      setPlTotal(total);
    }, 1000);
    setTimeout(() => {
      setInitialLoader(false);
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initialLoader) {
    return (
      <div className="positionsPage">
        <Head>
          <title>Orders / Kite</title>
        </Head>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img width={70} src="kite-logo.svg" alt="kite-logo" />
          </div>
          <span className="dot-spinner">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="positionsPage">
      <Head>
        <title>Orders / Kite</title>
      </Head>
      <noscript>
        <strong>
          We&apos;re sorry but kite doesn&apos;t work properly without
          JavaScript enabled. Please enable it to continue.
        </strong>
      </noscript>
      <div id="app" className="app page-positions">
        <div className="header">
          <div className="wrapper">
            <div className="header-left">
              <div className="pinned-instruments">
                {headerData.map((header, index) => (
                  <div key={index} className="instrument-widget">
                    <span
                      tooltip-pos="down"
                      className="tradingsymbol link-chart"
                      data-balloon="Open chart"
                      data-balloon-pos="down"
                    >
                      {header.tradingsymbol}{" "}
                    </span>
                    <span className="wrap">
                      <span
                        className={`last-price ${
                          header.change[0] === "-"
                            ? "down"
                            : header.change === "0"
                            ? ""
                            : "up"
                        }`}
                      >
                        {header.price}
                      </span>
                      <span className={`price-change `}>
                        <span className={`change-percent super-dim`}>
                          {" "}
                          {header.change}{" "}
                          <span className="text-xxsmall">%</span>
                        </span>
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="header-right">
              <a href="https://kite.zerodha.com/" className="logo">
                <img src="kite-logo.svg" alt="Kite logo" />
              </a>
              <div className="app-nav">
                {" "}
                <a href="/dashboard" className="">
                  <span>Dashboard</span>
                </a>{" "}
                <Link href="/orders">
                  <a className="router-link-exact-active router-link-active">
                    <span>Orders</span>{" "}
                  </a>
                </Link>{" "}
                <a href="/holdings" className="">
                  <span>Holdings</span>
                </a>{" "}
                <Link href="/positions" aria-current="page">
                  <a>
                    <span>Positions</span>
                  </a>
                </Link>{" "}
                <a href="/funds" className="">
                  <span>Funds</span>
                </a>{" "}
                <a href="/apps" className="">
                  <span>Apps</span>
                </a>
              </div>

              <div className="right-nav">
                <div className="user-nav perspective">
                  <a href="" className="dropdown-label">
                    <div id="avatar-80">
                      {" "}
                      <img
                        alt="avatar"
                        src="/4hQAAht2kIsZkhL9fWEsxMGBznOHvzdu.png"
                        height="25"
                        width="25"
                        className="avatar"
                        style={{
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          textAlign: "center",
                          verticalAlign: "middle",
                          background:
                            'url("https://s3.ap-south-1.amazonaws.com/zerodha-kite-blobs/avatars/4hQAAht2kIsZkhL9fWEsxMGBznOHvzdu.png") 0% 0% / 25px 25px no-repeat content-box',
                        }}
                      />
                    </div>{" "}
                    <span className="user-id">PR2408</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container wrapper">
          <div className="container-left">
            <div className="marketwatch-sidebar marketwatch-wrap">
              <div className="omnisearch">
                <div className="search">
                  <div className="su-input-group su-has-icon search-input-field">
                    <input
                      type="text"
                      placeholder="Search eg: infy bse, nifty fut, nifty weekly, gold mcx"
                      autoCorrect="off"
                      icon="search"
                      autoComplete="off"
                      label=""
                      rules=""
                      dynamicwidthsize="8"
                    />
                    <span className="icon icon-search"></span>
                  </div>
                  <span className="counts">{SideBarData.length} / 50</span>
                </div>
              </div>
              <div className="instruments">
                {" "}
                {positionsLoading && <div className="loading-bar"></div>}
                {!positionsLoading && (
                  <div className="vddl-list list-flat">
                    {SideBarData.map((item, index) => (
                      <div
                        key={index}
                        className={`vddl-draggable instrument index  index${
                          index + 1
                        } ${item.change[0] === "-" ? "down" : "up"}`}
                        draggable="true"
                      >
                        <div>
                          <span className="actions">
                            <span data-balloon="Buy (B)" data-balloon-pos="up">
                              <button type="button" className="button-blue buy">
                                B{" "}
                              </button>
                            </span>{" "}
                            <span data-balloon="Sell (S)" data-balloon-pos="up">
                              <button
                                type="button"
                                className="button-orange sell"
                              >
                                S{" "}
                              </button>
                            </span>{" "}
                            <span
                              data-balloon="Market Depth (D)"
                              data-balloon-pos="up"
                            >
                              <button type="button" className="button-outline">
                                <span className="icon icon-align-center"></span>{" "}
                              </button>
                            </span>{" "}
                            <span
                              data-balloon="Chart (C)"
                              data-balloon-pos="up"
                            >
                              <button type="button" className="button-outline">
                                <span className="icon icon-trending-up"></span>{" "}
                              </button>
                            </span>{" "}
                            <span
                              data-balloon="Delete (del)"
                              data-balloon-pos="up"
                            >
                              <button type="button" className="button-outline">
                                <span className="icon icon-trash"></span>{" "}
                              </button>
                            </span>{" "}
                            <div id="context-menu-783" className="context-menu">
                              <div className="context-menu-button-wrap">
                                <button
                                  type="button"
                                  className="context-menu-button button-outline"
                                  data-balloon="More"
                                  data-balloon-pos="up"
                                >
                                  <span className="icon icon-ellipsis"></span>{" "}
                                </button>
                              </div>{" "}
                            </div>
                          </span>
                          <div className="info">
                            <span className="symbol">
                              <span>
                                <span className="nice-name">
                                  {item.tradingsymbol}
                                </span>{" "}
                                {item.exchange && (
                                  <span className="exchange">
                                    {item.exchange?.toUpperCase()}
                                  </span>
                                )}
                                {item.event && (
                                  <span className="events-label text-blue">
                                    {"  "}
                                    EVENT
                                  </span>
                                )}
                              </span>{" "}
                            </span>{" "}
                            <span className="price">
                              <span>
                                <span className="dim">
                                  {item.change}{" "}
                                  <span className="text-xxsmall">%</span>
                                </span>
                              </span>{" "}
                              {item.change > 0 ? (
                                <span className="change-indicator icon icon-chevron-up"></span>
                              ) : (
                                <span className="change-indicator icon icon-chevron-down"></span>
                              )}{" "}
                              <span className="last-price">{item.price}</span>
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <ul className="marketwatch-selector list-flat">
                <li
                  className="item selected"
                  data-balloon="Watchlist 1"
                  data-balloon-pos="up"
                >
                  1
                </li>
                <li
                  className="item"
                  data-balloon="Watchlist 2"
                  data-balloon-pos="up"
                >
                  2
                </li>
                <li
                  className="item"
                  data-balloon="Watchlist 3"
                  data-balloon-pos="up"
                >
                  3
                </li>
                <li
                  className="item"
                  data-balloon="Watchlist 4"
                  data-balloon-pos="up"
                >
                  4
                </li>
                <li className="item" data-balloon="5" data-balloon-pos="up">
                  5
                </li>
                <li className="item" data-balloon="MW 6" data-balloon-pos="up">
                  6
                </li>
                <li className="item" data-balloon="MW 7" data-balloon-pos="up">
                  7
                </li>
                <li className="settings">
                  <span
                    tooltip-pos="left"
                    data-balloon="Marketwatch settings"
                    data-balloon-pos="left"
                  >
                    <span className="settings-button icon icon-settings"></span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-right positions">
            <div className="page-nav">
              {/*  eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/orders"
                ariaCurrent="page"
                className="router-link-exact-active router-link-active"
              >
                <span>Orders</span>
              </a>{" "}
              <a href="/orders/gtt" className="">
                <span>GTT</span>
              </a>{" "}
              <a href="/orders/baskets" className="">
                <span>Baskets</span>
              </a>{" "}
              <a href="/orders/sip" className="">
                <span>SIP</span>
              </a>{" "}
              <a href="/orders/alerts" className="">
                <span>Alerts</span>
              </a>{" "}
              <a href="/orders/ipo" className="">
                <span>IPO</span>
              </a>
            </div>
            <div className="page-content">
              {/* <div className="notice layer-2">
                <ul>
                  <li>
                    <span>
                      Markets will remain closed on the 15th August, 2022 on
                      account of Independence Day.{" "}
                      <a
                        href="https://zerodha.com/marketintel/bulletin/329588/trading-holiday-on-account-of-independence-day"
                        target="_blank"
                      >
                        Read more
                      </a>
                      .
                    </span>
                  </li>
                  <li>
                    <span>
                      Due to the settlement holiday on 16th August, 2022{" "}
                      <a
                        href="https://zerodha.com/marketintel/bulletin/329589/settlement-holiday-on-account-of-parsi-new-year-on-august-16-2022"
                        target="_blank"
                      >
                        Parsi New year
                      </a>
                      , your account balance on Kite will not include the
                      intraday profits made in equity segments on the 11th and
                      the 12th of August, 2022. It will be updated on the 17th
                      and 18th of August, 2022, respectively. You can check your
                      fund statement on{" "}
                      <a
                        href="https://console.zerodha.com/funds/statement"
                        target="_blank"
                      >
                        Console
                      </a>{" "}
                      to see the unsettled credits in your account.
                    </span>
                  </li>
                </ul>
              </div> */}
              {EventMessage && (
                <div className="notice layer-2">
                  <ul>
                    <li>
                      <span>
                        {EventMessage}{" "}
                        <a href="https://zerodha.com/marketintel/bulletin/329588/trading-holiday-on-account-of-independence-day">
                          Read more
                        </a>
                        .
                      </span>
                    </li>
                  </ul>
                </div>
              )}
              <div className="orderbook">
                {positionsLoading && (
                  <header className="row data-table-header">
                    <h3 className="page-title small">
                      <span>Orders</span>
                      <div className="su-loader dim">
                        <span className="dot-spinner">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </span>
                      </div>
                    </h3>
                  </header>
                )}
                {/* <div className="empty-state">
                  
                  <img src="/positions.svg" className="empty-img" />
                  <div>
                    <p>You don't have any positions yet</p>
                  </div>
                  <button type="button" className="button-blue">
                    Get started
                  </button>
                  <div className="footer">
                    <div>
                      <a
                        target="_blank"
                        href="https://console.zerodha.com/portfolio/positions"
                        className="inline-image-text"
                      >
                        <img alt="alt" src="console.svg" />
                        Analytics
                      </a>
                    </div>
                    <div></div>
                  </div>
                </div> */}
                {!positionsLoading && (
                  <>
                    <section className="open-positions table-wrapper">
                      <header className="row data-table-header">
                        <h3 className="page-title small">
                          Executed orders{" "}
                          <span className="count">({OrderPage.length})</span>
                        </h3>
                      </header>

                      <div>
                        <div
                          tabIndex="1"
                          className="data-table fold-header sticky"
                        >
                          <div className="toolbar">
                            <span className="search">
                              <span className="icon icon-search"></span>
                              <span
                                className="clear icon icon-times"
                                style={{ display: "none" }}
                              ></span>
                              <div className="search-input su-input-group">
                                <input
                                  type="search"
                                  placeholder="Search"
                                  autoCorrect="off"
                                  maxLength="15"
                                  label=""
                                  rules=""
                                  dynamicwidthsize="8"
                                />
                              </div>
                            </span>
                            <span className="toolbar-before">
                              <a
                                href="https://console.zerodha.com/portfolio/positions"
                                className="item"
                              >
                                <span className="icon">
                                  <img
                                    src="/console.svg"
                                    style={{ height: "9px" }}
                                  />
                                </span>
                                <span> View history</span>{" "}
                              </a>
                            </span>{" "}
                            <span className="download">
                              <span className="download-csv link">
                                <span className="icon icon-download"></span>
                                Download
                                <a href="#" className="hide download-link"></a>
                              </span>
                            </span>
                          </div>
                          <table>
                            <thead>
                              {/* <tr>
                                <th className="order-timestamp sortable ">
                                  <span>Time</span>
                                </th>
                                <th className="transaction-type  sortable">
                                  <span>Type</span>
                                </th>
                                <th className="instrument  sortable">
                                  <span>Instrument</span>
                                </th>
                                <th className="product  sortable">
                                  <span>Product</span>
                                </th>
                                <th className="quantity right  sortable">
                                  <span>Qty.</span>
                                </th>
                                <th className="average-price right  sortable table-border">
                                  <span>Avg. price</span>
                                </th>
                                <th className="order-status right sortable ">
                                  <span>Status</span>
                                </th>
                              </tr> */}
                              <tr>
                                <th className="order-timestamp sortable">
                                  <span>Time</span>
                                </th>
                                <th className="transaction-type sortable">
                                  <span>Type</span>
                                </th>
                                <th className="instrument sortable">
                                  <span>Instrument</span>
                                </th>
                                <th className="product sortable">
                                  <span> Product </span>
                                </th>
                                <th className="quantity right sortable">
                                  <span> Qty. </span>
                                </th>
                                <th className="average-price right sortable table-border">
                                  <span> Avg. price </span>
                                </th>
                                <th className="order-status right sortable">
                                  <span> Status </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {OrderPage.map((card, index) => {
                                return (
                                  <tr key={index} className="">
                                    <td className="order-timestamp">
                                      <span className="time ">{card.time}</span>
                                    </td>
                                    <td className="transaction-type">
                                      <span
                                        className={`text-label small ${
                                          card.type === "BUY" ? "blue" : "red"
                                        }`}
                                      >
                                        {card.type}
                                      </span>
                                    </td>
                                    <td className="instrument">
                                      <span className="tradingsymbol">
                                        {card.tradingsymbol}{" "}
                                        {card.expiryDate !== "" && (
                                          <>
                                            {card.expiryDate}
                                            <sup>
                                              {card.expiryDate === "1"
                                                ? "st"
                                                : card.expiryDate === "2"
                                                ? "nd"
                                                : card.expiryDate === "3"
                                                ? "rd"
                                                : "th"}{" "}
                                              <span className="weekly">w</span>
                                            </sup>{" "}
                                          </>
                                        )}
                                        {card.expiryMonth !== "" &&
                                          MONTHS[
                                            parseInt(card.expiryMonth) - 1
                                          ]}{" "}
                                        {card.placePrice} {card.option}
                                      </span>{" "}
                                      <span className="exchange text-xxsmall dim">
                                        {card.exchange}
                                      </span>
                                      <div
                                        id="context-menu-737"
                                        className="context-menu table"
                                      >
                                        <div className="context-menu-button-wrap">
                                          <span
                                            className="context-menu-button"
                                            data-balloon="Options"
                                            data-balloon-pos="up"
                                          >
                                            <span className="icon icon-ellipsis"></span>
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="product">{card.product}</td>
                                    <td className="quantity right ">
                                      {card.Qty}
                                    </td>
                                    <td className="average-price right table-border">
                                      {/* {parseFloat(card.Avg)..toLocaleString("en-IN", {
                                        minimumFractionDigits: 2,
                                      })} */}
                                      {parseFloat(card.Avg).toLocaleString(
                                        "en-IN",
                                        {
                                          minimumFractionDigits: 2,
                                        }
                                      )}{" "}
                                    </td>
                                    <td className="order-status right ">
                                      <span
                                        className={`${
                                          card.status === "COMPLETE"
                                            ? "order-status-label green"
                                            : "order-status-label red"
                                        } text-label small`}
                                      >
                                        {" "}
                                        {card.status}{" "}
                                      </span>
                                    </td>
                                  </tr>
                                );
                              })}
                              <tr className="show-all-row">
                                <td></td>{" "}
                                <td colSpan="7" className="show-all-col"></td>
                              </tr>
                            </tbody>
                            {/* <tfoot>
                              <tr>
                                <td colSpan="3"></td> <td colSpan="2"></td>
                                <td className="text-right">Total</td>
                                <td
                                  className={`text-right ${
                                    plTotal > 0 ? "text-green" : "text-red"
                                  }`}
                                >
                                  {plTotal > 0 && "+"}
                                  {plTotal.toLocaleString("en-IN", {
                                    minimumFractionDigits: 2,
                                  })}
                                </td>
                                <td colSpan="2"></td>
                              </tr>
                            </tfoot> */}
                          </table>
                        </div>
                      </div>
                    </section>
                    <section className="trades-wrap table-wrapper">
                      <header className="row data-table-header">
                        <h3 className="page-title small">
                          <span className="title">
                            <span>Trades</span>{" "}
                            <span className="icon icon-chevron-down"></span>
                          </span>{" "}
                        </h3>
                      </header>{" "}
                    </section>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="baskets"></div>
        <div></div>

        <div className="orders-basket"></div>
      </div>

      <div className="su-toast-groups">
        <div className="su-toast-group su-toast-top-left">
          <div></div>
        </div>
        <div className="su-toast-group su-toast-top-center">
          <div></div>
        </div>
        <div className="su-toast-group su-toast-top-right">
          <div></div>
        </div>
        <div className="su-toast-group su-toast-bottom-left">
          <div></div>
        </div>
        <div className="su-toast-group su-toast-bottom-center">
          <div></div>
        </div>
        <div className="su-toast-group su-toast-bottom-right">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;

let MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
