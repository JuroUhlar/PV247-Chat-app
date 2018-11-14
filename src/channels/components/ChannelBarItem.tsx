import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ChannelEditModalContainer } from '../containers/ChannelEditModalContainer';
import { DropdownButton, Glyphicon, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CHANNEL_VIEW_ROUTE } from '../../shared/constants/routes';

interface IChannelBarItemProps {
  readonly channelName: string;
  readonly channelId: Uuid;
  readonly onDeleteChannel: (id: Uuid) => void;
}

export class ChannelBarItem extends React.PureComponent<IChannelBarItemProps, any> {
  static displayName = 'ChannelBarItem';

  static propTypes = {
    channelName: PropTypes.string.isRequired,
    channelId: PropTypes.string.isRequired,
    onDeleteChannel: PropTypes.func.isRequired,

  };

  constructor(props: any) {
    super(props);
    this.state = {
      anchorEl: null,
      showChannelModal: false,
    };
  }

  openDropdown = (event: any) => {
    const anchorElement: HTMLElement = event.currentTarget;
    this.setState(() => {
      return { anchorEl: anchorElement };
    });
  };

  closeDropdown = () => {
    this.setState(() => {
      return { anchorEl: null };
    });
  };

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

  handleRename = () => {
    this.openModal();
    this.closeDropdown();
  };


  deleteChannel = () => {
    this.closeDropdown();
    this.props.onDeleteChannel(this.props.channelId);
  };

  render(): JSX.Element {
    return (
      <div className="channel-bar-item" >
        <span className="glyphicon glyphicon-sort channel-bar-item_drag-icon visible-on-hover" title="Reordered channels" aria-hidden="true"/>
        <Link to={CHANNEL_VIEW_ROUTE} className="channel-bar-item_channel-label">
          <span>
            {this.props.channelName}
          </span>
        </Link>
        <DropdownButton
          bsStyle="link"
          title={
            <div style={{ display: 'inline-block' }}>
              <Glyphicon glyph="option-vertical"/>
            </div>}
          noCaret
          pullRight
          id="dropdown-no-caret"
        >
          <MenuItem onClick={this.handleRename}>Rename</MenuItem>
          <MenuItem onClick={this.closeDropdown}>Invite users</MenuItem>
          <MenuItem onClick={this.deleteChannel}>Delete</MenuItem>
        </DropdownButton>
        <ChannelEditModalContainer show={this.state.showChannelModal} onClose={this.closeModal} channelId={this.props.channelId}/>
      </div>
    );
  }
}
