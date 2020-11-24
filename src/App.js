import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //  'Take dogs for a walk', 'Take the garbage out', "Chidiebere has started taking massive and great actions today" (Initial temporary data before the database)

  // When the app loads, we need to listen to the database and fetch new Todos as they get added/removed

  useEffect( () => {
    // this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    // This will fire off when we click the button
    event.preventDefault(); // This will stop the REFRESH

    // console.log(firebase.firestore.FieldValue.serverTimestamp());

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setTodos([...todos, input]);
    setInput(''); // clear up the input after submitting
  }

  return (
    <div className="App">
      <h1>Hello Chidiebere Chukwuma &#129409;  !</h1>

      <FormControl>
        <InputLabel>Add your TODOs </InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo} > Add Todo </Button>
      </FormControl>
      

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
