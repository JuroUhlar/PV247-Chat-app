import * as React from 'react';
import * as PropTypes from 'prop-types';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {MessageListingContainer} from '../../containers/messages/MessageListingContainer';
import {RichTextEditorContainer} from '../../containers/messages/RichTextEditorContainer';

interface IChannelViewProps {
  readonly channelName: string;
}

export const ChannelView: React.StatelessComponent<IChannelViewProps> = ({channelName}) => (
  <span>
        <div className="top-bar-cont">
            <h1>{channelName}</h1>
        </div>
        <div className="channel-view-cont">
            <div>
                <div>
                    <MessageListingContainer/>
                </div>
            </div>
        </div>
        <RichTextEditorContainer/>
    </span>
);

ChannelView.displayName = 'ChannelView';

ChannelView.propTypes = {
  channelName: PropTypes.string.isRequired,
};
