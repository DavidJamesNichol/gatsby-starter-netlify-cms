import React from "react";
import Layout from "../components/Layout";
import config from '../../config'

class ContactPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
      number: '', 
      time: '',
     };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  render() {
    const { image, title } = this.props
    return (
      <>
        <div
          style={{
            // backgroundColor: 'rgb(255,255,255,0.2)',
            backgroundColor: "rgb(0,0,0,0.4)",
            height: "70vh",
            position: "absolute",
            width: "100%",
          }}
        ></div>
        <div
          className="full-width-image"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: "center center",
            backgroundAttachment: `fixed`,
            height: "70vh",
          }}
        >
          <h2
            className="has-text-weight-bold is-size-1"
            style={{
              color: "rgb(255,255,255)",
              textAlign: "center",
              textShadow: ".5px .5px 0px rgb(255,255,255,0.3)",
              lineHeight: "1",
              padding: "0.25em",
              fontSize: "2rem",
              fontWeight: "bold",
              zIndex: 10,
              // marginTop: '10vh',
            }}
          >
            {title}
          </h2>
        </div>
        <section className="section">
          <div className="container">
            <div className="content1">
              <h1>Contact</h1>
              <form
                action="https://formspree.io/admin@avolve.com"
                method="POST"
                className="form"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                {/* <div className="field"> */}
                <section>
                  <label className="label" htmlFor={"name"}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </section>
                <section>
                  <label className="label" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                    />
                  </div>
                </section>
                {/* </div>
                <div className="field"> */}
                <section>
                  <label className="label" htmlFor="number">
                    Phone Number
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      name="number"
                      onChange={this.handleChange}
                      id={"phoneNumber"}
                      required={true}
                    />
                  </div>
                </section>
                <section>
                  <label className="label" htmlFor={"time"}>
                    Time For Consultation
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="datetime-local"
                      name="time"
                      onChange={this.handleChange}
                      id={"time"}
                      required={true}
                    />
                  </div>
                </section>
                {/* </div> */}
                <button className="button is-link" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

class ContactPage extends React.Component {
  render() {
    const frontmatter  = config.content.contactPage

    return (
      <Layout>
        <ContactPageTemplate
          image={frontmatter.image}
          title={frontmatter.title}
        />
      </Layout>
    )
  }
}

export default ContactPage