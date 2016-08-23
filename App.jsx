import React from 'react'

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      title:'This is the state title'
    }
  }
  update(e) {
    this.setState({
      title: e.target.value
    })
  }
  render(){
    return (
      <article>
      <input
        type="text"
        onChange={this.update.bind(this)}
        />
        <h2>{this.state.title}</h2>
      </article>
    )
  }
}
App.defaultProps = {
  author: 'leo javier'
}
App.propTypes = {
  title: React.PropTypes.string,
}
export default App
