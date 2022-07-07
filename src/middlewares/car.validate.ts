import { Request, Response, NextFunction } from 'express';

const isValidBodyCar = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if (Object.keys(body).length < 1) {
    return res.status(400).json({ error: 'request body is empty' });
  }
  next();
};

const isValidIdCar = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (id.length !== 24) {
    return res.status(400)
      .json({ error: 'Id must have 24 hexadecimal characters' });
  }
  next();
};

export {
  isValidBodyCar,
  isValidIdCar,
};