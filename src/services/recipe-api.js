import tokenService from './tokenService';

const BASE_URL = '/api/recipes/';

export function index() {
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json', 
      'Authorization': ' Bearer ' + tokenService.getToken()}
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function create(rec) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(rec)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export function update(rec) {
  return fetch(`${BASE_URL}/${rec._id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json', 
      'Authorization': ' Bearer ' + tokenService.getToken()},
    body: JSON.stringify(rec)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json', 
      'Authorization': ' Bearer ' + tokenService.getToken()}
  }).then(res => res.json());
}