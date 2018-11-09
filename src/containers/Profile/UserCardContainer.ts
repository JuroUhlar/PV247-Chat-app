import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {IMessageCallbackProps, IMessageDataProps, Message} from '../../components/Messages/Message';
import {likeMessage} from '../../actions/messageActionCreators';
import {IState} from '../../models/IState';
import {janeId} from '../../utils/getInitialUsers';

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
  return {
    text,
    messagePos,
    messageLikesCount: likesCount,
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
