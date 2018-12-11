import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  IRichTextEditorCallbackProps,
  IRichTextEditorDataProps,
  RichTextEditor
} from '../components/RichTextEditor';
import { IState } from '../../shared/models/IState';
import { postMessageRequest } from '../ActionCreators/requests/postMessage';
import { ICreateMessageDependencies } from '../ActionCreators/createMessageFactory';

const mapStateToProps = (state: IState): IRichTextEditorDataProps => {
  const { currentUserId } = state.usersInfo;
  const { selectedChannel } = state.channelListing;
  return {
    currentUserId,
    currentChannelId: selectedChannel,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IRichTextEditorCallbackProps => ({
  onSendMessage: (data: ICreateMessageDependencies) => postMessageRequest(data)(dispatch),
});

export const RichTextEditorContainer = connect(mapStateToProps, mapDispatchToProps)(RichTextEditor);
