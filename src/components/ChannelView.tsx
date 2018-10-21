import * as React from 'react';
import * as Proptypes from 'prop-types';
import { MessageList } from './MessageList';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface IChannelViewProps {
    channelName: string;
}

export const ChannelView: React.StatelessComponent<IChannelViewProps> = ({ channelName }) => (
    <span>
        <div className="top-bar-cont">
            <h1>{channelName}</h1>
        </div>
        <div className="channel-view-cont">
            <div>
                <div>
                    <MessageList />
                </div>
            </div>
        </div>
        <div className="writing-view-cont">
            <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
            />
        </div>
    </span>
);

ChannelView.displayName = 'ChannelView';

ChannelView.propTypes = {
    channelName: Proptypes.string.isRequired,
};
