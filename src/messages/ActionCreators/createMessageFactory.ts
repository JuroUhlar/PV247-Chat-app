import { MESSAGE_CREATE } from '../../shared/constants/actionTypes';

export interface ICreateMessageDependencies {
  readonly text: string;
  readonly authorId: Uuid;
  readonly channelId: Uuid;
}

export const createMessageFactory = (idGenerator: () => Uuid): ((dependencies: ICreateMessageDependencies) => Action) =>
  (dependencies: ICreateMessageDependencies): Action => ({
    type: MESSAGE_CREATE,
    payload: {
      id: idGenerator(),
      text: dependencies.text,
      channelId: dependencies.channelId,
      authorId: dependencies.authorId,
    },
  });
