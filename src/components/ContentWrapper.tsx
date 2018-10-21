import * as React from 'react';
import { ChannelListing } from './ChannelListing';
import { UserCard } from './UserCard';
import { ProfileView } from './ProfileView';
import {ChannelView} from './ChannelView';

interface IContentWrapperState {
  currentPage: string;
}

export class ContentWrapper extends React.PureComponent<any, IContentWrapperState>  {
  constructor(props: any) {
    super(props);

    this.state = {
        currentPage: 'Profile',
    };
  }

  _onPageClick = (name: string) => {
    console.log('clicked', name);
    this.setState(() => ({
      currentPage: name,
    }));
  };

  render(): JSX.Element {
    return (
      <div className="content-wrapper full-height">
        <div className="sidebar-container">
            <ChannelListing
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

