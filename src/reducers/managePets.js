export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {
        pets: [
          ...state.pets,
          action.pet
        ]
      })
    case 'REMOVE_PET':
      const index = state.pets.findIndex( pet => pet.id === action.id )
      return Object.assign({}, state, {
        pets: [
          ...state.pets.slice(0, index),
          ...state.pets.slice(index + 1)
        ]
      })
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  var display = document.getElementById('container')
  var html = state.pets.map( pet => `<li>${pet.name}</li>`).join('')
  display.innerHTML = `<ul>${html}</ul>`
}
