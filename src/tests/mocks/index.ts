import { Car } from '../../interfaces/CarInterface';

const carOneMock: Car = {
  model: 'Fiat Uno',
  year: 1999,
  color: 'rosa',
  status: true,
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
};

const carAllMock: Car[] = [
  {
  model: 'Fiat Uno',
  year: 1999,
  color: 'rosa',
  status: true,
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
  },
  {  
  model: 'Fusca',
  year: 1995,
  color: 'preto',
  status: true,
  buyValue: 2500000,
  doorsQty: 4,
  seatsQty: 2,
  }
];

export {
  carOneMock,
  carAllMock
};