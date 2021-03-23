import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { viewEvent, deleteEvent } from '../../api/auth'
const DeleteEvent = (props) => {
  // const [loading, setLoading] = useState(true)
  const [event, setEvent] = useState(null)
  const { user, msgAlert, match, history } = props

  useEffect(() => {
    viewEvent(user, match.params.eventId)
      .then(res => {
        setEvent(res.data.event)
      })
      .then(() => {
        msgAlert({
          heading: 'View Event Success',
          message: 'See the Event there!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Event Event Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  const handleDelete = () => {
    deleteEvent(user, match.params.eventId)
      .then(() => {
        msgAlert({
          heading: 'Event Deleted',
          message: 'Back to the list of events that exist',
          variant: 'success'
        })
      })
      .then(() => history.push('/events'))
      .catch(err => {
        msgAlert({
          heading: 'Deletion Failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  return (
    <div>
      {event ? (
        <div>
          <h2>{event.title}</h2>
          <p>Directed by: {event.director}</p>
          <button onClick={handleDelete}>Delete</button>
          <Link to={'/event-update/' + event._id}>Update Event</Link>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(DeleteEvent)
