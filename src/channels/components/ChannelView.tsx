import * as React from 'react';
import * as PropTypes from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { MessageListingContainer } from '../../messages/containers/MessageListingContainer';
import { RichTextEditorContainer } from '../../messages/containers/RichTextEditorContainer';

export interface IChannelViewDataProps {
  readonly channelName: string;
}

export const ChannelView: React.SFC<IChannelViewDataProps> = ({ channelName }) => (
  <span>
    <div className="top-bar-cont">
      <h1>{channelName}</h1>
      <h1>{history}</h1>
    </div>
    <div className="channel-view-cont">
      <MessageListingContainer/>
      <RichTextEditorContainer/>
    </div>
  </span>
);

ChannelView.displayName = 'ChannelView';

ChannelView.propTypes = {
  channelName: PropTypes.string.isRequired,
};
