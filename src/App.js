import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
// <-------- Event imports ------------->
import CreateEvent from './components/EventComponents/CreateEvents'
import UpdateEvent from './components/EventComponents/UpdateEvent'
import DeleteEvent from './components/EventComponents/DeleteEvent'
import ViewEvent from './components/EventComponents/ViewEvent'
import ViewEvents from './components/EventComponents/ViewEvents'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <Route user={user} exact path='/view-events' render={() => (
            <ViewEvents
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
          <AuthenticatedRoute user={user} path='/create-events' render={() => (
            <CreateEvent
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
          <AuthenticatedRoute user={user} path='/delete-event/:eventId' render={({ match }) => (
            <DeleteEvent
              msgAlert={this.msgAlert}
              user={user}
              match={match}
            />
          )} />
          <AuthenticatedRoute user={user} path='/events/:eventId' render={({ match }) => (
            <ViewEvent
              user={user}
              msgAlert={this.msgAlert}
              match={match}
            />
          )}/>
          <AuthenticatedRoute user={user} path='/event-update/:eventId' render={({ match, history }) => (
            <UpdateEvent
              match={match}
              history={history}
              user={user}
              msgAlert={this.msgAlert}
            />
          )}/>
        </main>
      </Fragment>

    )
  }
}

export default App
