import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as Immutable from 'immutable';
import { IUser } from '../../profile/models/User';
import {
  Button,
  Checkbox,
  Modal
} from 'react-bootstrap';
import { Avatar } from '../../profile/components/Avatar';

export interface IAnnotateUserOptionProps {
  readonly users: Immutable.List<IUser>;
  readonly onAnnotate: (users: Immutable.Set<Uuid>) => void;
}

export interface IAnnotateUserOptionStateProps {
  readonly isOpen: boolean;
  readonly annotatedUsers: Immutable.Set<Uuid>;
}

export class AnnotateUserOption extends React.PureComponent<IAnnotateUserOptionProps, IAnnotateUserOptionStateProps> {
  static displayName = 'AnnotateUserOption';
  static propTypes = {
    users: PropTypes.object.isRequired,

    onAnnotate: PropTypes.func.isRequired,
  };

  constructor(props: IAnnotateUserOptionProps) {
    super(props);
    this.state = {
      isOpen: false,
      annotatedUsers: Immutable.Set<Uuid>(),
    };
  }

  _toggleAnnotated(id: Uuid, userIds: Immutable.Set<Uuid>): Immutable.Set<Uuid> {
    if (userIds.contains(id)) {
      return userIds.remove(id);
    }
    return userIds.add(id);
  }

  _handleUserCheck = (id: Uuid) => () => {
    const newUserIds = this._toggleAnnotated(id, this.state.annotatedUsers);
    this.setState(() => ({
      annotatedUsers: newUserIds
    }));
  };

  _handleAnnotate = () => {
    this.props.onAnnotate(this.state.annotatedUsers);
    this._closeModal();
  };

  _closeModal = () => {
    this.setState(() => ({ isOpen: false }));
  };

  _openModal = () => {
    this.setState(() => ({ isOpen: true }));
  };

  _isChecked = (userId: Uuid) => (this.state.annotatedUsers.contains(userId));

  render() {
    return (
      <div>
        <Button onClick={this._openModal}>
          @
        </Button>
        <Modal
          onHide={this._closeModal}
          show={this.state.isOpen}
          container={this}
        >
          <Modal.Header>
            <Modal.Title>Select users to annotate</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {this.props.users.map((user: IUser) => {
              return (
                <Checkbox
                  key={user.id}
                  onChange={this._handleUserCheck(user.id)}
                  checked={this._isChecked(user.id)}
                >
                  <div className="annotated-user">
                    <Avatar
                      avatarPath={user.avatarPath}
                      avatarSize="annotated-avatar"
                    />
                    <span> {user.name} </span>
                  </div>
                </Checkbox>
              );
            })}
          </Modal.Body>

          <Modal.Footer className="form-group">
            <div className="form-group">
              <div className="row">
                <div className="col-sm-6">
                  <Button
                    className="btn-block"
                    onClick={this._closeModal}
                  >Close</Button>
                </div>
                <div className="col-sm-6">
                  <Button
                    className="btn-block"
                    bsStyle="primary"
                    onClick={this._handleAnnotate}
                  >Annotate selected users</Button>
                </div>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
