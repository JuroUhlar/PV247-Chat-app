import { connect } from 'react-redux';
import {IState} from '../../models/IState';
import {IMessageListingDataProps, MessageList} from '../../components/Messages/MessageList';

const mapStateToProps = (state: IState): IMessageListingDataProps => ({
  messageIds: state.messageListing.messageIds,
});

export const MessageListingContainer = connect(mapStateToProps)(MessageList);
