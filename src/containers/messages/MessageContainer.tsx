import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {IMessageCallbackProps, IMessageDataProps, Message} from '../../components/messages/Message';
import {likeMessage} from '../../actions/messageActionCreators';
import {IState} from '../../models/IState';
import {janeId} from '../../utils/usersUtils';

interface IMessageContainerDataProps {
  readonly messageId: Uuid;
}

const mapStateToProps = (state: IState, {messageId}: IMessageContainerDataProps): IMessageDataProps => {
  const message = state.messageListing.messages.get(messageId);
  const messagePos = message && message.authorId === janeId
    ? 'message-pane-pos-right'
    : 'message-pane-pos-left';
  const likesCount = message && message.likes.count() - message.dislikes.count();
  const text = message && message.text;

  const messageAuthorId = message.authorId;
  const messageAuthor = state.usersInfo.users.get(messageAuthorId);

  return {
    text,
    messagePos,
    messageLikesCount: likesCount,
    avatarUrl: messageAuthor.avatarPath,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageCallbackProps => {
  const messageId = 'messageId';
  const userId = 'userId';
  return {
    onLikeMessage: () => dispatch(likeMessage(messageId, userId)),
  };
};

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);
