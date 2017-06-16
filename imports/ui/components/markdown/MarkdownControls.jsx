import React from'react';
import PropTypes from'prop-types';

class MarkdownControls extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const   rawChecked = this.props.mode === 'raw',
                skipChecked = this.props.mode === 'skip',
                escapeChecked = this.props.mode === 'escape';

        return (

            <div className="markdown-controls">
                <form className="pure-form pure-form-inline">
                    <fieldset>
                        <legend>HTML mode</legend>
                        <label htmlFor="raw-html" className="pure-checkbox">
                            Raw
                            <input  id="raw-html" name="html-mode" type="radio"
                                    value="raw" checked={rawChecked} onChange={this.onChange} />
                        </label>
                        <label htmlFor="escape-html" className="pure-checkbox">
                            Escape
                            <input  id="escape-html" name="html-mode" type="radio"
                                    value="escape" checked={escapeChecked} onChange={this.onChange} />
                        </label>
                        <label htmlFor="skip-html" className="pure-checkbox">
                            Skip
                            <input  id="skip-html" name="html-mode" type="radio"
                                    value="skip" checked={skipChecked} onChange={this.onChange} />
                        </label>
                    </fieldset>
                </form>
            </div>
        );
    }
}

MarkdownControls.propTypes = {
    mode: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

MarkdownControls.defaultProps = {
    mode: 'raw'
};

export default MarkdownControls;