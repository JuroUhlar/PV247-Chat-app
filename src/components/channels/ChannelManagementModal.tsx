import * as React from 'react';
// import { IChannel } from '../../models/IChannel';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// export interface IChannelManagemetModalStateProps {
//     readonly channel: IChannel;
// }

// export interface IChannelManagementModalDispatchProps {
//     readonly onAddChannel: (name: string) => void;
//     readonly onDeleteChannel: (id: Uuid) => void;
// }

export interface IChannelManagementModalOwnProps {
  readonly onClose: () => void;
  readonly onSave: (channelName: string) => void;
  readonly show: boolean;
}

interface IChannelManagementState {
  readonly nameValue: string;
}

export class ChannelManagementModal extends React.PureComponent<IChannelManagementModalOwnProps, IChannelManagementState> {


  constructor(props: any) {
    super(props);
    this.state = {
      nameValue: '',
    };
  }

  handleNameChange = (event: any) => {
    const newName = event.target.value;
    this.setState(() => ({
      nameValue: newName
    }));
  }

  save = () => {
    this.props.onSave(this.state.nameValue);
    this.props.onClose();
  };

  render(): JSX.Element {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create channel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>Channel name</ControlLabel>
              <FormControl
                type="text"
                value={this.state.nameValue}
                placeholder="Enter text"
                onChange={this.handleNameChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.save}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
