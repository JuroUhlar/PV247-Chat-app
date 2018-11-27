import {connect} from 'react-redux';
import {IRichTextEditorCallbackProps, IRichTextEditorDataProps, RichTextEditor} from '../components/RichTextEditor';
import {Dispatch} from 'redux';
import {createMessage} from '../ActionCreators/messageActionCreators';
import {IState} from '../../shared/models/IState';

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
