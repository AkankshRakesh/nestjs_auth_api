import { JwtAuthGuard } from '../../src/auth/guards/jwt-auth.guard';
describe('JwtAuthGuard', () => {
  it('should be defined', () => {
    expect(new JwtAuthGuard()).toBeDefined();
  });
});
