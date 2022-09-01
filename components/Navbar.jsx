import Link from 'next/link'
import { headerData } from '../data'
function Navbar() {
    return (
      <div className='positionsPage'>

      <div id="app" className="app page-positions">

        <div className="header">
          <div className="wrapper">
            
            <div className="header-right">
              <a href="https://kite.zerodha.com/" className="logo">
                <img src="/kite-logo.svg" alt="Kite logo" />
              </a>
              <div className="app-nav">
                {" "}
                <Link  href="/admin/orders" className="orders-nav-item">
                  <a>
                    <span>Orders</span>{" "}
                  </a>
                </Link>
                <Link href="/admin/positions" className="orders-nav-item">
                  <a>
                    <span>Positions</span>{" "}
                  </a>
                </Link>
                <Link href="/admin/header" className="orders-nav-item">
                  <a>
                    <span>Header</span>{" "}
                  </a>
                </Link>
                <Link href="/admin/sidebar" className="orders-nav-item">
                  <a>
                    <span>Sidebar</span>{" "}
                  </a>
                </Link>
                
              </div>

              <div className="right-nav">
                <div className="user-nav perspective">
                  <a href="" className="dropdown-label">
                    <div id="avatar-80">
                      {" "}
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
                    </div>{" "}
                    <span className="user-id">Admin</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  )
}
export default Navbar