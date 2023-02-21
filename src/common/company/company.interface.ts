import { Address } from '../address/address.interface';

export interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}
