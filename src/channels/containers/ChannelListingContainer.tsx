import { IState } from '../../shared/models/IState';
import { Dispatch } from 'redux';
import { createChannel, deleteChannel, updateChannel, selectChannel } from '../ActionCreators/channelActionCreators';
import { fetchChannels } from '../ActionCreators/requests/fetchChannels';
import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import {
  IChannelListingCallbackProps,
  IChannelListingDataProps,
  ChannelListing
} from '../components/ChannelListing';
import { ICreateChannelDependencies } from '../ActionCreators/createChannelFactory';

const mapStateToProps = (state: IState): IChannelListingDataProps => {
  return {
    channels: state.channelListing.channels.toList(),
  };
};

// interface IChannelListingContainerOwnProps {
//   readonly onClick: (name: string) => void;
// }

const mapDispatchToProps = (dispatch: Dispatch /*,ownProps: IChannelListingContainerOwnProps*/): IChannelListingCallbackProps => {
  return {
    onAddChannel: (dependencies: ICreateChannelDependencies) => dispatch(createChannel(dependencies)),
    onDeleteChannel: (id: Uuid) => dispatch(deleteChannel(id)),
    onUpdateChannel: (id: Uuid, name?: string, users?: Immutable.List<Uuid>) => dispatch(updateChannel(id, name, users)),
    onSelectChannel: (id: Uuid) => dispatch(selectChannel(id)),
    getChannels: () => fetchChannels(dispatch),
  };
};

export const ChannelListingContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelListing);
