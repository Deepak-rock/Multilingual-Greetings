import {Component} from 'react'
import TabItem from '../TabItem/index'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greeting extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  updateActiveTabId = tabId => {
    this.setState({activeTab: tabId})
  }

  getFiltered = () => {
    const {activeTab} = this.state
    const filteredAppList = languageGreetingsList.filter(
      eachItem => eachItem.id === activeTab,
    )
    return filteredAppList
  }

  render() {
    const filteredData = this.getFiltered()
    console.log(filteredData)
    const {activeTab} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tablist">
          {languageGreetingsList.map(tab => (
            <TabItem
              key={tab.id}
              languageGreetings={tab}
              updateActiveTabId={this.updateActiveTabId}
              isActive={activeTab === tab.id}
            />
          ))}
        </ul>
        {filteredData.map(eachItem => (
          <img
            className="greetingImg"
            key={eachItem.id}
            src={eachItem.imageUrl}
            alt={eachItem.imageAltText}
          />
        ))}
      </div>
    )
  }
}
export default Greeting
