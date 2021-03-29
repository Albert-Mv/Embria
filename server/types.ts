export enum RequestTypes {
  NONE,
  CONNECT_TO_SERVER,
  CONNECT_TO_STREAMING_PLUGIN,
  DISCONNECT_FROM_SERVER,
  DISCONNECT_FROM_STREAMING_PLUGIN,
  SWITCH_STREAM,
  GET_LIST,
  ENABLE_POINT,
  DISABLE_POINT,
  ENABLE_STREAM,
  DISABLE_STREAM,
  START_STREAM,
  STOP_STREAM,
}

export class CustomRequest {
  constructor(
      public request: string = '',
      public type: RequestTypes = RequestTypes.NONE,
  ) {}
}
