import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { viewParty, deleteParty, deleteReview, updateParty } from '../../api/auth'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import ProgressBar from 'react-bootstrap/ProgressBar'

const ViewParty = (props) => {
  const [party, setParty] = useState({ title: '', date: '', bacpoints: 0, beer: 0, wine: 0, cider: 0, mead: 0, sake: 0, gin: 0, brandy: 0, whiskey: 0, rum: 0, tequila: 0, vodka: 0, absinthe: 0, everclear: 0 })
  const [reviews, setReviews] = useState(null)
  const [owner, setOwner] = useState(null)
  const { user, msgAlert, match, history } = props
  const [updated, setUpdated] = useState(false)

  // handles the updating of drinks to and from party
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
  if (updated) {
    console.log('update successful')
    // return <Redirect to={`/partys/${props.match.params.partyId}`} />
  }
  // handles deleting party or review
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
  // some quick card css
  const partyCard = {
    card: {
      backgroundColor: '#CE6A6C',
      color: '#222F53',
      borderRadius: 20,
      padding: '1rem',
      width: '90%',
      // height: '24rem',
      margin: 10,
      textAlign: 'center'
    },
    conatiner: {
      display: 'center'
    },
    button: {
      backgroundColor: '#222F53'
    }
  }
  // handle the adding or deleting of the drink variables
  const handleBeer = event => {
    event.persist()
    setParty(prevParty => {
      const updatedBeer = { [party.beer]: party.beer++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedBeer)
      return editedParty
    })
  }
  const handleRemBeer = event => {
    event.persist()
    setParty(prevParty => {
      const updatedBeer = { [party.beer]: party.beer--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedBeer)
      return editedParty
    })
  }
  const handleWine = event => {
    event.persist()
    setParty(prevParty => {
      const updatedWine = { [party.wine]: party.wine++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedWine)
      return editedParty
    })
  }
  const handleRemWine = event => {
    event.persist()
    setParty(prevParty => {
      const updatedWine = { [party.wine]: party.wine--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedWine)
      return editedParty
    })
  }
  const handleCider = event => {
    event.persist()
    setParty(prevParty => {
      const updatedCider = { [party.cider]: party.cider++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedCider)
      return editedParty
    })
  }
  const handleRemCider = event => {
    event.persist()
    setParty(prevParty => {
      const updatedCider = { [party.cider]: party.cider--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedCider)
      return editedParty
    })
  }
  const handleMead = event => {
    event.persist()
    setParty(prevParty => {
      const updatedMead = { [party.mead]: party.mead++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedMead)
      return editedParty
    })
  }
  const handleRemMead = event => {
    event.persist()
    setParty(prevParty => {
      const updatedMead = { [party.mead]: party.mead--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedMead)
      return editedParty
    })
  }
  const handleSake = event => {
    event.persist()
    setParty(prevParty => {
      const updatedSake = { [party.sake]: party.sake++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedSake)
      return editedParty
    })
  }
  const handleRemSake = event => {
    event.persist()
    setParty(prevParty => {
      const updatedSake = { [party.sake]: party.sake--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedSake)
      return editedParty
    })
  }
  const handleGin = event => {
    event.persist()
    setParty(prevParty => {
      const updatedGin = { [party.gin]: party.gin++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedGin)
      return editedParty
    })
  }
  const handleRemGin = event => {
    event.persist()
    setParty(prevParty => {
      const updatedGin = { [party.gin]: party.gin--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedGin)
      return editedParty
    })
  }
  const handleBrandy = event => {
    event.persist()
    setParty(prevParty => {
      const updatedBrandy = { [party.brandy]: party.brandy++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedBrandy)
      return editedParty
    })
  }
  const handleRemBrandy = event => {
    event.persist()
    setParty(prevParty => {
      const updatedBrandy = { [party.brandy]: party.brandy--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedBrandy)
      return editedParty
    })
  }
  const handleWhiskey = event => {
    event.persist()
    setParty(prevParty => {
      const updatedWhiskey = { [party.whiskey]: party.whiskey++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedWhiskey)
      return editedParty
    })
  }
  const handleRemWhiskey = event => {
    event.persist()
    setParty(prevParty => {
      const updatedWhiskey = { [party.whiskey]: party.whiskey--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedWhiskey)
      return editedParty
    })
  }
  const handleRum = event => {
    event.persist()
    setParty(prevParty => {
      const updatedRum = { [party.rum]: party.rum++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedRum)
      return editedParty
    })
  }
  const handleRemRum = event => {
    event.persist()
    setParty(prevParty => {
      const updatedRum = { [party.rum]: party.rum--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedRum)
      return editedParty
    })
  }
  const handleTequila = event => {
    event.persist()
    setParty(prevParty => {
      const updatedTequila = { [party.tequila]: party.tequila++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedTequila)
      return editedParty
    })
  }
  const handleRemTequila = event => {
    event.persist()
    setParty(prevParty => {
      const updatedTequila = { [party.tequila]: party.tequila--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedTequila)
      return editedParty
    })
  }
  const handleVodka = event => {
    event.persist()
    setParty(prevParty => {
      const updatedVodka = { [party.vodka]: party.vodka++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedVodka)
      return editedParty
    })
  }
  const handleRemVodka = event => {
    event.persist()
    setParty(prevParty => {
      const updatedVodka = { [party.vodka]: party.vodka--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedVodka)
      return editedParty
    })
  }
  const handleAbsinthe = event => {
    event.persist()
    setParty(prevParty => {
      const updatedAbsinthe = { [party.absinthe]: party.absinthe++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedAbsinthe)
      return editedParty
    })
  }
  const handleRemAbsinthe = event => {
    event.persist()
    setParty(prevParty => {
      const updatedAbsinthe = { [party.absinthe]: party.absinthe--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedAbsinthe)
      return editedParty
    })
  }
  const handleEverclear = event => {
    event.persist()
    setParty(prevParty => {
      const updatedEverclear = { [party.everclear]: party.everclear++, [party.bacpoints]: party.bacpoints++ }
      const editedParty = Object.assign({}, prevParty, updatedEverclear)
      return editedParty
    })
  }
  const handleRemEverclear = event => {
    event.persist()
    setParty(prevParty => {
      const updatedEverclear = { [party.everclear]: party.everclear--, [party.bacpoints]: party.bacpoints-- }
      const editedParty = Object.assign({}, prevParty, updatedEverclear)
      return editedParty
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('props.user ' + props.user)
    console.log('party is: ' + party)
    console.log('matchparamsid is ' + props.match.params.partyId)
    updateParty(props.user, party, props.match.params.partyId)
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
      {party && reviews ? (
        <div>
          <div>
            <Card style={partyCard.card}>
              <Card.Title>{party.title}</Card.Title>
              <Card.Text>Date: {party.date}</Card.Text>
              <Dropdown onSubmit={handleSubmit}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Add Drink
                </Dropdown.Toggle>
                <Dropdown.Menu onClick={handleSubmit}>
                  <Dropdown.Item as="button" onClick={handleBeer} type="submit">Beer</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleWine} type="submit">Wine</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleCider} type="submit">Cider</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleMead} type="submit">Mead</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleSake} type="submit">Sake</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleGin} type="submit">Gin</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleBrandy} type="submit">Brandy</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleWhiskey} type="submit">Whiskey</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleRum} type="submit">Rum</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleTequila} type="submit">Tequila</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleVodka} type="submit">Vodka</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleAbsinthe} type="submit">Absinthe</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={handleEverclear} type="submit">Everclear</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              { party.beer > 0 ? <Card.Text> Beers: {party.beer}</Card.Text> : '' }
              { party.wine > 0 ? <Card.Text> Wine: {party.wine}</Card.Text> : '' }
              { party.cider > 0 ? <Card.Text> Ciders: {party.cider}</Card.Text> : '' }
              { party.mead > 0 ? <Card.Text> Mead: {party.mead}</Card.Text> : '' }
              { party.sake > 0 ? <Card.Text> Sake: {party.sake}</Card.Text> : '' }
              { party.gin > 0 ? <Card.Text> Gin: {party.gin}</Card.Text> : '' }
              { party.brandy > 0 ? <Card.Text> Brandys: {party.brandy}</Card.Text> : '' }
              { party.whiskey > 0 ? <Card.Text> Whiskeys: {party.whiskey}</Card.Text> : '' }
              { party.rum > 0 ? <Card.Text> Rum: {party.rum}</Card.Text> : '' }
              { party.tequila > 0 ? <Card.Text> Tequila: {party.tequila}</Card.Text> : '' }
              { party.vodka > 0 ? <Card.Text> Vodka: {party.vodka}</Card.Text> : '' }
              { party.absinthe > 0 ? <Card.Text> Absinthe: {party.absinthe}</Card.Text> : '' }
              { party.everclear > 0 ? <Card.Text> Everclear: {party.everclear}</Card.Text> : '' }
              <Dropdown onSubmit={handleSubmit}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Remove Drink
                </Dropdown.Toggle>
                <Dropdown.Menu onClick={handleSubmit}>
                  { party.beer > 0 ? <Dropdown.Item as="button" onClick={handleRemBeer}>Beer</Dropdown.Item> : '' }
                  { party.wine > 0 ? <Dropdown.Item as="button" onClick={handleRemWine}>Wine</Dropdown.Item> : '' }
                  { party.cider > 0 ? <Dropdown.Item as="button" onClick={handleRemCider}>Cider</Dropdown.Item> : '' }
                  { party.mead > 0 ? <Dropdown.Item as="button" onClick={handleRemMead}>Mead</Dropdown.Item> : '' }
                  { party.sake > 0 ? <Dropdown.Item as="button" onClick={handleRemSake}>Sake</Dropdown.Item> : '' }
                  { party.gin > 0 ? <Dropdown.Item as="button" onClick={handleRemGin}>Gin</Dropdown.Item> : '' }
                  { party.brandy > 0 ? <Dropdown.Item as="button" onClick={handleRemBrandy}>Brandy</Dropdown.Item> : '' }
                  { party.whiskey > 0 ? <Dropdown.Item as="button" onClick={handleRemWhiskey}>Whiskey</Dropdown.Item> : '' }
                  { party.rum > 0 ? <Dropdown.Item as="button" onClick={handleRemRum}>Rum</Dropdown.Item> : '' }
                  { party.tequila > 0 ? <Dropdown.Item as="button" onClick={handleRemTequila}>Tequila</Dropdown.Item> : '' }
                  { party.vodka > 0 ? <Dropdown.Item as="button" onClick={handleRemVodka}>Vodka</Dropdown.Item> : '' }
                  { party.absinthe > 0 ? <Dropdown.Item as="button" onClick={handleRemAbsinthe}>Absinthe</Dropdown.Item> : '' }
                  { party.everclear > 0 ? <Dropdown.Item as="button" onClick={handleRemEverclear}>Everclear</Dropdown.Item> : '' }
                </Dropdown.Menu>
              </Dropdown>
              <Card.Text>BacScore: {party.bacpoints}</Card.Text>
              <div>
                { party.bacpoints <= 3 ? <ProgressBar striped variant="success" now={party.bacpoints * 10} /> : '' }
                { party.bacpoints <= 6 && party.bacpoints > 3 ? <ProgressBar striped variant="info" now={party.bacpoints * 10} /> : '' }
                { party.bacpoints <= 9 && party.bacpoints > 6 ? <ProgressBar striped variant="warning" now={party.bacpoints * 10} /> : '' }
                { party.bacpoints > 9 ? <ProgressBar striped variant="danger" now={party.bacpoints * 10} /> : '' }
              </div>
              {user._id === owner ? <Link to={'/party-update/' + party._id}>Update Party</Link> : '' }
              <Link to={'/create-review/' + party._id}>Review Party</Link>
              {user._id === owner ? <Button style={partyCard.button} onClick={handleDelete}>Delete This Party</Button> : '' }
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
