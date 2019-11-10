const initialState = [
  {text: "Zero", isDone: false, id: 0},
  {text: "Uno", isDone: true, id: 1},
  {text: "Dos", isDone: false, id: 2},
];

let id = initialState.length;

const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [...state, {text: action.text, isDone: false, id: ++id}]
    case 'DELETE_TODO':
      return state.filter( todo => action.id !== todo.id)
    case 'EDIT_TODO':
      return state.map( (todo, i) => {
        if(action.id === todo.id) {
          return {...todo, text: action.text};
        } else {
          return todo;
        }
      })
    case 'SET_DONE':
      return state.map( (todo, i) => {
        if(action.id === todo.id) {
          return {...todo, isDone: !todo.isDone};
        } else {
          return todo;
        }
      })
    case 'SET_ALL_DONE':
      const allDone = state.every(({isDone}) => isDone);
      return state.map( (todo) => ({...todo, isDone: !allDone}))
    case 'DELETE_COMPLETED':
      return state.filter( ({isDone}) => !isDone );
    default:
      return state;
  }
}

export default todosReducer;
