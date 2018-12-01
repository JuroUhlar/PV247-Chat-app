import { IState } from '../../shared/models/IState';
import { Dispatch } from 'redux';
import { createChannel, updateChannel } from '../ActionCreators/channelActionCreators';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
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
    users: state.usersInfo.users.toList(),
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelEditModalDispatchProps => {
  return {
    onAddChannel: (name: string, users: Immutable.List<Uuid>) => dispatch(createChannel(name, users)),
    onUpdateChannel: (id: Uuid, name?: string, users?: Immutable.List<Uuid>) => dispatch(updateChannel(id, name, users))
  };
};

export const ChannelEditModalContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelEditModal);
