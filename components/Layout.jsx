import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Layout({ children }) {
    return (
        <div style={{display:'flex',flexDirection:'column', minHeight:'100vh'}}>
                <Navbar />
                <main style={{marginTop:60}}>
                {children}
                </main>
        </div>
    )
}