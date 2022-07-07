import { z } from 'zod';
import { Vehicle } from './VehicleInterface';

const carSchema = z.object({
  doorsQty: z.number({
    required_error: 'DoorsQty is required',
    invalid_type_error: 'DoorsQty must be a number',
  }).min(2, { message: 'Doors must be 2 or more' }).max(4),
  seatsQty: z.number({
    required_error: 'DoorsQty is required',
    invalid_type_error: 'DoorsQty must be a number',
  }).min(2, { message: 'Seats must be 2 or more' }).max(7),
});

export type Car = z.infer<typeof carSchema> & Vehicle;

export { carSchema };