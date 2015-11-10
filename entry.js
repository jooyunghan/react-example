require("./style.css");

import React from 'react';
import ReactDOM from 'react-dom';

import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/mode/c_cpp';
import 'brace/mode/haskell';
import 'brace/mode/python';
import 'brace/theme/github';


class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode
    }
  }

  render() {
    return (
    <div style={{display: 'flex', flexDirection: 'column', padding: '0.5em'}}>
      <div style={{display: 'flex'}}>
        <label>Language:
          <select value={this.state.mode} onChange={e => this.setState({mode:e.target.value})}>
            <option value="java">Java</option>
            <option value="c_cpp">C/C++</option>
            <option value="javascript">JavaScript</option>
            <option value="haskell">Haskell</option>
            <option value="python">Python</option>
          </select></label>
      </div>
      <AceEditor
        mode={this.state.mode}
        theme="github"
        onChange={v => this.setState({code: v})}
        name="aDiv"
        width="100%"
        value={this.state.code}
        editorProps={{$blockScrolling: true}} />
      <div style={{display:'flex', justifyContent: 'flex-end'}}>
        <span className="pure-button-primary pure-button">Run</span>
      </div>
    </div>);
  }
}

ReactDOM.render(
  <Editor mode="java"/>
  , document.getElementById('content'));
