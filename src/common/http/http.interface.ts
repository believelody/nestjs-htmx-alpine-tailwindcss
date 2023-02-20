import { Meta } from '../meta/meta.interface';

export interface HttpContext {
  //   user?: User;
  fromHTMX?: boolean;
  isAuthenticated?: boolean;
  currentURLPathname?: string;
  layout?: null;
  error?: string;
  title?: string;
  me?: boolean;
  meta?: Meta;
  //   author?: Author;
}
