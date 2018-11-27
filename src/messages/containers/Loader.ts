import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ILoaderCallbackProps, ILoaderDataProps, Loader } from '../components/Loader';
import { IState } from '../../shared/models/IState';
import { fetchMessages } from '../ActionCreators/internal/fetchMessages';
import { offTopicChannelId } from '../../channels/utils/getInitialChannels';

const mapStateToProps = (state: IState): ILoaderDataProps => ({
  isFetching: state.appInfo.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): ILoaderCallbackProps => {
  const currentChannelId = offTopicChannelId;
  return ({
    fetchMessages: () => fetchMessages(dispatch, currentChannelId),
  });
};

export const LoaderContainer: React.ComponentClass<ILoaderDataProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader);
