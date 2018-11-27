import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ILoaderCallbackProps, ILoaderDataProps, Loader } from '../components/Loader';
import { IState } from '../../shared/models/IState';
import { fetchMessages } from '../ActionCreators/requests/fetchMessages';

const mapStateToProps = (state: IState): ILoaderDataProps => ({
  isFetching: state.appInfo.isLoading,
  currentChannelId: state.channelListing.selectedChannel,
});

const mapDispatchToProps = (dispatch: Dispatch): ILoaderCallbackProps => {
  return ({
    fetchMessages: (currentChannelId: Uuid) => fetchMessages(dispatch, currentChannelId),
  });
};

export const LoaderContainer: React.ComponentClass<ILoaderDataProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader);
