import {
  REMOVE_SERVICE, LOAD_SERVICES, EDIT_SERVICE,
  FETCH_START, FETCH_ERROR, FETCH_DONE,
} from "./actionTypes";

// actions for service list reducer

export function loadServices(services) {
  return { type: LOAD_SERVICES, payload: { services } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } }
}

export function editService(id, name, price) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}

// actions for fetcher reducer

export function fetchStart() {
  return { type: FETCH_START };
}

export function fetchDone() {
  return { type: FETCH_DONE };
}

export function fetchError(error) {
  return { type: FETCH_ERROR, payload: { error } };
}
