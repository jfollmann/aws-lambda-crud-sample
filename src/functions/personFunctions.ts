import { handlerValidator } from "../core/middlewares/validations/base/baseValidator";
import { personValidator } from "../core/middlewares/validations/personValidator";
import { StatusHandler } from "../core/utils/responseHandler";

export const handler = handlerValidator({
  validate: personValidator,
  handler: (event, _context) => {
    console.log('hi handler function! evething is gonna be all right');

    try {
      const { firstName, lastName } = event.body;
      return StatusHandler.handlerSuccess({
        fullName: `${firstName} ${lastName}`
      });
    }
    catch (error) {
      return StatusHandler.handleError(error);
    }
  }
});
