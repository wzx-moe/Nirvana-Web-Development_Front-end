import itemlist from '../../json/itemlist.json';
import {Link} from "react-router-dom";

export default function ControlNav(props){
    return(
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-uppercase">
                    <Link className="link-secondary" to="/controlPage?id=1100">
                        Edit Calendar
                    </Link>
                </h6>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-uppercase">
                    <Link className="link-secondary" to="/controlPage?id=1000">
                        Edit Videos
                    </Link>
                </h6>
                <br/>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Home Page</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    {
                        itemlist.map(item => {
                            if(item.Attr === "HomePage"){
                                return(
                                    <li className="nav-item" key={item.Name}>
                                        <Link className="nav-link" to={item.Url}>
                                            {item.Name}
                                        </Link>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>About Page</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    {
                        itemlist.map(item => {
                            if(item.Attr === "AboutPage"){
                                return(
                                    <li className="nav-item" key={item.Name}>
                                        <Link className="nav-link" to={item.Url}>
                                            {item.Name}
                                        </Link>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Detail Page</span>
                    <a className="link-secondary" href="#" aria-label="Add a new report">
                    </a>
                </h6>
                <ul className="nav flex-column mb-2">
                    {
                        itemlist.map(item => {
                            if(item.Attr === "DetailPage"){
                                return(
                                    <li className="nav-item" key={item.Name}>
                                        <Link className="nav-link" to={item.Url}>
                                            {item.Name}
                                        </Link>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Contact Us Page</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    {
                        itemlist.map(item => {
                            if(item.Attr === "ContactPage"){
                                return(
                                    <li className="nav-item" key={item.Name}>
                                        <Link className="nav-link" to={item.Url}>
                                            {item.Name}
                                        </Link>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </nav>
            
    )
}