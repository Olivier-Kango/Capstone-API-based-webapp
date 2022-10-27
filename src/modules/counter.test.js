import counter from './counter.js';
import mockComments from '../__mocks__/mockComments.js';

describe('Test the function for count', () => {
  test('No items', () => {
    const arr = [];
    expect(counter(arr)).toBe(0);
  });

  test('6 items', () => {
    const arr = [{ idMeal: '52791' }, { idMeal: '52791' }, { idMeal: '52791' }, { idMeal: '52791' }, { idMeal: '52791' }, { idMeal: '52791' }];
    expect(counter(arr)).toBe(6);
  });
});

// testing for the comment counter
describe('Testing the count of comments ', () => {
  test('Testing for the Item-Id 1 ', () => {
    expect(counter(mockComments[0].comments)).toBe(4);
  });
  test('Testing for the Item-Id 2', () => {
    expect(counter(mockComments[1].comments)).toBe(2);
  });
  test('Testing for the Item-Id 3 ', () => {
    expect(counter(mockComments[2].comments)).toBe(3);
  });
  test('Testing for the Item-Id 4', () => {
    expect(counter(mockComments[3].comments)).toBe(1);
  });
});
