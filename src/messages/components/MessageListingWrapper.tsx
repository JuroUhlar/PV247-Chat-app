import * as React from 'react';
import * as PropTypes from 'prop-types';
import { MessageListingContainer } from '../containers/MessageListingContainer';
import { Spinner } from '../../shared/components/Spinner';

export interface IMessageListingWrapperDataProps {
  readonly isLoading: boolean;
  readonly currentChannelId: Uuid;
}

export interface IMessageListingWrapperCallbackProps {
  readonly getMessages: () => Promise<Action>;
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
    this._handleLoadMessages();
  }

  componentDidUpdate(prevProps: MessageListingWrapperProps) {
    const { currentChannelId } = this.props;

    if (prevProps.currentChannelId !== currentChannelId) {
      this._handleLoadMessages();
    }
  }

  _handleLoadMessages = () => this.props.getMessages();

  render() {
    const { isLoading } = this.props;
    return (
      <div className="message-list">
        {isLoading ?
          <Spinner/> : <MessageListingContainer/>}
      </div>
    );
  }
}
