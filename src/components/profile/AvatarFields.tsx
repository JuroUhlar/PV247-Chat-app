import * as React from 'react';
import * as PropTypes from 'prop-types';
import {isInsertEmpty} from '../../utils/isInsertEmpty';

export interface IAvatarFieldsDataProps {
  readonly avatarPath?: string;
  readonly userId: string;
}

export interface IAvatarFieldsCallbackProps {
  readonly onSave: (userId: Uuid, path: string) => void;
}

type AvatarFieldsProps = IAvatarFieldsDataProps & IAvatarFieldsCallbackProps;

interface IAvatarFieldsState {
  readonly avatarPath?: string;
}

export class AvatarFields extends React.PureComponent<AvatarFieldsProps, IAvatarFieldsState> {
  static displayName = 'AvatarFields';

  static propTypes = {
    avatarPath: PropTypes.string,
    userId: PropTypes.string.isRequired,

    onSave: PropTypes.func.isRequired,
  };

  constructor(props: AvatarFieldsProps) {
    super(props);
    this.state = {avatarPath: props.avatarPath};
  }

  _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const avatarPath = event.currentTarget.value;
    this.setState(() => ({avatarPath}));
  };

  _handleSave = () => {
    const path = this.state.avatarPath;

    if (path) {
      this.props.onSave(this.props.userId, path);
    }
  };

  render() {
    const {avatarPath} = this.state;

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
