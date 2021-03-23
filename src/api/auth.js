import apiUrl from '../apiConfig'
import axios from 'axios'
// import { data } from 'autoprefixer'

export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        email: credentials.email,
        username: credentials.username,
        weight: credentials.weight,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}

// <---- Review Crud Zone ----->
// <--------------------------->
// <--------------------------->

export const createReview = (review, user) => {
  return axios({
    url: apiUrl + '/create-reviews',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + user.token
    },
    data: {
      review: {
        title: review.title,
        body: review.body,
        rating: review.rating
      }
    }
  })
}

export const viewReview = (user, id) => {
  return axios({
    url: apiUrl + '/reviews/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'GET'
  })
}

export const viewReviews = (user, id) => {
  return axios({
    url: apiUrl + '/reviews/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'GET'
  }
  )
}

export const updateReview = (user, review, id) => {
  return axios({
    url: apiUrl + '/reviews/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'PATCH',
    data: {
      review: {
        title: review.title,
        body: review.body,
        rating: review.rating
      }
    }
  })
}

export const deleteReview = (user, id) => {
  return axios({
    url: apiUrl + '/reviews/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'DELETE'
  })
}

// // <---- Event Crud Zone ----->
// // <--------------------------->
// // <--------------------------->

export const createEvent = (event, user) => {
  return axios({
    url: apiUrl + '/create-events',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + user.token
    },
    data: {
      event: {
        title: event.title,
        date: event.date
      }
    }
  })
}

export const viewEvent = (user, id) => {
  return axios({
    url: apiUrl + '/events/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'GET'
  })
}

export const viewEvents = (user, id) => {
  return axios({
    url: apiUrl + '/events/',
    method: 'GET'
  }
  )
}

export const updateEvent = (user, event, id) => {
  return axios({
    url: apiUrl + '/events/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'PATCH',
    data: {
      event: {
        title: event.title,
        date: event.date
      }
    }
  })
}

export const deleteEvent = (user, id) => {
  return axios({
    url: apiUrl + '/events/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'DELETE'
  })
}
