import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRichTextEditorCallbackProps, IRichTextEditorDataProps, RichTextEditor } from '../components/RichTextEditor';
import { IState } from '../../shared/models/IState';
import { postMessageRequest } from '../ActionCreators/requests/postMessage';

const mapStateToProps = (state: IState): IRichTextEditorDataProps => {
  const { currentUserId } = state.usersInfo;
  const { selectedChannel } = state.channelListing;
  return {
    currentUserId,
    currentChannelId: selectedChannel,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IRichTextEditorCallbackProps => ({
  onSendText: (text: string, authorId: Uuid, channelId: Uuid) => postMessageRequest({
    text,
    authorId,
    channelId,
  })(dispatch),
});

export const RichTextEditorContainer = connect(mapStateToProps, mapDispatchToProps)(RichTextEditor);
