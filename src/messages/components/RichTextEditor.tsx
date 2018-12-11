import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  convertToRaw,
  EditorState,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ICreateMessageDependencies } from '../ActionCreators/createMessageFactory';

export interface IRichTextEditorCallbackProps {
  readonly onSendMessage: (data: ICreateMessageDependencies) => void;
}

export interface IRichTextEditorDataProps {
  readonly currentUserId: Uuid;
  readonly currentChannelId: Uuid;
}

type RichTextEditorProps = IRichTextEditorCallbackProps & IRichTextEditorDataProps;

interface IRichTextEditorStateProps {
  readonly editorState: EditorState;
}

export class RichTextEditor extends React.PureComponent<RichTextEditorProps, IRichTextEditorStateProps> {
  static displayName = 'RichTextEditor';
  static propTypes = {
    currentUserId: PropTypes.string.isRequired,
    currentChannelId: PropTypes.string.isRequired,

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
    const authorId = this.props.currentUserId;
    const { currentChannelId } = this.props;
    if (hasText) {
      this.props.onSendMessage({
        text: rawContent,
        authorId,
        channelId: currentChannelId
      });
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
