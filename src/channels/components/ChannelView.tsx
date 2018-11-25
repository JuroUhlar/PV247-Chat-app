import * as React from 'react';
import * as PropTypes from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { MessageListingContainer } from '../../messages/containers/MessageListingContainer';
import { RichTextEditorContainer } from '../../messages/containers/RichTextEditorContainer';
import { Route, RouteComponentProps } from 'react-router';
import { withRouterPropTypes } from '../../shared/utils/routerProps';
import { CHANNEL_VIEW_ROUTE } from '../../shared/constants/routes';

export interface IChannelViewDataProps extends RouteComponentProps {
  readonly channelName: string;
}

export const ChannelView: React.SFC<IChannelViewDataProps> = (props: IChannelViewDataProps) => (
  <span>
    <div className="top-bar-cont">
      <h1>{props.channelName}</h1>
    </div>
    <div className="channel-view-cont">
      <Route
        path={CHANNEL_VIEW_ROUTE}
        location={props.history.location}
        component={MessageListingContainer}
      />
    </div>
    <RichTextEditorContainer/>
  </span>
);

ChannelView.displayName = 'ChannelView';

ChannelView.propTypes = {
  channelName: PropTypes.string.isRequired,
  ...withRouterPropTypes,
};
