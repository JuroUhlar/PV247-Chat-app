import * as React from 'react';
import * as PropTypes from 'prop-types';

interface MessageProps {
    text: string;
    messagePos: string;
    avatarUrl?: string;
}

export const Message: React.StatelessComponent<MessageProps> = (props) => {

    let avatarUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGR7Mo4SPawVcs97YO3W2TiWl3bjGiEU3_whXMGAcNOMJygVGB';
    if (props.avatarUrl) {
        avatarUrl = props.avatarUrl;
    }

    return (
        <div className={props.messagePos}>
            <div className="message-pane">
                <div className="avatar-side">
                    <img
                        className="mini-avatar"
                        src={avatarUrl}
                    />
                </div>
                <div className="message-side">
                    <div className="top-message-bar-cont">
                        <div className="top-message-bar">
                            <div className="small-icon glyphicon glyphicon-trash"></div>
                            <div className="small-icon glyphicon glyphicon-heart"></div>
                            <div className="small-icon glyphicon glyphicon-thumbs-down"></div>
                            <div className="small-icon" style={{fontWeight: 'bold'}}>2</div>
                        </div>
                    </div>
                    <div className="text-container message-pane-block">
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    );
};

Message.displayName = 'Message';

Message.propTypes = {
    text: PropTypes.string.isRequired,
    messagePos: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
};
