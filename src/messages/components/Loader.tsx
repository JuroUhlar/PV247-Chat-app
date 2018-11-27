import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ChannelViewContainer } from '../../channels/containers/ChannelViewContainer';

export interface ILoaderDataProps {
  isLoading: boolean;
  currentChannelId: Uuid;
}

export interface  ILoaderCallbackProps {
  getMessages: (currentChannelId: Uuid) => Promise<Action>;
}

type LoaderProps = ILoaderDataProps & ILoaderCallbackProps;

export class Loader extends React.PureComponent<LoaderProps> {
  static displayName = 'Loader';
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    currentChannelId: PropTypes.string.isRequired,

    getMessages: PropTypes.func.isRequired,
  };

  constructor(props: LoaderProps) {
    super(props);
  }

  componentDidMount() {
    this.props.getMessages(this.props.currentChannelId);
  }

  render() {
    return this.props.isLoading ?
      <div>I am fetching dude. Leave me alone..</div> : <ChannelViewContainer/>;
  }
}
