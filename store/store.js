import { action, thunk, computed, createStore } from 'easy-peasy';

const model = {
  todos: [],
  data: [
    { key: 'Cardio' , icon: "heartbeat", exercices: [{id:"1", name:'Echauffement', duree:3}, {id:"2", name:'tour de chauffe', duree:7}]},
  ],
  id: 0,
  indexdisplay: 0,
  exercices: [],
  SetId: action((state, payload) => {
    state.id = payload;
  }),
  addIndex: action((state, payload) => {
    if (payload == 0)
      state.indexdisplay= 0;
    else 
      state.indexdisplay= state.indexdisplay + 1;
      // console.log(state.indexdisplay)
  }),
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  Addexercices: action((state, payload) => {
    state.exercices.push(payload);
  }),
  RemoveExercices: action((state, id) => {
    state.exercices = state.exercices.filter((exercices) => exercices.id !== id);
  }),
  AddEntrainement: action((state, payload) => {
    state.data.push(payload);
  }),
  Deletexercice: action((state, payload) => {
    state.exercices = [];
  }),
  formatData: action((state, numColumns, count) => {
    const numberOfFullRows = Math.floor(count / numColumns);
    let numberOfElementsLastRow = count - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      state.data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  }),
  completedTodos: computed((state) => state.todos.filter((todo) => todo.done)),
  count: computed(state => state.data.length),
  removeTodos: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  })
};

export default model;