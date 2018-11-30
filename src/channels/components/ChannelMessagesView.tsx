import * as React from 'react';
import * as PropTypes from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { RichTextEditorContainer } from '../../messages/containers/RichTextEditorContainer';
import { Route, RouteComponentProps } from 'react-router';
import { withRouterPropTypes } from '../../shared/utils/routerProps';
import { SPECIFIC_CHANNEL_VIEW_ROUTE } from '../../shared/constants/routes';
import { MessageListingWrapperContainer } from '../../messages/containers/MessageListingWrapperContainer';

export interface IChannelViewDataProps extends RouteComponentProps {
  readonly channelName: string;
  readonly currentChannelId: Uuid;
}

export const ChannelMessagesView: React.SFC<IChannelViewDataProps> = (props: IChannelViewDataProps) => (
  <span>
    <div className="top-bar-cont">
      <h1>{props.channelName}</h1>
    </div>
    <div className="channel-view-cont">
      <Route
        path={SPECIFIC_CHANNEL_VIEW_ROUTE(props.currentChannelId)}
        location={props.history.location}
        component={MessageListingWrapperContainer}
      />
    </div>
    <RichTextEditorContainer/>
  </span>
);

ChannelMessagesView.displayName = 'ChannelMessagesView';

ChannelMessagesView.propTypes = {
  channelName: PropTypes.string.isRequired,
  currentChannelId: PropTypes.string.isRequired,
  ...withRouterPropTypes,
};
