import * as React from 'react';
import { BarItem } from './BarItem';

interface IChannelListingState {
  channels: any[];
}

export class ChannelListing extends React.PureComponent<any, IChannelListingState> {
  constructor(props: any) {
    super(props);

    this.state = {
      channels: [
        { label: 'General', id: 0 },
        { label: 'Random', id: 1 },
        { label: 'Off-topic', id: 2 },
        { label: 'Not work related', id: 3 },
        { label: 'Memes', id: 4 },
        { label: 'Gossip', id: 5 },
        { label: 'Cat videos', id: 6 },
      ],
    };
  }

  render(): JSX.Element {
    return (
      <div>
        <h2>Channels</h2>
        {this.state.channels.map(channel => (
          <BarItem label={channel.label} />
        ))}

      </div>
    );
  }
}
