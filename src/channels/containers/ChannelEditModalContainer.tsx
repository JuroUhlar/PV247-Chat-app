import { IState } from '../../shared/models/IState';
import { Dispatch } from 'redux';
import { createChannel, renameChannel } from '../channelActionCreators';
import { connect } from 'react-redux';
import {
  IChannelEditModalDispatchProps,
  IChannelEditModalStateProps,
  ChannelEditModal
} from '../components/ChannelEditModal';

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
    onAddChannel: (name: string) => dispatch(createChannel(name)),
    onRenameChannel: (id: Uuid, newName: string) => dispatch(renameChannel(id, newName))
  };
};

export const ChannelEditModalContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelEditModal);
