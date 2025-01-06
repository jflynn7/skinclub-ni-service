import { Request } from 'express';
import { User } from '../entity/user';

interface RequestWithUser extends Request {
  user: User;
}

export default RequestWithUser;
