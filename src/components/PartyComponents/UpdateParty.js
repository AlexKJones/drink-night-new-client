import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { updateParty, viewParty } from '../../api/auth'

const PartyUpdate = (props) => {
  const [party, setParty] = useState({ title: '', date: '' })
  const [updated, setUpdated] = useState(false)
  const { msgAlert } = props
  useEffect(() => {
    viewParty(props.user, props.match.params.partyId)
      .then(res => setParty(res.data.party))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setParty(prevParty => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedParty = Object.assign({}, prevParty, updatedField)
      return editedParty
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateParty(props.user, party, props.match.params.partyId)
      .then(() => setUpdated(true))
      .then(() => {
        msgAlert({
          heading: 'Update Party Success',
          message: 'Nice job!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Update Party Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/partys/${props.match.params.partyId}`} />
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        placeholder="Bar Night!"
        value={party.title}
        name="title"
        onChange={handleChange}
      />
      <label>Date</label>
      <input
        placeholder="03/24/2021"
        value={party.date}
        name="date"
        type="date"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <Link to={'update-party/'}>
        <button>Cancel</button>
      </Link>
    </form>
  )
}

export default PartyUpdate
