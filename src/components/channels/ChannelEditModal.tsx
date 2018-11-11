import * as React from 'react';
import { IChannel } from '../../models/IChannel';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


export interface IChannelEditModalStateProps {
  readonly channel: IChannel;
}

export interface IChannelEditModalDispatchProps {
  readonly onAddChannel: (name: string) => void;
  readonly onRenameChannel: (id: Uuid, newName: string) => void;
}

export interface IChannelEditModalOwnProps {
  readonly onClose: () => void;
  readonly onSave: (channelName: string) => void;
  readonly show: boolean;
  readonly channel?: IChannel;
}

interface IChannelEditState {
  readonly nameValue: string;
}

export class ChannelEditModal extends React.PureComponent<IChannelEditModalOwnProps & IChannelEditModalStateProps & IChannelEditModalDispatchProps, IChannelEditState> {
  constructor(props: any) {
    super(props);
    this.state = {
      nameValue: '',
    };
  }

  componentWillReceiveProps(props: IChannelEditModalOwnProps & IChannelEditModalStateProps & IChannelEditModalDispatchProps) {
    if (props.channel) {
      this.setState(() => ({
        nameValue: props.channel.name,
      }));
    }
  }

  handleNameChange = (event: any) => {
    const newName = event.target.value;
    this.setState(() => ({
      nameValue: newName
    }));
  }

  updateChannel = () => {
    this.props.onRenameChannel(this.props.channel.id, this.state.nameValue);
    this.resetForm();
    this.props.onClose();
  }

  createChannel = () => {
    this.props.onAddChannel(this.state.nameValue);
    this.resetForm();
    this.props.onClose();
  };

  resetForm = () => {
    this.setState(() => ({
      nameValue: ''
    }));
  }

  render(): JSX.Element {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.channel ? `Edit channel: ${this.props.channel.name}` : 'Create new channel'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Channel name</ControlLabel>
              <FormControl
                type="text"
                value={this.state.nameValue}
                placeholder="Enter channel name"
                onChange={this.handleNameChange}
                autoFocus
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    if (this.props.channel) {
                      this.updateChannel();
                    } else {
                      this.createChannel();
                    }
                  }
                }
                }
              />
              <FormControl.Feedback />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {this.props.channel ?
            <Button onClick={this.updateChannel}>Update channel</Button> :
            <Button onClick={this.createChannel}>Create channel</Button>}
        </Modal.Footer>
      </Modal>
    );
  }
}
