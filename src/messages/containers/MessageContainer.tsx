import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IMessageCallbackProps, IMessageDataProps, Message } from '../components/Message';
import { dislikeMessageRequest, IMessageUpdateData, likeMessageRequest } from '../ActionCreators/requests/updateMessage';
import { IState } from '../../shared/models/IState';
import { deleteMessageRequest } from '../ActionCreators/requests/deleteMessage';
import { IMessage } from '../models/Message';

interface IMessageContainerDataProps {
  readonly message: IMessage;
}

const mapStateToProps = (state: IState, { message }: IMessageContainerDataProps): IMessageDataProps => {
  const currentUserId = state.usersInfo.currentUserId;
  const currentChannelId = state.channelListing.selectedChannel;
  const messagePos = message.authorId === currentUserId
    ? 'message-pane-pos-right'
    : 'message-pane-pos-left';

  const messageAuthorId = message.authorId;
  const messageAuthor = state.usersInfo.users.get(messageAuthorId);

  return {
    message,
    messagePos,
    avatarUrl: messageAuthor.avatarPath,
    currentUserId,
    currentChannelId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageCallbackProps => {
  return {
    onLikeMessage: (updateData: IMessageUpdateData) => likeMessageRequest(updateData)(dispatch),
    onDislikeMessage: (updateData: IMessageUpdateData) => dislikeMessageRequest(updateData)(dispatch),
    onDeleteMessage: (currentChannelId: Uuid, messageId: Uuid) => deleteMessageRequest(dispatch, currentChannelId, messageId),
  };
};

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);
