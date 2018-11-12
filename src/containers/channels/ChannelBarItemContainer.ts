import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ChannelBarItem, IChannelBarItemCallbackProps, IChannelBarItemDataProps } from '../../components/channels/ChannelBarItem';
import { deleteChannel, goToChannel } from '../../actions/channelActionCreators';
import { IState } from '../../models/IState';
import { IChannel } from '../../models/IChannel';

const mapStateToProps = (state: IState): IChannelBarItemDataProps => {
  const { currentChannelId } = state.channelsInfo;
  const currentChannel = state.channelsInfo.channels.find((channel: IChannel) => channel.id === currentChannelId);
  const { id, name } = currentChannel;

  return {
    channelId: id,
    channelName: name,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IChannelBarItemCallbackProps => {
  return {
    onClick: (id: Uuid) => dispatch(goToChannel(id)),
    onDeleteChannel: (id: Uuid) => dispatch(deleteChannel(id))
  };
};

export const ChannelBarItemContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelBarItem);
