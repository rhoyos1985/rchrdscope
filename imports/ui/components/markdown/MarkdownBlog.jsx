import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import assign from 'lodash.assign';

import Editor from './Editor.jsx';
import CodeBlock from './CodeBlock.jsx';
import MarkdownControls from './MarkdownControls.jsx';
import Files from '../../../api/filestores/files.js';

class MarkdownBlog extends React.Component {
    constructor(props) {
        super(props);
        Meteor.subscribe("list.files");

        this.state = {
            markdownSrc: '# Live demo\n\nChanges are automatically rendered as you type.\n\n* Follows the [CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',

            htmlMode: 'raw'
        };

        this.onMarkdownChange = this.onMarkdownChange.bind(this);
        this.onControlsChange = this.onControlsChange.bind(this);

        const file = Files.find({_id:'ecuSRNspyfNduNbwn'});
        console.log(file);
        console.log(file.url);
    }

    onMarkdownChange(md) {
        this.setState({
            markdownSrc: md
        });
    }

    onControlsChange(mode) {
        this.setState({ htmlMode: mode });
    }

    render() {
        const   boolSkip = this.state.htmlMode === 'skip',
                boolEscape= this.state.htmlMode === 'escape';

        return (
            <div className="demo">
                <div className="editor-pane">
                    <MarkdownControls  onChange={this.onControlsChange} mode={this.state.htmlMode} />
                    <Editor  value={this.state.markdownSrc} onChange={this.onMarkdownChange} />
                </div>
                <div className="result-pane">
                    <ReactMarkdown  className="result" source={this.state.markdownSrc}
                                    skipHtml={boolSkip} escapeHtml={boolEscape}
                                    renderers={assign({}, ReactMarkdown.renderers, {CodeBlock: CodeBlock})}/>
                </div>
            </div>
        );
    }
}

export default MarkdownBlog;