import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { viewEvents } from '../../api/auth'
import Card from 'react-bootstrap/Card'

const ViewEvents = props => {
  const [eventArray, setEventArray] = useState(null)
  const { user } = props

  useEffect(() => {
    viewEvents()
      .then(res => {
        setEventArray(res.data.events)
      })
      .catch(console.error)
  }, [])

  if (!eventArray) {
    return ('loading...')
  } else {
    return (
      <div>
        {eventArray.map(event => (
          <div key={event._id}>
            <Card>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>Starring: {event.starring}</Card.Text>
              {user ? <Link to={`/events/${event._id}`}>More Info   </Link> : '' }
            </Card>
          </div>
        ))}
      </div>

    )
  }
}

export default ViewEvents
