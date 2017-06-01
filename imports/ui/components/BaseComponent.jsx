import { Component } from 'react';

class BaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: null,
    };
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
  }

  componentWillMount() {
    //i18n.onChangeLocale(this.handleLocaleChange);
  }

  componentWillUnmount() {
    //i18n.offChangeLocale(this.handleLocaleChange);
  }

  handleLocaleChange(locale) {
    this.setState({ locale });
  }
}

export default BaseComponent;
