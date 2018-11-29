import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IState } from '../../shared/models/IState';
import { ChannelMessagesView, IChannelViewDataProps } from '../components/ChannelMessagesView';
import { IChannel } from '../models/Channel';

const mapStateToProps = (state: IState, ownProps: RouteComponentProps<any>): IChannelViewDataProps => {
  const currentChannelId = state.channelListing.selectedChannel;
  const currentChannel: IChannel = state.channelListing.channels.get(currentChannelId);
  return {
    ...ownProps,
    currentChannelId,
    channelName: currentChannel.name,
  };
};

export const ChannelViewContainer = withRouter(connect(mapStateToProps)(ChannelMessagesView));
