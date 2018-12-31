import * as React from 'react';
import * as PropTypes from 'prop-types';
// import { isInsertEmpty } from '../../shared/utils/textUtils';
import { IUser } from '../models/User';

export interface IAvatarFieldsDataProps {
  readonly user: IUser;
}

export interface IAvatarFieldsCallbackProps {
  readonly onUploadFile: (data: FormData) => void;
}

type AvatarFieldsProps = IAvatarFieldsDataProps & IAvatarFieldsCallbackProps;

interface IAvatarFieldsState {
  readonly avatarFile: File | null;
}

export class AvatarFields extends React.Component<AvatarFieldsProps, IAvatarFieldsState> {
  static displayName = 'AvatarFields';

  static propTypes = {
    user: PropTypes.object.isRequired,
    onUplaodFile: PropTypes.func.isRequired,
  };

  constructor(props: AvatarFieldsProps) {
    super(props);
    this.state = { avatarFile: null };
  }

  _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const avatarFile = event.target.files.length > 0 ? event.target.files[0] : null;
      console.log(avatarFile);
      this.setState(() => ({ avatarFile }));
    }
  };

  _handleUplaod = () => {
    if (this.state.avatarFile) {
      const data = new FormData();
      data.append('Files', this.state.avatarFile);
      this.props.onUploadFile(data);
    }
  };

  render() {
    return (
      <form className="account-details user-profile-block">
        <div className="form-group">
          <input
            onChange={this._handleChange}
            name="profileView-file"
            id="profileView-file"
            type="file"
            className="form-control"
          />
        </div>
        <button
          disabled={this.state.avatarFile === null}
          className="btn btn-primary btn-block"
          type="button"
          onClick={this._handleUplaod}
        > Submit
        </button>
      </form>
    );
  }
}
