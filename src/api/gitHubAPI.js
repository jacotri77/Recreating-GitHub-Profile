import axios from 'axios'
import store from '../store'

export function getGitHubData() {
	axios.get('https://api.github.com/users/jacotri77').then(user=>{
		console.log(user.data, 'user')
		store.dispatch({
			type: 'GET_DATA',
			user: user.data
		})
	})
}

export function getGitHubRepo() {
	axios.get('https://api.github.com/users/jacotri77/repos').then(repo=>{
		console.log(repo.data, 'repo')
		store.dispatch({
			type: 'GET_REPO',
			repo: repo.data
		})
	})
}
