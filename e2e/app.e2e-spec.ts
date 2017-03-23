import { TimePickerPage } from './app.po';

describe('time-picker App', () => {
  let page: TimePickerPage;

  beforeEach(() => {
    page = new TimePickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Time Pickers!');
  });
});
