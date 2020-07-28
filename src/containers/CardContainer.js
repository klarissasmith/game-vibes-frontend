import React from 'react'
import GameCard from '../components/GameCard'
import { connect } from 'react-redux'

const CardContainer = (props) => {
    // console.log(props)
    let gameCard = props.allGames.map(game => {
        return (
            <div>
                <GameCard game={game} />
            </div>
        )
    })
    return gameCard
}

const mapStateToProps = (state) => {
    return {
        allGames: state.allGames
    }

}
export default connect(mapStateToProps)(CardContainer)