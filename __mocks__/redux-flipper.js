export default {
  createDebugger: jest.fn().mockImplementation(() => {
    console.log('foobar');
  }),
};
