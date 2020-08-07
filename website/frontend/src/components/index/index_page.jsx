import React, {Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./navbar.jsx"
import About from "./about.jsx"
import Carousel from "./carousel.jsx";
import Contact from "./contact.jsx";


export default class IndexPage extends Component {
    state = {
        mechanical: {
            title: "Mechanical Design",
            cards: [
                {
                    imgSrc: "/static/catheter.png",
                    title: "Medical Device Prototyping",
                    content: "I worked at Sunnybrook Hospital at designed a control mechanism for a Catheter based device. The design is currently patent pending, and I am continuing to work for them part time!",
                    link: "/sunnybrook",
                    playLink: null
                },
                {
                    imgSrc: "/static/mulcher.png",
                    title: "Heavy Duty Forestry Equipment",
                    content: "At Tigercat, I designed high precision sheet metal weldments and a heavy duty boom arm adapter.",
                    link: "/tigercat",
                    playLink: null
                },
                {
                    imgSrc: "/static/submarine.JPG",
                    title: "Autonomous Submarine",
                    content: "I founded and lead a passionate team of students in designing and building a fully autonomous submarine!",
                    link: "/aquadrone-mechanical",
                    playLink: null
                }
            ]
        },
        software: {
            title: "Software Engineering",
            cards: [
                {
                    imgSrc: "/static/neural_network.jpg",
                    title: "Machine Learning",
                    content: "I used self-play reinforcement learning with Monte Carlo tree search to train a machine learning system to play various board games.",
                    link: "/machine-learning",
                    playLink: "/games"
                },
                {
                    imgSrc: "/static/react.png",
                    title: "This Website",
                    content: "I created this website using React, Bootstrap, and Django and am hosting it on my personal Raspberry Pi.",
                    link: "/website",
                    playLink: null
                },
                {
                    imgSrc: "/static/submarine.JPG",
                    title: "Autonomous Submarine",
                    content: "I lead a team to design localization, mapping, and path planning software to control our autonomous submarine.",
                    link: "/aquadrone-software",
                    playLink: null
                }
            ]
        }
    }

    // TODO: smooth scrolling
    scrollToAbout() {
        document.getElementById("about").scrollIntoView({behavior: "smooth"})
    }

    scrollToMechanical() {
        document.getElementById("mechanical").scrollIntoView({behavior: "smooth"})
    }

    scrollToSoftware() {
        document.getElementById("software").scrollIntoView({behavior: "smooth"})
    }

    scrollToContact() {
        document.getElementById("contact").scrollIntoView({behavior: "smooth"})
    }

    render() {
        return (
            <React.Fragment>
                <Navbar onScrollToAbout={this.scrollToAbout} onScrollToMechanical={this.scrollToMechanical}
                        onScrollToSoftware={this.scrollToSoftware} onScrollToContact={this.scrollToContact}/>
                <About/>
                <Carousel title={this.state.mechanical.title} cards={this.state.mechanical.cards} id="mechanical"/>
                <Carousel title={this.state.software.title} cards={this.state.software.cards} id="software"/>
                <Contact/>
            </React.Fragment>
        )
    }
}
