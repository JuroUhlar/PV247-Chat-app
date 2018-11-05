import * as React from 'react';
import { ChannelBarItem } from './ChannelBarItem';
import { IChannel } from '../models/IChannel';
import * as Immutable from 'immutable';


export interface IChannelListingStateProps {
    readonly channels: Immutable.List<IChannel>;
}

export interface IChannelListingDispatchProps {
    readonly onAddChannel: (name: string) => void;
}

export interface IChannelListingOwnProps {
    readonly onClick: (name: string) => void;
}

export class ChannelListing extends React.PureComponent<
    IChannelListingOwnProps &
    IChannelListingStateProps &
    IChannelListingDispatchProps> {

    render(): JSX.Element {
        return (
            <div className="channel-listing">
                <div className="channel-taskbar">
                    <span className="channel-taskbar_title">Channels</span>
                    <span className="glyphicon glyphicon-plus add-channel-icon" title="Add a channel"
                        aria-hidden="true" />
                </div>
                <ol className="channels-ordered-list">
                    {this.props.channels.map((channel: IChannel) => (
                        <li key={channel.id}>
                            <ChannelBarItem
                                label={channel.name}
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
