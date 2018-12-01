import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { ChannelListingWrapperContainer } from '../../channels/containers/ChannelListingWrapperContainer';
import { UserCardContainer } from '../../profile/containers/UserCardContainer';
import { withRouterPropTypes } from '../utils/routerProps';
import { ProfileView } from '../../profile/components/ProfileView';
import { CHANNEL_VIEW_ROUTE, PROFILE_VIEW_ROUTE } from '../constants/routes';
import { ChannelMessagesViewContainer } from '../../channels/containers/ChannelMessagesViewContainer';

export interface IContentWrapperDataProps extends RouteComponentProps<any> {
  isLoadingChannels: boolean;
}

export class ContentWrapper extends React.PureComponent<IContentWrapperDataProps> {
  static displayName = 'ContentWrapper';
  static propTypes = {
    ...withRouterPropTypes,
  };

  stopListening: Function | null;

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.stopListening = this.props.history.listen(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (this.stopListening) {
      this.stopListening();
    }
  }

  render(): JSX.Element {
    return (
      <div className="content-wrapper full-height">
        <div className="sidebar-container">
          <UserCardContainer/>
          <ChannelListingWrapperContainer/>
        </div>
        <div className="content-container">
          <Route
            exact
            location={this.props.history.location}
            path={PROFILE_VIEW_ROUTE}
            component={ProfileView}
          />
          <Route
            location={this.props.history.location}
            path={CHANNEL_VIEW_ROUTE}
            component={ChannelMessagesViewContainer}
          />
        </div>
      </div>
    );
  }
}
