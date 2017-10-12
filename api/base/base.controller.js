const ServerResponse = require("./../validation/serverResponse.js");

module.exports = class BaseController {
  constructor() {

  }

  respondSuccess(response, json) {
    response.status(200); // OK
    response.json(json);
  }

  respondCreatedSuccess(response, json) {
    response.status(201); // Created
    response.json(json);
  }

  respondBadRequest(response) {
    response.status(400); // Bad request
    response.json({ "errorMessage": "The JSON string provided is not properly formatted."});
  }

  respondNotFound(response) {
    response.status(404); // Not found
    response.json({ "errorMessage": "No data was found for the request." });
  }

  respondPermissionDenied(response) {
    response.status(403); // Not found
    response.json({ "errorMessage": "Permission denied." });
  }

  respondInternalServerError(response, error) {
    if (error instanceof ServerResponse) {
      response.status(500); // Internal Server Error
      response.json({ "errors": error.errors });
    }
    else {
      response.status(500); // Internal Server Error
      response.json({ "errorMessage": error });
    }
  }

  respondSoyUnaTetera(response) {
    response.status(418); // I'm a teapot
    response.json({ "errorMessage": "Si alguna vez se usa este mensaje, es porque hubo algún vivo programando el sistema..." });
  }
}
