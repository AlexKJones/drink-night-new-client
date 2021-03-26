import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ReviewCreate = props => {
  const partyId = props.match.params.partyId
  const [review, setReview] = useState({ party: partyId, notes: '', blackout: false, heartburn: false, bloating: false, diarrhea: false, vomit: false, stomach: false, headache: false, breathing: false, coordination: false, insomnia: false, redface: false, memory: false })
  const [createdReviewId, setCreatedReviewId] = useState(null)
  const { msgAlert } = props
  const handleChange = event => {
    event.persist()
    setReview(prevReview => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedReview = Object.assign({}, prevReview, updatedField)
      return editedReview
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/reviews`,
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + props.user.token
      },
      data: { review }
    })
      .then(res => setCreatedReviewId(res.data.review._id))
      .then(() => {
        msgAlert({
          heading: 'Create Review Success',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Create Review Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      }).catch(console.error)
  }

  if (createdReviewId) {
    return <Redirect to={`/reviews/${createdReviewId}`} />
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create Review</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              placeholder="Had a bad headache but didn't eat before."
              value={review.notes}
              name="notes"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
          <Link to={'/'}>
            <button>Cancel</button>
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default ReviewCreate
