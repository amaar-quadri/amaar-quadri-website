import React, {Component} from "react"
import "../../styles/custom.scss"

export default class Card extends Component {
    render() {
        return (
            <div className="card mb-4">
                <img className="card-img-top" src={this.props.imgSrc} alt=""/>

                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.content}</p>

                    <a className="btn btn-primary" href={this.props.link}>Learn More</a>
                    {this.props.playLink !== null && <a className="btn btn-primary"
                                                        href={this.props.playLink}>Play Now</a>}
                </div>
            </div>
        )
    }
}
