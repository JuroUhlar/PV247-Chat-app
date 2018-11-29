import { IState } from '../../shared/models/IState';
import { Dispatch } from 'redux';
import { createChannel, deleteChannel, updateChannel, selectChannel } from '../channelActionCreators';
// import { IChannel } from '../models/IChannel';
import { connect } from 'react-redux';
import {
  IChannelListingCallbackProps,
  IChannelListingDataProps,
  ChannelListing
} from '../components/ChannelListing';
import { IChannel } from '../models/Channel';

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
    onAddChannel: (channel: IChannel) => dispatch(createChannel(channel)),
    onDeleteChannel: (id: Uuid) => dispatch(deleteChannel(id)),
    onUpdateChannel: (channel: IChannel) => dispatch(updateChannel(channel)),
    onSelectChannel: (id: Uuid) => dispatch(selectChannel(id)),
  };
};

export const ChannelListingContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelListing);
