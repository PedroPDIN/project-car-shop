import { Router } from 'express';
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
    this.router.post(route, controller.create);
  }
}

export default CarRouter;