import React from 'react';
import Helmet from 'react-helmet';
import HireMe from '../components/hire-me';
import Navigation from '../components/navigation';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';
import './modal.css';

export default class Template extends React.Component {

  render() {
    return (
      <div className="container-fluid box-wrap">
        <Helmet
          title="Miro Koczka"
          meta={[
            {name: 'description', content: 'I\'m Miro, a 24 years Senior Frontend Developer at Pipeliner CRM'},
            {
              name: 'keywords',
              content: 'Miro, Miroslav, Koczka, usbecko, Pipeliner, Crm, Frontend, Developer, Javascript, Angular, React, Typescript'
            },
          ]}
        />
        <header className="header">
          <Navigation/>
        </header>
        <main className="content">
          {this.props.children()}
        </main>
        <HireMe/>
      </div>
    )
  }
}