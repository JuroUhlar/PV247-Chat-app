import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IState } from '../../shared/models/IState';
import { ContentWrapper, IContentWrapperDataProps } from '../../shared/components/ContentWrapper';


const mapStateToProps = (_state: IState, ownProps: IContentWrapperDataProps): IContentWrapperDataProps => {
  return {
    ...ownProps,
  };
};

export const ContentWrapperContainer = withRouter(connect(mapStateToProps)(ContentWrapper));
