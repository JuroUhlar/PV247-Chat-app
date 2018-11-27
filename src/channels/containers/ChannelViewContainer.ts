import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IState } from '../../shared/models/IState';
import { ChannelView, IChannelViewDataProps } from '../components/ChannelView';

const channelName = 'General';

const mapStateToProps = (state: IState, ownProps: RouteComponentProps<any>): IChannelViewDataProps => {
  const currentChannelId = state.channelListing.selectedChannel;
  return {
    ...ownProps,
    channelName,
    currentChannelId,
  };
};

export const ChannelViewContainer = withRouter(connect(mapStateToProps)(ChannelView));
