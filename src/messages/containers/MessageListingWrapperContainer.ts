import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IMessageListingWrapperCallbackProps, IMessageListingWrapperDataProps, MessageListingWrapper } from '../components/MessageListingWrapper';
import { IState } from '../../shared/models/IState';
import { fetchMessages } from '../ActionCreators/requests/fetchMessages';

const mapStateToProps = (state: IState): IMessageListingWrapperDataProps => ({
  isLoading: state.appInfo.isLoading,
  currentChannelId: state.channelListing.selectedChannel,
});

const mapDispatchToProps = (dispatch: Dispatch): IMessageListingWrapperCallbackProps => {
  return ({
    getMessages: (currentChannelId: Uuid) => fetchMessages(dispatch, currentChannelId),
  });
};

export const MessageListingWrapperContainer: React.ComponentClass<IMessageListingWrapperDataProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageListingWrapper);