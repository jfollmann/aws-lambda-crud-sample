import { ProductFactory } from "../core/factories/productFactory";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { StatusHandler } from "../core/utils/responseHandler";

const service = ProductFactory.createInstance();

export async function index(_event: APIGatewayProxyEvent, _context: Context) {
  try {
    return StatusHandler.handlerSuccess(await service.findAll());

  } catch (error) {
    console.error('ERROR', error.stack)
    return this.handleError({ statusCode: 500 })
  }
}

export async function show(event: APIGatewayProxyEvent, _context: Context) {
  try {
    const params = event.pathParameters || {};

    return StatusHandler.handlerSuccess(await service.findOne(params.id));
  } catch (error) {
    console.error('ERROR', error.stack)
    return this.handleError({ statusCode: 500 })
  }
}

export async function store(event: APIGatewayProxyEvent, _context: Context) {
  try {
    const { body } = event;
    return StatusHandler.handlerSuccess(await service.create(JSON.parse(body)));
  } catch (error) {
    console.error('ERROR', error.stack)
    return this.handleError({ statusCode: 500 })
  }
}

export async function update(event: APIGatewayProxyEvent, _context: Context) {
  try {
    const { body } = event;
    const { id } = event.pathParameters;
    return StatusHandler.handlerSuccess(await service.updateById(id, JSON.parse(body)));
  } catch (error) {
    console.error('ERROR', error.stack)
    return this.handleError({ statusCode: 500 })
  }
}

export async function destroy(event: APIGatewayProxyEvent, _context: Context) {
  try {
    const { id } = event.pathParameters;
    return StatusHandler.handlerSuccess(await service.delete(id));
  } catch (error) {
    console.error('ERROR', error.stack)
    return this.handleError({ statusCode: 500 })
  }
}
