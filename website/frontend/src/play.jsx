import React from "react"
import "./styles/custom.scss"
import {render} from "react-dom"
import PlayPage from "./components/play/play_page.jsx"

function getJSON(id) {
    return JSON.parse(document.getElementById(id).textContent)
}

render(
    <React.StrictMode>
        <PlayPage urlParameters={getJSON("urlParametersJSON")} gameStatistics={getJSON("gameStatisticsJSON")}/>
    </React.StrictMode>,
    document.getElementById("app"))
