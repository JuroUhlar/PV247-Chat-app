import * as React from 'react';
import { ChannelListingContainer } from '../containers/ChannelListingContainer';
import { UserCard } from './Profile/UserCard';
import { ProfileView } from './Profile/ProfileView';
import { ChannelView } from './Channels/ChannelView';

interface IContentWrapperState {
  readonly currentPage: string;
}

export class ContentWrapper extends React.PureComponent<any, IContentWrapperState>  {
  constructor(props: any) {
    super(props);

    this.state = {
      currentPage: 'Profile',
    };
  }

  _onPageClick = (name: string) => {
    this.setState(() => ({
      currentPage: name,
    }));
  };

  render(): JSX.Element {
    return (
      <div className="content-wrapper full-height">
        <div className="sidebar-container">
          <ChannelListingContainer
            onClick={this._onPageClick}
          />
          <UserCard
            onClick={this._onPageClick}
          />
        </div>
        <div className="content-container">
          {this.state.currentPage === 'ProfilePage' &&
            <ProfileView />
          }
          {this.state.currentPage !== 'ProfilePage' &&
            <span>
              <ChannelView
                channelName={this.state.currentPage}
              />
            </span>
          }
        </div>
      </div>
    );
  }
}

