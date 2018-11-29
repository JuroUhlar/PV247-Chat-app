import * as Immutable from 'immutable';
import * as memoizee from 'memoizee';
import { IUser, User } from '../models/User';
import { IUsersInfo } from '../models/IUsersInfo';

const harryId = '9bf3232e-01a6-4370-9110-c57bc5233190';
const sallyId = '4a681417-dcfc-4951-b6b8-cb1db613f975';
export const janeId = 'd6378ee0-df4b-4c28-b57e-2c19b360261f';

export const bearer1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqYW5lQGdtYWlsLmNvbSIsImp0aSI6ImI3ZDYyYWE1LTA2NDktNDlmYi1hYjc3LWUyYjZiYzFiYmQ5ZiIsImlhdCI6MTU0MzUyODU0O';
export const bearer2 = 'SwibmJmIjoxNTQzNTI4NTQ5LCJleHAiOjE1NDM2MTQ5NDksImlzcyI6IlBWMjQ3IEFQSSIsImF1ZCI6IlBWMjQ3IFN0dWRlbnRzIn0._Q0XHaMsimDgjJxx7O_9zja2l8sn2zdbH9_NkJx19W0';
export const janeBearer = bearer1 + bearer2;


const getCurrentUser = (state: IUsersInfo) => {
  const { currentUserId } = state;
  const currentUser = state.users.get(currentUserId);

  return currentUser;
};

const memoizedGetCurrentUser = memoizee(getCurrentUser);
export { memoizedGetCurrentUser as getCurrentUser };

export const getJane = (): IUser => (
  new User({
    id: janeId,
    email: 'jane@gmail.com',
    name: 'JaneD',
    avatarPath: 'https://i.imgur.com/SElyTHD.jpg',
  })
);

export const getInitialUsers = (): Immutable.Map<Uuid, IUser> => Immutable.Map({
  [harryId]: new User({
    id: harryId,
    email: 'harry@gmail.com',
    name: 'HarryTheHamster',
    avatarPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Harry_Treadaway_SDCC_2014_%28cropped%29.jpg/1200px-Harry_Treadaway_SDCC_2014_%28cropped%29.jpg',
  }),
  [sallyId]: new User({
    id: sallyId,
    email: 'sally@gmail.com',
    name: 'Sallyorg',
    avatarPath: 'https://vignette.wikia.nocookie.net/kpop/images/2/2e/Gugudan_Sally_Act_1_The_Little_Mermaid_photo_2.png/revision/latest?cb=20161025230221.jpg',
  }),
  [janeId]: getJane(),
});
