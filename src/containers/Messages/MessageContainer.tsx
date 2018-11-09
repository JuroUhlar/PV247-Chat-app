import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {IMessageCallbackProps, IMessageDataProps, Message} from '../../components/Messages/Message';
import {likeMessage} from '../../actions/messageActionCreators';
import {IState} from '../../models/IState';

const mapStateToProps = (state: IState, props: IMessageDataProps): IMessageDataProps => {
  console.log('stupid state ' + typeof state);
  const {text, messagePos, messageLikesCount} = props;
  return {
    text,
    messagePos,
    messageLikesCount,
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
