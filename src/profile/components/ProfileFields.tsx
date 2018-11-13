import * as React from 'react';
import * as PropTypes from 'prop-types';
import {isInsertEmpty} from '../../shared/utils/textUtils';

export interface IProfileFieldsDataProps {
  readonly email: string;
  readonly username: string;
  readonly userId: string;
}

export interface IProfileFieldsCallbackProps {
  readonly onSave: (id: Uuid, name: string) => void;
}

type ProfileFieldsProps = IProfileFieldsDataProps & IProfileFieldsCallbackProps;

interface IProfileFieldsState {
  readonly username: string;
}

export class ProfileFields extends React.PureComponent<ProfileFieldsProps, IProfileFieldsState> {
  static displayName = 'ProfileFields';

  static propTypes = {
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,

    onSave: PropTypes.func.isRequired,
  };

  constructor(props: ProfileFieldsProps) {
    super(props);
    this.state = {username: props.username};
  }

  _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const username = event.currentTarget.value;
    this.setState(() => ({username}));
  };

  _handleSave = () => {
    this.props.onSave(this.props.userId, this.state.username);
  };

  _handleCancel = () => {
    const username = this.props.username;
    this.setState(() => ({username}));
  };

  render() {
    const {username} = this.state;

    return (
      <form className="account-details user-profile-block">
        <div className="form-group">
          <label
            htmlFor="profileView-inputEmail">
            Email
          </label>
          <input
            id="profileView-inputEmail"
            name="profileView-inputEmail"
            type="text"
            defaultValue={this.props.email}
            disabled
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="profileView-nickname">
            Nickname
          </label>
          <input
            onChange={this._handleChange}
            value={username}
            name="profileView-nickname"
            id="profileView-nickname"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-6">
              <button
                disabled={isInsertEmpty(username)}
                className="btn btn-primary btn-block"
                type="button"
                onClick={this._handleSave}
              > Submit
              </button>
            </div>
            <div className="col-sm-6">
              <button
                className="btn btn-default btn-block"
                type="button"
                disabled={false}
                onClick={this._handleCancel}
              > Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
