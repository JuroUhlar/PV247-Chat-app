export interface IChannel {
  readonly id: Uuid;
  name: string;
  users: [Uuid];
}
