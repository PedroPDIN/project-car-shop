import sinon, { SinonStub } from'sinon';
import { expect } from 'chai';
import { Request, Response } from 'express';
import CarService from '../../../services/car.services';
import CarController from '../../../controllers/car.controller';
import { carOneMock, carAllMock } from '../../mocks';

describe('Car Controller', () => {
  const carController = new CarController();
  const carService = new CarService();
  const req = {} as Request;
  const res = {} as Response;

  describe('Create Car', () => {
    before(() => {
      sinon.stub(carService.model, 'create').resolves(carOneMock)
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.body = carOneMock;
    });

    after(() => {
      (carService.model.create as SinonStub).restore();
    });

    it('Success', async () => {
      await carController.create(req, res);

      expect((res.status as SinonStub).calledWith(201)).to.be.equal(true);
    })
  })
})
