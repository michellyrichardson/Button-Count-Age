import React from 'react';

import './App.css';
import BirthdayButton from './components/BirthdayButton';

function App() {


  return (
    <div className="App">
      <BirthdayButton firstName={ "Jane" }
                lastName={ "Doe" }
                age={ 45 }
                hairColor={ "Black" }/>

      <BirthdayButton firstName={ "John" }
                lastName={ "Smith" }
                age={ 88 }
                hairColor={ "Brown" }/>

      <BirthdayButton firstName={ "Millard" }
                lastName={ "Fillmore" }
                age={ 50 }
                hairColor={ "Brown" }/>

      <BirthdayButton firstName={ "Maria" }
                lastName={ "Smith" }
                age={ 62 }
                hairColor={ "Brown" }/>
    </div>
  );
}

export default App;
