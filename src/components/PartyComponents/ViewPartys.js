import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { viewPartys } from '../../api/auth'
import Card from 'react-bootstrap/Card'

const ViewPartys = props => {
  const [partyArray, setPartyArray] = useState(null)
  const { user } = props

  useEffect(() => {
    viewPartys()
      .then(res => {
        setPartyArray(res.data.partys)
      })
      .catch(console.error)
  }, [])

  const partyCard = {
    card: {
      backgroundColor: '#CE6A6C',
      color: '#222F53',
      borderRadius: 20,
      padding: '1rem',
      width: '18rem',
      height: '24rem',
      margin: 10
    },
    conatiner: {
      display: 'flex'
    }
  }

  if (!partyArray) {
    return ('loading...')
  } else {
    return (
      <div>
        {partyArray.map(party => (
          <div key={party._id}>
            <Card style={partyCard.card}>
              <Card.Body>
                <Card.Title>{party.title}</Card.Title>
                <Card.Text>Date: {party.date}</Card.Text>
                {user ? <Link to={`/partys/${party._id}`}>More Info   </Link> : '' }
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

    )
  }
}

export default ViewPartys
