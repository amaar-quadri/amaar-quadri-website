import React, {Component} from "react"
import "../../styles/custom.scss"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Amaar Quadri</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"/></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <a onClick={this.props.onScrollToAbout} className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={this.props.onScrollToMechanical} className="nav-link js-scroll-trigger" href="#mechanical">Mechanical Design</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={this.props.onScrollToSoftware} className="nav-link js-scroll-trigger" href="#software">Software Engineering</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={this.props.onScrollToContact} className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
