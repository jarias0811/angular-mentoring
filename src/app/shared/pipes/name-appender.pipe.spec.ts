import { NameAppenderPipe } from './name-appender.pipe';

describe('NameAppenderPipe', () => {
  it('create an instance', () => {
    const pipe = new NameAppenderPipe();
    expect(pipe).toBeTruthy();
  });
});
