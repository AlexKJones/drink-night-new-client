import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { viewReviews } from '../../api/auth'

const ViewReviews = props => {
  const [reviewArray, setReviewArray] = useState(null)
  const { user, match } = props

  useEffect(() => {
    viewReviews(user, match.params.partyId)
      .then(res => {
        setReviewArray(res.data.reviews)
      })
      .catch(console.error)
  }, [])

  if (!reviewArray) {
    return ('loading...')
  } else {
    return (
      <div>
        {reviewArray.map(review => (
          <div key={review._id}>
            <h2>{review.notes}</h2>
            <Link to={`/reviews/${review._id}`}>     Edit Review</Link>
          </div>
        ))}
      </div>

    )
  }
}

export default ViewReviews
