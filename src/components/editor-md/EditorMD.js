import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './EditorMD.css';
import marked from 'marked';
import { randomText } from '../../randomText';

class EditorMD extends Component {
  state = {
    text: randomText,
    copied: false,
    textButton: 'Copy'
  }

componentDidMount() {
  const text = localStorage.getItem('text');
  if(text){
    this.setState({ text })
  }
  else{
    this.setState({ text: randomText})
  }
}

componentDidUpdate() {
  const { text } = this.state;
  localStorage.setItem('text', text);
}

handleChange = event =>{
  const text = event.target.value;
  this.setState({ text, textButton: 'Copy' })
}

renderTextMd = text => {
  const __html = marked(text, { sanitize: true });
  return { __html }
}

onCopy = () => {
  this.setState({copied: true, textButton: 'Copied !'});
};

render(){
  return(
    <div className='content-editor-md'>
      <div className='editable'>
        <h2>Edit your Markdown file here :</h2>
        <textarea
          onChange = {this.handleChange}
          value = {this.state.text}
          id = 'md-area'
        />
        <div className='row'>
          <CopyToClipboard onCopy={this.onCopy} text={this.state.text}>
            <button>{this.state.textButton}</button>
          </CopyToClipboard>
        </div>
      </div>
      <div className='render'>
        <h2>Renderating of your MarkDown script :</h2>
        <div dangerouslySetInnerHTML={this.renderTextMd(this.state.text)} />
      </div>
    </div>
  )
}
}

export default EditorMD;
