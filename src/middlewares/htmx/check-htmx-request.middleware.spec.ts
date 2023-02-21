import { CheckHtmxRequestMiddleware } from './check-htmx-request.middleware';

describe('CheckHtmxRequestMiddleware', () => {
  it('should be defined', () => {
    expect(new CheckHtmxRequestMiddleware()).toBeDefined();
  });
});
