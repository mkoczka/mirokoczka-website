import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';

const ActiveStyle = {
  borderBottom: '2px solid #228822'
};

export default class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHireMeModalOpen: false};
  }

  handleHireMeClick() {
    this.setState({isHireMeModalOpen: true})
  }

  handleCloseHireMeClick() {
    this.setState({isHireMeModalOpen: false})
  }

  render() {
    const isHireMeModalOpen = this.state.isHireMeModalOpen;
    return (
      <div className="container-fluid box-wrap">
        <Helmet
          title="Miro Koczka"
          meta={[
            {name: 'description', content: 'Sample'},
            {name: 'keywords', content: 'sample, something'},
          ]}
        />
        <header className="header">
          <ul className="navigation text-md-right text-center">
            <li><Link exact activeStyle={ActiveStyle} to="/">About me</Link></li>
            <li><Link activeStyle={ActiveStyle} to="/skills">Skills</Link></li>
            <li><Link activeStyle={ActiveStyle} to="/work">Work</Link></li>
            <li><Link activeStyle={ActiveStyle} to="/contact">Contact</Link></li>
            <li><button className="btn btn-outline-primary" onClick={this.handleHireMeClick.bind(this)}>Hire Me</button></li>
          </ul>
        </header>
        <main className="content">
          {this.props.children()}
        </main>
        {isHireMeModalOpen &&
        <div>
          <div className="modal fade show" style={{display: 'block'}}>
            <div className="modal-dialog">
              <form action="https://formspree.io/miroslavkoczka@gmail.com" method="POST" className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">I can help you with your project</h5>
                  <button type="button" className="close" onClick={this.handleCloseHireMeClick.bind(this)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="_replyto">Email</label>
                    <input type="email" name="_replyto" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="project">Short project description</label>
                    <textarea className="form-control" name="project" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget</label>
                    <select name="budget" className="form-control" required>
                      <option selected>Budget...</option>
                      <option value="2000">&lt; 2000€</option>
                      <option value="2000-3000">2000€ - 3000€</option>
                      <option value="3000-5000">3000€ - 5000€</option>
                      <option value="5000-10000">5000€ - 10 000€</option>
                      <option value="10000">10 000€ +</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={this.handleCloseHireMeClick.bind(this)}>Close</button>
                  <input type="submit" className="btn btn-primary" value="Send" />
                </div>
              </form>
            </div>
          </div>
          <div className="modal-backdrop fade show"/>
        </div>
        }
      </div>
    )
  }
}