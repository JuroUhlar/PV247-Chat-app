import { IState } from '../../shared/models/IState';
import { Dispatch } from 'redux';
import { createChannel, deleteChannel, updateChannel, selectChannel } from '../channelActionCreators';
import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import {
  IChannelListingCallbackProps,
  IChannelListingDataProps,
  ChannelListing
} from '../components/ChannelListing';

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
    onAddChannel: (name: string, users: Immutable.List<Uuid>) => dispatch(createChannel(name, users)),
    onDeleteChannel: (id: Uuid) => dispatch(deleteChannel(id)),
    onUpdateChannel: (id: Uuid, name?: string, users?: Immutable.List<Uuid>) => dispatch(updateChannel(id, name, users)),
    onSelectChannel: (id: Uuid) => dispatch(selectChannel(id)),
  };
};

export const ChannelListingContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelListing);
