import CarRouter from './routes';
import App from './app';

import CarController from './controllers/car.controller';

import { Car } from './interfaces/CarInterface';

const server = new App();

const controller = new CarController();

const carRouter = new CarRouter<Car>();
carRouter.addRoute(controller);

server.addRouter(carRouter.router);

export default server;
