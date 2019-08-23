import React from "react"
import Logo from "../images/me.png"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div>
      <div className="row">
        <div className="col-md-6 text-md-right text-center">
          <img
            src={Logo}
            alt="Miro Koczka"
            width="200"
            height="200"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="col-md-6 text-md-left text-center">
          <br />
          <br />
          <h3>Miro Koczka</h3>
          <a href="tel:+421 903 199 927">+421 903 199 927</a>
          <br />
          <a href="mailto: miroslavkoczka@gmail.com">
            miroslavkoczka@gmail.com
          </a>
        </div>
      </div>

      <br />
      <br />
      <br />
      <h2 className="text-center">Contact me</h2>
      <br />

      <form
        action="https://formspree.io/miroslavkoczka@gmail.com"
        method="POST"
        className="row"
      >
        <div className="col-lg-8" style={{ margin: "0 auto" }}>
          <div className="row">
            <div className="form-group  col-md-6">
              <label htmlFor="_replyto">Email</label>
              <input
                type="email"
                name="_replyto"
                className="form-control"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input name="name" className="form-control" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="10"
              required
            />
          </div>
          <div className="text-right">
            <input
              type="submit"
              value="SEND MESSAGE"
              className="btn btn-primary btn-submit"
            />
          </div>
        </div>
      </form>
    </div>
  </Layout>
)
