const { runConsoleExample } = require('../index');

global.console = { log: jest.fn() };

describe('runConsoleExample', () => {
  beforeEach(() => {
    jest.spyOn(Date.prototype, 'toLocaleTimeString').mockImplementation(() => 1487076708000);
    runConsoleExample();
  });

  test('function runs', () => {
    expect(console.log).toHaveBeenNthCalledWith(1, 1487076708000);
  });
});
