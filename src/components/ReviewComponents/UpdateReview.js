import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { updateReview, viewReview } from '../../api/auth'

const ReviewUpdate = (props) => {
  const [review, setReview] = useState({ notes: '', blackout: false, heartburn: false, bloating: false, diarrhea: false, vomit: false, stomach: false, headache: false, breathing: false, coordination: false, insomnia: false, redface: false, memory: false })
  const [updated, setUpdated] = useState(false)
  const { msgAlert } = props

  useEffect(() => {
    viewReview(props.user, props.match.params.reviewId)
      .then(res => setReview(res.data.review))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setReview(prevReview => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedReview = Object.assign({}, prevReview, updatedField)
      return editedReview
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateReview(props.user, review, props.match.params.reviewId)
      .then(() => setUpdated(true))
      .then(() => {
        msgAlert({
          heading: 'Update Review Success',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Update Review Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/reviews/${props.match.params.reviewId}`} />
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Notes</label>
      <input
        placeholder="Fell on a friend, awkward"
        value={review.notes}
        name="notes"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <Link to={'update-review/'}>
        <button>Cancel</button>
      </Link>
    </form>
  )
}

export default ReviewUpdate
