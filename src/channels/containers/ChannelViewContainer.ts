import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IState } from '../../shared/models/IState';
import { ChannelView, IChannelViewDataProps } from '../components/ChannelView';

const channelName = 'General';

const mapStateToProps = (_state: IState, ownProps: RouteComponentProps<any>): IChannelViewDataProps => {
  return {
    ...ownProps,
    channelName,
  };
};

export const ChannelViewContainer = withRouter(connect(mapStateToProps)(ChannelView));
