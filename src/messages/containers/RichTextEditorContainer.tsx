import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  IRichTextEditorCallbackProps,
  RichTextEditor
} from '../components/RichTextEditor';
import { postMessageRequest } from '../ActionCreators/requests/postMessage';
import { RawDraftContentState } from 'draft-js';

const mapDispatchToProps = (dispatch: Dispatch): IRichTextEditorCallbackProps => ({
  onSendMessage: (text: RawDraftContentState) => dispatch(postMessageRequest(text)),
});

export const RichTextEditorContainer = connect(null, mapDispatchToProps)(RichTextEditor);
