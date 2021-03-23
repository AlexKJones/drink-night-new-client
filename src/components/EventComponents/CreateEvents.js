import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EventCreate = props => {
  const [event, setEvent] = useState({ title: '', date: '' })
  const [createdEventId, setCreatedEventId] = useState(null)
  const { msgAlert } = props
  const handleChange = event => {
    event.persist()
    setEvent(prevEvent => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedEvent = Object.assign({}, prevEvent, updatedField)
      return editedEvent
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/events`,
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + props.user.token
      },
      data: { event }
    })
      .then(res => setCreatedEventId(res.data.event._id))
      .then(() => {
        msgAlert({
          heading: 'Create Event Success',
          message: 'See the Event there!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Create Event Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  if (createdEventId) {
    return <Redirect to={`/events/${createdEventId}`} />
  }
  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create Event</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Whiskey Wednesday"
              value={event.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              placeholder="January 1 2021"
              value={event.date}
              type="date"
              name="date"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
          <Link to={'/'}>
            <Button>Cancel</Button>
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default EventCreate
