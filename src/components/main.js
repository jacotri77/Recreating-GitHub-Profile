import React, {Component} from 'react'
import store from '../store'
import {getGitHubData} from '../api/gitHubAPI'
import '../../node_modules/font-awesome/css/font-awesome.css'

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
            <p></p>
            <li><i className="fa fa-map-marker" aria-hidden="true"><a href="#" id="moveThis">{this.state.user.location}</a></i></li>
            <li><i className="fa fa-envelope" aria-hidden="true"><a href="mailto:slowerthanyou@gmail.com">{this.state.user.email}</a></i></li>
            <li><i className="fa fa-link" aria-hidden="true"><a href="http://www.jitterbastard.com">{this.state.user.blog}</a></i></li>
          </ul>
      </div>
    	)
    }
}
export default Main
