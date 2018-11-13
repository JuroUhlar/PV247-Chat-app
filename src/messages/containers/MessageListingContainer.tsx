import { connect } from 'react-redux';
import {IState} from '../../shared/models/IState';
import {IMessageListingDataProps, MessageListing} from '../components/MessageListing';

const mapStateToProps = (state: IState): IMessageListingDataProps => ({
  messageIds: state.messageListing.messageIds,
});

export const MessageListingContainer = connect(mapStateToProps)(MessageListing);
