import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import { cards, headerData, SideBarData } from "../data";

function App() {
  const [positionsLoading, setPositionLoading] = useState(true);
  const [initialLoader, setInitialLoader] = useState(true);
  const [plTotal, setPlTotal] = useState(0);
  let total = 0;
  const arr = cards.forEach((card) => {
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
  }, []);

  if (initialLoader) {
    return (
      <div className="positionsPage">
        <Head>
          <title>Positions / Kite</title>
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
        <title>Positions / Kite</title>
      </Head>
      <noscript>
        <strong>
          We're sorry but kite doesn't work properly without JavaScript enabled.
          Please enable it to continue.
        </strong>
      </noscript>
      <div id="app" className="app page-positions">
        <div className="header">
          <div className="wrapper">
            <div className="header-left">
              <div className="pinned-instruments">
                {headerData.map((header) => (
                  <div className="instrument-widget">
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
                          header.change > 0
                            ? "up"
                            : header.change !== 0
                            ? "down"
                            : ""
                        }`}
                      >
                        {header.price.toFixed(2)}
                      </span>
                      <span className={`price-change `}>
                        <span className={`change-percent super-dim`}>
                          {" "}
                          {header.change.toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                          })}{" "}
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
                <a href="/orders" className="orders-nav-item">
                  <span>Orders</span>{" "}
                </a>{" "}
                <a href="/holdings" className="">
                  <span>Holdings</span>
                </a>{" "}
                <a
                  href="/positions"
                  aria-current="page"
                  className="router-link-exact-active router-link-active"
                >
                  <span>Positions</span>
                </a>{" "}
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
                        src="https://s3.ap-south-1.amazonaws.com/zerodha-kite-blobs/avatars/4hQAAht2kIsZkhL9fWEsxMGBznOHvzdu.png"
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
                        className={`vddl-draggable instrument index  index${
                          index + 1
                        } ${item.change > 0 ? "up" : "down"}`}
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
                                  {item.change.toLocaleString("en-IN", {
                                    minimumFractionDigits: 2,
                                  })}{" "}
                                  <span className="text-xxsmall">%</span>
                                </span>
                              </span>{" "}
                              {item.change > 0 ? (
                                <span className="change-indicator icon icon-chevron-up"></span>
                              ) : (
                                <span className="change-indicator icon icon-chevron-down"></span>
                              )}{" "}
                              <span className="last-price">
                                {item.price.toFixed(2)}
                              </span>
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
              <div className="notice layer-2">
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
                </ul>
              </div>
              <div className="positions">
                {positionsLoading && (
                  <header className="row data-table-header">
                    <h3 className="page-title small">
                      <span>Positions</span>
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
                          Positions{" "}
                          <span className="count">({cards.length})</span>
                        </h3>
                      </header>
                      {/* <div className="cards">
                        <div className="toolbar">
                          <a
                            target="_blank"
                            href="https://console.zerodha.com/portfolio/positions"
                            className="item"
                          >
                            <span className="icon">
                              <img
                                src="/console.svg"
                                style={{ height: "14px" }}
                              />
                            </span>
                            <span>Analytics</span>
                          </a>
                        </div>
                        {cards.map((card) => {
                          return (
                            <div className="card">
                              <div className="top flex">
                                <div className="flex4">
                                  <span className="text-label small aqua product-label sienna-brown">
                                    {card.product}
                                  </span>
                                  <span className="dim text-xxsmall">Qty.</span>
                                  <span className="text-xxsmall">
                                    {card.Qty}
                                  </span>
                                </div>
                                <div className="flex6 text-right">
                                  <span className="dim text-xxsmall">LTP</span>
                                  <span> {card.LTP.toLocaleString('en-IN',{minimumFractionDigits:2})}</span>
                                </div>
                              </div>
                              <div className="middle flex">
                                <div className="flex6">
                                  <span>{card.tradingsymbol}</span>
                                  <span className="dim text-xxsmall">
                                    {card.exchange}
                                  </span>
                                </div>
                                <div className="flex3">
                                  <span>
                                    <span className="dim">₹</span>
                                    {card.Avg.toLocaleString("en-IN", {
                                          minimumFractionDigits: 2,
                                        })}
                                  </span>
                                </div>
                                <div className="flex3 text-right">
                                  <span className="dim text-xxsmall text-red open change-percent">
                                    {card.pl.toLocaleString('en-IN',{minimumFractionDigits:2})}%
                                  </span>
                                  <span>
                                    <span>{card.Chg}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        <div className="card">
                          <div className="top flex">
                            <div className="flex4">
                              <span className="text-label small aqua product-label amber">
                                MIS
                              </span>
                              <span className="dim text-xxsmall"> Qty.</span>
                              <span className="text-xxsmall">0</span>
                            </div>
                            <div className="flex6 text-right">
                              <span className="dim text-xxsmall">LTP</span>
                              <span> 8.73</span>
                            </div>
                          </div>
                          <div className="middle flex">
                            <div className="flex6">
                              <span>IDEA</span>
                              <span className="dim text-xxsmall">BSE</span>
                            </div>
                            <div className="flex3">
                              <span>–</span>
                            </div>
                            <div className="flex3 text-right">
                              <span className="dim text-xxsmall closed greyed change-percent"></span>
                              <span>
                                <span>-0.01</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="total">
                          <span className="dim">Total P/L</span>
                          <div className="text-red">-0.18</div>
                        </div>
                      </div> */}
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
                                target="_blank"
                                href="https://console.zerodha.com/portfolio/positions"
                                className="item"
                              >
                                <span className="icon">
                                  <img
                                    src="/console.svg"
                                    style={{ height: "9px" }}
                                  />
                                </span>
                                <span> Analytics</span>{" "}
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
                              <tr>
                                <th className="select">
                                  <div className="su-checkbox-group">
                                    <input
                                      id="selectall"
                                      type="checkbox"
                                      className="su-checkbox"
                                    />{" "}
                                    <label
                                      for="selectall"
                                      className="su-checkbox-label"
                                    >
                                      <span className="su-checkbox-box">
                                        <span className="su-checkbox-tick"></span>
                                      </span>
                                    </label>
                                  </div>
                                </th>{" "}
                                <th className="product sortable sortable">
                                  <span>Product</span>
                                </th>
                                <th className="instrument sortable sortable">
                                  <span>Instrument</span>
                                </th>
                                <th className="quantity right sortable sortable">
                                  <span>Qty.</span>
                                </th>
                                <th className="average-price right sortable sortable">
                                  <span>Avg.</span>
                                </th>
                                <th className="last-price right sortable sortable">
                                  <span>LTP</span>
                                </th>
                                <th className="pnl right sortable sortable">
                                  <span>P&amp;L</span>
                                </th>
                                <th className="change-percent right  sortable">
                                  <span>Chg.</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* <tr className="">
                                <td className="select">
                                  <div className="su-checkbox-group">
                                    <input
                                      id="position.12175106.MIS2"
                                      type="checkbox"
                                      disabled="disabled"
                                      className="su-checkbox"
                                    />{" "}
                                    <label
                                      for="position.12175106.MIS2"
                                      className="su-checkbox-label"
                                    >
                                      <span className="su-checkbox-box">
                                        <span className="su-checkbox-tick"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>{" "}
                                <td className="closed greyed product">
                                  <span className="text-label small aqua amber">
                                    MIS
                                  </span>
                                </td>{" "}
                                <td className="closed greyed instrument">
                                  <span className="tradingsymbol">
                                    BANKNIFTY 18
                                    <sup>
                                      th <span className="weekly">w</span>
                                    </sup>{" "}
                                    AUG 39000 PE
                                  </span>{" "}
                                  <span className="exchange text-xxsmall dim">
                                    NFO
                                  </span>{" "}
                                </td>{" "}
                                <td className="closed greyed quantity right">0</td>{" "}
                                <td className="closed greyed average-price right">
                                  314.00
                                </td>{" "}
                                <td className="closed greyed last-price right">
                                  299.20
                                </td>{" "}
                                <td className="text-green closed greyed pnl right">
                                  <span>+2,475.00</span>
                                </td>
                                <td className="closed greyed change-percent change-percent right">
                                  <span>-14.00%</span>
                                </td>
                              </tr> */}
                              {cards.map((card) => {
                                if (card.status !== "closed") {
                                  return (
                                    <tr className="">
                                      <td className="open product">
                                        <span className="text-label small aqua sienna-brown">
                                          {card.product}
                                        </span>
                                      </td>
                                      <td className="open instrument">
                                        <span className="tradingsymbol">
                                          {card.tradingsymbol}{" "}
                                          {card.expiryDate && (
                                            <>
                                              {card.expiryDate.toLocaleString(
                                                "en-IN",
                                                {
                                                  minimumIntegerDigits: 2,
                                                }
                                              )}
                                              <sup>
                                                th{" "}
                                                <span className="weekly">
                                                  w
                                                </span>
                                              </sup>{" "}
                                            </>
                                          )}
                                          {card.expiryMonth &&
                                            MONTHS[card.expiryMonth - 1]}{" "}
                                          {card.placePrice} {card.option}
                                        </span>{" "}
                                        <span className="exchange text-xxsmall dim">
                                          {card.exchange}
                                        </span>
                                      </td>
                                      <td className="text-buy open quantity right">
                                        {card.Qty}
                                      </td>
                                      <td className="open average-price right">
                                        {card.Avg.toLocaleString("en-IN", {
                                          minimumFractionDigits: 2,
                                        })}
                                      </td>
                                      <td className="open last-price right">
                                        {card.LTP.toLocaleString("en-IN", {
                                          minimumFractionDigits: 2,
                                        })}
                                      </td>
                                      <td className="text-red open pnl right">
                                        <span>
                                          {card.pl > 0 && "+"}
                                          {card.pl.toLocaleString("en-IN", {
                                            minimumFractionDigits: 2,
                                          })}
                                        </span>
                                      </td>
                                      <td className="text-red open change-percent change-percent right">
                                        <span>
                                          {card.Chg.toLocaleString("en-IN", {
                                            minimumFractionDigits: 2,
                                          })}
                                          %
                                        </span>
                                      </td>
                                    </tr>
                                  );
                                } else {
                                  return (
                                    <tr className="row">
                                      <td className="select">
                                        <div className="su-checkbox-group">
                                          <input
                                            id="position.136402436.MIS1"
                                            type="checkbox"
                                            disabled="disabled"
                                            className="su-checkbox"
                                          />
                                          <label
                                            htmlFor="position.136402436.MIS1"
                                            className="su-checkbox-label"
                                          >
                                            <span className="su-checkbox-box">
                                              <span className="su-checkbox-tick"></span>
                                            </span>
                                          </label>
                                        </div>
                                      </td>
                                      <td className="closed greyed product">
                                        <span className="text-label small aqua amber">
                                          {card.product}
                                        </span>
                                      </td>
                                      <td className="closed greyed instrument">
                                        <span className="tradingsymbol">
                                          {card.tradingsymbol}{" "}
                                          {card.expiryDate && (
                                            <>
                                              {card.expiryDate.toLocaleString(
                                                "en-IN",
                                                {
                                                  minimumIntegerDigits: 2,
                                                }
                                              )}
                                              <sup>
                                                th{" "}
                                                <span className="weekly">
                                                  w
                                                </span>
                                              </sup>{" "}
                                            </>
                                          )}
                                          {card.expiryMonth &&
                                            MONTHS[card.expiryMonth - 1]}{" "}
                                          {card.placePrice} {card.option}
                                        </span>{" "}
                                        <span className="exchange text-xxsmall dim">
                                          {card.exchange}
                                        </span>
                                        <div
                                          id="context-menu-233"
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
                                      </td>{" "}
                                      <td className="closed greyed quantity right">
                                        {card.Qty}
                                      </td>
                                      <td className="closed greyed average-price right">
                                        {card.Avg.toLocaleString("en-IN", {
                                          minimumFractionDigits: 2,
                                        })}
                                      </td>
                                      <td className="closed greyed last-price right">
                                        {card.LTP.toLocaleString("en-IN", {
                                          minimumFractionDigits: 2,
                                        })}
                                      </td>
                                      <td className="text-red closed greyed pnl right">
                                        <span>
                                          {card.pl > 0 && "+"}

                                          {card.pl.toLocaleString("en-IN", {
                                            minimumFractionDigits: 2,
                                          })}
                                        </span>
                                      </td>
                                      <td className="closed greyed change-percent change-percent right">
                                        <span>
                                          {card.Chg.toLocaleString("en-IN", {
                                            minimumFractionDigits: 2,
                                          })}
                                          %
                                        </span>
                                      </td>
                                    </tr>
                                  );
                                }
                              })}
                            </tbody>
                            <tfoot>
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
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </section>
                    <section className="day-positions table-wrapper">
                      <header className="row data-table-header">
                        <h3 className="page-title small">
                          Day's history <span>({cards.length})</span>
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
                              <tr>
                                <th className="product sortable">
                                  <span>Product</span>
                                </th>
                                <th className="instrument sortable">
                                  <span>Instrument</span>
                                </th>
                                <th className="quantity right sortable">
                                  <span>Qty.</span>
                                </th>
                                <th className="average-price right sortable">
                                  <span>Avg.</span>
                                </th>
                                <th className="last-price right sortable">
                                  <span>LTP</span>
                                </th>
                                <th className="pnl right sortable">
                                  <span>P&amp;L</span>
                                </th>
                                <th className="change-percent right sortable">
                                  <span>Chg.</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {cards.map((card) => {
                                if (card.status !== "closed") {
                                  return (
                                    <tr className="">
                                      <td className="select">
                                        <div className="su-checkbox-group">
                                          <input
                                            id="position.151064324.CNC0"
                                            type="checkbox"
                                            className="su-checkbox"
                                          />
                                          <label
                                            htmlFor="position.151064324.CNC0"
                                            className="su-checkbox-label"
                                          >
                                            <span className="su-checkbox-box">
                                              <span className="su-checkbox-tick"></span>
                                            </span>
                                          </label>
                                        </div>
                                      </td>
                                      <td className="open product">
                                        <span className="text-label small aqua sienna-brown">
                                          {card.product}
                                        </span>
                                      </td>
                                      <td className="open instrument">
                                        <span className="tradingsymbol">
                                          {card.tradingsymbol}{" "}
                                          {card.expiryDate && (
                                            <>
                                              {card.expiryDate.toLocaleString(
                                                "en-IN",
                                                {
                                                  minimumIntegerDigits: 2,
                                                }
                                              )}
                                              <sup>
                                                th{" "}
                                                <span className="weekly">
                                                  w
                                                </span>
                                              </sup>{" "}
                                            </>
                                          )}
                                          {card.expiryMonth &&
                                            MONTHS[card.expiryMonth - 1]}{" "}
                                          {card.placePrice} {card.option}
                                        </span>{" "}
                                        <span className="exchange text-xxsmall dim">
                                          {card.exchange}
                                        </span>
                                        {/* <span className="holding-tag text-label text-label-outline">
                                          <a
                                            href="https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile/articles/purchase-of-stocks-for-delivery"
                                            target="_blank"
                                            data-balloon="Stock will show under Holdings tomorrow"
                                            data-balloon-pos="up"
                                            data-balloon-length="large"
                                          >
                                            HOLDING
                                          </a>
                                        </span> */}
                                      </td>
                                      <td className="text-buy open quantity right">
                                        {card.Qty}
                                      </td>
                                      <td className="open average-price right">
                                        {card.Avg.toLocaleString("en-IN", {
                                          minimumFractionDigits: 2,
                                        })}
                                      </td>
                                      <td className="open last-price right">
                                        {card.LTP.toLocaleString("en-IN", {
                                          minimumFractionDigits: 2,
                                        })}
                                      </td>
                                      <td className="text-red open pnl right">
                                        <span>
                                          {card.pl > 0 && "+"}

                                          {card.pl.toLocaleString("en-IN", {
                                            minimumFractionDigits: 2,
                                          })}
                                        </span>
                                      </td>
                                      <td className="text-red open change-percent change-percent right">
                                        <span>
                                          {card.Chg.toLocaleString("en-IN", {
                                            minimumFractionDigits: 2,
                                          })}
                                          %
                                        </span>
                                      </td>
                                    </tr>
                                  );
                                } else {
                                  return (
                                    <tr className="">
                                      <td className="closed greyed product">
                                        <span className="text-label small aqua amber">
                                          {card.product}
                                        </span>
                                      </td>
                                      <td className="closed greyed instrument">
                                        <span className="tradingsymbol">
                                          {card.tradingsymbol}{" "}
                                          {card.expiryDate && (
                                            <>
                                              {card.expiryDate.toLocaleString(
                                                "en-IN",
                                                {
                                                  minimumIntegerDigits: 2,
                                                }
                                              )}
                                              <sup>
                                                th{" "}
                                                <span className="weekly">
                                                  w
                                                </span>
                                              </sup>{" "}
                                            </>
                                          )}
                                          {card.expiryMonth &&
                                            MONTHS[card.expiryMonth - 1]}{" "}
                                          {card.placePrice} {card.option}
                                        </span>{" "}
                                        <span className="exchange text-xxsmall dim">
                                          {card.exchange}
                                        </span>
                                      </td>
                                      <td className="closed greyed quantity right">
                                        {card.Qty}
                                      </td>
                                      <td className="closed greyed average-price right">
                                        {card.Avg.toLocaleString("en-IN", {
                                          minimumFractionDigits: 2,
                                        })}
                                      </td>
                                      <td className="closed greyed last-price right">
                                        {card.LTP.toLocaleString("en-IN", {
                                          minimumFractionDigits: 2,
                                        })}
                                      </td>
                                      <td className="text-red closed greyed pnl right">
                                        <span>
                                          {card.pl > 0 && "+"}

                                          {card.pl.toLocaleString("en-IN", {
                                            minimumFractionDigits: 2,
                                          })}
                                        </span>
                                      </td>
                                      <td className="closed greyed change-percent change-percent right">
                                        <span>
                                          {card.Chg.toLocaleString("en-IN", {
                                            minimumFractionDigits: 2,
                                          })}
                                          %
                                        </span>
                                      </td>
                                    </tr>
                                  );
                                }
                              })}
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colSpan="4"></td>
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
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </section>
                    {/* <section
                      className="positions-breakdown"
                      style={{ width: "100%" }}
                    >
                      <h3 className="page-title small">Breakdown</h3>
                      <div className="bar-chart">
                        <div className="chart">
                          <div
                            style={{
                              position: "relative",
                              height: "60px",
                            }}
                          >
                            <div className="bar bar-positive">
                              {cards.map((card, index) => {
                                if (card.pl > 0) {
                                  return (
                                    <>
                                      <div
                                        className="rect"
                                        data-balloon-length="small"
                                        data-balloon-pos="up"
                                        data-balloon={
                                          "P&amp;L: " + card.pl.toLocaleString('en-IN',{minimumFractionDigits:2})
                                        }
                                        style={{
                                          padding: 0,
                                          position: "absolute",
                                          left: `calc(50% - ${
                                            card.pl * 268.195
                                          }px`,
                                          top: 20 * (index + 1) + "px",
                                          width: `${card.pl * 268.195}px`,
                                          height: "10px",
                                        }}
                                      ></div>
                                      <div
                                        className="label"
                                        data-balloon-length="small"
                                        data-balloon-pos="up"
                                        data-balloon={
                                          "P&amp;L: " + card.pl.toLocaleString('en-IN',{minimumFractionDigits:2})
                                        }
                                        style={{
                                          position: "absolute",
                                          textAlign:
                                            Math.sign(card.pl) < 0
                                              ? "right"
                                              : "left",
                                          left:
                                            Math.sign(card.pl) < 0
                                              ? "0"
                                              : "50%",
                                          top: 20 * (index + 1) + "px",
                                          width: "50%",
                                          height: "10px",
                                        }}
                                      >
                                        {card.product} ({card.tradingsymbol})
                                      </div>
                                    </>
                                  );
                                }
                              })}
                            </div>

                            <div className="bar bar-negative">
                              {cards.map((card, index) => {
                                if (card.pl < 0) {
                                  return (
                                    <>
                                      <div
                                        className="rect"
                                        data-balloon-length="small"
                                        data-balloon-pos="up"
                                        data-balloon={
                                          "P&amp;L: " + card.pl.toLocaleString('en-IN',{minimumFractionDigits:2})
                                        }
                                        style={{
                                          padding: 0,
                                          position: "absolute",
                                          left: "50%",
                                          top: 20 * (index + 1) + "px",
                                          width: `${-card.pl * 268.195}px`,
                                          height: "10px",
                                        }}
                                      ></div>
                                      <div
                                        className="label"
                                        data-balloon-length="small"
                                        data-balloon-pos="up"
                                        data-balloon={
                                          "P&amp;L: " + card.pl.toLocaleString('en-IN',{minimumFractionDigits:2})
                                        }
                                        style={{
                                          position: "absolute",
                                          textAlign:
                                            Math.sign(card.pl) < 0
                                              ? "right"
                                              : "left",
                                          left:
                                            Math.sign(card.pl) < 0
                                              ? "0"
                                              : "50%",
                                          top: 20 * (index + 1) + "px",
                                          width: "50%",
                                          height: "10px",
                                        }}
                                      >
                                        {card.product} ({card.tradingsymbol})
                                      </div>
                                    </>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </section> */}
                  </>
                )}
                {!positionsLoading && (
                  <section className="positions-breakdown">
                    <h3 className="page-title small">Breakdown</h3>{" "}
                    <div className="bar-chart">
                      <div className="chart">
                        <div
                          style={{
                            position: "relative",
                            width: "896px",
                            height: "60px",
                          }}
                        >
                          <div className="bar bar-negative">
                            <div
                              className="rect"
                              data-balloon-length="small"
                              data-balloon-pos="up"
                              data-balloon="P&amp;L: -0.01"
                              style={{
                                position: "absolute",
                                left: "347.824px",
                                top: "40px",
                                width: "100.176px",
                                height: "10px",
                              }}
                            ></div>
                            <div
                              className="label"
                              data-balloon-length="small"
                              data-balloon-pos="up"
                              data-balloon="P&amp;L: -0.01"
                              style={{
                                position: "absolute",
                                left: "448px",
                                top: "40px",
                                width: "448px",
                                height: "10px",
                              }}
                            >
                              IDEA (MIS)
                            </div>
                          </div>
                          <div className="bar bar-negative">
                            <div
                              className="rect"
                              data-balloon-length="small"
                              data-balloon-pos="up"
                              data-balloon="P&amp;L: -0.17"
                              style={{
                                position: "absolute",
                                left: "34.9644px",
                                top: "10px",
                                width: "413.036px",
                                height: "10px",
                              }}
                            ></div>
                            <div
                              className="label"
                              data-balloon-length="small"
                              data-balloon-pos="up"
                              data-balloon="P&amp;L: -0.17"
                              style={{
                                position: "absolute",
                                left: "448px",
                                top: "10px",
                                width: "448px",
                                height: "10px",
                              }}
                            >
                              GOLDBEES (CNC)
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </section>
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
