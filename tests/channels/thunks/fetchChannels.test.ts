import { Dispatch } from 'redux';
import {
  IChannelServerModel, ChannelServerModel,
} from '../../../src/channels/models/Channel';
import { Action } from '../../helpers/types';
import { fetchChannelsFactory } from '../../../src/channels/actionCreators/requests/fetchChannels';
import {
  // channel1server,
  // channel2server,
  channel1,
  channel2
} from '../../helpers/channels';

describe('Correctly resolves fetchChannels: ', () => {
  const channels = [
    new ChannelServerModel ({
      name: channel1.name,
      id: channel1.id,
      customData: {
        users: channel1.users.toArray(),
        clientId: channel1.id
      }
    }),
    new ChannelServerModel ({
      name: channel2.name,
      id: channel2.id,
      customData: {
        users: channel2.users.toArray(),
        clientId: channel2.id
      }
    })
  ];

  const fetchSuccess = () => Promise.resolve({ json: ((): Promise<IChannelServerModel[]> => Promise.resolve(channels)) });
  const fetchFailImmediately = () => Promise.reject(new Error('Channels could not be fetched'));
  const fetchFail = () => Promise.resolve({ json: (): Promise<Error> => Promise.reject(new Error('Channels could not be fetched')) });
  let fakeDispatch: jest.Mock<Dispatch>;
  const fakeAction = (payload: string): Action => ({ type: 'UNKNOWN', payload });
  const fakeRequest = () => fakeAction('CHANNELS_REQUEST');
  const fakeReceived = () => fakeAction('CHANNELS_SUCCESS');
  const fakeFailed = () => fakeAction('ERROR');
  const fakeIdGenerator = () => '0dafe799-7d05-42d2-a641-cef1ff07daa7';
  const testCases = [
    { name: ' succeeding', fetch: fetchSuccess },
    { name: ' immediately failing', fetch: fetchFailImmediately },
    { name: ' failing', fetch: fetchFail },
  ];
  const fetchChannels = (fetch: () => Promise<any>) => fetchChannelsFactory({
    fetchBegin: fakeRequest,
    fetch,
    success: fakeReceived,
    error: fakeFailed,
    idGenerator: fakeIdGenerator,
  });

  beforeEach((done) => {
    fakeDispatch = jest.fn((action) => action);
    done();
  });

  // testCases.forEach((testCase) => {
  //   it('dispatches requestChannels with' + testCase.name + ' fetch', () => {
  //     fetchChannels(testCase.fetch)()(fakeDispatch);
  //     const actual = fakeDispatch.mock.calls[0];

  //     expect(actual[0]).toEqual(fakeRequest());
  //   });
  // });

  // it('dispatches channelsRecieved', () => {
  //   return fetchChannels(fetchSuccess)()(fakeDispatch)
  //     .then(() => {
  //       const actual = fakeDispatch.mock.calls[1];

  //       expect(actual[0]).toEqual(fakeReceived());
  //       expect(fakeDispatch.mock.calls.length).toBe(2);
  //     });
  // });

  // it('fails with error immediately', () => {
  //   return fetchChannels(fetchFailImmediately)()(fakeDispatch)
  //     .then(() => {
  //       const actual = fakeDispatch.mock.calls[1];

  //       expect(actual[0]).toEqual(fakeFailed());
  //       expect(fakeDispatch.mock.calls.length).toBe(2);
  //     });
  // });

  it('fails with error', () => fetchChannels(fetchFail)()(fakeDispatch)
    .then(() => {
      const actual = fakeDispatch.mock.calls[1];

      expect(actual[0]).toEqual(fakeFailed());
      expect(fakeDispatch.mock.calls.length).toBe(2);
    })
  );
});
