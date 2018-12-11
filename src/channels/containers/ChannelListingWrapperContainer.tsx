import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IChannelListingWrapperCallbackProps, IChannelListingWrapperDataProps, ChannelListingWrapper } from '../components/ChannelListingWrapper';
import { IState } from '../../shared/models/IState';
import { fetchChannels } from '../ActionCreators/requests/fetchChannels';
import { fetchChannelOrder } from '../ActionCreators/requests/fetchChannelOrder';

const mapStateToProps = (state: IState): IChannelListingWrapperDataProps => ({
  isLoading: state.appInfo.isLoadingChannels,
});

const mapDispatchToProps = (dispatch: Dispatch): IChannelListingWrapperCallbackProps => {
  return ({
    getChannels: () => fetchChannels(dispatch),
    getChannelOrder: () => fetchChannelOrder(dispatch),
  });
};

export const ChannelListingWrapperContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelListingWrapper);
