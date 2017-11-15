////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - Render a tab for each country with its name in the tab
// - Make it so that you can click on a tab and it will appear active
//   while the others appear inactive
// - Make it so the panel renders the correct content for the selected tab
//
// Got extra time?
//
// - Make <Tabs> generic so that it doesn't know anything about
//   country data (Hint: good propTypes help)
////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import ReactDOM from 'react-dom'

const styles = {}

styles.tab = {
  display: 'inline-block',
  padding: 10,
  margin: 10,
  borderBottom: '4px solid',
  borderBottomColor: '#ccc',
  cursor: 'pointer'
}

styles.activeTab = {
  ...styles.tab,
  borderBottomColor: '#000'
}

styles.panel = {
  padding: 10
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props.data);
    this.state = {
      activeTab:0
    }
  }

  selectIndex = index => this.setState({activeTab:index});

  tabs = () =>{
    let countires = this.props.data;

    return countires.map((item,i)=>
      <div key ={i}
        className="Tab"
        style={ i === this.state.activeTab ? styles.activeTab : styles.tab}
        onClick={()=>this.selectIndex(i) }>
        {item.name}
      </div>
    )
  }

  tabContent = () => {
    let contentUnderCurrentIndex= this.props.data[this.state.activeTab].description;
    return (
      <div className="TabPanel" style={styles.panel}>
        {contentUnderCurrentIndex}
      </div>)
  }

  render() {
    return (
      <div className="Tabs">
        { this.tabs() }
        { this.tabContent()}
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Countries</h1>
        <Tabs data={this.props.countries}/>
      </div>
    )
  }
}

const DATA = [
  { id: 1, name: 'USA', description: 'Land of the Free, Home of the brave' },
  { id: 2, name: 'Brazil', description: 'Sunshine, beaches, and Carnival' },
  { id: 3, name: 'Russia', description: 'World Cup 2018!' }
]

ReactDOM.render(<App countries={DATA}/>, document.getElementById('app'))
