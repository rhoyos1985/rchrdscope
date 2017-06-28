import React from 'react';

import BaseComponent from '../components/BaseComponent.jsx';
import ListPostsContainer from '../containers/ListPostsContainer.jsx'; 
import AppContainer from '../containers/AppContainer.jsx';

// App component - represents the whole app
export default class HomePage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = Object.assign(this.state, { languages: [], response:[] });
    }

    componentWillMount() {
      const misCabeceras = new Headers();

      const miInit = { method: 'GET',
                     headers: misCabeceras,
                     mode: 'cors',
                     cache: 'default' };
     
      fetch('https://rhoyos1985.github.io/blogposts/posts/posts.json',miInit)
          .then((response) => {
            return response.json()
          })
          .then((result)=>{
            let resultPosts = result.posts;
            this.setState({
                locale: null,
                response: resultPosts,
            });
          });
    }

    render() {
    	const content = <ListPostsContainer />;
        return <AppContainer key='home' content={content} />
    }
}