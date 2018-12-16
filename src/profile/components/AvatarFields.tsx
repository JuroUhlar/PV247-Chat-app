import * as React from 'react';
import * as PropTypes from 'prop-types';
import { isInsertEmpty } from '../../shared/utils/textUtils';
import { IUser } from '../models/User';

export interface IAvatarFieldsDataProps {
  readonly user: IUser;
}

export interface IAvatarFieldsCallbackProps {
  readonly onSave: (path: string) => void;
}

type AvatarFieldsProps = IAvatarFieldsDataProps & IAvatarFieldsCallbackProps;

interface IAvatarFieldsState {
  readonly avatarPath?: string;
}

export class AvatarFields extends React.PureComponent<AvatarFieldsProps, IAvatarFieldsState> {
  static displayName = 'AvatarFields';

  static propTypes = {
    avatarPath: PropTypes.string,
    user: PropTypes.object.isRequired,

    onSave: PropTypes.func.isRequired,
  };

  constructor(props: AvatarFieldsProps) {
    super(props);
    this.state = { avatarPath: props.user.avatarPath };
  }

  _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const avatarPath = event.currentTarget.value;
    this.setState(() => ({ avatarPath }));
  };

  _handleSave = () => {
    const path = this.state.avatarPath;
    if (path) {
      this.props.onSave(path);
    }
  };

  render() {
    const { avatarPath } = this.state;

    return (
      <form className="account-details user-profile-block">
        <div className="form-group">
          <input
            onChange={this._handleChange}
            value={avatarPath}
            name="profileView-avatarPath"
            id="profileView-avatarPath"
            type="text"
            className="form-control"
          />
        </div>
        <button
          disabled={isInsertEmpty(avatarPath)}
          className="btn btn-primary btn-block"
          type="button"
          onClick={this._handleSave}
        > Submit
        </button>
      </form>
    );
  }
}
