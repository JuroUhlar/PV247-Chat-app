import * as React from 'react';
import * as PropTypes from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { RichTextEditorContainer } from '../../messages/containers/RichTextEditorContainer';
import {
  Route,
  RouteComponentProps
} from 'react-router';
import { withRouterPropTypes } from '../../shared/utils/routerProps';
import { SPECIFIC_CHANNEL_VIEW_ROUTE } from '../../shared/constants/routes';
import { MessageListingWrapperContainer } from '../../messages/containers/MessageListingWrapperContainer';
import { Spinner } from '../../shared/components/Spinner';

export interface IChannelViewDataProps extends RouteComponentProps {
  readonly channelName: string;
  readonly currentChannelId: Uuid;
}

export class ChannelMessagesView extends React.PureComponent<IChannelViewDataProps> {
  static displayName = 'ChannelMessagesView';
  static propTypes = {
    channelName: PropTypes.string.isRequired,
    currentChannelId: PropTypes.string.isRequired,
    ...withRouterPropTypes,
  };

  // TODO: change to componentWillReceive props with an appropriate condition after currentChannelId will be filled in from the server
  componentDidMount() {
    const { history } = this.props;
    const nextCurrentChannelId = this.props.currentChannelId;

    if (nextCurrentChannelId !== null) {
      history.push(SPECIFIC_CHANNEL_VIEW_ROUTE(nextCurrentChannelId));
    }
  }

  render() {
    const { channelName, currentChannelId, history } = this.props;
    return (
      <span>
    <div className="top-bar-cont">
      <h1>{channelName}</h1>
    </div>
    <div className="channel-view-cont">
      {currentChannelId ?
        <Route
          path={SPECIFIC_CHANNEL_VIEW_ROUTE(currentChannelId)}
          location={history.location}
          component={MessageListingWrapperContainer}
        /> : <Spinner/>}
    </div>
    <RichTextEditorContainer/>
  </span>
    );
  }
}
