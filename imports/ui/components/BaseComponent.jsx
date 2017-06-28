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
    //i18n.onChangeLocale(this.handleLocaleChange);
  }
  componentWillUnmount() {
    //i18n.offChangeLocale(this.handleLocaleChange);
  }

  handleLocaleChange(locale, response) {
    this.setState({ locale, response });
  }
}

export default BaseComponent;
