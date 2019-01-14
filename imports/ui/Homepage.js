import React from 'react';
import FormContainer from './Form/FormContainer.js';
import List from './List.js';

const HomePage = () => {
    return (
        <div className="container">
          <FormContainer />
          <List />
        </div>
    );
}
  
export default HomePage

/*// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <FormContainer />
        <List />
      </div>
    );
  }
}*/