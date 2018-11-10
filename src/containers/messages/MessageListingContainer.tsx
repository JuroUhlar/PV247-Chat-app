import { connect } from 'react-redux';
import {IState} from '../../models/IState';
import {IMessageListingDataProps, MessageListing} from '../../components/messages/MessageListing';

const mapStateToProps = (state: IState): IMessageListingDataProps => ({
  messageIds: state.messageListing.messageIds,
});

export const MessageListingContainer = connect(mapStateToProps)(MessageListing);
