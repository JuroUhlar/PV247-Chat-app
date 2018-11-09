import * as React from 'react';
import {MessageContainer as Message} from '../../containers/MessageContainer';


export const MessageList: React.StatelessComponent = () => (
    <ol className="message-list">
        <li key={1}>
            <Message
                text="Harry dates Sally."
                messagePos="message-pane-pos-left"
            />
        </li>
        <li key={2}>
            <Message
                text=" Sally reads books."
                messagePos="message-pane-pos-right"
                avatarUrl="http://modernurbandesigners.com/Lists/Staff/Attachments/9/female-avatar-square.jpg"
            />
        </li>
        <li key={3}>
            <Message
                text="Brad smokes."
                messagePos="message-pane-pos-left"
            />
        </li>
        <li key={4}>
            <Message
                text="Fred eats ginger bread"
                messagePos="message-pane-pos-left"
            />
        </li>
        <li key={5}>
            <Message
                text="o.O"
                messagePos="message-pane-pos-left"
            />
        </li>
        <li key={6}>
            <Message
                text=" Sally smells."
                messagePos="message-pane-pos-right"
                avatarUrl="http://modernurbandesigners.com/Lists/Staff/Attachments/9/female-avatar-square.jpg"
            />
        </li>
        <li key={7}>
            <Message
                text="Im so great"
                messagePos="message-pane-pos-left"
            />
        </li>
        <li key={8}>
            <Message
                text="anybody here?"
                messagePos="message-pane-pos-left"
            />
        </li>
    </ol>
);

MessageList.displayName = 'MessageList';
