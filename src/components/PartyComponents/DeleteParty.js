import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { viewParty, deleteParty } from '../../api/auth'
const DeleteParty = (props) => {
  // const [loading, setLoading] = useState(true)
  const [party, setParty] = useState(null)
  const { user, msgAlert, match, history } = props

  useEffect(() => {
    viewParty(user, match.params.partyId)
      .then(res => {
        setParty(res.data.party)
      })
      .then(() => {
        msgAlert({
          heading: 'View Party Success',
          message: 'See the Party there!',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Party Party Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  const handleDelete = () => {
    deleteParty(user, match.params.partyId)
      .then(() => {
        msgAlert({
          heading: 'Party Deleted',
          message: 'Back to the list of partys that exist',
          variant: 'success'
        })
      })
      .then(() => history.push('/partys'))
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
      {party ? (
        <div>
          <h2>{party.title}</h2>
          <p>Date: {party.date}</p>
          <button onClick={handleDelete}>Delete</button>
          <Link to={'/party-update/' + party._id}>Update Party</Link>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(DeleteParty)
