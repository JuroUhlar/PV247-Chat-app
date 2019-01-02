import {
  bobId,
  dislikedByBobPopularity,
  likedByBobPopularity,
  neutralByBobPopularity,
  popularMessage
} from '../../../helpers/messages';
import { dislikePopularity } from '../../../../src/messages/utils/updateMessagePopularity';

describe('Correctly changes the popularity of a message if disliked', () => {
  const testCases = [
    {
      caseName: 'dislikes a message if the user has not shown their preference',
      messageToBeDisliked: popularMessage(neutralByBobPopularity),
      expectedMessage: popularMessage(dislikedByBobPopularity),
    },
    {
      caseName: 'dislikes a message if the user has liked it and removes the like',
      messageToBeDisliked: popularMessage(likedByBobPopularity),
      expectedMessage: popularMessage(dislikedByBobPopularity),
    },
    {
      caseName: 'does not change the popularity of a message if the user has disliked it already',
      messageToBeDisliked: popularMessage(dislikedByBobPopularity),
      expectedMessage: popularMessage(dislikedByBobPopularity),
    },
  ];

  testCases.forEach(testCase => {
    it(testCase.caseName, () => {
      const tested = testCase.messageToBeDisliked;
      const expected = testCase.expectedMessage;

      const actual = dislikePopularity(tested, bobId);

      expect(actual).toEqual(expected);
    });
  });
});
