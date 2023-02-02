import NavBar from "./sample";
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {

    return (
        <>
            <div className="layout">
                <div><NavBar /></div>
                <div>{children}</div>
            </div>
        </>
    )
}

export default Layout