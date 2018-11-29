import { IState } from '../../shared/models/IState';
import { Dispatch } from 'redux';
import { createChannel, updateChannel } from '../channelActionCreators';
import { connect } from 'react-redux';
import {
  IChannelEditModalDispatchProps,
  IChannelEditModalStateProps,
  ChannelEditModal
} from '../components/ChannelEditModal';
import { IChannel } from '../models/Channel';

interface IChannelEditModalOwnProps {
  channelId: Uuid;
  show: boolean;
  onClose: () => void;
}

const mapStateToProps = (state: IState, ownProps: IChannelEditModalOwnProps): IChannelEditModalStateProps => {
  return {
    channel: state.channelListing.channels.get(ownProps.channelId),
    // channel: state.channels.channels.find((channel: IChannel) => channel.id === ownProps.channelId),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelEditModalDispatchProps => {
  return {
    onAddChannel: (channel: IChannel) => dispatch(createChannel(channel)),
    onUpdateChannel: (channel: IChannel) => dispatch(updateChannel(channel))
  };
};

export const ChannelEditModalContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelEditModal);
