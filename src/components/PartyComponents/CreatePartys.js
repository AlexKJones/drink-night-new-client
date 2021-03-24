import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PartyCreate = props => {
  const [party, setParty] = useState({ title: '', date: '' })
  const [createdPartyId, setCreatedPartyId] = useState(null)
  const { msgAlert } = props
  const handleChange = event => {
    event.persist()
    setParty(prevParty => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedParty = Object.assign({}, prevParty, updatedField)
      return editedParty
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/partys`,
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + props.user.token
      },
      data: { party }
    })
      .then(res => setCreatedPartyId(res.data.party._id))
      .then(() => {
        msgAlert({
          heading: 'Create Party Success',
          message: 'See the Party there!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Create Party Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  if (createdPartyId) {
    return <Redirect to={`/partys/${createdPartyId}`} />
  }
  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create Party</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Whiskey Wednesday"
              type="title"
              value={party.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              placeholder="January 1 2021"
              value={party.date}
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

export default PartyCreate
