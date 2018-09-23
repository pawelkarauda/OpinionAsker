import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
    renderContent() {
        if (this.props.auth) {
            if (this.props.auth === null) {
                return <li>Logging in./</li>;
            } else if (this.props.auth.data === "") {
                return (
                    <li>
                        <a href="/auth/google">Login with Google</a>
                    </li>
                );
            } else {
                return (
                    <li>
                        <a href="/api/logout">Logout</a>
                    </li>
                );
            }
        }
    }

    render() {
        console.log(this.props.user);
        return (
            <nav>
                <div className="nav-wrapper blue">
                    <Link to="/" className="left brand-logo">
                        AFO
                    </Link>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}
function mapStateToProps({ auth }) {
    return {
        auth
    };
}

export default connect(mapStateToProps)(Header);
