import React from 'react'
import { Link } from 'gatsby'
import config from '../../config'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                    <p>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </p>
                    <p>
                      <Link className="navbar-item" to={config.links.training.path}>
                        Training
                      </Link>
                    </p>
                    <p>
                      <Link className="navbar-item" to={config.links.memberships.path}>
                        Memberships
                      </Link>
                    </p>
                </section>
              </div>
              <div className="column is-4">
                <section>
                      <Link className="navbar-item" to={config.links.contact.path}>
                        Contact
                      </Link>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
