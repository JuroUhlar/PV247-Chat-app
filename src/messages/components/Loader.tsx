import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ChannelViewContainer } from '../../channels/containers/ChannelViewContainer';

export interface ILoaderDataProps {
  isFetching: boolean;
  currentChannelId: Uuid;
}

export interface  ILoaderCallbackProps {
  fetchMessages: (currentChannelId: Uuid) => Promise<Action>;
}

type LoaderProps = ILoaderDataProps & ILoaderCallbackProps;

export class Loader extends React.PureComponent<LoaderProps> {
  static displayName = 'Loader';
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    currentChannelId: PropTypes.string.isRequired,

    fetchMessages: PropTypes.func.isRequired,
  };

  constructor(props: LoaderProps) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.currentChannelId);
  }

  render() {
    return this.props.isFetching ?
      <div>I am fetching dude. Leave me alone..</div> : <ChannelViewContainer/>;
  }
}
