import React from "react"

import "bootstrap/dist/css/bootstrap-reboot.css"
import "bootstrap/dist/css/bootstrap-grid.css"
// import { Particles } from "../../static/particles"

import HireMe from "./hire-me"
import Navigation from "./navigation"

import "./layout.css"
import "./modal.css"
import Head from "./head"

export default class Layout extends React.Component {
  componentDidMount() {
    // require('particles.js/particles');
    // particlesJS(Particles);
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Head />
        <div
          id="particles-js"
          style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }}
        />
        <div className="container-fluid box-wrap">
          <header className="header">
            <Navigation />
          </header>
          <main className="content">{children}</main>
          <HireMe />
        </div>
      </div>
    )
  }
}
