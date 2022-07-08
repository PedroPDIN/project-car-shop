import { Router } from 'express';
import { isValidBodyCar, isValidIdCar } from '../middlewares/car.validate';
import Controller from '../controllers';

class CarRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: Controller<T>,
    route: string = controller.route,
  ) {
    this.router.get(route, controller.read);
    this.router.get(`${route}/:id`, controller.readOne);
    this.router.post(route, controller.create);
    this.router.put(
      `${route}/:id`,
      isValidIdCar,
      isValidBodyCar, 
      controller.update,
    );
    this.router.delete(`${route}/:id`, isValidIdCar, controller.delete);
  }
}

export default CarRouter;