import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  RawDraftContentState,
  convertToRaw,
  EditorState,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export interface IRichTextEditorCallbackProps {
  readonly onSendMessage: (text: RawDraftContentState) => void;
}

export interface IRichTextEditorDataProps {
}

type RichTextEditorProps = IRichTextEditorCallbackProps & IRichTextEditorDataProps;

interface IRichTextEditorStateProps {
  readonly editorState: EditorState;
}

export class RichTextEditor extends React.PureComponent<RichTextEditorProps, IRichTextEditorStateProps> {
  static displayName = 'RichTextEditor';
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired,
  };

  constructor(props: RichTextEditorProps) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  _onEditorStateChange = (editorState: EditorState) => (this.setState(() => ({ editorState })));


  _handleSendText = () => {
    const contentState = this.state.editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const hasText = !!rawContent.blocks[0].text;
    if (hasText) {
      this.props.onSendMessage(rawContent);
      this.setState(() => ({ editorState: EditorState.createEmpty() }));
    }
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="writing-view-cont">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this._onEditorStateChange}
        />
        <div
          className="send-btn-holder"
          onClick={this._handleSendText}
        >
          <div className="inside glyphicon glyphicon-send"/>
        </div>
      </div>);
  }
}
