import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.113.0/testing/asserts.ts";
import {
  arrReverse,
  checkPalindromeRec,
  checkPalindromeItr,
  findMaxDiff,
  maxMinElements,
  mergeTrees,
  removeDuplicates,
  twoSum,
  sumOfEvens,
  emojiArtGenerator,
  evenOddNumber,
  countCharacters,
  arithmeticTriplets,
  TreeNode,
  knightProbability,
  isSequence,
  isValid,
  largestValues,
  numberOfEmployeesWhoMetTarget,
  interpret,
  countPairs,
  getMinimumDifference,
  balancedStringSplit,
  cellsInRange,
  longestPalindrome,
  backspaceCompare,
  sortByBits,
  checkIfPangram,
  sortSentence,
  isAcronym,
  finalString,
  findMode,
  removeOuterParentheses,
  countAsterisks,
  leftRightDifference,
  sumCounts,
  buildArray,
  sumIndicesWithKSetBits,
  maximizeSum,
  romanToInt,
  findDifference,
  maximumNumberOfStringPairs,
  sortPeople,
  SeatManager,
  separateDigits,
  deleteGreatestValue,
  distinctDifferenceArray,
  findNonMinOrMax,
  sumOfSquares,
  countSeniors,
  eliminateMaximum,
  rowAndMaximumOnes,
  numberOfPairs,
  mergeSimilarItems,
  partitionString,
  countHomogenous,
  vowelStrings,
  calculate,
  mergeArrays,
  restoreArray,
  minimumOperations,
  intersection,
  answerQueries,
  maximumValue,
  maximumCount,
  unequalTriplets,
} from "./index.ts";
import { assertInstanceOf } from "https://deno.land/std@0.200.0/assert/assert_instance_of.ts";

Deno.test("#maxMinElements", () => {
  assertEquals([5, 1], maxMinElements([1, 2, 3, 4, 5]));
  assertEquals([10, -2], maxMinElements([10, -2, 5, 7]));
  assertEquals([-Infinity, Infinity], maxMinElements([]));
});

Deno.test("#removeDuplicates", () => {
  assertEquals([1, 2, 3, 4, 5], removeDuplicates([1, 1, 2, 3, 3, 4, 4, 4, 5]));
});

Deno.test("#arrReverse", () => {
  assertEquals([3, 2, 1], arrReverse([1, 2, 3]));
  assertEquals([1, 33, 3, -2, 10], arrReverse([10, -2, 3, 33, 1]));
});

Deno.test("#findMax", () => {
  assertEquals(5, findMaxDiff([7, 1, 5, 3, 6, 4]));
  assertEquals(0, findMaxDiff([7]));
});

Deno.test("#checkPalindrome", () => {
  assertEquals(true, checkPalindromeItr("radar"));
  assertEquals(false, checkPalindromeItr("store"));
  assertEquals(true, checkPalindromeItr("level"));
  assertEquals(true, checkPalindromeRec("radar"));
  assertEquals(false, checkPalindromeRec("store"));
  assertEquals(true, checkPalindromeRec("level"));
});

Deno.test("#twoSum", () => {
  assertEquals([0, 1], twoSum([2, 7, 11, 15], 9));
});

Deno.test("#sumOfEvens", () => {
  assertEquals(2, sumOfEvens([2, 7, 11, 15]));
  assertEquals(30, sumOfEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
});

Deno.test("#emojiArtGenerator", () => {
  assertEquals(
    "🇭🇳🇪🇬🇱🇷🇱🇷🇴🇲❓❓🇼🇸🇴🇲🇷🇺🇱🇷🇩🇪❓",
    emojiArtGenerator("Hello, World!")
  );
});

Deno.test("#evenOddNumbers", () => {
  assertEquals({ even: 3, odd: 3 }, evenOddNumber([1, 2, 3, 4, 5, 6]));
});

Deno.test("#countCharacters", () => {
  assertEquals(2, countCharacters("hello world", 2, 8, "l"));
  assertEquals(4, countCharacters("abababa", 0, 7, "a"));
});

Deno.test("#countCharacters", () => {
  assertEquals(2, arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
  assertEquals(2, arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));
});

Deno.test("#mergeTrees", () => {
  // root 1

  const r1leftLeft = new TreeNode(5, null, null);
  const r1left = new TreeNode(3, r1leftLeft, null);
  const r1right = new TreeNode(2, null, null);
  const r1root = new TreeNode(1, r1left, r1right);

  // root 2
  const r2leftRight = new TreeNode(4, null, null);
  const r2left = new TreeNode(1, null, r2leftRight);

  const r2rightRight = new TreeNode(7, null, null);

  const r2right = new TreeNode(3, null, r2rightRight);

  const r2root = new TreeNode(2, r2left, r2right);
  const root = mergeTrees(r1root, r2root);
  assertEquals(root?.val, 3);
});

Deno.test("#knightProbability", () => {
  assertEquals(knightProbability(3, 2, 0, 0), 0.0625);
});

Deno.test("#isSequence", () => {
  assertEquals(isSequence("abc", "ahbgdc"), true);
  assertEquals(isSequence("axc", "ahbgdc"), false);
});

Deno.test("#isValid", () => {
  assertEquals(isValid("()"), true);
  assertEquals(isValid("(()"), false);
});

Deno.test("#largestValue", () => {
  const node1 = new TreeNode(1);
  const node3_1 = new TreeNode(3);
  const node2 = new TreeNode(2);
  const node5 = new TreeNode(5);
  const node3_2 = new TreeNode(3);
  const node9 = new TreeNode(9);

  node1.left = node3_1;
  node1.right = node2;
  node3_1.left = node5;
  node3_1.right = node3_2;
  node2.right = node9;
  assertEquals(largestValues(node1), [1, 3, 9]);
});

Deno.test("#numberOfEmployeesWhoMetTarget", () => {
  assertEquals(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2), 3);
});

Deno.test("#interpret", () => {
  assertEquals(interpret("G()(al)"), "Goal");
});

Deno.test("#countPairs", () => {
  assertEquals(countPairs([-1, 1, 2, 3, 1], 2), 3);
  assertEquals(countPairs([-6, 2, 5, -2, -7, -1, 3], -2), 10);
});

Deno.test("#getMinimumDifference", () => {
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(6);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  assertEquals(getMinimumDifference(root), 1);
  const root2 = new TreeNode(678);
  root2.left = new TreeNode(67);
  root2.right = new TreeNode(853);
  root2.left.left = null;
  root2.left.right = new TreeNode(633);
  root2.right.left = null;
  root2.right.right = new TreeNode(989);
  assertEquals(getMinimumDifference(root2), 45);
});

Deno.test("#balancedStringSplit", () => {
  assertEquals(balancedStringSplit("RLRRLLRLRL"), 4);
});

Deno.test("#cellsInRange", () => {
  assertEquals(cellsInRange("K1:L2"), ["K1", "K2", "L1", "L2"]);
  assertEquals(cellsInRange("A1:F1"), ["A1", "B1", "C1", "D1", "E1", "F1"]);
  assertEquals(cellsInRange("P7:Z7"), [
    "P7",
    "Q7",
    "R7",
    "S7",
    "T7",
    "U7",
    "V7",
    "W7",
    "X7",
    "Y7",
    "Z7",
  ]);
});

Deno.test("#longestPalindrome", () => {
  assertEquals(longestPalindrome("babad"), "bab");
  assertEquals(longestPalindrome("cbbd"), "bb");
  assertEquals(longestPalindrome("a"), "a");
});

Deno.test("#backspaceCompare", () => {
  assertEquals(backspaceCompare("ab#c", "ad#c"), true);
  assertEquals(backspaceCompare("ab##", "c#d#"), true);
  assertEquals(backspaceCompare("a#c", "b"), false);
});

Deno.test("#sortByBits", () => {
  assertEquals(
    sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]),
    [0, 1, 2, 4, 8, 3, 5, 6, 7]
  );
  assertEquals(
    sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]),
    [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
  );
});

Deno.test("#checkIfPangram", () => {
  assertEquals(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"), true);
  assertEquals(checkIfPangram("leetcode"), false);
});

Deno.test("#sortSentence", () => {
  assertEquals(sortSentence("is2 sentence4 This1 a3"), "This is a sentence");
  assertEquals(sortSentence("Myself2 Me1 I4 and3"), "Me Myself and I");
});

Deno.test("#isAcronym", () => {
  assertEquals(isAcronym(["alice", "bob", "charlie"], "abc"), true);
  assertEquals(isAcronym(["an", "apple"], "a"), false);
});

Deno.test("#finalString", () => {
  assertEquals(finalString("string"), "rtsng");
});

Deno.test("#findMode", () => {
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(2);
  assertEquals(findMode(root), [2]);
});

Deno.test("#removeOuterParentheses", () => {
  assertEquals(removeOuterParentheses("(()())(())"), "()()()");
  assertEquals(removeOuterParentheses("(()())(())(()(()))"), "()()()()(())");
});

Deno.test("#countAsterisks", () => {
  assertEquals(countAsterisks("l|*e*et|c**o|*de|"), 2);
});

Deno.test("#leftRightDifference", () => {
  assertEquals(leftRightDifference([10, 4, 8, 3]), [15, 1, 11, 22]);
});

Deno.test("#sumCounts", () => {
  assertEquals(sumCounts([1, 2, 1]), 15);
});

Deno.test("#buildArray", () => {
  assertEquals(buildArray([1, 3], 3), ["Push", "Push", "Pop", "Push"]);
});

Deno.test("#sumIndicesWithKSetBits", () => {
  assertEquals(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1), 13);
  assertEquals(sumIndicesWithKSetBits([4, 3, 2, 1], 2), 1);
});

Deno.test("#maximizeSum", () => {
  assertEquals(maximizeSum([1, 2, 3, 4, 5], 3), 18);
});

Deno.test("#romanToInt", () => {
  assertEquals(romanToInt("III"), 3);
  assertEquals(romanToInt("LVIII"), 58);
  assertEquals(romanToInt("MCMXCIV"), 1994);
});

Deno.test("#findDifference", () => {
  assertEquals(findDifference([1, 2, 3], [2, 4, 6]), [
    [1, 3],
    [4, 6],
  ]);
  assertEquals(findDifference([1, 2, 3, 3], [1, 1, 2, 2]), [[3], []]);
});

Deno.test("#maximumNumberOfStringPairs", () => {
  assertEquals(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]), 2);
  assertEquals(maximumNumberOfStringPairs(["ab", "ba", "cc"]), 1);
});

Deno.test("#sortPeople", () => {
  assertEquals(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]), [
    "Mary",
    "Emma",
    "John",
  ]);
});

Deno.test("#SeatManager", () => {
  const sm = new SeatManager(5);

  assertInstanceOf(sm, SeatManager);
});

Deno.test("#separateDigits", () => {
  assertEquals(separateDigits([13, 25, 83, 77]), [1, 3, 2, 5, 8, 3, 7, 7]);
  assertEquals(separateDigits([7, 1, 3, 9]), [7, 1, 3, 9]);
});

Deno.test("#deleteGreatestValue", () => {
  assertEquals(
    deleteGreatestValue([
      [1, 2, 4],
      [3, 3, 1],
    ]),
    8
  );
});

Deno.test("#distinctDifferenceArray", () => {
  assertEquals(distinctDifferenceArray([1, 2, 3, 4, 5]), [-3, -1, 1, 3, 5]);
});

Deno.test("#indNonMinOrMax", () => {
  assertEquals(findNonMinOrMax([3, 2, 1, 4]), 3);
  assertEquals(findNonMinOrMax([1, 2]), -1);
});

Deno.test("#sumOfSquares", () => {
  assertEquals(sumOfSquares([1, 2, 3, 4]), 21);
  assertEquals(sumOfSquares([2, 7, 1, 19, 18, 3]), 63);
});

Deno.test("#countSeniors", () => {
  assertEquals(
    countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]),
    2
  );
  assertEquals(countSeniors(["1313579440F2036", "2921522980M5644"]), 0);
});

Deno.test("#eliminateMaximum", () => {
  assertEquals(eliminateMaximum([1, 3, 4], [1, 1, 1]), 3);
  assertEquals(eliminateMaximum([3, 2, 4], [5, 3, 2]), 1);
  assertEquals(eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1]), 1);
});

Deno.test("#rowAndMaximumOnes", () => {
  assertEquals(
    rowAndMaximumOnes([
      [0, 1],
      [1, 0],
    ]),
    [0, 1]
  );
  assertEquals(
    rowAndMaximumOnes([
      [0, 0, 0],
      [0, 1, 1],
    ]),
    [1, 2]
  );
});

Deno.test("#numberOfPairs", () => {
  assertEquals(numberOfPairs([1, 3, 2, 1, 3, 2, 2]), [3, 1]);
  assertEquals(numberOfPairs([1, 1]), [1, 0]);
  assertEquals(numberOfPairs([0]), [0, 1]);
});

Deno.test("#mergeSimilarItems", () => {
  assertEquals(
    mergeSimilarItems(
      [
        [1, 1],
        [4, 5],
        [3, 8],
      ],
      [
        [3, 1],
        [1, 5],
      ]
    ),
    [
      [1, 6],
      [3, 9],
      [4, 5],
    ]
  );
});

Deno.test("#partitionString", () => {
  assertEquals(partitionString("abacaba"), 4);
});

Deno.test("#countHomogenous", () => {
  assertEquals(countHomogenous("abbcccaa"), 13);
});

Deno.test("#vowelStrings", () => {
  assertEquals(vowelStrings(["are", "amy", "u"], 0, 2), 2);
  assertEquals(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4), 3);
});

Deno.test("#calculate", () => {
  assertEquals(calculate("3+2*2"), 7);
});

Deno.test("#mergeArrays", () => {
  assertEquals(
    mergeArrays(
      [
        [1, 2],
        [2, 3],
        [4, 5],
      ],
      [
        [1, 4],
        [3, 2],
        [4, 1],
      ]
    ),
    [
      [1, 6],
      [2, 3],
      [3, 2],
      [4, 6],
    ]
  );
});

Deno.test("#restoreArray", () => {
  assertEquals(
    restoreArray([
      [2, 1],
      [3, 4],
      [3, 2],
    ]),
    [1, 2, 3, 4]
  );
  assertEquals(
    restoreArray([
      [4, -2],
      [1, 4],
      [-3, 1],
    ]),
    [-2, 4, 1, -3]
  );
});

Deno.test("#minimumOperations", () => {
  assertEquals(minimumOperations([1, 5, 0, 3, 5]), 3);
});

Deno.test("#intersection", () => {
  assertEquals(intersection([1, 2, 2, 1], [2, 2]), [2]);
  assertEquals(intersection([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
  assertEquals(intersection([8, 0, 3], [0, 0]), [0]);
});

Deno.test("#answerQueries", () => {
  assertEquals(answerQueries([4, 5, 2, 1], [3, 10, 21]), [2, 3, 4]);
});

Deno.test("#maximumValue", () => {
  assertEquals(maximumValue(["alic3", "bob", "3", "4", "00000"]), 5);
  assertEquals(maximumValue(["1", "01", "001", "0001"]), 1);
});

Deno.test("#maximumCount(", () => {
  assertEquals(maximumCount([-2, -1, -1, 1, 2, 3]), 3);
  assertEquals(maximumCount([-3, -2, -1, 0, 0, 1, 2]), 3);
  assertEquals(maximumCount([5, 20, 66, 1314]), 4);
});

Deno.test("#unequalTriplets(", () => {
  assertEquals(unequalTriplets([4, 4, 2, 4, 3]), 3);
});
