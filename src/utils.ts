export function responseHandler(message: string, data: any = [], statusCode: number = 200) {
  return {
    statusCode: statusCode,
    message: message,
    data: data,
  };
}

export interface ResponseObject {
  statusCode: number;
  message: string;
  data: string;
}
