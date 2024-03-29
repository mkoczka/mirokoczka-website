import React from "react"
import Logo from "../images/me.png"
import Layout from "../components/layout"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { age: this.getAge() }
  }

  getAge() {
    const birthday = new Date(2009, 1, 1)
    const today = new Date()
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365
    return Math.floor((today - birthday) / millisecondsInYear)
  }

  render() {
    const { age } = this.state
    return (
      <Layout>
        <div
          className="text-center text-md-left"
          style={{ maxWidth: "1200px" }}
        >
          <img
            src={Logo}
            alt="Miro Koczka"
            width="200"
            height="200"
            style={{ borderRadius: "50%" }}
          />
          <h1 className="display-1">
            Hi. I'm Miro, Software Engineer with {age}+ years experience. I build software,
            medium-sized businesses & startups. I'm the co-founder of{" "}
            <a
              href="https://ourlivespace.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LiveSpace
            </a>{" "}
            and Software Engineer at Microsoft.
          </h1>
          <p className="lead">
            I enjoy building web & mobile applications people love to use.
          </p>
        </div>
      </Layout>
    )
  }
}
