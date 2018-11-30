import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ChannelViewContainer } from '../../channels/containers/ChannelViewContainer';

export interface IMessageListingWrapperDataProps {
  isLoading: boolean;
  currentChannelId: Uuid;
}

export interface  IMessageListingWrapperCallbackProps {
  getMessages: (currentChannelId: Uuid) => Promise<Action>;
}

type MessageListingWrapperProps = IMessageListingWrapperDataProps & IMessageListingWrapperCallbackProps;

export class MessageListingWrapper extends React.PureComponent<MessageListingWrapperProps> {
  static displayName = 'Loader';
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    currentChannelId: PropTypes.string.isRequired,

    getMessages: PropTypes.func.isRequired,
  };

  constructor(props: MessageListingWrapperProps) {
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
