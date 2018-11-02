import * as React from 'react';
import { ChannelBarItem } from './ChannelBarItem';

interface IChanelListingProps {
    readonly onClick: (name: string) => void;
}

interface IChannelListingState {
    readonly channels: any[];
}

export class ChannelListing extends React.PureComponent<IChanelListingProps, IChannelListingState> {
    constructor(props: IChanelListingProps) {
        super(props);

        this.state = {
            channels: [
                {label: 'General', id: 0},
                {label: 'Random', id: 1},
                {label: 'Off-topic', id: 2},
                {label: 'Not work related', id: 3},
                {label: 'Memes', id: 4},
                {label: 'Gossip', id: 5},
                {label: 'Cat videos', id: 6},
            ],
        };
    }

    render(): JSX.Element {
        return (
            <div className="channel-listing">
                <div className="channel-taskbar">
                    <span className="channel-taskbar_title">Channels</span>
                    <span className="glyphicon glyphicon-plus add-channel-icon" title="Add a channel"
                          aria-hidden="true"/>
                </div>
                <ol className="channels-ordered-list">
                    {this.state.channels.map(channel => (
                        <li key={channel.id}>
                            <ChannelBarItem
                                label={channel.label}
                                key={channel.id}
                                onClick={this.props.onClick}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}
