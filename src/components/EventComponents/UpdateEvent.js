import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { updateEvent, viewEvent } from '../../api/auth'

const EventUpdate = (props) => {
  const [event, setEvent] = useState({ title: '', starring: '', director: '', description: '', released: '' })
  const [updated, setUpdated] = useState(false)
  const { msgAlert } = props
  useEffect(() => {
    viewEvent(props.user, props.match.params.eventId)
      .then(res => setEvent(res.data.event))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setEvent(prevEvent => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedEvent = Object.assign({}, prevEvent, updatedField)
      return editedEvent
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateEvent(props.user, event, props.match.params.eventId)
      .then(() => setUpdated(true))
      .then(() => {
        msgAlert({
          heading: 'Update Event Success',
          message: 'Nice job!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Update Event Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/events/${props.match.params.eventId}`} />
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        placeholder="A Wonderful Movie"
        value={event.title}
        name="title"
        onChange={handleChange}
      />
      <label>Starring</label>
      <input
        placeholder="John Doe"
        value={event.starring}
        name="starring"
        onChange={handleChange}
      />
      <label>Director</label>
      <input
        placeholder="John Doe"
        value={event.director}
        name="director"
        onChange={handleChange}
      />
      <label>Description</label>
      <input
        placeholder="John Doe"
        value={event.description}
        name="description"
        onChange={handleChange}
      />
      <label>Released</label>
      <input
        placeholder="John Doe"
        value={event.released}
        name="released"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <Link to={'update-event/'}>
        <button>Cancel</button>
      </Link>
    </form>
  )
}

export default EventUpdate
