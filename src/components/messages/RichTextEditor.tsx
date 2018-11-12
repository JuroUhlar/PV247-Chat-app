import * as React from 'react';
import * as PropTypes from 'prop-types';
import {EditorState} from 'draft-js';
import {ContentBlock, Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { randomChannelId } from '../../utils/getInitialChannels';

export interface IRichTextEditorCallbackProps {
  readonly onSendText: (text: string, authorId: Uuid, channelId: Uuid) => void;
}

export interface IRichTextEditorDataProps {
  readonly currentUserId: Uuid;
}

type RichTextEditorProps = IRichTextEditorCallbackProps & IRichTextEditorDataProps;

interface IRichTextEditorStateProps {
  readonly editorState: EditorState;
}

export class RichTextEditor extends React.PureComponent<RichTextEditorProps, IRichTextEditorStateProps> {
  static displayName = 'RichTextEditor';
  static propTypes = {
    currentUserId: PropTypes.string.isRequired,

    onSendText: PropTypes.func.isRequired,
  };

  constructor(props: RichTextEditorProps) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }

  _onEditorStateChange = (editorState: EditorState) => (this.setState(() => ({editorState})));


  _handleSendText = () => {
    const contentState = this.state.editorState.getCurrentContent();
    const blockMap = contentState.getBlockMap();
    const texts = blockMap.map((block: ContentBlock) => {
      return block.getText();
    });
    const text = texts.reduce((result: string, txt: string) => result.concat(txt));
    const authorId = this.props.currentUserId;
    if (text) {
      this.props.onSendText(text, authorId, randomChannelId);
      this.setState(() => ({editorState: EditorState.createEmpty()}));
    }
  };

  render() {
    const {editorState} = this.state;
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
