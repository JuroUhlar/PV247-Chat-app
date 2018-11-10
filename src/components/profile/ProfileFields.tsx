import * as React from 'react';
import * as PropTypes from 'prop-types';
import {isInsertEmpty} from '../../utils/isInsertEmpty';

export interface IProfileFieldsDataProps {
  readonly email: string;
  readonly username: string;
}

export interface IProfileFieldsCallbackProps {
}

type ProfileFieldsProps = IProfileFieldsDataProps & IProfileFieldsCallbackProps;

interface IProfileFieldsState {
  text: string;
}

export class ProfileFields extends React.PureComponent<ProfileFieldsProps, IProfileFieldsState> {
  static displayName = 'ProfileFields';

  static propTypes = {
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  };

  constructor(props: ProfileFieldsProps) {
    super(props);
    this.state = {text: props.username};
  }

  _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value;
    this.setState(() => ({text}));
  };

  render() {
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
            value={this.state.text}
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
                disabled={isInsertEmpty(this.state.text)}
                className="btn btn-primary btn-block"
                type="button"
              > Submit
              </button>
            </div>
            <div className="col-sm-6">
              <button
                className="btn btn-default btn-block"
                type="button"
                disabled={false}
              > Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
