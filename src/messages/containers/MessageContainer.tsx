import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {IMessageCallbackProps, IMessageDataProps, Message} from '../components/Message';
import {deleteMessage, dislikeMessage, likeMessage} from '../messageActionCreators';
import {IState} from '../../models/IState';

interface IMessageContainerDataProps {
  readonly messageId: Uuid;
}

const mapStateToProps = (state: IState, {messageId}: IMessageContainerDataProps): IMessageDataProps => {
  const currentUserId = state.usersInfo.currentUserId;
  const message = state.messageListing.messages.get(messageId);
  const messagePos = message.authorId === currentUserId
    ? 'message-pane-pos-right'
    : 'message-pane-pos-left';

  const text = message.text;

  const messageAuthorId = message.authorId;
  const messageAuthor = state.usersInfo.users.get(messageAuthorId);

  const {likes, dislikes} = message.popularity;
  const likesCount = likes.size - dislikes.size;

  return {
    text,
    messagePos,
    messageLikesCount: likesCount,
    avatarUrl: messageAuthor.avatarPath,
    messageId,
    authorId: messageAuthorId,
    currentUserId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageCallbackProps => {
  return {
    onLikeMessage: (messageId: Uuid, userId: Uuid) => dispatch(likeMessage(messageId, userId)),
    onDislikeMessage: (messageId: Uuid, userId: Uuid) => dispatch(dislikeMessage(messageId, userId)),
    onDeleteMessage: (messageId: Uuid) => dispatch(deleteMessage(messageId)),
  };
};

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);
