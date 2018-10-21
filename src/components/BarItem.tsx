import * as React from 'react';
import * as PropTypes from 'prop-types';

interface IBarItemProps {
  label: string;
  onClick: (name: string) => void;
}

export class BarItem extends React.PureComponent<IBarItemProps> {

  static propTypes = {
    label: PropTypes.string.isRequired,
  };

  render(): JSX.Element {
    return (
      <div
          className="channel-bar-item"
          onClick={() => { this.props.onClick(this.props.label); }}
      >
        <span className="glyphicon glyphicon-sort channel-bar-item_drag-icon visible-on-hover" title="Reorded channels" aria-hidden="true" />
        <span className="channel-bar-item_channel-label">
          {this.props.label}
        </span>
        <span className="glyphicon glyphicon-option-vertical channel-bar-item_options-icon visible-on-hover" title="Options" aria-hidden="true" />
      </div>
    );
  }
}
