import {connect} from 'react-redux';
import {IRichTextEditorCallbackProps, IRichTextEditorDataProps, RichTextEditor} from '../../components/messages/RichTextEditor';
import {Dispatch} from 'redux';
import {createMessage} from '../../actions/messageActionCreators';
import {IState} from '../../models/IState';

const mapStateToProps = (state: IState): IRichTextEditorDataProps => {
  const {currentUserId} = state.usersInfo;
  return {
    currentUserId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IRichTextEditorCallbackProps => ({
  onSendText: (text: string, authorId: Uuid, channelId: Uuid) => dispatch(createMessage(text, authorId, channelId)),
});

export const RichTextEditorContainer = connect(mapStateToProps, mapDispatchToProps)(RichTextEditor);
