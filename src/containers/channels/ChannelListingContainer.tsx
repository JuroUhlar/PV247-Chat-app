import { IState } from '../../models/IState';
import { Dispatch } from 'redux';
import { createChannel, renameChannel } from '../../actions/channelActionCreators';
import { IChannel } from '../../models/IChannel';
import { connect } from 'react-redux';
import {
  IChannelListingCallbackProps,
  IChannelListingDataProps,
  ChannelListing
} from '../../components/channels/ChannelListing';

const mapStateToProps = (state: IState): IChannelListingDataProps => {
  return {
    channels: state.channelsInfo.channels.map((i: IChannel) => i).toList(),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelListingCallbackProps => {
  return {
    onAddChannel: (name: string) => dispatch(createChannel(name)),
    onRenameChannel: (id: Uuid, newName: string) => dispatch(renameChannel(id, newName)),
  };
};

export const ChannelListingContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelListing);
