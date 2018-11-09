import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {IMessageCallbackProps, IMessageDataProps, Message} from '../components/Message';
import {likeMessage} from '../actions/messageActionCreators';
import {IState} from '../models/IState';

const mapStateToProps = (state: IState, props: { messagePos: string }): IMessageDataProps => {
  const text = 'HiHiHi';
  console.log('some stupid channel cout: ' + state.channels.count());
  return {
    text,
    messagePos: props.messagePos,
    messageLikes: 3,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IMessageCallbackProps => {
  const messageId = 'messaeId';
  const userId = 'userId';
  return {
    onLikeMessage: () => dispatch(likeMessage(messageId, userId)),
  };
};

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);
