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

  if (!partyArray) {
    return ('loading...')
  } else {
    return (
      <div>
        {partyArray.map(party => (
          <div key={party._id}>
            <Card>
              <Card.Title>{party.title}</Card.Title>
              <Card.Text>Date: {party.date}</Card.Text>
              {user ? <Link to={`/partys/${party._id}`}>More Info   </Link> : '' }
            </Card>
          </div>
        ))}
      </div>

    )
  }
}

export default ViewPartys
