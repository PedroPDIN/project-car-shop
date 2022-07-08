import sinon, { SinonStub } from'sinon';
import { expect } from 'chai';
import mongoose from 'mongoose';
import CarModel from '../../../models/Car.model'
import { carOneMock, carAllMock } from '../../mocks'

describe('Car Model', () => {
  describe('Create car', () => {
    
    before(() => {
      return sinon.stub(mongoose.Model, 'create').resolves(carOneMock)
    })

    after(() => {
      (mongoose.Model.create as SinonStub).restore();
    });

    it('Success', async () => {
      const carModel = new CarModel(mongoose.Model);
      const create = await carModel.create(carOneMock);

      expect(create).to.be.deep.equal(carOneMock)
    });
  });

  describe('Find All cars', () => {
    before(() => {
      return sinon.stub(mongoose.Model, 'find').resolves(carAllMock)
    });

    after(() => {
      (mongoose.Model.find as SinonStub).restore();
    });

    it('Success', async () => {
      const carModel = new CarModel(mongoose.Model);
      const findAll = await carModel.read();

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

  describe('Find One car', () => {
    before(() => {
      return sinon.stub(mongoose.Model, 'findOne').resolves(carOneMock)
    });

    after(() => {
      (mongoose.Model.findOne as SinonStub).restore();
    });

    it('Success', async () => {
      const carModel = new CarModel(mongoose.Model);
      const findOne = await carModel.readOne('1');

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
      return sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(carOneMock)
    });

    after(() => {
      (mongoose.Model.findOneAndUpdate as SinonStub).restore();
    });

    it('Success', async () => {
      const carModel = new CarModel(mongoose.Model);
      const updatedCar = await carModel.update('1', carOneMock);

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
      return sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(carOneMock)
    });

    after(() => {
      (mongoose.Model.findOneAndDelete as SinonStub).restore();
    });

    it('Success', async () => {
      const carModel = new CarModel(mongoose.Model);
      const updatedCar = await carModel.delete('1');

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