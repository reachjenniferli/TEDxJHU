import React, { Component } from "react"
import "./team.css"

class CardSelector extends Component {
  selectedStyles = {
    transform: "scale(1.05)",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.7)",
    borderLeft: "solid  #EE3223",
  }

  unselectedStyles = {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
  }

  render() {
    return (
      <div
        className="card small-card"
        onClick={this.toggleSelect}
        style={
          this.props.selected ? this.selectedStyles : this.unselectedStyles
        }
      >
        <p className="card-title">{this.props.title}</p>
        <p className="card-text">{this.props.text}</p>
      </div>
    )
  }
}

export default CardSelector
