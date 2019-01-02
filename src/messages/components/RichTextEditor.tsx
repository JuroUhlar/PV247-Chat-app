import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as Immutable from 'immutable';
import {
  convertToRaw,
  EditorState,
  RawDraftContentState,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { AnnotateUserOptionContainer } from '../containers/AnnotateUserOptionContainer';

export interface IRichTextEditorCallbackProps {
  readonly onSendMessage: (text: RawDraftContentState, annotatedUsers?: Immutable.Set<Uuid>) => void;
}

export interface IRichTextEditorDataProps {
}

type RichTextEditorProps = IRichTextEditorCallbackProps & IRichTextEditorDataProps;

interface IRichTextEditorStateProps {
  readonly editorState: EditorState;
  readonly annotatedUsers: Immutable.Set<Uuid>;
}

export class RichTextEditor extends React.PureComponent<RichTextEditorProps, IRichTextEditorStateProps> {
  static displayName = 'RichTextEditor';
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired,
  };

  constructor(props: RichTextEditorProps) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      annotatedUsers: Immutable.Set<Uuid>(),
    };
  }

  _onEditorStateChange = (editorState: EditorState) => (this.setState(() => ({ editorState })));


  _handleAnnotateUsers = (users: Immutable.Set<Uuid>) => {
    this.setState(() => ({ annotatedUsers: users }));
  };

  _handleSendText = () => {
    const contentState = this.state.editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const hasText = !!rawContent.blocks[0].text;
    if (hasText) {
      this.props.onSendMessage(rawContent, this.state.annotatedUsers);
      this.setState(() => ({
        editorState: EditorState.createEmpty(),
        annotatedUsers: Immutable.Set<Uuid>(),
      }));
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
          toolbarCustomButtons={[<AnnotateUserOptionContainer onAnnotate={this._handleAnnotateUsers} key="annotateUsers"/>]}
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
