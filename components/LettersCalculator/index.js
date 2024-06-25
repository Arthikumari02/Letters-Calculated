import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {typedLetter: ''}

  onValueChange = event => {
    this.setState({typedLetter: event.target.value})
  }

  render() {
    const {typedLetter} = this.state
    const lengthOfLettersTyped = typedLetter.length

    return (
      <div className="bg-container">
        <div className="letters-calculated-container">
          <div className="details-container">
            <h1>Calculate the Letters you enter</h1>
            <label htmlFor="letters-typed">Enter the phrase</label>
            <input
              type="text"
              id="letters-typed"
              className="typed-input"
              value={typedLetter}
              onChange={this.onValueChange}
            />
            <div className="no-of-letters-typed">
              <p>No.of letters: {lengthOfLettersTyped}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letter-calculated-icon"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
