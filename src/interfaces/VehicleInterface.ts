import { z } from 'zod';

const vehicleSchema = z.object({
  model: z.string({
    required_error: 'Model is required',
    invalid_type_error: 'Model must be a string',
  }).min(3),
  year: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a string',
  }).min(1900).max(2022),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3),
  status: z.boolean().optional(),
  buyValue: z.number({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).int(),
});

export type Vehicle = z.infer<typeof vehicleSchema>;

export { vehicleSchema };