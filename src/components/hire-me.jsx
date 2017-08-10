import React from 'react';

export default class HireMe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {budget: ''};
  }

  componentDidMount() {
    this.initModal();
  }

  initModal() {
    var ModalEffects = (function () {

      function init() {

        var overlay = document.querySelector('.md-overlay');

        [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {

          var modal = document.querySelector('#' + el.getAttribute('data-modal')),
            close = modal.querySelector('.md-close');

          function removeModal(hasPerspective) {
            modal.classList.remove('md-show');

            if (hasPerspective) {
              document.documentElement.classList.remove('md-perspective');
            }
          }

          function removeModalHandler() {
            document.querySelector('body').classList.remove('md-open');
            removeModal(el.classList.contains('md-setperspective'));
          }

          el.addEventListener('click', function (ev) {
            document.querySelector('body').classList.add('md-open');
            modal.classList.add('md-show');
            overlay.removeEventListener('click', removeModalHandler);
            overlay.addEventListener('click', removeModalHandler);

            if (el.classList.contains('md-setperspective')) {
              setTimeout(function () {
                document.documentElement.classList.add('md-perspective');
              }, 25);
            }
          });

          close.addEventListener('click', function (ev) {
            ev.stopPropagation();
            removeModalHandler();
          });

        });

      }

      init();

    })();
  }

  handleBudget(event) {
    this.setState({budget: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="md-modal md-effect-1" id="hire-me">
          <div className="md-content modal-title">
            <h5>I can help you with your project</h5>
            <div>
              <form action="https://formspree.io/miroslavkoczka@gmail.com" method="POST" className="modal-content">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input name="name" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="_replyto">Email</label>
                  <input type="email" name="_replyto" className="form-control" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="project">Short project description</label>
                  <textarea className="form-control" name="project" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget</label>
                  <select name="budget" className="form-control" required value={this.state.budget} onChange={this.handleBudget.bind(this)}>
                    <option>Budget...</option>
                    <option value="2000">&lt; 2000€</option>
                    <option value="2000-3000">2000€ - 3000€</option>
                    <option value="3000-5000">3000€ - 5000€</option>
                    <option value="5000-10000">5000€ - 10 000€</option>
                    <option value="10000">10 000€ +</option>
                  </select>
                </div>
                <br/>
                <div className="text-center">
                  <input type="submit" className="btn btn-primary btn-submit" value="SEND MESSAGE"
                         style={{marginRight: '20px', marginBottom: '10px'}}/>
                  <button type="button" className="btn btn-secondary md-close btn-submit" style={{marginBottom: '10px'}}>Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="md-overlay"/>
      </div>
    )
  }

}