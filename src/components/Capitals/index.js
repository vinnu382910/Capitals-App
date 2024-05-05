import {Component} from 'react'
import Option from '../OptionItem'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onClickOption = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state
    const {country} = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeId,
    )
    return (
      <div className="main-cont">
        <div className="cont">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="selection-cont">
            <select className="selection-item" onChange={this.onClickOption}>
              {countryAndCapitalsList.map(eachItem => (
                <Option optionDetails={eachItem} key={eachItem.id} />
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
