import * as React from 'react';
import * as PropTypes from 'prop-types';
// import { DropdownButton, MenuItem } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

interface IChannelBarItemProps {
  readonly channelName: string;
  readonly channelId: Uuid;
  readonly onClick: (name: string) => void;
  readonly onDeleteChannel: (id: Uuid) => void;
}

export class ChannelBarItem extends React.PureComponent<IChannelBarItemProps, any> {

  static propTypes = {
    label: PropTypes.string.isRequired,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event: any) => {
    const anchorElement: HTMLElement = event.currentTarget;
    this.setState(() => {
      return { anchorEl: anchorElement };
    });
  };

  handleClose = () => {
    this.setState(() => {
      return { anchorEl: null };
    });
  };

  deleteChannel = () => {
    this.handleClose();
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
        {/* Original icon */}
        {/* <span className="glyphicon glyphicon-option-vertical channel-bar-item_open-options-icon visible-on-hover" title="Options" aria-hidden="true" /> */}

        {/* React-bootstrap solution */}
        {/* <DropdownButton
          title="Options"
          key="1"
          id="2"
          noCaret
        >
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>
            Active Item
      </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton> */}

        {/* <div className="channel-bar-item_open-options-icon-container"> */}
        <MuiThemeProvider theme={theme}>
          <Button
            aria-owns={'simple-menu'}
            aria-haspopup="true"
            onClick={this.handleClick}
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
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Rename</MenuItem>
            <MenuItem onClick={this.handleClose}>Invite users</MenuItem>
            <MenuItem onClick={this.deleteChannel}>Delete</MenuItem>
          </Menu>
        </MuiThemeProvider>

        {/* </div> */}
      </div>
    );
  }
}
