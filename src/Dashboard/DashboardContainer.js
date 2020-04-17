import React from "react";
import DashboardNavbarComponent from "./DashboardNavbarComponent";
import ExperienceTableComponent from "./ExperienceTableComponent";
import {LOCALHOST_URL} from "../common/constants";
import {connect} from "react-redux";
import EducationTableComponent from "./EducationTableComponent";
import NavBarInSessionComponent from "../Component/NavBar/NavBarInSessionComponent";
import GitHubDashboard from "./GitHubDashboard";
import PhoneNumberComponent from "./PhoneNumberComponent";

class DashboardContainer extends React.Component {

    state = {
        user: {name: ''},
        experiences: [],
        dashboardToken: ''
    }

    componentDidMount() {

        this.state.dashboardToken = localStorage.getItem('token')
        console.log("Dashboard token: ", this.state.dashboardToken)
        {
            this.state.dashboardToken === null &&
            this.props.history.push('/sign-in')
        }
        fetch(
            `${LOCALHOST_URL}/profile/me`, {
                headers: {
                    'x-auth-token': '' + this.state.dashboardToken
                }
            }
        )
            .then(response => response.json())
            .then(results => this.setState({
                user: results.user,
                experiences: results.experience
            }))
    }

    render() {
        return (

            <div>
                <NavBarInSessionComponent/>


                <div className="container">
                    <h2 className="large">Dashboard</h2>
                    <p className="lead">
                        <i className="fas fa-child"> </i>
                        Welcome, {this.state.user.name}</p>
                </div>
                <br/>
                <div className="container">
                    <h2 className="my-2">GitHub Username</h2>
                    <GitHubDashboard
                        githubUsername={this.props.githubUsername}
                        user={this.state.user}
                    />
                </div>
                <br/>
                <div className="container">
                    <h2 className="my-2">Phone Number</h2>
                    <PhoneNumberComponent
                        githubUsername={this.props.githubUsername}
                        user={this.state.user}
                    />
                </div>
                <br/>
                <div className="container">
                    <h2 className="my-2">Experience Credentials</h2>
                    <ExperienceTableComponent
                        experienceId={this.props.experienceId}
                        user={this.state.user}
                    />
                </div>
                <br/>
                <br/>
                <div className="container">
                    <h2 className="my-2">Education Credentials</h2>
                    <EducationTableComponent
                        educationId={this.props.educationId}
                        user={this.state.user}
                    />
                </div>

            </div>
        )

    }

}

const stateToPropertyMapper = (state) => {
    // console.log("FSM ",state)
    // return {
    //     token: state.token
    // }
}

const dispatchToPropertyMapper = (dispatch) => {
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)
(DashboardContainer)
