import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as Immutable from 'immutable';
import { ChannelBarItem } from './ChannelBarItem';
import { ChannelEditModalContainer } from '../containers/ChannelEditModalContainer';
import { IChannel } from '../models/Channel';


export interface IChannelListingDataProps {
  readonly channels: Immutable.List<IChannel>;
}

export interface IChannelListingCallbackProps {
  readonly onAddChannel: (name: string) => void;
  readonly onDeleteChannel: (id: Uuid) => void;
  readonly onUpdateChannel: (id: Uuid, newName: string) => void;
  readonly onSelectChannel: (id: Uuid) => void;
}

type ChannelListingProps = IChannelListingDataProps & IChannelListingCallbackProps;

interface IChannelListingStateProps {
  readonly showChannelModal: boolean;
}

export class ChannelListing extends React.PureComponent<ChannelListingProps, IChannelListingStateProps> {
  static displayName = 'ChannelListing';
  static propTypes = {
    channels: PropTypes.object,

    onAddChannel: PropTypes.func.isRequired,
    onDeleteChannel: PropTypes.func.isRequired,
    onUpdateChannel: PropTypes.func.isRequired,
    onSelectChannel: PropTypes.func.isRequired,
  };

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
  };

  render(): JSX.Element {
    return (
      <div className="channel-listing">
        <div className="channel-taskbar">
          <span className="channel-taskbar_title">Channels</span>
          <span className="glyphicon glyphicon-plus add-channel-icon" title="Add a channel" onClick={this.openModal}
                aria-hidden="true"/>
        </div>
        <ol className="channels-ordered-list">
          {this.props.channels.map((channel: IChannel) => (
            <li key={channel.id}>
              <ChannelBarItem
                channelName={channel.name}
                channelId={channel.id}
                key={channel.id}
                onSelectChannel={this.props.onSelectChannel}
                onDeleteChannel={this.props.onDeleteChannel}
              />
            </li>
          ))}
        </ol>
        {/* <ChannelEditModal show={this.state.showChannelModal} onClose={this.closeModal} onSave={this.props.onAddChannel} /> */}
        <ChannelEditModalContainer show={this.state.showChannelModal} onClose={this.closeModal}/>
      </div>
    );
  }
}
