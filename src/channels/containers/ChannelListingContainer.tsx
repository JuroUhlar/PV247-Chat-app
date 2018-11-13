import { IState } from '../../shared/models/IState';
import { Dispatch } from 'redux';
import { createChannel, deleteChannel, renameChannel } from '../channelActionCreators';
import { IChannel } from '../models/IChannel';
import { connect } from 'react-redux';
import {
  IChannelListingDispatchProps,
  IChannelListingStateProps,
  ChannelListing
} from '../components/ChannelListing';

const mapStateToProps = (state: IState): IChannelListingStateProps => {
  return {
    channels: state.channels.map((i: IChannel) => i).toList(),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelListingDispatchProps => {
  return {
    onAddChannel: (name: string) => dispatch(createChannel(name)),
    onDeleteChannel: (id: Uuid) => dispatch(deleteChannel(id)),
    onRenameChannel: (id: Uuid, newName: string) => dispatch(renameChannel(id, newName))
  };
};

export const ChannelListingContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelListing);
