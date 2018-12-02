import * as React from 'react';
import { IChannel } from '../models/Channel';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Table } from 'react-bootstrap';
import * as Immutable from 'immutable';
import { IUser } from '../../profile/models/User';
import { List } from 'immutable';
import { ICreateChannelDependencies } from '../ActionCreators/createChannelFactory';


export interface IChannelEditModalStateProps {
  readonly channel: IChannel;
  readonly users: List<IUser>;
}

export interface IChannelEditModalDispatchProps {
  readonly onAddChannel: (dependencies: ICreateChannelDependencies) => void;
  readonly onUpdateChannel: (id: Uuid, name?: string, users?: Immutable.List<Uuid>) => void;
}

export interface IChannelEditModalOwnProps {
  readonly onClose: () => void;
  readonly onSave: (channelName: string) => void;
  readonly show: boolean;
  readonly channel?: IChannel;
}

interface IChannelEditState {
  readonly nameValue: string;
  readonly membersIds: Immutable.List<Uuid>;
}

export class ChannelEditModal extends React.PureComponent<IChannelEditModalOwnProps & IChannelEditModalStateProps & IChannelEditModalDispatchProps, IChannelEditState> {
  constructor(props: any) {
    super(props);
    const membersIds: Immutable.List<Uuid> = Immutable.List([]);
    this.state = {
      nameValue: '',
      membersIds
    };
  }

  componentWillReceiveProps(props: IChannelEditModalOwnProps & IChannelEditModalStateProps & IChannelEditModalDispatchProps) {
    if (props.channel) {
      // When editing existing channel
      this.setState(() => ({
        nameValue: props.channel.name,
        membersIds: props.channel.users,
      }));
    } else {
      // When creating new channel
      // const allUserIds = Immutable.List(props.users.toArray().map((user => user.id)));
      this.setState(() => ({
        // membersIds: allUserIds
         membersIds: Immutable.List([])
      }));
    }
  }

  handleNameChange = (event: any) => {
    const newName = event.target.value;
    this.setState(() => ({
      nameValue: newName
    }));
  }

  handleUserChange = (id: Uuid) => {
    const newMembersIds = toggleChannelMember(id, this.state.membersIds);
    this.setState(() => ({
      membersIds: newMembersIds
    }));
  }

  updateChannel = () => {
    const id = this.props.channel.id;
    const name = this.state.nameValue;
    const users = this.state.membersIds;

    this.props.onUpdateChannel(id, name, users);
    this.resetForm();
    this.props.onClose();
  }

  createChannel = () => {
    const dependencies: ICreateChannelDependencies = {
      name: this.state.nameValue,
      users: this.state.membersIds
    };

    this.props.onAddChannel(dependencies);
    this.resetForm();
    this.props.onClose();
  };

  resetForm = () => {
    this.setState(() => ({
      nameValue: '',
      membersIds: Immutable.List([]),
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
            <FormGroup>
              <ControlLabel>Users</ControlLabel>
              <Table hover>
                <tbody>
                  {this.props.users.map((user: IUser) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <input type="checkbox"
                          checked={this.state.membersIds.contains(user.id)}
                          onChange={() => this.handleUserChange(user.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
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

function toggleChannelMember(id: Uuid, memberIds: Immutable.List<Uuid>): Immutable.List<Uuid> {
  if (memberIds.contains(id)) {
    const index = memberIds.findIndex((userId: Uuid) => userId === id);
    return memberIds.remove(index);
  }
  return memberIds.push(id);
}
