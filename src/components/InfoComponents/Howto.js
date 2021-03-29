import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const Howto = (props) => {
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
            <Card.Title>How to Use</Card.Title>
            <Card.Text>Some Text</Card.Text>
            <Card.Text>Some more txt</Card.Text>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Howto)
