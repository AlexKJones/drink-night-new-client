import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'

import { viewReview, deleteReview, updateReview } from '../../api/auth'
const ViewReview = (props) => {
  // const [loading, setLoading] = useState(true)
  const [review, setReview] = useState(null)
  const { user, msgAlert, match, history } = props
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    viewReview(user, match.params.reviewId)
      .then(res => {
        setReview(res.data.review)
      })
      .then(() => {
        msgAlert({
          heading: 'View Review Success',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Review Failed :(',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  if (updated) {
    console.log('update successful')
  }

  const handleDelete = () => {
    deleteReview(user, match.params.reviewId)
      .then(() => {
        msgAlert({
          heading: 'Review Deleted',
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

  const handleBlackout = event => {
    event.persist()
    setReview(prevParty => {
      const updatedBlackout = { [review.everclear]: true }
      const editedParty = Object.assign({}, prevParty, updatedBlackout)
      return editedParty
    })
  }
  const handleRemBlackout = event => {
    event.persist()
    setReview(prevParty => {
      const updatedBlackout = { [review.everclear]: false }
      const editedParty = Object.assign({}, prevParty, updatedBlackout)
      return editedParty
    })
  }
  const handleHeartburn = event => {
    event.persist()
    setReview(prevParty => {
      const updatedHeartburn = { [review.heartburn]: true }
      const editedParty = Object.assign({}, prevParty, updatedHeartburn)
      return editedParty
    })
  }
  const handleRemHeartburn = event => {
    event.persist()
    setReview(prevParty => {
      const updatedHeartburn = { [review.heartburn]: false }
      const editedParty = Object.assign({}, prevParty, updatedHeartburn)
      return editedParty
    })
  }
  const handleBloating = event => {
    event.persist()
    setReview(prevParty => {
      const updatedBloating = { [review.bloating]: true }
      const editedParty = Object.assign({}, prevParty, updatedBloating)
      return editedParty
    })
  }
  const handleRemBloating = event => {
    event.persist()
    setReview(prevParty => {
      const updatedBloating = { [review.bloating]: false }
      const editedParty = Object.assign({}, prevParty, updatedBloating)
      return editedParty
    })
  }
  const handleDiarrhea = event => {
    event.persist()
    setReview(prevParty => {
      const updatedDiarrhea = { [review.diarrhea]: true }
      const editedParty = Object.assign({}, prevParty, updatedDiarrhea)
      return editedParty
    })
  }
  const handleRemDiarrhea = event => {
    event.persist()
    setReview(prevParty => {
      const updatedDiarrhea = { [review.diarrhea]: false }
      const editedParty = Object.assign({}, prevParty, updatedDiarrhea)
      return editedParty
    })
  }
  const handleVomit = event => {
    event.persist()
    setReview(prevParty => {
      const updatedVomit = { [review.vomit]: true }
      const editedParty = Object.assign({}, prevParty, updatedVomit)
      return editedParty
    })
  }
  const handleRemVomit = event => {
    event.persist()
    setReview(prevParty => {
      const updatedVomit = { [review.vomit]: false }
      const editedParty = Object.assign({}, prevParty, updatedVomit)
      return editedParty
    })
  }
  const handleStomach = event => {
    event.persist()
    setReview(prevParty => {
      const updatedStomach = { [review.stomach]: true }
      const editedParty = Object.assign({}, prevParty, updatedStomach)
      return editedParty
    })
  }
  const handleRemStomach = event => {
    event.persist()
    setReview(prevParty => {
      const updatedStomach = { [review.stomach]: false }
      const editedParty = Object.assign({}, prevParty, updatedStomach)
      return editedParty
    })
  }
  const handleHeadache = event => {
    event.persist()
    setReview(prevParty => {
      const updatedHeadache = { [review.headache]: true }
      const editedParty = Object.assign({}, prevParty, updatedHeadache)
      return editedParty
    })
  }
  const handleRemHeadache = event => {
    event.persist()
    setReview(prevParty => {
      const updatedHeadache = { [review.headache]: false }
      const editedParty = Object.assign({}, prevParty, updatedHeadache)
      return editedParty
    })
  }
  const handleBreathing = event => {
    event.persist()
    setReview(prevParty => {
      const updatedBreathing = { [review.breathing]: true }
      const editedParty = Object.assign({}, prevParty, updatedBreathing)
      return editedParty
    })
  }
  const handleRemBreathing = event => {
    event.persist()
    setReview(prevParty => {
      const updatedBreathing = { [review.breathing]: false }
      const editedParty = Object.assign({}, prevParty, updatedBreathing)
      return editedParty
    })
  }
  const handleCoordination = event => {
    event.persist()
    setReview(prevParty => {
      const updatedCoordination = { [review.everclear]: true }
      const editedParty = Object.assign({}, prevParty, updatedCoordination)
      return editedParty
    })
  }
  const handleRemCoordination = event => {
    event.persist()
    setReview(prevParty => {
      const updatedCoordination = { [review.everclear]: false }
      const editedParty = Object.assign({}, prevParty, updatedCoordination)
      return editedParty
    })
  }
  const handleInsomnia = event => {
    event.persist()
    setReview(prevParty => {
      const updatedInsomnia = { [review.everclear]: true }
      const editedParty = Object.assign({}, prevParty, updatedInsomnia)
      return editedParty
    })
  }
  const handleRemInsomnia = event => {
    event.persist()
    setReview(prevParty => {
      const updatedInsomnia = { [review.everclear]: false }
      const editedParty = Object.assign({}, prevParty, updatedInsomnia)
      return editedParty
    })
  }
  const handleRedface = event => {
    event.persist()
    setReview(prevParty => {
      const updatedRedface = { [review.everclear]: true }
      const editedParty = Object.assign({}, prevParty, updatedRedface)
      return editedParty
    })
  }
  const handleRemRedface = event => {
    event.persist()
    setReview(prevParty => {
      const updatedRedface = { [review.everclear]: false }
      const editedParty = Object.assign({}, prevParty, updatedRedface)
      return editedParty
    })
  }
  const handleMemory = event => {
    event.persist()
    setReview(prevParty => {
      const updatedMemory = { [review.memory]: true }
      const editedParty = Object.assign({}, prevParty, updatedMemory)
      return editedParty
    })
  }
  const handleRemMemory = event => {
    event.persist()
    setReview(prevParty => {
      const updatedMemory = { [review.memory]: false }
      const editedParty = Object.assign({}, prevParty, updatedMemory)
      return editedParty
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateReview(props.user, review, props.match.params.reviewId)
      .then(() => setUpdated(true))
      .then(() => {
        msgAlert({
          heading: 'Update Success',
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

  return (
    <div>
      {review ? (
        <div>
          <Card>
            <Card.Body>
              <Card.Title>{review.notes}</Card.Title>
              <Dropdown onSubmit={handleSubmit}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Add Symptom
                </Dropdown.Toggle>
                <Dropdown.Menu onClick={handleSubmit}>
                  <Dropdown.Item as="button" onClick={handleBlackout} type="submit">Beer</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleHeartburn} type="submit">Wine</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleBloating} type="submit">Cider</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleDiarrhea} type="submit">Mead</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleVomit} type="submit">Sake</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleStomach} type="submit">Gin</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleHeadache} type="submit">Brandy</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleBreathing} type="submit">Whiskey</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleCoordination} type="submit">Rum</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleInsomnia} type="submit">Tequila</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleRedface} type="submit">Vodka</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleMemory} type="submit">Absinthe</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              { review.blackout ? <Card.Text>Blackout</Card.Text> : '' }
              { review.heartburn ? <Card.Text>HeartBurn/ChestPain</Card.Text> : '' }
              { review.bloating ? <Card.Text>Bloating</Card.Text> : '' }
              { review.diarrhea ? <Card.Text>Diarrhea</Card.Text> : '' }
              { review.vomit ? <Card.Text>Vomited</Card.Text> : '' }
              { review.stomach ? <Card.Text>StomachPain</Card.Text> : '' }
              { review.headache ? <Card.Text>Headache</Card.Text> : '' }
              { review.breathing ? <Card.Text>TroubleBreathing</Card.Text> : '' }
              { review.coordination ? <Card.Text>TroubleStanding</Card.Text> : '' }
              { review.insomnia ? <Card.Text>Insomnia</Card.Text> : '' }
              { review.redface ? <Card.Text>FaceReddening</Card.Text> : '' }
              { review.memory ? <Card.Text>MemoryLoss</Card.Text> : '' }
              <Dropdown onSubmit={handleSubmit}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Add Symptom
                </Dropdown.Toggle>
                <Dropdown.Menu onClick={handleSubmit}>
                  { review.blackout ? <Dropdown.Item as="button" onClick={handleRemBlackout} type="submit">Beer</Dropdown.Item> : '' }
                  { review.heartburn ? <Dropdown.Item as="button" onClick={handleRemHeartburn} type="submit">Wine</Dropdown.Item> : '' }
                  { review.bloating ? <Dropdown.Item as="button" onClick={handleRemBloating} type="submit">Cider</Dropdown.Item> : '' }
                  { review.diarrhea ? <Dropdown.Item as="button" onClick={handleRemDiarrhea} type="submit">Mead</Dropdown.Item> : '' }
                  { review.vomit ? <Dropdown.Item as="button" onClick={handleRemVomit} type="submit">Sake</Dropdown.Item> : '' }
                  { review.stomach ? <Dropdown.Item as="button" onClick={handleRemStomach} type="submit">Gin</Dropdown.Item> : '' }
                  { review.headache ? <Dropdown.Item as="button" onClick={handleRemHeadache} type="submit">Brandy</Dropdown.Item> : '' }
                  { review.breathing ? <Dropdown.Item as="button" onClick={handleRemBreathing} type="submit">Whiskey</Dropdown.Item> : '' }
                  { review.coordination ? <Dropdown.Item as="button" onClick={handleRemCoordination} type="submit">Rum</Dropdown.Item> : '' }
                  { review.insomnia ? <Dropdown.Item as="button" onClick={handleRemInsomnia} type="submit">Tequila</Dropdown.Item> : '' }
                  { review.redface ? <Dropdown.Item as="button" onClick={handleRemRedface} type="submit">Vodka</Dropdown.Item> : '' }
                  { review.memory ? <Dropdown.Item as="button" onClick={handleRemMemory} type="submit">Absinthe</Dropdown.Item> : '' }
                </Dropdown.Menu>
              </Dropdown>
              <Link to={`/reviews/${review._id}`}> Edit Notes</Link>
              <button onClick={handleDelete}>Delete Review</button>
            </Card.Body>
          </Card>
        </div>
      ) : 'Loading...'}
    </div>
  )
}

export default withRouter(ViewReview)
