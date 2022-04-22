const {stringCheck, emptyData} = require('./Utlis');



test('If given empty string, returns - no input', () => {
    expect(stringCheck('')).toBe('No input');
  });

  test('If given 2 words, returns - string too large', () => {
    expect(stringCheck('big word')).toBe('string too large');
  });

  test('If given 1 word, returns - string ok', () => {
    expect(stringCheck('word')).toBe('string ok');
  });

