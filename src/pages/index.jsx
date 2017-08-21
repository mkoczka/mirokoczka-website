import React from 'react'
import Logo from '../../static/me.jpg';

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {age: this.getAge()};
  }

  getAge() {
    const birthday = new Date(1993, 6, 20);
    const today = new Date();
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;
    return Math.floor((today - birthday) / millisecondsInYear);
  }

  render() {
    return (
      <div className="text-center text-md-left" style={{maxWidth: '1200px'}}>
        <img
          src={Logo}
          width="200"
          height="200"
          style={{borderRadius: '50%'}}
        />
        <h1 className="display-1">
          Hi. I'm Miro, a {this.state.age} years Senior Frontend Developer at Pipeliner CRM.
        </h1>
        <p className="lead">
          I enjoy building web & mobile applications people love to use.
        </p>
      </div>
    )
  }
}
