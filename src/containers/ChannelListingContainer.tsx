import { IState } from '../models/IState';
import { Dispatch } from 'redux';
import { createChannel } from '../actions/channelActionCreators';
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
  };
};

export const ChannelListingContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelListing);
