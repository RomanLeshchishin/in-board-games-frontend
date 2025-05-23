export enum FileModelType {
  AVATAR = 'AVATAR',
  FORM = 'FORM',
  COMMUNITY = 'COMMUNITY',
  EVENT = 'EVENT',
  CHAT = 'CHAT',
  MESSAGE = 'MESSAGE',
  FEEDBACK = 'FEEDBACK',
}

export interface IFileEntity {
  id: string;
  modelId: string;
  fileName: string;
  fileLink: string;
  modelType: FileModelType;
}
