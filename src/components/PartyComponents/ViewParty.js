import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { viewParty, deleteParty, deleteReview } from '../../api/auth'
import Card from 'react-bootstrap/Card'

const ViewParty = (props) => {
  const [party, setParty] = useState(null)
  const [reviews, setReviews] = useState(null)
  const [owner, setOwner] = useState(null)
  const { user, msgAlert, match, history } = props

  useEffect(() => {
    viewParty(user, match.params.partyId)
      .then(res => {
        setParty(res.data.party)
        setReviews(res.data.reviews)
        setOwner(res.data.party.owner)
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

  const handleRevDelete = () => {
    deleteReview(user, match.params.reviewId)
      .then(() => {
        msgAlert({
          heading: 'Review Deleted',
          message: 'Back to the list of reviews that exist',
          variant: 'success'
        })
      })
      .then(() => history.push('/reviews'))
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
      {party && reviews ? (
        <div>
          <div>
            <Card>
              <Card.Title>{party.title}</Card.Title>
              <Card.Text>Date: {party.date}</Card.Text>
              {user._id === owner ? <Link to={'/party-update/' + party._id}>Update Party</Link> : '' }
              <Link to={'/create-review/' + party._id}>Review Party</Link>
              {user._id === owner ? <Button onClick={handleDelete}>Delete This Party</Button> : '' }
            </Card>
            {reviews.map(review => (
              <div key={review._id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{review.title}</Card.Title>
                    <Card.Text>{review.body}</Card.Text>
                    <Card.Text>Rating: {review.rating}</Card.Text>
                    {user._id === review.owner ? <Link to={`/review-update/${review._id}`}>Edit Review</Link> : '' }
                    {user._id === review.owner ? <button onClick={handleRevDelete}>Delete Review</button> : '' }
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ViewParty)
