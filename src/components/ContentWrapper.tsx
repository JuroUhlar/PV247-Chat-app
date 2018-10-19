import * as React from 'react';
import { ChannelListing } from './ChannelListing';
import { UserCard } from './UserCard';

export class ContentWrapper extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className="content-wrapper">
        <div className="sidebar-wrapper">
            <ChannelListing />
            <UserCard />
        </div>
      </div>
    );
  }
}

