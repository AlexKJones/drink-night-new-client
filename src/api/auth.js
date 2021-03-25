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

// // <---- Party Crud Zone ----->
// // <--------------------------->
// // <--------------------------->

export const createParty = (party, user) => {
  return axios({
    url: apiUrl + '/create-partys',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + user.token
    },
    data: {
      party: {
        title: party.title,
        date: party.date,
        bacpoints: party.bacpoints,
        beer: party.beer,
        wine: party.wine,
        cider: party.cider,
        mead: party.mead,
        sake: party.sake,
        gin: party.gin,
        brandy: party.brandy,
        whiskey: party.whiskey,
        rum: party.rum,
        tequila: party.tequila,
        vodka: party.vodka,
        absinthe: party.absinthe,
        everclear: party.everclear
      }
    }
  })
}

export const viewParty = (user, id) => {
  return axios({
    url: apiUrl + '/partys/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'GET'
  })
}

export const viewPartys = (user, id) => {
  return axios({
    url: apiUrl + '/partys/',
    method: 'GET'
  }
  )
}

export const updateParty = (user, party, id) => {
  return axios({
    url: apiUrl + '/partys/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'PATCH',
    data: {
      party: {
        title: party.title,
        date: party.date,
        bacpoints: party.bacpoints,
        beer: party.beer,
        wine: party.wine,
        cider: party.cider,
        mead: party.mead,
        sake: party.sake,
        gin: party.gin,
        brandy: party.brandy,
        whiskey: party.whiskey,
        rum: party.rum,
        tequila: party.tequila,
        vodka: party.vodka,
        absinthe: party.absinthe,
        everclear: party.everclear
      }
    }
  })
}

export const deleteParty = (user, id) => {
  return axios({
    url: apiUrl + '/partys/' + id,
    headers: {
      Authorization: 'Bearer ' + user.token
    },
    method: 'DELETE'
  })
}
