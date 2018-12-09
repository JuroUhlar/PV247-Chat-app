import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as Immutable from 'immutable';
import { ChannelBarItem } from './ChannelBarItem';
import { ChannelEditModalContainer } from '../containers/ChannelEditModalContainer';
import { IChannel } from '../models/Channel';
import { ICreateChannelDependencies } from '../ActionCreators/createChannelFactory';
import { DragDropContext, DropResult, Droppable, DroppableProvided } from 'react-beautiful-dnd';


export interface IChannelListingDataProps {
  readonly channels: Immutable.Map<Uuid, IChannel>;
  readonly channelIds: Immutable.OrderedSet<Uuid>;
}

export interface IChannelListingCallbackProps {
  readonly onAddChannel: (dependencies: ICreateChannelDependencies) => void;
  readonly onDeleteChannel: (id: Uuid) => void;
  readonly onUpdateChannel: (id: Uuid, name?: string, users?: Immutable.List<Uuid>) => void;
  readonly onSelectChannel: (id: Uuid) => void;
  readonly onReorderChannels: (newChannelIds: Immutable.OrderedSet<Uuid>) => void;
  readonly getChannels: () => Promise<Action>;
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

  onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const newChannelIds: Uuid[] = this.props.channelIds.toArray();
    newChannelIds.splice(source.index, 1); // Remove the moved channel ID from array
    newChannelIds.splice(destination.index, 0, draggableId); // Add the moved ID to the destination index
    const newOrderedSet = Immutable.OrderedSet<Uuid>(newChannelIds);
    this.props.onReorderChannels(newOrderedSet);
  };

  render(): JSX.Element {
    return (
      <div className="channel-listing">
        <div className="channel-taskbar">
          <span className="channel-taskbar_title">Channels</span>
          <span className="glyphicon glyphicon-plus add-channel-icon" title="Add a channel" onClick={this.openModal}
            aria-hidden="true" />
        </div>
        <DragDropContext
          onDragEnd={this.onDragEnd}
        >
          <Droppable droppableId={'Channel-listing-droppable'}>
            {(provided: DroppableProvided) => (
              <ol className="channels-ordered-list" ref={provided.innerRef}>
                {this.props.channelIds.toArray().map((channelId: Uuid, index: number) => {
                  const channel = this.props.channels.get(channelId);
                  return (
                    <li key={channel.id}>
                      <ChannelBarItem
                        channelName={channel.name}
                        channelId={channel.id}
                        key={channel.id}
                        channelIndex={index}
                        onSelectChannel={this.props.onSelectChannel}
                        onDeleteChannel={this.props.onDeleteChannel}
                      />
                    </li>
                  );
                })}
                {provided.placeholder}
              </ol>
            )}
          </Droppable>
        </DragDropContext>
        <ChannelEditModalContainer show={this.state.showChannelModal} onClose={this.closeModal} />
      </div>
    );
  }
}
