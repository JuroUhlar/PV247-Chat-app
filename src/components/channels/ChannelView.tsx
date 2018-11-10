import * as React from 'react';
import * as Proptypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {MessageListingContainer} from '../../containers/messages/MessageListingContainer';

interface IChannelViewProps {
    readonly channelName: string;
}

export const ChannelView: React.StatelessComponent<IChannelViewProps> = ({ channelName }) => (
    <span>
        <div className="top-bar-cont">
            <h1>{channelName}</h1>
        </div>
        <div className="channel-view-cont">
            <div>
                <div>
                    <MessageListingContainer />
                </div>
            </div>
        </div>
        <div className="writing-view-cont">
            <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
            />
            <div className="send-btn-holder">
                <div className="inside glyphicon glyphicon-send" />
            </div>
        </div>
    </span>
);

ChannelView.displayName = 'ChannelView';

ChannelView.propTypes = {
    channelName: Proptypes.string.isRequired,
};
