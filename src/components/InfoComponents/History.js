import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

const History = (props) => {
  useEffect(() => {
  }, [])
  // some quick card css
  const partyCard = {
    card: {
      backgroundColor: '#CE6A6C',
      color: '#222F53',
      borderRadius: 20,
      padding: '1rem',
      width: '90%',
      // height: '24rem',
      margin: 10,
      textAlign: 'center'
    },
    a: {
      color: '#222F53'
    },
    conatiner: {
      display: 'center'
    },
    button: {
      backgroundColor: '#222F53'
    }
  }

  return (
    <div>
      <div>
        <div>
          <Card style={partyCard.card}>
            <Card.Title>Drink History</Card.Title>
            <Card.Text>Some General History of Alcohol</Card.Text>
            <Card.Text>Sources listed below each section.</Card.Text>
          </Card>
          <Accordion>
            <Card style={partyCard.card}>
              <Card.Header>
                <Accordion.Toggle style={partyCard.a} as={Button} variant="link" eventKey="0">
                  Whiskey History!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Text>{`
                  2000 BC: Arguably, the art of distillation was founded in ancient Mesopotamia (the modern day equivalent is an area covering parts of Iraq and Syria), often used as a way to produce perfumes and aromatics.\n
                100 AD: Here we find the first written record of distilling. Ancient Greek philosopher Alexander of Aphrodisias describes the process of taking sea water and distilling it into pure drinking water. Medieval civilizations evolved their techniques over the following centuries, although still not resulting in alcohol.
                `}</Card.Text>
              </Accordion.Collapse>
            </Card>
            <Card style={partyCard.card}>
              <Card.Header>
                <Accordion.Toggle style={partyCard.a} as={Button} variant="link" eventKey="1">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! Im another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default withRouter(History)
