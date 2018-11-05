export interface IMessage {
  readonly id: Uuid;
  readonly timestamp: Date;
  readonly authorId: Uuid;
  readonly channelId: Uuid;
  text: string;
  likes: [Uuid];
  dislikes: [Uuid];
}
