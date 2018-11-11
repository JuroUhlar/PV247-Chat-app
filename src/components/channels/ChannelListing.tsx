import * as React from 'react';
import { ChannelBarItem } from './ChannelBarItem';
import { ChannelManagementModal } from './ChannelManagementModal';
import { IChannel } from '../../models/IChannel';
import * as Immutable from 'immutable';


export interface IChannelListingStateProps {
    readonly channels: Immutable.List<IChannel>;
}

export interface IChannelListingDispatchProps {
    readonly onAddChannel: (name: string) => void;
    readonly onDeleteChannel: (id: Uuid) => void;
}

export interface IChannelListingOwnProps {
    readonly onClick: (name: string) => void;
}

interface IChannelListingState {
    readonly showChannelModal: boolean;
}

export class ChannelListing extends React.PureComponent<
    IChannelListingOwnProps &
    IChannelListingStateProps &
    IChannelListingDispatchProps, IChannelListingState> {


    constructor(props: any) {
        super(props);
        this.state = {
            showChannelModal: false,
        };
    }

    closeModal = () => {
        this.setState(() => ({
            showChannelModal: false,
        }));
    };

    openModal = () => {
        this.setState(() => ({
            showChannelModal: true,
        }));
    }



    render(): JSX.Element {
        return (
            <div className="channel-listing">
                <div className="channel-taskbar">
                    <span className="channel-taskbar_title">Channels</span>
                    <span className="glyphicon glyphicon-plus add-channel-icon" title="Add a channel" onClick={this.openModal}
                        aria-hidden="true" />
                </div>
                <ol className="channels-ordered-list">
                    {this.props.channels.map((channel: IChannel) => (
                        <li key={channel.id}>
                            <ChannelBarItem
                                channelName={channel.name}
                                channelId={channel.id}
                                key={channel.id}
                                onClick={this.props.onClick}
                                onDeleteChannel={this.props.onDeleteChannel}
                            />
                        </li>
                    ))}
                </ol>
                <ChannelManagementModal show={this.state.showChannelModal} onClose={this.closeModal} onSave={this.props.onAddChannel} />
            </div>
        );
    }
}
