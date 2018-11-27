import { MESSAGE_CREATE } from '../../shared/constants/actionTypes';

export interface IUpdateMessageDependencies {
  text: string;
  authorId: Uuid;
  channelId: Uuid;
}

export const createMessageFactory = (idGenerator: () => Uuid): ((dependencies: IUpdateMessageDependencies) => Action) =>
  (dependencies: IUpdateMessageDependencies): Action => ({
    type: MESSAGE_CREATE,
    payload: {
      id: idGenerator(),
      text: dependencies.text,
      channelId: dependencies.channelId,
      authorId: dependencies.authorId,
    },
  });
