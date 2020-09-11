import React, { Component } from "react";
import { Link } from 'gatsby'

export default class Button extends Component {
  render() {
    return (
        <button className="cta-button">
          <Link style={{color: 'black'}} to={this.props.to}>    
            {this.props.button}
          </Link>
        </button>
    );
  }
}
