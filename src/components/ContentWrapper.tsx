import * as React from 'react';
import { ChannelListing } from './ChannelListing';
import { UserCard } from './UserCard';
import { ProfileView } from './ProfileView';

export class ContentWrapper extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className="content-wrapper full-height">
        <div className="sidebar-container">
            <ChannelListing />
            <UserCard />
        </div>
        <div className="content-container">
            <ProfileView/>
        </div>
      </div>
    );
  }
}

