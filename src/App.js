import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [person, setPerson] = useState(0);
  const {id, name, description, age, image} = data[person];

  const previousPerson = () => {
    setPerson((person => {
      person --;
      if (person < 0) {
        return data.length - 1;
      }
      return person;
    }))
  }

  const nextPerson = () => {
    setPerson((person => {
      person ++;
      if (person > data.length - 1) {
        person = 0;
      }
      return person;
    }))
  }

  return(
    <div className='page'>
      <div className='container'>
        <img src={image} alt='Person' width="300px"/>
      </div>
      <div className='container'>
        <h1>{id} - {name}</h1>
      </div>
      <div className='container'>
        <h2>{description}</h2>
      </div>
      <div className='container'>
        <h2>Возраст: {age}</h2>
      </div>
      <div className='btn container'>
        <button onClick={previousPerson}>Предыдущий</button>
        <button onClick={nextPerson}>Следующий</button>
      </div>
    </div>
  )
}
export default App;
