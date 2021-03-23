import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { viewEvent, deleteEvent, deleteReview } from '../../api/auth'
import Card from 'react-bootstrap/Card'

const ViewEvent = (props) => {
  const [event, setEvent] = useState(null)
  const [reviews, setReviews] = useState(null)
  const [owner, setOwner] = useState(null)
  const { user, msgAlert, match, history } = props

  useEffect(() => {
    viewEvent(user, match.params.eventId)
      .then(res => {
        setEvent(res.data.event)
        setReviews(res.data.reviews)
        setOwner(res.data.event.owner)
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
      {event && reviews ? (
        <div>
          <div>
            <Card>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>Starring: {event.starring}</Card.Text>
              <Card.Text>Directed by: {event.director}</Card.Text>
              <Card.Text>{event.description}</Card.Text>
              <Card.Text>released: {event.released}</Card.Text>
              {user._id === owner ? <Link to={'/event-update/' + event._id}>Update Event</Link> : '' }
              <Link to={'/create-review/' + event._id}>Review Event</Link>
              {user._id === owner ? <Button onClick={handleDelete}>Delete This Event</Button> : '' }
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

export default withRouter(ViewEvent)
