import * as Immutable from 'immutable';
import {IUser, User} from '../models/User';

const harryId = '9bf3232e-01a6-4370-9110-c57bc5233190';
const sallyId = '4a681417-dcfc-4951-b6b8-cb1db613f975';
export const janeId = 'd6378ee0-df4b-4c28-b57e-2c19b360261f';

export const getJane = (): IUser => (
  new User({
    id: janeId,
    email: 'jane@doe.com',
    name: 'JaneD',
    avatarPath: '../../assets/Jane.jpg',
  })
);

export const getInitialUsers = (): Immutable.Map<Uuid, IUser> => Immutable.Map({
  [harryId]: new User({
    id: harryId,
    email: 'harry@gmail.com',
    name: 'HarryTheHamster',
    avatarPath: '../../assets/Harry.jpg',
  }),
  [sallyId]: new User({
    id: sallyId,
    email: 'sally@gmail.com',
    name: 'Sallyorg',
    avatarPath: '../../assets/Sally.jpg',
  }),
  [janeId]: getJane(),
});
