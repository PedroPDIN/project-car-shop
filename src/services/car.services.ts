import { Car, carSchema } from '../interfaces/CarInterface';
import { vehicleSchema } from '../interfaces/VehicleInterface';
import Service, { ServiceError } from '.';
import CarModel from '../models/Car.model';

class CarService extends Service<Car> {
  constructor(public model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | null | ServiceError> => {
    const parsedCar = carSchema.safeParse(obj);
    const parsedVehicle = vehicleSchema.safeParse(obj);
    if (!parsedCar.success) {
      return { error: parsedCar.error };
    }

    if (!parsedVehicle.success) {
      return { error: parsedVehicle.error };
    }

    return this.model.create(obj);
  };

  read = async (): Promise<Car[]> => this.model.read();
}

export default CarService;