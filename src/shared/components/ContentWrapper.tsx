import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { ChannelListingContainer } from '../../channels/containers/ChannelListingContainer';
import { UserCardContainer } from '../../profile/containers/UserCardContainer';
import { ChannelView } from '../../channels/components/ChannelView';
import { withRouterPropTypes } from '../utils/routerProps';
import { ProfileView } from '../../profile/components/ProfileView';

interface IContentWrapperState {
  readonly currentPage: string;
}

export interface IContentWrapperDataProps extends RouteComponentProps<any> {
}

export class ContentWrapper extends React.PureComponent<IContentWrapperDataProps, IContentWrapperState> {
  static displayName = 'ContentWrapper';
  static propTypes = {
    ...withRouterPropTypes,
  };

  stopListening: Function | null;

  constructor(props: any) {
    super(props);

    this.state = {
      currentPage: 'General Channel',
    };
  }

  _onPageClick = (name: string) => {
    this.setState(() => ({
      currentPage: name,
    }));
  };

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
          <UserCardContainer
            onClickViewProfile={this._onPageClick}
          />
          <ChannelListingContainer
            onClick={this._onPageClick}
          />
        </div>
        <div className="content-container">
          <Route location={this.props.history.location} path="/ProfileView" component={ProfileView}/>
          <Route
            location={this.props.history.location}
            path="/ChannelView"
            component={ChannelView}
            channelName={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}
