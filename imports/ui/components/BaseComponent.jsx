import { Component } from 'react';

class BaseComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      locale: null,
      response:[],
    };
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
  }

  componentWillMount() {
    const misCabeceras = new Headers();

    const miInit = { method: 'GET',
                   headers: misCabeceras,
                   mode: 'cors',
                   cache: 'default' };
    //i18n.onChangeLocale(this.handleLocaleChange);
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
          //this.handleLocaleChange(null, resultPosts)
        });
  }

  componentWillUnmount() {
    //i18n.offChangeLocale(this.handleLocaleChange);
  }

  handleLocaleChange(locale, response) {
    this.setState({ locale, response });
  }
}

export default BaseComponent;
