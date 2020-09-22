import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison"/>
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}


class Greeting extends React.Component {
  render() {
  	if (this.props.signedIn === false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
}

export default App;