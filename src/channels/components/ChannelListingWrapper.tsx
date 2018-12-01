import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ChannelListingContainer } from '../containers/ChannelListingContainer';

export interface IChannelListingWrapperDataProps {
  isLoading: boolean;
}

export interface IChannelListingWrapperCallbackProps {
  getChannels: () => Promise<Action>;
}

type ChannelListingWrapperProps = IChannelListingWrapperDataProps & IChannelListingWrapperCallbackProps;

export class ChannelListingWrapper extends React.PureComponent<ChannelListingWrapperProps> {
  static displayName = 'Loader';
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    getChannels: PropTypes.func.isRequired,
  };

  constructor(props: ChannelListingWrapperProps) {
    super(props);
  }

  componentDidMount() {
    this._handleLoadChannels();
  }

  _handleLoadChannels = () => {
    const { getChannels } = this.props;
    getChannels();
  };

  render() {
    return this.props.isLoading ?
      <div>"I am fetching, girl. Go away..."</div> : <ChannelListingContainer/>;
  }
}
