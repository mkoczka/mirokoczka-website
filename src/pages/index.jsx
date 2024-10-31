import React from "react"
import Logo from "../images/me.jpeg"
import Layout from "../components/layout"
import Link from "gatsby-link"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { age: this.getAge() }
  }

  getAge() {
    const birthday = new Date(2014, 1, 1)
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
            Hi, I’m Miro – an Engineering Manager with over {age} years of professional experience in building software, scaling teams, and driving innovation in medium-sized businesses and startups. I’m also the co-founder of
            {' '}<a href="https://susedia.sk" target="_blank" rel="noopener noreferrer">Susedia.sk</a>.
          </h1>
          <p className="lead">
            With over {age} years of experience in software engineering and technical leadership, I specialize in building high-performing teams, streamlining development processes, and delivering scalable, user-focused solutions.<br />
            <br />
            As an Engineering Manager, I’ve led cross-functional teams through complex technical challenges and brought innovative projects to life in both startups and established companies.<br />
            I am passionate about creating a collaborative environment where engineers can thrive, grow, and drive impactful change in the tech landscape.<br />
            <br />
            If you’re interested in discussing engineering leadership, product development, or just want to connect, feel free to <Link to="/contact">reach out</Link> – I’d love to chat!
          </p>
        </div>
      </Layout>
    )
  }
}
