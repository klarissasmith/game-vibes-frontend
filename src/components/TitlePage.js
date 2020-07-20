import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const TitlePage = props => {
    return (
      <div>
        <Jumbotron>
          <h1>Welcome to Game Vibes!</h1>
          <p>
            Here you will find a list of games and the resulting reviews from fellow enthusiasts. Enjoy!
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    );
}

export default TitlePage