import React from "react";
import {Link} from "react-router-dom";

export default class NavBarComponent extends React.Component {


    state = {
        selectedTab: ''
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a href="#" className="navbar-brand">
                        <Link to={"/"}>
                            <i className="fas fa-code-branch"/>
                            GeeksHub
                        </Link>
                    </a>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-menu">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profiles"}>
                                    <span className="nav-link wbdv-page-tab">Geeks</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/dashboard"}>
                                    <a href="#" className="nav-link wbdv-page-tab">Dashboard</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}