import {
  bobId,
  dislikedByBobPopularity,
  likedByBobPopularity,
  neutralByBobPopularity,
  popularMessage
} from '../../../helpers/messages';
import { likePopularity } from '../../../../src/messages/utils/updateMessagePopularity';

describe('Correctly changes the popularity of a message if liked', () => {
  const testCases = [
    {
      caseName: 'likes a message if the user has not shown their preference',
      messageToBeLiked: popularMessage(neutralByBobPopularity),
      expectedMessage: popularMessage(likedByBobPopularity),
    },
    {
      caseName: 'likes a message if the user has disliked it and removes the dislike',
      messageToBeLiked: popularMessage(dislikedByBobPopularity),
      expectedMessage: popularMessage(likedByBobPopularity),
    },
    {
      caseName: 'does not change the popularity of a message if the user has liked it already',
      messageToBeLiked: popularMessage(likedByBobPopularity),
      expectedMessage: popularMessage(likedByBobPopularity),
    },
  ];

  testCases.forEach(testCase => {
    it(testCase.caseName, () => {
      const tested = testCase.messageToBeLiked;
      const expected = testCase.expectedMessage;

      const actual = likePopularity(tested, bobId);

      expect(actual).toEqual(expected);
    });
  });
});
