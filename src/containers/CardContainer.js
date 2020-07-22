import React from 'react'
import GameCard from '../components/GameCard'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CardContainer = (props) => {
    console.log(props)
    return (
        <div>
            <GameCard/>
        </div>
    )
}

export default CardContainer