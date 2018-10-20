import * as React from 'react';
import { ChannelListing } from './ChannelListing';
import { UserCard } from './UserCard';

export class ContentWrapper extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className="content-wrapper full-height">
        <div className="sidebar-container">
            <ChannelListing />
            <UserCard />
        </div>
        <div className="content-container">
            <h2>Channel content</h2>
        </div>
      </div>
    );
  }
}

