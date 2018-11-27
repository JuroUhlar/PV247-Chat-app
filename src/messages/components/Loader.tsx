import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ChannelViewContainer } from '../../channels/containers/ChannelViewContainer';

export interface ILoaderDataProps {
  isFetching: boolean;
}

export interface  ILoaderCallbackProps {
  fetchMessages: () => Promise<Action>;
}

type LoaderProps = ILoaderDataProps & ILoaderCallbackProps;

export class Loader extends React.PureComponent<LoaderProps> {
  static displayName = 'Loader';
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,

    fetchMessages: PropTypes.func.isRequired,
  };

  constructor(props: LoaderProps) {
    super(props);
  }

  componentDidMount() {
    console.log('I think I fetched.');
    this.props.fetchMessages();
  }

  render() {
    return this.props.isFetching ?
      <div>I am fetching dude. Leave me alone..</div> : <ChannelViewContainer/>;
  }
}
