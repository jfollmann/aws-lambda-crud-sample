import { INTERNAL_SERVER_ERROR, OK } from "http-status-codes";

export class StatusHandler {

  static handlerSuccess(data: any) {
    const response = {
      statusCode: OK,
      body: JSON.stringify(data)
    }
    return response
  }

  static handleError(data: any) {
    const contentType = data.errors ? 'application/json' : 'text/plain';

    return {
      statusCode: data.statusCode || INTERNAL_SERVER_ERROR,
      headers: { 'Content-Type': contentType },
      body: data.errors ? JSON.stringify(data.errors) : 'Internal Server Error'
    }
  }
}
