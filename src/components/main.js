import React, {Component} from 'react'
import store from '../store'
import {getGitHubData} from '../api/gitHubAPI'

const styles ={
  profilePic:{
    height: 250,
    width: 250,
    marginTop:20
  },
  userNameLi:{
    fontSize:30,
    fontWeight:'bold'
  },
  userLoginLi:{
    fontSize:24,
    color:'#666',
    marginBottom:10
  },
  userBioLi:{
    fontSize:20,
    color:'#666'
  }
}
class Main extends Component{
	constructor(props){
	super(props)
	this.state = {user: {}}
}
componentWillMount() {
      this.unsubscribe = store.subscribe(()=>{
          const appState = store.getState()
      this.setState({
            user: appState.gitHubReducer.user
          })
      })
      getGitHubData()
    }
    componentWillUnmount() {
      this.unsubscribe()
    }

	render() {
    return (
      <div id="mainDiv">
          <img src={this.state.user.avatar_url} alt="Erik Jacobsen" style={styles.profilePic} />
          <ul>
            <li style={styles.userNameLi}>{this.state.user.name}</li>
            <li style={styles.userLoginLi}>{this.state.user.login}</li>
            <li style={styles.userBioLi}>{this.state.user.bio}</li>
            <li>{this.state.user.location}</li>
            <li>{this.state.user.email}</li>
            <li>{this.state.user.blog}</li>
          </ul>
      </div>
    	)
    }
}
export default Main