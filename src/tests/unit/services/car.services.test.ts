import sinon, { SinonStub } from'sinon';
import { expect } from 'chai';
import CarService from '../../../services/car.services';
import { carOneMock, carAllMock } from '../../mocks';

describe('Car Service', () => {
  const carService = new CarService();

  describe('Create Car', () => {
    before(() => {
      return sinon.stub(carService.model, 'create').resolves(carOneMock)
    });
  
    after(() => {
      (carService.model.create as SinonStub).restore();
    });
  
    it('Success', async () => {
      const create = await carService.create(carOneMock);
      expect(create).to.be.deep.equal(carOneMock)
    });
  });

  describe('Find All Cars',  () => {
    before(() => {
      return sinon.stub(carService.model, 'read').resolves(carAllMock)
    });
  
    after(() => {
      (carService.model.read as SinonStub).restore();
    });
  
    it('Success', async () => {
      const findAll = await carService.read();

      expect(findAll).to.be.a('array');
      expect(findAll[0]).to.have.all.keys(
        'model', 
        'year', 
        'color', 
        'status', 
        'buyValue', 
        'seatsQty', 
        'doorsQty'
      );
    });
  });

  describe('Find One Car',  () => {
    before(() => {
      return sinon.stub(carService.model, 'readOne').resolves(carOneMock)
    });
  
    after(() => {
      (carService.model.readOne as SinonStub).restore();
    });
  
    it('Success', async () => {
      const findOne = await carService.readOne('1');

      expect(findOne).to.be.a('object');
      expect(findOne).to.have.all.keys(
        'model', 
        'year', 
        'color', 
        'status', 
        'buyValue', 
        'seatsQty', 
        'doorsQty'
      );
    });
  });

  describe('Update car', () => {
    before(() => {
      return sinon.stub(carService.model, 'update').resolves(carOneMock)
    });

    after(() => {
      (carService.model.update as SinonStub).restore();
    });

    it('Success', async () => {
      const updatedCar = await carService.update('1', carOneMock);

      expect(updatedCar).to.be.a('object');
      expect(updatedCar).to.have.all.keys(
        'model', 
        'year', 
        'color', 
        'status', 
        'buyValue', 
        'seatsQty', 
        'doorsQty'
      );
    });
  });

  describe('Delete car', () => {
    before(() => {
      return sinon.stub(carService.model, 'delete').resolves(carOneMock)
    });

    after(() => {
      (carService.model.delete as SinonStub).restore();
    });

    it('Success', async () => {
      const updatedCar = await carService.delete('1');

      expect(updatedCar).to.be.a('object');
      expect(updatedCar).to.have.all.keys(
        'model', 
        'year', 
        'color', 
        'status', 
        'buyValue', 
        'seatsQty', 
        'doorsQty'
      );
    });
  });
})