import itemlist from '../config/itemlist.json';
import {Link} from "react-router-dom";

export default function ControlNav(props){
    return(
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3 sidebar-sticky">
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-uppercase">
                    <Link class="link-secondary" to="#">
                        Edit Calendar
                    </Link>
                </h6>
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-uppercase">
                    <Link class="link-secondary" to="#">
                        Edit Videos
                    </Link>
                </h6>
                <br/>
                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Home Page</span>
                </h6>
                <ul class="nav flex-column mb-2">
                    {
                        itemlist.map(item => {
                            if(item.Attr === "HomePage"){
                                return(
                                    <li class="nav-item">
                                        <Link class="nav-link" to={item.Url}>
                                            {item.Name}
                                        </Link>
                                    </li>
                                 )
                            }
                        })
                    }
                </ul>

                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>About Page</span>
                </h6>
                <ul class="nav flex-column mb-2">
                    {
                        itemlist.map(item => {
                            if(item.Attr === "AboutPage"){
                                return(
                                    <li class="nav-item">
                                        <Link class="nav-link" to={item.Url}>
                                            {item.Name}
                                        </Link>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Detail Page</span>
                    <a class="link-secondary" href="#" aria-label="Add a new report">
                    </a>
                </h6>
                <ul class="nav flex-column mb-2">
                    {
                        itemlist.map(item => {
                            if(item.Attr === "DetailPage"){
                                return(
                                    <li class="nav-item">
                                        <Link class="nav-link" to={item.Url}>
                                            {item.Name}
                                        </Link>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>

                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Contact Us Page</span>
                </h6>
                <ul class="nav flex-column mb-2">
                    {
                        itemlist.map(item => {
                            if(item.Attr === "ContactPage"){
                                return(
                                    <li class="nav-item">
                                        <Link class="nav-link" to={item.Url}>
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