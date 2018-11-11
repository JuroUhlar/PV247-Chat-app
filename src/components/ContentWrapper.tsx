import * as React from 'react';
import {ChannelListingContainer} from '../containers/ChannelListingContainer';
import {ChannelView} from './channels/ChannelView';
import {ProfileView} from '../components/profile/ProfileView';
import {UserCardContainer} from '../containers/profile/UserCardContainer';

interface IContentWrapperState {
  readonly currentPage: string;
}

export class ContentWrapper extends React.PureComponent<any, IContentWrapperState> {
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
          <UserCardContainer
            onClick={this._onPageClick}
          />
        </div>
        <div className="content-container">
          {this.state.currentPage === 'ProfilePage' ?
            <ProfileView/>
            :
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

