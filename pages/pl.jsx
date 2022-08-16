import { useEffect, useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/entry.nostyle";
function pl() {
  const [value, onChange] = useState([new Date(), new Date()]);

  useEffect(() => {
    document.querySelector("html").style.fontSize = "87.5%";
  }, []);
  return (
    <div className="plPage">
      <div id="init_loader" className="loader" style={{ display: "none" }}>
        <div className="spinner">
          <img src="/logo.png" />
          <div className="su-loader">
            <span className="dot-spinner">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </div>
      </div>
      <div id="app">
        <div className="header">
          <div className="wrapper">
            <div className="header-right menu-closed">
              <a href="https://console.zerodha.com/dashboard" className="logo">
                <img src="/logo.svg" />
              </a>
              <a
                href="https://console.zerodha.com/#"
                className="toggle-mobile-menu"
              >
                <div id="nav-icon4">
                  <span></span> <span></span> <span></span>
                </div>
              </a>{" "}
              <div className="app-nav hide-on-mobile">
                <a href="https://console.zerodha.com/dashboard" className="">
                  <span>Dashboard </span>
                </a>{" "}
                <a
                  href="https://console.zerodha.com/"
                  className="dropdown-label portfolio-label"
                >
                  <span className="portfolio-id">Portfolio</span>
                </a>{" "}
                <a
                  href="https://console.zerodha.com/"
                  className="dropdown-label reports-label router-link-active"
                >
                  <span className="reports-id">Reports</span>
                </a>{" "}
                <a
                  href="https://console.zerodha.com/"
                  className="dropdown-label funds-label"
                >
                  <span className="funds-id">Funds</span>
                </a>{" "}
                <a href="https://console.zerodha.com/account" className="">
                  <span>Account</span>
                </a>
              </div>
              <div className="right-nav hide-on-mobile">
                <div className="user-nav perspective">
                  <a
                    href="https://console.zerodha.com/"
                    className="dropdown-label user-id"
                  >
                    <div id="avatar-17" className="profile-avatar">
                      <img
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
                    </div>
                    <span id="userDetails" name="Vraj">
                      VZ7786
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="wrapper">
          <div className="page-content ">
            <div className="page-container pnl">
              <h1>
                <img src="/bar-chart.svg" className="pnl-head-icon" /> P&amp;L
              </h1>
              <hr className="header-hr" />

              <div className="section input-heatmap-section">
                <form>
                  <div className="inputcontainer row">
                    <div className="two columns su-input-group  su-static-label">
                      <label className="su-input-label">Segment</label>{" "}
                      <select>
                        <option value="" disabled="disabled">
                          Select segment
                        </option>
                        <option value="EQ">Equity</option>
                        <option value="FO">Futures &amp; Options</option>
                        <option value="CDS">Currency</option>
                        <option value="COM">Commodity</option>
                        <option value="MF">Mutual funds</option>
                      </select>
                    </div>
                    <div className="two columns su-input-group  su-static-label">
                      <label className="su-input-label">P&amp;L</label>{" "}
                      <select>
                        <option value="" disabled="disabled">
                          Select view
                        </option>
                        <option value="combined">Combined</option>
                        <option value="realized">Realised P&amp;L</option>
                        <option value="unrealized">Unrealised P&amp;L</option>
                      </select>
                    </div>
                    <div className="two columns">
                      <div className="su-input-group su-static-label">
                        <label className="su-input-label">Symbol</label>
                        <div className="">
                          <input
                            type="text"
                            placeholder="eg: RELIANCE, INFY"
                            autoCorrect="off"
                            maxLength="25"
                            step="1"
                            noerror="true"
                            staticlabel="true"
                            animate="true"
                            label="Symbol"
                            rules=""
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="two-half columns su-input-group  su-static-label">
                      <label className="su-input-label">Date range</label>
                      {/* <div
                        className="mx-datepicker mx-datepicker-range"
                        not-before="2017-04-01"
                        not-after="2022-12-31"
                      >
                        <div className="mx-input-wrapper">
                          <input
                            name="date"
                            type="text"
                            autoComplete="off"
                            placeholder="Select range"
                            className="mx-input"
                          />{" "}
                          <span className="mx-input-append">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              viewBox="0 0 200 200"
                              className="mx-calendar-icon"
                            >
                              <rect
                                x="13"
                                y="29"
                                rx="14"
                                ry="14"
                                width="174"
                                height="158"
                                fill="transparent"
                              ></rect>
                              <line x1="46" x2="46" y1="8" y2="50"></line>
                              <line x1="154" x2="154" y1="8" y2="50"></line>
                              <line
                                x1="13"
                                x2="187"
                                y1="70"
                                y2="70"
                              ></line>{" "}
                              <text
                                x="50%"
                                y="135"
                                fontSize="90"
                                strokeWidth="1"
                                textAnchor="middle"
                                dominantBaseline="middle"
                              >
                                9
                              </text>
                            </svg>
                          </span>{" "}
                          <span className="mx-input-append mx-clear-wrapper">
                            <i className="mx-input-icon mx-clear-icon"></i>
                          </span>
                        </div>
                        <div
                          className="mx-datepicker-popup"
                          style={{ display: "none" }}
                        >
                          <div className="mx-shortcuts-wrapper">
                            <button type="button" className="mx-shortcuts">
                              last 7 days
                            </button>
                            <button type="button" className="mx-shortcuts">
                              last 30 days
                            </button>{" "}
                            <button type="button" className="mx-apply">
                              Apply
                            </button>
                          </div>
                          <div className="mx-range-wrapper">
                            <div
                              className="mx-calendar mx-calendar-panel-none"
                              style={{
                                boxShadow: "rgba(0, 0, 0, 0.1) 1px 0px",
                              }}
                            >
                              <div className="text-center">
                                <strong>From</strong>
                              </div>
                              <div className="mx-calendar-header">
                                <a className="mx-icon-last-year">«</a>{" "}
                                <a
                                  className="mx-icon-last-month"
                                  style={{ display: "none" }}
                                >
                                  ‹
                                </a>{" "}
                                <a className="mx-icon-next-year">»</a>
                                <a
                                  className="mx-icon-next-month"
                                  style={{ display: "none" }}
                                >
                                  ›
                                </a>{" "}
                                <a
                                  className="mx-current-month"
                                  style={{ display: "none" }}
                                >
                                  Aug
                                </a>{" "}
                                <a
                                  className="mx-current-year"
                                  style={{ display: "none" }}
                                >
                                  2022
                                </a>
                                <a
                                  className="mx-current-year"
                                  style={{ display: "none" }}
                                >
                                  2020 ~ 2029
                                </a>{" "}
                                <a
                                  className="mx-time-header"
                                  style={{ display: "none" }}
                                >
                                  2022-08-02
                                </a>
                              </div>
                              <div className="mx-calendar-content">
                                <table
                                  className="mx-panel mx-panel-date"
                                  style={{ display: "none" }}
                                >
                                  <thead>
                                    <tr>
                                      <th>Sun</th>
                                      <th>Mon</th>
                                      <th>Tue</th>
                                      <th>Wed</th>
                                      <th>Thu</th>
                                      <th>Fri</th>
                                      <th>Sat</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td
                                        title="2022-07-31"
                                        className="cell last-month"
                                      >
                                        31
                                      </td>
                                      <td
                                        title="2022-08-01"
                                        className="cell cur-month"
                                      >
                                        1
                                      </td>
                                      <td
                                        title="2022-08-02"
                                        className="cell cur-month actived"
                                      >
                                        2
                                      </td>
                                      <td
                                        title="2022-08-03"
                                        className="cell cur-month inrange"
                                      >
                                        3
                                      </td>
                                      <td
                                        title="2022-08-04"
                                        className="cell cur-month inrange"
                                      >
                                        4
                                      </td>
                                      <td
                                        title="2022-08-05"
                                        className="cell cur-month inrange"
                                      >
                                        5
                                      </td>
                                      <td
                                        title="2022-08-06"
                                        className="cell cur-month inrange"
                                      >
                                        6
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        title="2022-08-07"
                                        className="cell cur-month inrange"
                                      >
                                        7
                                      </td>
                                      <td
                                        title="2022-08-08"
                                        className="cell cur-month inrange"
                                      >
                                        8
                                      </td>
                                      <td
                                        title="2022-08-09"
                                        className="cell cur-month today inrange"
                                      >
                                        9
                                      </td>
                                      <td
                                        title="2022-08-10"
                                        className="cell cur-month disabled inrange"
                                      >
                                        10
                                      </td>
                                      <td
                                        title="2022-08-11"
                                        className="cell cur-month disabled inrange"
                                      >
                                        11
                                      </td>
                                      <td
                                        title="2022-08-12"
                                        className="cell cur-month disabled inrange"
                                      >
                                        12
                                      </td>
                                      <td
                                        title="2022-08-13"
                                        className="cell cur-month disabled inrange"
                                      >
                                        13
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        title="2022-08-14"
                                        className="cell cur-month disabled inrange"
                                      >
                                        14
                                      </td>
                                      <td
                                        title="2022-08-15"
                                        className="cell cur-month disabled inrange"
                                      >
                                        15
                                      </td>
                                      <td
                                        title="2022-08-16"
                                        className="cell cur-month disabled inrange"
                                      >
                                        16
                                      </td>
                                      <td
                                        title="2022-08-17"
                                        className="cell cur-month disabled inrange"
                                      >
                                        17
                                      </td>
                                      <td
                                        title="2022-08-18"
                                        className="cell cur-month disabled inrange"
                                      >
                                        18
                                      </td>
                                      <td
                                        title="2022-08-19"
                                        className="cell cur-month disabled inrange"
                                      >
                                        19
                                      </td>
                                      <td
                                        title="2022-08-20"
                                        className="cell cur-month disabled inrange"
                                      >
                                        20
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        title="2022-08-21"
                                        className="cell cur-month disabled inrange"
                                      >
                                        21
                                      </td>
                                      <td
                                        title="2022-08-22"
                                        className="cell cur-month disabled inrange"
                                      >
                                        22
                                      </td>
                                      <td
                                        title="2022-08-23"
                                        className="cell cur-month disabled inrange"
                                      >
                                        23
                                      </td>
                                      <td
                                        title="2022-08-24"
                                        className="cell cur-month disabled inrange"
                                      >
                                        24
                                      </td>
                                      <td
                                        title="2022-08-25"
                                        className="cell cur-month disabled inrange"
                                      >
                                        25
                                      </td>
                                      <td
                                        title="2022-08-26"
                                        className="cell cur-month disabled inrange"
                                      >
                                        26
                                      </td>
                                      <td
                                        title="2022-08-27"
                                        className="cell cur-month disabled inrange"
                                      >
                                        27
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        title="2022-08-28"
                                        className="cell cur-month disabled inrange"
                                      >
                                        28
                                      </td>
                                      <td
                                        title="2022-08-29"
                                        className="cell cur-month disabled inrange"
                                      >
                                        29
                                      </td>
                                      <td
                                        title="2022-08-30"
                                        className="cell cur-month disabled inrange"
                                      >
                                        30
                                      </td>
                                      <td
                                        title="2022-08-31"
                                        className="cell cur-month disabled inrange"
                                      >
                                        31
                                      </td>
                                      <td
                                        title="2022-09-01"
                                        className="cell next-month disabled inrange"
                                      >
                                        1
                                      </td>
                                      <td
                                        title="2022-09-02"
                                        className="cell next-month disabled inrange"
                                      >
                                        2
                                      </td>
                                      <td
                                        title="2022-09-03"
                                        className="cell next-month disabled inrange"
                                      >
                                        3
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        title="2022-09-04"
                                        className="cell next-month disabled inrange"
                                      >
                                        4
                                      </td>
                                      <td
                                        title="2022-09-05"
                                        className="cell next-month disabled inrange"
                                      >
                                        5
                                      </td>
                                      <td
                                        title="2022-09-06"
                                        className="cell next-month disabled inrange"
                                      >
                                        6
                                      </td>
                                      <td
                                        title="2022-09-07"
                                        className="cell next-month disabled inrange"
                                      >
                                        7
                                      </td>
                                      <td
                                        title="2022-09-08"
                                        className="cell next-month disabled inrange"
                                      >
                                        8
                                      </td>
                                      <td
                                        title="2022-09-09"
                                        className="cell next-month disabled inrange"
                                      >
                                        9
                                      </td>
                                      <td
                                        title="2022-09-10"
                                        className="cell next-month disabled inrange"
                                      >
                                        10
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div
                                  className="mx-panel mx-panel-year"
                                  style={{ display: "none" }}
                                >
                                  <span className="cell">2020</span>
                                  <span className="cell">2021</span>
                                  <span className="cell actived">2022</span>
                                  <span className="cell disabled">2023</span>
                                  <span className="cell disabled">2024</span>
                                  <span className="cell disabled">2025</span>
                                  <span className="cell disabled">2026</span>
                                  <span className="cell disabled">2027</span>
                                  <span className="cell disabled">2028</span>
                                  <span className="cell disabled">2029</span>
                                </div>
                                <div
                                  className="mx-panel mx-panel-month"
                                  style={{ display: "none" }}
                                >
                                  <span className="cell">Jan</span>
                                  <span className="cell">Feb</span>
                                  <span className="cell">Mar</span>
                                  <span className="cell">Apr</span>
                                  <span className="cell">May</span>
                                  <span className="cell">Jun</span>
                                  <span className="cell">Jul</span>
                                  <span className="cell actived">Aug</span>
                                  <span className="cell disabled">Sep</span>
                                  <span className="cell disabled">Oct</span>
                                  <span className="cell disabled">Nov</span>
                                  <span className="cell disabled">Dec</span>
                                </div>
                                <div
                                  className="mx-panel mx-panel-time"
                                  style={{ display: "none" }}
                                >
                                  <ul
                                    className="mx-time-list"
                                    style={{ width: "33.3333%" }}
                                  >
                                    <li className="cell">00</li>
                                    <li className="cell">01</li>
                                    <li className="cell">02</li>
                                    <li className="cell">03</li>
                                    <li className="cell">04</li>
                                    <li className="cell">05</li>
                                    <li className="cell">06</li>
                                    <li className="cell">07</li>
                                    <li className="cell">08</li>
                                    <li className="cell">09</li>
                                    <li className="cell">10</li>
                                    <li className="cell">11</li>
                                    <li className="cell">12</li>
                                    <li className="cell">13</li>
                                    <li className="cell">14</li>
                                    <li className="cell">15</li>
                                    <li className="cell">16</li>
                                    <li className="cell">17</li>
                                    <li className="cell">18</li>
                                    <li className="cell">19</li>
                                    <li className="cell">20</li>
                                    <li className="cell">21</li>
                                    <li className="cell actived">22</li>
                                    <li className="cell">23</li>
                                  </ul>
                                  <ul
                                    className="mx-time-list"
                                    style={{ width: "33.3333%" }}
                                  >
                                    <li className="cell">00</li>
                                    <li className="cell">01</li>
                                    <li className="cell">02</li>
                                    <li className="cell">03</li>
                                    <li className="cell">04</li>
                                    <li className="cell">05</li>
                                    <li className="cell">06</li>
                                    <li className="cell">07</li>
                                    <li className="cell">08</li>
                                    <li className="cell">09</li>
                                    <li className="cell">10</li>
                                    <li className="cell">11</li>
                                    <li className="cell">12</li>
                                    <li className="cell">13</li>
                                    <li className="cell">14</li>
                                    <li className="cell">15</li>
                                    <li className="cell">16</li>
                                    <li className="cell">17</li>
                                    <li className="cell">18</li>
                                    <li className="cell">19</li>
                                    <li className="cell">20</li>
                                    <li className="cell">21</li>
                                    <li className="cell">22</li>
                                    <li className="cell">23</li>
                                    <li className="cell">24</li>
                                    <li className="cell">25</li>
                                    <li className="cell">26</li>
                                    <li className="cell">27</li>
                                    <li className="cell">28</li>
                                    <li className="cell">29</li>
                                    <li className="cell">30</li>
                                    <li className="cell">31</li>
                                    <li className="cell">32</li>
                                    <li className="cell">33</li>
                                    <li className="cell">34</li>
                                    <li className="cell">35</li>
                                    <li className="cell">36</li>
                                    <li className="cell">37</li>
                                    <li className="cell">38</li>
                                    <li className="cell actived">39</li>
                                    <li className="cell">40</li>
                                    <li className="cell">41</li>
                                    <li className="cell">42</li>
                                    <li className="cell">43</li>
                                    <li className="cell">44</li>
                                    <li className="cell">45</li>
                                    <li className="cell">46</li>
                                    <li className="cell">47</li>
                                    <li className="cell">48</li>
                                    <li className="cell">49</li>
                                    <li className="cell">50</li>
                                    <li className="cell">51</li>
                                    <li className="cell">52</li>
                                    <li className="cell">53</li>
                                    <li className="cell">54</li>
                                    <li className="cell">55</li>
                                    <li className="cell">56</li>
                                    <li className="cell">57</li>
                                    <li className="cell">58</li>
                                    <li className="cell">59</li>
                                  </ul>
                                  <ul
                                    className="mx-time-list"
                                    style={{ width: "33.3333%" }}
                                  >
                                    <li className="cell">00</li>
                                    <li className="cell">01</li>
                                    <li className="cell">02</li>
                                    <li className="cell">03</li>
                                    <li className="cell">04</li>
                                    <li className="cell">05</li>
                                    <li className="cell">06</li>
                                    <li className="cell">07</li>
                                    <li className="cell">08</li>
                                    <li className="cell">09</li>
                                    <li className="cell">10</li>
                                    <li className="cell">11</li>
                                    <li className="cell">12</li>
                                    <li className="cell">13</li>
                                    <li className="cell">14</li>
                                    <li className="cell">15</li>
                                    <li className="cell">16</li>
                                    <li className="cell">17</li>
                                    <li className="cell">18</li>
                                    <li className="cell">19</li>
                                    <li className="cell">20</li>
                                    <li className="cell">21</li>
                                    <li className="cell">22</li>
                                    <li className="cell">23</li>
                                    <li className="cell">24</li>
                                    <li className="cell">25</li>
                                    <li className="cell">26</li>
                                    <li className="cell">27</li>
                                    <li className="cell">28</li>
                                    <li className="cell">29</li>
                                    <li className="cell">30</li>
                                    <li className="cell">31</li>
                                    <li className="cell">32</li>
                                    <li className="cell">33</li>
                                    <li className="cell">34</li>
                                    <li className="cell">35</li>
                                    <li className="cell">36</li>
                                    <li className="cell">37</li>
                                    <li className="cell">38</li>
                                    <li className="cell">39</li>
                                    <li className="cell">40</li>
                                    <li className="cell">41</li>
                                    <li className="cell">42</li>
                                    <li className="cell">43</li>
                                    <li className="cell">44</li>
                                    <li className="cell">45</li>
                                    <li className="cell">46</li>
                                    <li className="cell">47</li>
                                    <li className="cell">48</li>
                                    <li className="cell">49</li>
                                    <li className="cell">50</li>
                                    <li className="cell">51</li>
                                    <li className="cell">52</li>
                                    <li className="cell">53</li>
                                    <li className="cell">54</li>
                                    <li className="cell">55</li>
                                    <li className="cell">56</li>
                                    <li className="cell actived">57</li>
                                    <li className="cell">58</li>
                                    <li className="cell">59</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="mx-calendar mx-calendar-panel-none">
                              <div className="text-center">
                                <strong>To</strong>
                              </div>
                              <div className="mx-calendar-header">
                                <a className="mx-icon-last-year">«</a>{" "}
                                <a
                                  className="mx-icon-last-month"
                                  style={{ display: "none" }}
                                >
                                  ‹
                                </a>{" "}
                                <a className="mx-icon-next-year">»</a>
                                <a
                                  className="mx-icon-next-month"
                                  style={{ display: "none" }}
                                >
                                  ›
                                </a>{" "}
                                <a
                                  className="mx-current-month"
                                  style={{ display: "none" }}
                                >
                                  Aug
                                </a>{" "}
                                <a
                                  className="mx-current-year"
                                  style={{ display: "none" }}
                                >
                                  2022
                                </a>
                                <a
                                  className="mx-current-year"
                                  style={{ display: "none" }}
                                >
                                  2020 ~ 2029
                                </a>{" "}
                                <a
                                  className="mx-time-header"
                                  style={{ display: "none" }}
                                >
                                  2022-08-09
                                </a>
                              </div>
                              <div className="mx-calendar-content">
                                <table
                                  className="mx-panel mx-panel-date"
                                  style={{ display: "none" }}
                                >
                                  <thead>
                                    <tr>
                                      <th>Sun</th>
                                      <th>Mon</th>
                                      <th>Tue</th>
                                      <th>Wed</th>
                                      <th>Thu</th>
                                      <th>Fri</th>
                                      <th>Sat</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td
                                        title="2022-07-31"
                                        className="cell last-month disabled inrange"
                                      >
                                        31
                                      </td>
                                      <td
                                        title="2022-08-01"
                                        className="cell cur-month disabled inrange"
                                      >
                                        1
                                      </td>
                                      <td
                                        title="2022-08-02"
                                        className="cell cur-month inrange"
                                      >
                                        2
                                      </td>
                                      <td
                                        title="2022-08-03"
                                        className="cell cur-month inrange"
                                      >
                                        3
                                      </td>
                                      <td
                                        title="2022-08-04"
                                        className="cell cur-month inrange"
                                      >
                                        4
                                      </td>
                                      <td
                                        title="2022-08-05"
                                        className="cell cur-month inrange"
                                      >
                                        5
                                      </td>
                                      <td
                                        title="2022-08-06"
                                        className="cell cur-month inrange"
                                      >
                                        6
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        title="2022-08-07"
                                        className="cell cur-month inrange"
                                      >
                                        7
                                      </td>
                                      <td
                                        title="2022-08-08"
                                        className="cell cur-month inrange"
                                      >
                                        8
                                      </td>
                                      <td
                                        title="2022-08-09"
                                        className="cell cur-month today actived"
                                      >
                                        9
                                      </td>
                                      <td
                                        title="2022-08-10"
                                        className="cell cur-month"
                                      >
                                        10
                                      </td>
                                      <td
                                        title="2022-08-11"
                                        className="cell cur-month"
                                      >
                                        11
                                      </td>
                                      <td
                                        title="2022-08-12"
                                        className="cell cur-month"
                                      >
                                        12
                                      </td>
                                      <td
                                        title="2022-08-13"
                                        className="cell cur-month"
                                      >
                                        13
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        title="2022-08-14"
                                        className="cell cur-month"
                                      >
                                        14
                                      </td>
                                      <td
                                        title="2022-08-15"
                                        className="cell cur-month"
                                      >
                                        15
                                      </td>
                                      <td
                                        title="2022-08-16"
                                        className="cell cur-month"
                                      >
                                        16
                                      </td>
                                      <td
                                        title="2022-08-17"
                                        className="cell cur-month"
                                      >
                                        17
                                      </td>
                                      <td
                                        title="2022-08-18"
                                        className="cell cur-month"
                                      >
                                        18
                                      </td>
                                      <td
                                        title="2022-08-19"
                                        className="cell cur-month"
                                      >
                                        19
                                      </td>
                                      <td
                                        title="2022-08-20"
                                        className="cell cur-month"
                                      >
                                        20
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        title="2022-08-21"
                                        className="cell cur-month"
                                      >
                                        21
                                      </td>
                                      <td
                                        title="2022-08-22"
                                        className="cell cur-month"
                                      >
                                        22
                                      </td>
                                      <td
                                        title="2022-08-23"
                                        className="cell cur-month"
                                      >
                                        23
                                      </td>
                                      <td
                                        title="2022-08-24"
                                        className="cell cur-month"
                                      >
                                        24
                                      </td>
                                      <td
                                        title="2022-08-25"
                                        className="cell cur-month"
                                      >
                                        25
                                      </td>
                                      <td
                                        title="2022-08-26"
                                        className="cell cur-month"
                                      >
                                        26
                                      </td>
                                      <td
                                        title="2022-08-27"
                                        className="cell cur-month"
                                      >
                                        27
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        title="2022-08-28"
                                        className="cell cur-month"
                                      >
                                        28
                                      </td>
                                      <td
                                        title="2022-08-29"
                                        className="cell cur-month"
                                      >
                                        29
                                      </td>
                                      <td
                                        title="2022-08-30"
                                        className="cell cur-month"
                                      >
                                        30
                                      </td>
                                      <td
                                        title="2022-08-31"
                                        className="cell cur-month"
                                      >
                                        31
                                      </td>
                                      <td
                                        title="2022-09-01"
                                        className="cell next-month"
                                      >
                                        1
                                      </td>
                                      <td
                                        title="2022-09-02"
                                        className="cell next-month"
                                      >
                                        2
                                      </td>
                                      <td
                                        title="2022-09-03"
                                        className="cell next-month"
                                      >
                                        3
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        title="2022-09-04"
                                        className="cell next-month"
                                      >
                                        4
                                      </td>
                                      <td
                                        title="2022-09-05"
                                        className="cell next-month"
                                      >
                                        5
                                      </td>
                                      <td
                                        title="2022-09-06"
                                        className="cell next-month"
                                      >
                                        6
                                      </td>
                                      <td
                                        title="2022-09-07"
                                        className="cell next-month"
                                      >
                                        7
                                      </td>
                                      <td
                                        title="2022-09-08"
                                        className="cell next-month"
                                      >
                                        8
                                      </td>
                                      <td
                                        title="2022-09-09"
                                        className="cell next-month"
                                      >
                                        9
                                      </td>
                                      <td
                                        title="2022-09-10"
                                        className="cell next-month"
                                      >
                                        10
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div
                                  className="mx-panel mx-panel-year"
                                  style={{ display: "none" }}
                                >
                                  <span className="cell disabled">2020</span>
                                  <span className="cell disabled">2021</span>
                                  <span className="cell actived">2022</span>
                                  <span className="cell disabled">2023</span>
                                  <span className="cell disabled">2024</span>
                                  <span className="cell disabled">2025</span>
                                  <span className="cell disabled">2026</span>
                                  <span className="cell disabled">2027</span>
                                  <span className="cell disabled">2028</span>
                                  <span className="cell disabled">2029</span>
                                </div>
                                <div
                                  className="mx-panel mx-panel-month"
                                  style={{ display: "none" }}
                                >
                                  <span className="cell disabled">Jan</span>
                                  <span className="cell disabled">Feb</span>
                                  <span className="cell disabled">Mar</span>
                                  <span className="cell disabled">Apr</span>
                                  <span className="cell disabled">May</span>
                                  <span className="cell disabled">Jun</span>
                                  <span className="cell disabled">Jul</span>
                                  <span className="cell actived">Aug</span>
                                  <span className="cell">Sep</span>
                                  <span className="cell">Oct</span>
                                  <span className="cell">Nov</span>
                                  <span className="cell">Dec</span>
                                </div>
                                <div
                                  className="mx-panel mx-panel-time"
                                  style={{ display: "none" }}
                                >
                                  <ul
                                    className="mx-time-list"
                                    style={{ width: "33.3333%" }}
                                  >
                                    <li className="cell">00</li>
                                    <li className="cell">01</li>
                                    <li className="cell">02</li>
                                    <li className="cell">03</li>
                                    <li className="cell">04</li>
                                    <li className="cell">05</li>
                                    <li className="cell">06</li>
                                    <li className="cell">07</li>
                                    <li className="cell">08</li>
                                    <li className="cell">09</li>
                                    <li className="cell">10</li>
                                    <li className="cell">11</li>
                                    <li className="cell">12</li>
                                    <li className="cell">13</li>
                                    <li className="cell">14</li>
                                    <li className="cell">15</li>
                                    <li className="cell">16</li>
                                    <li className="cell">17</li>
                                    <li className="cell">18</li>
                                    <li className="cell">19</li>
                                    <li className="cell">20</li>
                                    <li className="cell">21</li>
                                    <li className="cell actived">22</li>
                                    <li className="cell">23</li>
                                  </ul>
                                  <ul
                                    className="mx-time-list"
                                    style={{ width: "33.3333%" }}
                                  >
                                    <li className="cell">00</li>
                                    <li className="cell">01</li>
                                    <li className="cell">02</li>
                                    <li className="cell">03</li>
                                    <li className="cell">04</li>
                                    <li className="cell">05</li>
                                    <li className="cell">06</li>
                                    <li className="cell">07</li>
                                    <li className="cell">08</li>
                                    <li className="cell">09</li>
                                    <li className="cell">10</li>
                                    <li className="cell">11</li>
                                    <li className="cell">12</li>
                                    <li className="cell">13</li>
                                    <li className="cell">14</li>
                                    <li className="cell">15</li>
                                    <li className="cell">16</li>
                                    <li className="cell">17</li>
                                    <li className="cell">18</li>
                                    <li className="cell">19</li>
                                    <li className="cell">20</li>
                                    <li className="cell">21</li>
                                    <li className="cell">22</li>
                                    <li className="cell">23</li>
                                    <li className="cell">24</li>
                                    <li className="cell">25</li>
                                    <li className="cell">26</li>
                                    <li className="cell">27</li>
                                    <li className="cell">28</li>
                                    <li className="cell">29</li>
                                    <li className="cell">30</li>
                                    <li className="cell">31</li>
                                    <li className="cell">32</li>
                                    <li className="cell">33</li>
                                    <li className="cell">34</li>
                                    <li className="cell">35</li>
                                    <li className="cell">36</li>
                                    <li className="cell">37</li>
                                    <li className="cell">38</li>
                                    <li className="cell actived">39</li>
                                    <li className="cell">40</li>
                                    <li className="cell">41</li>
                                    <li className="cell">42</li>
                                    <li className="cell">43</li>
                                    <li className="cell">44</li>
                                    <li className="cell">45</li>
                                    <li className="cell">46</li>
                                    <li className="cell">47</li>
                                    <li className="cell">48</li>
                                    <li className="cell">49</li>
                                    <li className="cell">50</li>
                                    <li className="cell">51</li>
                                    <li className="cell">52</li>
                                    <li className="cell">53</li>
                                    <li className="cell">54</li>
                                    <li className="cell">55</li>
                                    <li className="cell">56</li>
                                    <li className="cell">57</li>
                                    <li className="cell">58</li>
                                    <li className="cell">59</li>
                                  </ul>
                                  <ul
                                    className="mx-time-list"
                                    style={{ width: "33.3333%" }}
                                  >
                                    <li className="cell">00</li>
                                    <li className="cell">01</li>
                                    <li className="cell">02</li>
                                    <li className="cell">03</li>
                                    <li className="cell">04</li>
                                    <li className="cell">05</li>
                                    <li className="cell">06</li>
                                    <li className="cell">07</li>
                                    <li className="cell">08</li>
                                    <li className="cell">09</li>
                                    <li className="cell">10</li>
                                    <li className="cell">11</li>
                                    <li className="cell">12</li>
                                    <li className="cell">13</li>
                                    <li className="cell">14</li>
                                    <li className="cell">15</li>
                                    <li className="cell">16</li>
                                    <li className="cell">17</li>
                                    <li className="cell">18</li>
                                    <li className="cell">19</li>
                                    <li className="cell">20</li>
                                    <li className="cell">21</li>
                                    <li className="cell">22</li>
                                    <li className="cell">23</li>
                                    <li className="cell">24</li>
                                    <li className="cell">25</li>
                                    <li className="cell">26</li>
                                    <li className="cell">27</li>
                                    <li className="cell">28</li>
                                    <li className="cell">29</li>
                                    <li className="cell">30</li>
                                    <li className="cell">31</li>
                                    <li className="cell">32</li>
                                    <li className="cell">33</li>
                                    <li className="cell">34</li>
                                    <li className="cell">35</li>
                                    <li className="cell">36</li>
                                    <li className="cell">37</li>
                                    <li className="cell">38</li>
                                    <li className="cell">39</li>
                                    <li className="cell">40</li>
                                    <li className="cell">41</li>
                                    <li className="cell">42</li>
                                    <li className="cell">43</li>
                                    <li className="cell">44</li>
                                    <li className="cell">45</li>
                                    <li className="cell">46</li>
                                    <li className="cell">47</li>
                                    <li className="cell">48</li>
                                    <li className="cell">49</li>
                                    <li className="cell">50</li>
                                    <li className="cell">51</li>
                                    <li className="cell">52</li>
                                    <li className="cell">53</li>
                                    <li className="cell">54</li>
                                    <li className="cell">55</li>
                                    <li className="cell">56</li>
                                    <li className="cell actived">57</li>
                                    <li className="cell">58</li>
                                    <li className="cell">59</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div>
                        <DateRangePicker onChange={onChange} value={value} />
                      </div>
                    </div>
                    <div className="two-half columns filter-component su-input-group  su-static-label">
                      <div className="filter-field">
                        <label className="su-input-label">Tags</label>
                        <div className="filter-box tagger">
                          <div className="filter-link">
                            <div
                              data-v-61d92e31=""
                              className="vue-tags-input main-input"
                            >
                              <div data-v-61d92e31="" className="ti-input">
                                <ul data-v-61d92e31="" className="ti-tags">
                                  <li
                                    data-v-61d92e31=""
                                    className="ti-new-tag-input-wrapper"
                                  >
                                    <input
                                      data-v-61d92e31=""
                                      placeholder="Filter by tags"
                                      maxLength="20"
                                      type="text"
                                      size="1"
                                      className="ti-new-tag-input ti-valid"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="filter-option-container main-input">
                            <div className="filter-option">
                              <div className="filters">
                                {" "}
                                <a
                                  href="https://console.zerodha.com/"
                                  className="manage-tags-link"
                                >
                                  <span className="icon icon-bookmark"></span>{" "}
                                  Manage tags
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="one columns">
                      <label>&nbsp;</label>
                      <br />{" "}
                      <button type="button" className="btn-blue">
                        <span className="icon icon-arrow-right"></span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="heatmap-section">
                  <div className="heatmap-container">
                    <div
                      id="calendar_container"
                      style={{ backgroundColor: "rgb(255, 255, 255)" }}
                    >
                      <img id="logo_img" src="/zerodha-logo.svg" />
                      <div id="calendar_year" style={{ position: "relative" }}>
                        <svg
                          width="990"
                          className="calendar-heatmap"
                          id="calendar_heatmap"
                          height="130"
                        >
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Sep 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="15"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Sep 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="15"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Sep 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="15"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Sep 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="15"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Sep 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="30"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Sep 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="30"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Sep 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="30"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Sep 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="30"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Sep 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="30"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Sep 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="30"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Sep 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="30"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Sep 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="45"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Sep 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="45"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Sep 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="45"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Sep 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="45"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Sep 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="45"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Sep 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="45"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Sep 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="45"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Sep 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="60"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Sep 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="60"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Sep 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="60"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Sep 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="60"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Sep 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="60"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Sep 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="60"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Sep 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="60"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Sep 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="75"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Sep 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="75"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Sep 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="75"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Sep 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="75"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Sep 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="75"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Oct 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="90"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Oct 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="90"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Oct 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="105"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Oct 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="105"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Oct 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="105"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Oct 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="105"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Oct 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="105"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(131, 224, 131)"
                            date="Fri Oct 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="105"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Oct 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="105"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Oct 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="120"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Oct 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="120"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Oct 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="120"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Oct 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="120"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Oct 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="120"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Oct 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="120"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Oct 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="120"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Oct 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="135"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Oct 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="135"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Oct 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="135"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Oct 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="135"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Oct 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="135"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Oct 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="135"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Oct 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="135"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Oct 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="150"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Oct 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="150"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Oct 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="150"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Oct 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="150"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Oct 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="150"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Oct 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="150"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Oct 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="150"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Oct 31 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="165"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Nov 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="180"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Nov 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="180"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Nov 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="180"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Nov 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="180"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Nov 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="180"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Nov 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="180"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Nov 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="195"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(156, 231, 156)"
                            date="Mon Nov 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="195"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Nov 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="195"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(112, 220, 112)"
                            date="Wed Nov 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="195"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Nov 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="195"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Nov 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="195"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Nov 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="195"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Nov 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="210"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Nov 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="210"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Nov 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="210"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Nov 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="210"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Nov 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="210"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Nov 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="210"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Nov 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="210"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Nov 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="225"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(155, 231, 155)"
                            date="Mon Nov 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="225"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Nov 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="225"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Nov 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="225"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Nov 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="225"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Nov 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="225"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Nov 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="225"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Nov 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="240"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Nov 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="240"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Nov 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="240"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Dec 01 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="255"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(157, 231, 157)"
                            date="Thu Dec 02 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="255"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Dec 03 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="255"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Dec 04 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="255"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Dec 05 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="270"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Dec 06 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="270"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Dec 07 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="270"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Dec 08 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="270"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Dec 09 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="270"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Dec 10 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="270"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Dec 11 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="270"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Dec 12 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="285"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Dec 13 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="285"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Dec 14 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="285"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Dec 15 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="285"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Dec 16 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="285"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Dec 17 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="285"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Dec 18 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="285"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Dec 19 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="300"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Dec 20 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="300"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Dec 21 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="300"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Dec 22 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="300"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Dec 23 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="300"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Dec 24 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="300"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Dec 25 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="300"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Dec 26 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="315"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Dec 27 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="315"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Dec 28 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="315"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Dec 29 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="315"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Dec 30 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="315"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Dec 31 2021 00:00:00 GMT+0530 (India Standard Time)"
                            x="315"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jan 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="330"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jan 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="345"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Jan 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="345"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Jan 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="345"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Jan 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="345"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Jan 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="345"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Jan 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="345"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jan 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="345"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jan 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="360"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Jan 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="360"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Jan 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="360"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Jan 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="360"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Jan 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="360"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Jan 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="360"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jan 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="360"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jan 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="375"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Jan 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="375"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Jan 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="375"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Jan 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="375"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Jan 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="375"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Jan 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="375"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jan 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="375"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jan 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="390"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Jan 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="390"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Jan 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="390"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Jan 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="390"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Jan 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="390"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Jan 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="390"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jan 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="390"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jan 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="405"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Jan 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="405"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Feb 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="420"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Feb 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="420"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Feb 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="420"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Feb 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="420"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Feb 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="420"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Feb 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="435"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Feb 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="435"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Feb 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="435"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Feb 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="435"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Feb 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="435"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Feb 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="435"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Feb 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="435"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Feb 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="450"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Feb 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="450"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Feb 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="450"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Feb 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="450"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Feb 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="450"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Feb 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="450"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Feb 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="450"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Feb 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="465"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Feb 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="465"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Feb 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="465"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Feb 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="465"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Feb 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="465"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Feb 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="465"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Feb 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="465"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Feb 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="480"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Feb 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="480"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Mar 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="495"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Mar 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="495"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Mar 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="495"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Mar 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="495"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Mar 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="495"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Mar 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="510"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Mar 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="510"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Mar 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="510"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Mar 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="510"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(125, 223, 125)"
                            date="Thu Mar 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="510"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Mar 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="510"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Mar 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="510"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Mar 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="525"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Mar 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="525"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Mar 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="525"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Mar 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="525"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Mar 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="525"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Mar 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="525"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Mar 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="525"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Mar 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="540"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 120, 120)"
                            date="Mon Mar 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="540"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(142, 227, 142)"
                            date="Tue Mar 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="540"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 67, 67)"
                            date="Wed Mar 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="540"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(154, 230, 154)"
                            date="Thu Mar 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="540"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 108, 108)"
                            date="Fri Mar 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="540"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Mar 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="540"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Mar 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="555"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(153, 230, 153)"
                            date="Mon Mar 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="555"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(143, 227, 143)"
                            date="Tue Mar 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="555"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(138, 226, 138)"
                            date="Wed Mar 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="555"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(126, 223, 126)"
                            date="Thu Mar 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="555"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(128, 224, 128)"
                            date="Fri Apr 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="570"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Apr 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="570"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Apr 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="585"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 75, 75)"
                            date="Mon Apr 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="585"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 126, 126)"
                            date="Tue Apr 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="585"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 121, 121)"
                            date="Wed Apr 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="585"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 65, 65)"
                            date="Thu Apr 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="585"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(142, 227, 142)"
                            date="Fri Apr 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="585"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Apr 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="585"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Apr 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="600"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(156, 231, 156)"
                            date="Mon Apr 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="600"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 129, 129)"
                            date="Tue Apr 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="600"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 71, 71)"
                            date="Wed Apr 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="600"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Apr 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="600"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Apr 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="600"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Apr 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="600"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Apr 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="615"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(136, 226, 136)"
                            date="Mon Apr 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="615"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 114, 114)"
                            date="Tue Apr 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="615"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(153, 230, 153)"
                            date="Wed Apr 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="615"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(151, 229, 151)"
                            date="Thu Apr 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="615"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(149, 229, 149)"
                            date="Fri Apr 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="615"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Apr 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="615"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Apr 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="630"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 107, 107)"
                            date="Mon Apr 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="630"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 133, 133)"
                            date="Tue Apr 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="630"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(134, 225, 134)"
                            date="Wed Apr 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="630"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(134, 225, 134)"
                            date="Thu Apr 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="630"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(135, 225, 135)"
                            date="Fri Apr 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="630"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Apr 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="630"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun May 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="660"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 122, 122)"
                            date="Mon May 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="660"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue May 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="660"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 67, 67)"
                            date="Wed May 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="660"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 100, 100)"
                            date="Thu May 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="660"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 118, 118)"
                            date="Fri May 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="660"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat May 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="660"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun May 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="675"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 122, 122)"
                            date="Mon May 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="675"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 130, 130)"
                            date="Tue May 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="675"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(153, 230, 153)"
                            date="Wed May 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="675"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 126, 126)"
                            date="Thu May 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="675"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 93, 93)"
                            date="Fri May 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="675"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat May 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="675"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun May 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="690"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 109, 109)"
                            date="Mon May 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="690"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue May 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="690"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 114, 114)"
                            date="Wed May 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="690"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(119, 221, 119)"
                            date="Thu May 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="690"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri May 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="690"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat May 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="690"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun May 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="705"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(154, 230, 154)"
                            date="Mon May 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="705"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 117, 117)"
                            date="Tue May 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="705"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 121, 121)"
                            date="Wed May 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="705"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(139, 226, 139)"
                            date="Thu May 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="705"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 106, 106)"
                            date="Fri May 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="705"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat May 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="705"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun May 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="720"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 119, 119)"
                            date="Mon May 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="720"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(149, 229, 149)"
                            date="Tue May 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="720"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(150, 229, 150)"
                            date="Wed Jun 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="735"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(128, 224, 128)"
                            date="Thu Jun 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="735"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(148, 229, 148)"
                            date="Fri Jun 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="735"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jun 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="735"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jun 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="750"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(156, 231, 156)"
                            date="Mon Jun 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="750"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(153, 230, 153)"
                            date="Tue Jun 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="750"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(123, 222, 123)"
                            date="Wed Jun 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="750"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 132, 132)"
                            date="Thu Jun 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="750"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(151, 229, 151)"
                            date="Fri Jun 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="750"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jun 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="750"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jun 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="765"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(150, 229, 150)"
                            date="Mon Jun 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="765"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 127, 127)"
                            date="Tue Jun 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="765"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 126, 126)"
                            date="Wed Jun 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="765"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 66, 66)"
                            date="Thu Jun 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="765"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(153, 230, 153)"
                            date="Fri Jun 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="765"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jun 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="765"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jun 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="780"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(144, 228, 144)"
                            date="Mon Jun 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="780"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 128, 128)"
                            date="Tue Jun 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="780"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(139, 226, 139)"
                            date="Wed Jun 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="780"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 82, 82)"
                            date="Thu Jun 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="780"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 131, 131)"
                            date="Fri Jun 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="780"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jun 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="780"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jun 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="795"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(147, 228, 147)"
                            date="Mon Jun 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="795"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 111, 111)"
                            date="Tue Jun 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="795"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(147, 228, 147)"
                            date="Wed Jun 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="795"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(97, 216, 97)"
                            date="Thu Jun 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="795"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(137, 226, 137)"
                            date="Fri Jul 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="810"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jul 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="810"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jul 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="825"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(138, 226, 138)"
                            date="Mon Jul 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="825"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(141, 227, 141)"
                            date="Tue Jul 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="825"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 102, 102)"
                            date="Wed Jul 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="825"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(143, 227, 143)"
                            date="Thu Jul 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="825"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(146, 228, 146)"
                            date="Fri Jul 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="825"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jul 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="825"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jul 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="840"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(143, 227, 143)"
                            date="Mon Jul 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="840"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(140, 227, 140)"
                            date="Tue Jul 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="840"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 13, 13)"
                            date="Wed Jul 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="840"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 111, 111)"
                            date="Thu Jul 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="840"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 0, 0)"
                            date="Fri Jul 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="840"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jul 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="840"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jul 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="855"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(93, 215, 93)"
                            date="Mon Jul 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="855"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 43, 43)"
                            date="Tue Jul 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="855"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(149, 229, 149)"
                            date="Wed Jul 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="855"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 84, 84)"
                            date="Thu Jul 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="855"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 73, 73)"
                            date="Fri Jul 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="855"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jul 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="855"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jul 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="870"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(147, 228, 147)"
                            date="Mon Jul 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="870"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(128, 223, 128)"
                            date="Tue Jul 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="870"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 124, 124)"
                            date="Wed Jul 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="870"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(51, 204, 51)"
                            date="Thu Jul 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="870"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(147, 228, 147)"
                            date="Fri Jul 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="870"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Jul 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="870"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Jul 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="885"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(112, 219, 112)"
                            date="Mon Aug 01 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="900"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 46, 46)"
                            date="Tue Aug 02 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="900"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(150, 229, 150)"
                            date="Wed Aug 03 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="900"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 3, 3)"
                            date="Thu Aug 04 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="900"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 103, 103)"
                            date="Fri Aug 05 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="900"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Aug 06 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="900"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Aug 07 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="915"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="rgb(255, 107, 107)"
                            date="Mon Aug 08 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="915"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Aug 09 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="915"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Aug 10 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="915"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Aug 11 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="915"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Aug 12 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="915"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Aug 13 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="915"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Aug 14 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="930"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Aug 15 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="930"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Aug 16 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="930"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Aug 17 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="930"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Aug 18 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="930"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Aug 19 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="930"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Aug 20 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="930"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Aug 21 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="945"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Aug 22 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="945"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Aug 23 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="945"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Aug 24 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="945"
                            y="61"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Thu Aug 25 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="945"
                            y="76"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Fri Aug 26 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="945"
                            y="91"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sat Aug 27 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="945"
                            y="106"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Sun Aug 28 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="960"
                            y="16"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Mon Aug 29 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="960"
                            y="31"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Tue Aug 30 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="960"
                            y="46"
                          ></rect>
                          <rect
                            className="day-cell"
                            width="13"
                            height="13"
                            cursor="pointer"
                            border-radius="2px"
                            fill="#e1e1e1"
                            date="Wed Aug 31 2022 00:00:00 GMT+0530 (India Standard Time)"
                            x="960"
                            y="61"
                          ></rect>
                          <g>
                            <rect
                              className="calendar-heatmap-legend"
                              width="13"
                              height="13"
                              x="855"
                              y="132"
                              fill="rgb(157, 231, 157)"
                            ></rect>
                            <rect
                              className="calendar-heatmap-legend"
                              width="13"
                              height="13"
                              x="870"
                              y="132"
                              fill="rgb(122, 222, 122)"
                            ></rect>
                            <rect
                              className="calendar-heatmap-legend"
                              width="13"
                              height="13"
                              x="885"
                              y="132"
                              fill="rgb(104, 217, 104)"
                            ></rect>
                            <rect
                              className="calendar-heatmap-legend"
                              width="13"
                              height="13"
                              x="900"
                              y="132"
                              fill="rgb(51, 204, 51)"
                            ></rect>
                            <text
                              className="calendar-heatmap-legend-text calendar-heatmap-legend-text-less"
                              x="800"
                              y="143"
                            >
                              Min. profit
                            </text>
                            <text
                              className="calendar-heatmap-legend-text calendar-heatmap-legend-text-more"
                              x="917"
                              y="143"
                            >
                              Max. profit
                            </text>
                          </g>
                          <g>
                            <rect
                              className="calendar-heatmap-legend"
                              width="13"
                              height="13"
                              x="655"
                              y="132"
                              fill="rgb(255, 133, 133)"
                            ></rect>
                            <rect
                              className="calendar-heatmap-legend"
                              width="13"
                              height="13"
                              x="670"
                              y="132"
                              fill="rgb(255, 89, 89)"
                            ></rect>
                            <rect
                              className="calendar-heatmap-legend"
                              width="13"
                              height="13"
                              x="685"
                              y="132"
                              fill="rgb(255, 67, 67)"
                            ></rect>
                            <rect
                              className="calendar-heatmap-legend"
                              width="13"
                              height="13"
                              x="700"
                              y="132"
                              fill="rgb(255, 0, 0)"
                            ></rect>
                            <text
                              className="calendar-heatmap-legend-text calendar-heatmap-legend-text-less"
                              x="600"
                              y="143"
                            >
                              Min. loss
                            </text>
                            <text
                              className="calendar-heatmap-legend-text calendar-heatmap-legend-text-more"
                              x="717"
                              y="143"
                            >
                              Max. loss
                            </text>
                          </g>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="15"
                            y="10"
                          >
                            September
                          </text>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="90"
                            y="10"
                          >
                            October
                          </text>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="180"
                            y="10"
                          >
                            November
                          </text>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="255"
                            y="10"
                          >
                            December
                          </text>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="330"
                            y="10"
                          >
                            January
                          </text>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="420"
                            y="10"
                          >
                            February
                          </text>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="495"
                            y="10"
                          >
                            March
                          </text>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="570"
                            y="10"
                          >
                            April
                          </text>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="660"
                            y="10"
                          >
                            May
                          </text>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="735"
                            y="10"
                          >
                            June
                          </text>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="810"
                            y="10"
                          >
                            July
                          </text>
                          <text
                            className="month-name"
                            style={{ fontSize: "10px" }}
                            x="900"
                            y="10"
                          >
                            August
                          </text>
                          <text
                            className="day-initial"
                            transform="translate(5,40)"
                            dy="2"
                            style={{ fontSize: "10px" }}
                          >
                            M
                          </text>
                          <text
                            className="day-initial"
                            transform="translate(5,70)"
                            dy="2"
                            style={{ fontSize: "10px" }}
                          >
                            W
                          </text>
                          <text
                            className="day-initial"
                            transform="translate(5,100)"
                            dy="2"
                            style={{ fontSize: "10px" }}
                          >
                            F
                          </text>
                        </svg>
                      </div>
                      <div id="calendar"></div>
                      <div id="calendar_stats" style={{ height: "65px" }}>
                        <span className="stats-obj">
                          Your longest profitable streak<span>13 days</span>
                        </span>{" "}
                        <span className="stats-obj">
                          Your most profitable day<span>2022-07-28</span>
                        </span>
                      </div>
                    </div>
                    <div className="heatmap-count">
                      <p className="heatmap-date heatmap-date-label">
                        Gross realised P&amp;L
                      </p>
                      <p className="heatmap-date">2022-06-10</p>

                      <div
                        className="heatmap-segment"
                        data-balloon="View P&amp;L"
                        data-balloon-pos="up"
                      >
                        <p>F&amp;O:</p> <span>1600.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section pnl-summary-section hide-on-mobile">
                <div className="combined pnl-summary">
                  <div className="row">
                    <div className="seven columns border-right">
                      <div className="row">
                        <div className="four columns">
                          <label>Realised P&amp;L</label>
                          <h1
                            className="pos"
                            data-balloon="₹1,600.00"
                            data-balloon-pos="up"
                          >
                            <span className="inherit">+1.6k</span>
                          </h1>
                        </div>
                        <div className="four columns">
                          <label>Charges &amp; taxes</label>
                          <div className="inline">
                            <h1
                              className="charges"
                              data-balloon="₹302.93"
                              data-balloon-pos="up"
                            >
                              302.95
                            </h1>{" "}
                            <a
                              href="https://console.zerodha.com/#"
                              className="text-small"
                              data-balloon="View breakdown"
                              data-balloon-pos="up"
                            >
                              <img
                                src="/layers.svg"
                                className="charges-breakdown-img"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="four columns">
                          <label>Other credits &amp; debits</label>
                          <div className="inline">
                            <h1 data-balloon="0" data-balloon-pos="up">
                              0
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="three columns">
                      <label>Net realised P&amp;L</label>
                      <h1
                        className="pos"
                        data-balloon="₹1,297.07"
                        data-balloon-pos="up"
                      >
                        <span className="inherit">+1.29k</span>
                      </h1>
                    </div>
                    <div className="two columns">
                      <label>Unrealised P&amp;L</label>
                      <h1>
                        <span className="inherit">0</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section table-section">
                <p className="paginate-info text-light-grey text-small">
                  Showing page 1 (rows 1 - 2 out of 2)
                </p>
                <p className="last-updated text-small text-light-grey">
                  <span className="icon icon-clock"></span> Last updated:
                  2022-08-08
                </p>
                <div className="fetch-data"></div>
                <div
                  className="table-download text-small"
                  data-balloon="Download complete results as Excel"
                  data-balloon-pos="up"
                >
                  <span className="icon icon-download"></span>
                  Download
                </div>
                <div className="search-table">
                  <span className="icon icon-search"></span>{" "}
                  <input
                    maxLength="15"
                    type="text"
                    placeholder="Search"
                    className="filter-input"
                  />{" "}
                  <span className="clear clear-symbol icon icon-times"></span>
                </div>
                <div className="table-container">
                  <table id="pnl_table" className="pnl-table">
                    <thead>
                      <tr>
                        <td className="table-border text-left sorted">
                          Symbol
                          <span className="arrow arrow-show arrow asc"></span>
                        </td>
                        <td className="table-border">
                          <div
                            data-balloon="This field is not sortable for combined P&amp;L"
                            data-balloon-pos="up"
                          >
                            <div className="icon icon-info"></div>
                          </div>
                          Qty.
                        </td>
                        <td>
                          <div
                            data-balloon="This field is not sortable for combined P&amp;L"
                            data-balloon-pos="up"
                          >
                            <div className="icon icon-info"></div>
                          </div>
                          Buy avg.
                        </td>
                        <td className="table-border">
                          <div
                            data-balloon="This field is not sortable for combined P&amp;L"
                            data-balloon-pos="up"
                          >
                            <div className="icon icon-info"></div>
                          </div>
                          Buy value
                        </td>
                        <td>
                          <div
                            data-balloon="This field is not sortable for combined P&amp;L"
                            data-balloon-pos="up"
                          >
                            <div className="icon icon-info"></div>
                          </div>
                          Sell avg.
                        </td>
                        <td className="table-border">
                          <div
                            data-balloon="This field is not sortable for combined P&amp;L"
                            data-balloon-pos="up"
                          >
                            <div className="icon icon-info"></div>
                          </div>
                          Sell value
                        </td>
                        <td className="">
                          Net realised P&amp;L
                          <span className="arrow asc"></span>
                        </td>
                        <td className="">
                          Net unrealised P&amp;L
                          <span className="arrow asc"></span>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-border text-left symbol-class">
                          BANKNIFTY2261634700CE
                          <div className="new-tags"></div>
                          <div
                            id="context-menu-48"
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
                        <td className="table-border">50</td>
                        <td>302.32</td>
                        <td className="table-border">15,116.25</td>
                        <td>398.00</td>
                        <td className="table-border">19,900.00</td>
                        <td className="pos">
                          +4,783.75
                          <span>+31.65%</span>
                        </td>
                        <td className="text-light-grey"> – </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr>
                        <td className="table-border text-left symbol-class">
                          BANKNIFTY2261634700PE
                          <div className="new-tags"></div>
                          <div
                            id="context-menu-50"
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
                        <td className="table-border">75</td>
                        <td>463.90</td>
                        <td className="table-border">34,792.50</td>
                        <td>421.45</td>
                        <td className="table-border">31,608.75</td>
                        <td className="neg">
                          -3,183.75
                          <span>-9.15%</span>
                        </td>
                        <td className="text-light-grey"> - </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-section">
            <div className="footer-container">
              <div className="row text-grey">
                <div className="six columns nomargin-mobile">
                  <a href="https://zerodha.com/">
                    <img src="/zerodha-grey-logo.svg" />
                  </a>{" "}
                  <span className="text-light-grey">
                    © 2022. All rights reserved.
                  </span>
                </div>
                <div className="nomargin-mobile six columns text-right">
                  <a
                    target="_blank"
                    href="https://support.zerodha.com/"
                    className="text-light-grey hide-on-mobile"
                  >
                    Support
                  </a>
                </div>
              </div>
              <p className="text-light-grey hide-on-mobile">
                NSE &amp; BSE - SEBI Registration no.: INZ000031633 | MCX - SEBI
                Registration no.: INZ000038238 | CDSL - SEBI Registration no.:
                IN-DP-431-2019
              </p>
              <p className="text-light-grey hide-on-mobile">
                Disclaimer: The P&amp;L report/Holdings/Positions data is
                prepared based on the trades and information available with us,
                at the time of report generation. Zerodha Broking Ltd., does not
                make any warranty, express or implied, or assume any
                legal/consequential liability, or responsibility for the
                authenticity, and completeness of the data presented in this
                report/data. To double check your P&amp;L
                report/Holdings/Positions data, verify it with the Tradebook,
                Contract Notes and the Funds Statement which are available with
                you at all times.
              </p>
            </div>
          </div>
        </div>
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
export default pl;
