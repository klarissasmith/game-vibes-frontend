import React from 'react'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const GameCard = props => {
    return (
      <div>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/I/51ZMKvnLbbL._SX375_BO1,204,203,200_.jpg"
            />
            <Card.Body>
              <Card.Title>Titanfall</Card.Title>
              <Card.Text>"Fun, great game of amazingness"</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://s2.gaming-cdn.com/images/products/1273/orig/titanfall-2-cover.jpg"
            />
            <Card.Body>
              <Card.Title>Titanfall 2</Card.Title>
              <Card.Text>
                "The second installment of a great game of amazingness"
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/I/81l0Ek8x%2BAL._SY445_.jpg"
            />
            <Card.Body>
              <Card.Title>The Sims Medieval</Card.Title>
              <Card.Text>"The Sims in the past"</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="https://steamcdn-a.akamaihd.net/steam/apps/320240/capsule_616x353.jpg?t=1575388728"
            />
            <Card.Body>
              <Card.Title>We Happy Few</Card.Title>
              <Card.Text>
                "The game where the world tries to attack and kill you"
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://steamcdn-a.akamaihd.net/steam/apps/219740/header.jpg?t=1588618326"
            />
            <Card.Body>
              <Card.Title>Don't Starve</Card.Title>
              <Card.Text>
                "A game where you're small and fragile and try not to be eaten."
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/I/810Fi5IjnPL._SY445_.jpg"
            />
            <Card.Body>
              <Card.Title>The Sims 4</Card.Title>
              <Card.Text>"The Sims. What else needs to be said?"</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
}

export default GameCard