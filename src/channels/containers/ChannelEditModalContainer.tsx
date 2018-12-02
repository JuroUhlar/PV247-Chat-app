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
import { ICreateChannelDependencies } from '../ActionCreators/createChannelFactory';

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
    onAddChannel: (dependencies: ICreateChannelDependencies) => dispatch(createChannel(dependencies)),
    onUpdateChannel: (id: Uuid, name?: string, users?: Immutable.List<Uuid>) => dispatch(updateChannel(id, name, users))
  };
};

export const ChannelEditModalContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelEditModal);
