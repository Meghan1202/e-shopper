import ReactDOM from 'react-dom';
import renderToDOM from '.';

describe('RenderToDom', () => {
  const originalRender = ReactDOM.render;
  const originalGetElement = global.document.getElementById;
  beforeEach(() => {
    global.document.getElementById = () => true;
    ReactDOM.render = jest.fn();
  });
  afterAll(() => {
    global.document.getElementById = originalGetElement;
    ReactDOM.render = originalRender;
  });
  it('should call ReactDOM.render', () => {
    global.document.getElementById = jest.fn();
    ReactDOM.render = jest.fn();
    renderToDOM();
    expect(global.document.getElementById).toHaveBeenCalledWith('root');
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
