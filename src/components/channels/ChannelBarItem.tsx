import * as React from 'react';
import * as PropTypes from 'prop-types';
// import { DropdownButton, MenuItem } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { ChannelEditModalContainer } from '../../containers/channels/ChannelEditModalContainer';

interface IChannelBarItemProps {
  readonly channelName: string;
  readonly channelId: Uuid;
  readonly onClick: (name: string) => void;
  readonly onDeleteChannel: (id: Uuid) => void;
}

export class ChannelBarItem extends React.PureComponent<IChannelBarItemProps, any> {
  static displayName = 'ChannelBarItem';

  static propTypes = {
    channelName: PropTypes.string.isRequired,
    channelId: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
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
  }

  handleRename = () => {
    this.openModal();
    this.closeDropdown();
  }


  deleteChannel = () => {
    this.closeDropdown();
    this.props.onDeleteChannel(this.props.channelId);
  }



  render(): JSX.Element {

    const theme = createMuiTheme({
      typography: {
        // Tell Material-UI what the font-size on the html element is.
        htmlFontSize: 12,
        useNextVariants: true,
      },
    });

    return (
      <div
        className="channel-bar-item"
        onClick={() => { this.props.onClick(this.props.channelName); }}
      >
        <span className="glyphicon glyphicon-sort channel-bar-item_drag-icon visible-on-hover" title="Reorded channels" aria-hidden="true" />
        <span className="channel-bar-item_channel-label">
          {this.props.channelName}
        </span>

        <MuiThemeProvider theme={theme}>
          <Button
            aria-owns={'simple-menu'}
            aria-haspopup="true"
            onClick={this.openDropdown}
          >
            <span className="glyphicon glyphicon-option-vertical" title="Options" aria-hidden="true" />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            anchorReference="anchorEl"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            getContentAnchorEl={null}
            open={Boolean(this.state.anchorEl)}
            onClose={this.closeDropdown}
          >
            <MenuItem onClick={this.handleRename}>Rename</MenuItem>
            <MenuItem onClick={this.closeDropdown}>Invite users</MenuItem>
            <MenuItem onClick={this.deleteChannel}>Delete</MenuItem>
          </Menu>
        </MuiThemeProvider>
        <ChannelEditModalContainer show={this.state.showChannelModal} onClose={this.closeModal} channelId={this.props.channelId} />
      </div>
    );
  }
}
