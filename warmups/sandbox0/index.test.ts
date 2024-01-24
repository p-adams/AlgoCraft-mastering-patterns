import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
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
  sortVowels,
  countPalindromicSubsequence,
  maximumStrongPairXor,
  findChampion,
  maximumElementAfterDecrementingAndRearranging,
  frequencySort,
  findDifferentBinaryString,
  countStudents,
  islandPerimeter,
  checkDistances,
  minPairSum,
  canMakeArithmeticProgression,
  similarPairs,
  findTheArrayConcVal,
  commonChars,
  maxFrequency,
  relativeSortArray,
  isToeplitzMatrix,
  findDiagonalOrder,
  nearestValidPoint,
  checkArithmeticSubarrays,
  findMaxK,
  numberOfLines,
  getRow,
  findTheDistanceValue,
  shiftGrid,
  findMiddleIndex,
  trimMean,
  findWordsContaining,
  applyOperations,
  hammingWeight,
  MyHashSet,
  countCharacters2,
  maxHouseDistance,
  minStartValue,
  transpose,
  findColumnWidth,
  pickGifts,
  arrayStringsAreEqual,
  MyHashMap,
  findLucky,
  checkXMatrix,
  arraySign,
  minCostClimbingStairs,
  largestGoodInteger,
  numberOfMatches,
  totalMoney,
  largestOddNumber,
  findPeaks,
  lastStoneWeight,
  findKDistantIndices,
  findSpecialInteger,
  maxProduct,
  numSpecial,
  minOperations,
  destCity,
  countTestedDevices,
  findIntersectionValues,
  buyChoco,
  findSubarrays,
  missingNumber,
  calculateTax,
  stringMatching,
  maxScore,
  isPathCrossing,
  decrypt,
  average,
  floodFill,
  furthestDistanceFromOrigin,
  sortEvenOdd,
  minMaxGame,
  makeEqual,
  maxLengthBetweenEqualCharacters,
  minimumSum,
  threeConsecutiveOdds,
  findRelativeRanks,
  semiOrderedPermutation,
  lengthOfLIS,
  numberGame,
  uniqueOccurrences,
  climbStairs,
  numberOfPoints,
} from "./index.ts";
import { assertInstanceOf } from "https://deno.land/std@0.200.0/assert/assert_instance_of.ts";
import { TreeNode } from "../models.ts";
import { maxFrequencyElements } from "./index.ts";
import { timeRequiredToBuy } from "./index.ts";
import { minimumCost } from "./index.ts";
import { findIndices } from "./index.ts";

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

Deno.test("#unequalTriplets", () => {
  assertEquals(unequalTriplets([4, 4, 2, 4, 3]), 3);
});

Deno.test("#sortVowels", () => {
  assertEquals(sortVowels("lEetcOde"), "lEOtcede");
});

Deno.test("#countPalindromicSubsequence", () => {
  assertEquals(countPalindromicSubsequence("aabca"), 3);
  assertEquals(countPalindromicSubsequence("bbcbaba"), 4);
});

Deno.test("#maximumStrongPairXor", () => {
  assertEquals(maximumStrongPairXor([1, 2, 3, 4, 5]), 7);
  assertEquals(maximumStrongPairXor([10, 100]), 0);
  assertEquals(maximumStrongPairXor([5, 6, 25, 30]), 7);
});

Deno.test("#findChampion", () => {
  assertEquals(
    findChampion([
      [0, 1],
      [0, 0],
    ]),
    0
  );
});

Deno.test("#maximumElementAfterDecrementingAndRearranging", () => {
  assertEquals(
    maximumElementAfterDecrementingAndRearranging([2, 2, 1, 2, 1]),
    2
  );
});

Deno.test("#frequencySort", () => {
  assertEquals(frequencySort([1, 1, 2, 2, 2, 3]), [3, 1, 1, 2, 2, 2]);
  assertEquals(frequencySort([2, 3, 1, 3, 2]), [1, 3, 3, 2, 2]);
});

Deno.test("#findDifferentBinaryString", () => {
  assertEquals(findDifferentBinaryString(["01", "10"]), "11");
});

Deno.test("#countStudents", () => {
  assertEquals(countStudents([1, 1, 0, 0], [0, 1, 0, 1]), 0);
});

Deno.test("#islandPerimeter", () => {
  assertEquals(
    islandPerimeter([
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
    ]),
    16
  );
});

Deno.test("#checkDistances", () => {
  assertEquals(
    checkDistances(
      "abaccb",
      [
        1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0,
      ]
    ),
    true
  );
});

Deno.test("#minPairSum", () => {
  assertEquals(minPairSum([3, 5, 2, 3]), 7);
});

Deno.test("#canMakeArithmeticProgression", () => {
  assertEquals(canMakeArithmeticProgression([3, 5, 1]), true);
});

Deno.test("#similarPairs", () => {
  assertEquals(similarPairs(["aba", "aabb", "abcd", "bac", "aabc"]), 2);
});

Deno.test("#findTheArrayConcVal", () => {
  assertEquals(findTheArrayConcVal([7, 52, 2, 4]), 596);
  assertEquals(findTheArrayConcVal([5, 14, 13, 8, 12]), 673);
});

Deno.test("#commonChars", () => {
  assertEquals(commonChars(["bella", "label", "roller"]), ["e", "l", "l"]);
});

Deno.test("#maxFrequency", () => {
  assertEquals(maxFrequency([1, 2, 4], 5), 3);
  assertEquals(maxFrequency([1, 4, 8, 13], 5), 2);
  assertEquals(maxFrequency([3, 9, 6], 2), 1);
});

Deno.test("#relativeSortArray", () => {
  assertEquals(
    relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]),
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
  );
});

Deno.test("#isToeplitzMatrix", () => {
  assertEquals(
    isToeplitzMatrix([
      [1, 2, 3, 4],
      [5, 1, 2, 3],
      [9, 5, 1, 2],
    ]),
    true
  );
  assertEquals(
    isToeplitzMatrix([
      [1, 2],
      [2, 2],
    ]),
    false
  );
});

Deno.test("#findDiagonalOrder", () => {
  assertEquals(
    findDiagonalOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
    [1, 4, 2, 7, 5, 3, 8, 6, 9]
  );
});

Deno.test("#nearestValidPoint", () => {
  assertEquals(
    nearestValidPoint(3, 4, [
      [1, 2],
      [3, 1],
      [2, 4],
      [2, 3],
      [4, 4],
    ]),
    2
  );
  assertEquals(nearestValidPoint(3, 4, [[3, 4]]), 0);
});

Deno.test("#checkArithmeticSubarrays", () => {
  assertEquals(
    checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]),
    [true, false, true]
  );
});

Deno.test("#findMaxK", () => {
  assertEquals(findMaxK([-1, 2, -3, 3]), 3);
  assertEquals(findMaxK([-1, 10, 6, 7, -7, 1]), 7);
  assertEquals(findMaxK([-10, 8, 6, 7, -2, -3]), -1);
});

Deno.test("#numberOfLines", () => {
  assertEquals(
    numberOfLines(
      [
        10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        10, 10, 10, 10, 10, 10, 10, 10,
      ],
      "abcdefghijklmnopqrstuvwxyz"
    ),
    [3, 60]
  );
});

Deno.test("#getRow", () => {
  assertEquals(getRow(3), [1, 3, 3, 1]);
});

Deno.test("#findTheDistanceValue", () => {
  assertEquals(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2), 2);
});

Deno.test("#shiftGrid", () => {
  assertEquals(
    shiftGrid(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      1
    ),
    [
      [9, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]
  );
});

Deno.test("#findMiddleIndex", () => {
  assertEquals(
    trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]),
    2.0
  );
});

Deno.test("#findWordsContaining", () => {
  assertEquals(findWordsContaining(["leet", "code"], "e"), [0, 1]);
  assertEquals(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"), [0, 2]);
  assertEquals(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"), []);
});

Deno.test("#applyOperations", () => {
  assertEquals(applyOperations([1, 2, 2, 1, 1, 0]), [1, 4, 2, 0, 0, 0]);
  assertEquals(applyOperations([0, 1]), [1, 0]);
});

Deno.test("#hammingWeight", () => {
  assertEquals(hammingWeight(0o0000000000000000000000000001011), 3);
  assertEquals(hammingWeight(0o0000000000000000000000010000000), 1);
});

Deno.test("#MyHashSet", () => {
  const hs = new MyHashSet();
  hs.add(1);
  hs.add(2);
  hs.add(1);
  hs.remove(2);
  assertEquals(hs.contains(1), true);
  assertEquals(hs.contains(2), false);
});

Deno.test("#countCharacters2", () => {
  assertEquals(countCharacters2(["cat", "bt", "hat", "tree"], "atach"), 6);
});

Deno.test("#maxHouseDistance", () => {
  assertEquals(maxHouseDistance([1, 1, 1, 6, 1, 1, 1]), 3);
  assertEquals(maxHouseDistance([1, 8, 3, 8, 3]), 4);
  assertEquals(maxHouseDistance([0, 1]), 1);
});

Deno.test("#minStartValue", () => {
  assertEquals(minStartValue([-3, 2, -3, 4, 2]), 5);
});

Deno.test("#transpose", () => {
  assertEquals(
    transpose([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
    [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]
  );
  assertEquals(
    transpose([
      [1, 2, 3],
      [4, 5, 6],
    ]),
    [
      [1, 4],
      [2, 5],
      [3, 6],
    ]
  );
});

Deno.test("#findColumnWidth", () => {
  assertEquals(findColumnWidth([[1], [22], [333]]), [3]);
  assertEquals(
    findColumnWidth([
      [-15, 1, 3],
      [15, 7, 12],
      [5, 6, -2],
    ]),
    [3, 1, 2]
  );
});

Deno.test("#pickGifts", () => {
  assertEquals(pickGifts([25, 64, 9, 4, 100], 4), 29);
});

Deno.test("#arrayStringsAreEqual", () => {
  assertEquals(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]), true);
});

Deno.test("#MyHashMap", () => {
  const myhm = new MyHashMap();

  myhm.put(0, 12);
  myhm.put(1, 11);
  const val = myhm.get(1);

  assertEquals(val, 11);
});

Deno.test("#findLucky", () => {
  assertEquals(findLucky([2, 2, 3, 4]), 2);
  assertEquals(findLucky([1, 2, 2, 3, 3, 3]), 3);
  assertEquals(findLucky([2, 2, 2, 3, 3]), -1);
});

Deno.test("#checkXMatrix", () => {
  assertEquals(
    checkXMatrix([
      [2, 0, 0, 1],
      [0, 3, 1, 0],
      [0, 5, 2, 0],
      [4, 0, 0, 2],
    ]),
    true
  );
  assertEquals(
    checkXMatrix([
      [5, 7, 0],
      [0, 3, 1],
      [0, 5, 0],
    ]),
    false
  );
});

Deno.test("#arraySign", () => {
  assertEquals(arraySign([-1, -2, -3, -4, 3, 2, 1]), 1);
  assertEquals(arraySign([1, 5, 0, 2, -3]), 0);
  assertEquals(arraySign([-1, 1, -1, 1, -1]), -1);
});

Deno.test("#minCostClimbingStairs", () => {
  assertEquals(minCostClimbingStairs([10, 15, 20]), 15);
  assertEquals(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]), 6);
});

Deno.test("#largestGoodInteger", () => {
  assertEquals(largestGoodInteger("6777133339"), "777");
  assertEquals(largestGoodInteger("2300019"), "000");
  assertEquals(largestGoodInteger("42352338"), "");
});

Deno.test("#numberOfMatches", () => {
  assertEquals(numberOfMatches(7), 6);
  assertEquals(numberOfMatches(14), 13);
});

Deno.test("#totalMoney", () => {
  assertEquals(totalMoney(4), 10);
  assertEquals(totalMoney(10), 37);
});

Deno.test("#largestOddNumber", () => {
  assertEquals(largestOddNumber("52"), "5");
  assertEquals(largestOddNumber("4206"), "");
  assertEquals(largestOddNumber("35427"), "35427");
});

Deno.test("#findPeaks", () => {
  assertEquals(findPeaks([2, 4, 4]), []);
  assertEquals(findPeaks([1, 4, 3, 8, 5]), [1, 3]);
});

Deno.test("#lastStoneWeight", () => {
  assertEquals(lastStoneWeight([2, 7, 4, 1, 8, 1]), 1);
});

Deno.test("#findKDistantIndices", () => {
  assertEquals(
    findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1),
    [1, 2, 3, 4, 5, 6]
  );
});

Deno.test("#findSpecialInteger", () => {
  assertEquals(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]), 6);
});

Deno.test("#maxProduct", () => {
  assertEquals(maxProduct([3, 4, 5, 2]), 12);
});

Deno.test("#numSpecial", () => {
  assertEquals(
    numSpecial([
      [1, 0, 0],
      [0, 0, 1],
      [1, 0, 0],
    ]),
    1
  );
});

Deno.test("#minOperations", () => {
  assertEquals(minOperations(["d1/", "d2/", "../", "d21/", "./"]), 2);
  assertEquals(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]), 3);
  assertEquals(minOperations(["d1/", "../", "../", "../"]), 0);
});

Deno.test("#destCity", () => {
  assertEquals(
    destCity([
      ["London", "New York"],
      ["New York", "Lima"],
      ["Lima", "Sao Paulo"],
    ]),
    "Sao Paulo"
  );
  assertEquals(destCity([["A", "Z"]]), "Z");
  assertEquals(
    destCity([
      ["B", "C"],
      ["D", "B"],
      ["C", "A"],
    ]),
    "A"
  );
});

Deno.test("#countTestedDevices", () => {
  assertEquals(countTestedDevices([1, 1, 2, 1, 3]), 3);
});

Deno.test("#findIntersectionValues", () => {
  assertEquals(
    findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]),
    [3, 4]
  );
  assertEquals(findIntersectionValues([3, 4, 2, 3], [1, 5]), [0, 0]);
});

Deno.test("#buyChoco", () => {
  assertEquals(buyChoco([1, 2, 2], 3), 0);
  assertEquals(buyChoco([3, 2, 3], 3), 3);
});

Deno.test("#findSubarrays", () => {
  assertEquals(findSubarrays([4, 2, 4]), true);
});

Deno.test("#missingNumber", () => {
  assertEquals(missingNumber([3, 0, 1]), 2);
  assertEquals(missingNumber([0, 1]), 2);
  assertEquals(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
});

Deno.test("#calculateTax", () => {
  assertEquals(
    calculateTax(
      [
        [3, 50],
        [7, 10],
        [12, 25],
      ],
      10
    ),
    2.65
  );
  assertEquals(
    calculateTax(
      [
        [1, 0],
        [4, 25],
        [5, 50],
      ],
      2
    ),
    0.25
  );
});

Deno.test("#stringMatching", () => {
  assertEquals(stringMatching(["mass", "as", "hero", "superhero"]), [
    "as",
    "hero",
  ]);
  assertEquals(stringMatching(["leetcode", "et", "code"]), ["et", "code"]);
});

Deno.test("#maxScore", () => {
  assertEquals(maxScore("011101"), 5);
  assertEquals(maxScore("00111"), 5);
  assertEquals(maxScore("1111"), 3);
});

Deno.test("#isPathCrossing", () => {
  assertEquals(isPathCrossing("NES"), false);

  assertEquals(isPathCrossing("NESWW"), true);
});

Deno.test("#decrypt", () => {
  assertEquals(decrypt([5, 7, 1, 4], 3), [12, 10, 16, 13]);
});

Deno.test("#average", () => {
  assertEquals(average([4000, 3000, 1000, 2000]), 2500.0);
});

Deno.test("#floodFill", () => {
  assertEquals(
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    ),
    [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]
  );
});

Deno.test("#furthestDistanceFromOrigin", () => {
  assertEquals(furthestDistanceFromOrigin("L_RL__R"), 3);
});

Deno.test("#furthestDistanceFromOrigin", () => {
  assertEquals(furthestDistanceFromOrigin("L_RL__R"), 3);
});

Deno.test("#sortEvenOdd", () => {
  assertEquals(sortEvenOdd([4, 1, 2, 3]), [2, 3, 4, 1]);
  assertEquals(sortEvenOdd([2, 1]), [2, 1]);
});

Deno.test("#minMaxGame", () => {
  assertEquals(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2]), 1);
});

Deno.test("#makeEqual", () => {
  assertEquals(makeEqual(["abc", "aabc", "bc"]), true);
});

Deno.test("#maxLengthBetweenEqualCharacters", () => {
  assertEquals(maxLengthBetweenEqualCharacters("aa"), 0);
  assertEquals(maxLengthBetweenEqualCharacters("abca"), 2);
});

Deno.test("#minimumSum", () => {
  assertEquals(minimumSum([8, 6, 1, 5, 3]), 9);
});

Deno.test("#threeConsecutiveOdds", () => {
  assertEquals(threeConsecutiveOdds([2, 6, 4, 1]), false);
  assertEquals(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]), true);
  assertEquals(threeConsecutiveOdds([1]), false);
});

Deno.test("#findRelativeRanks", () => {
  assertEquals(findRelativeRanks([5, 4, 3, 2, 1]), [
    "Gold Medal",
    "Silver Medal",
    "Bronze Medal",
    "4",
    "5",
  ]);
});

Deno.test("#semiOrderedPermutation", () => {
  assertEquals(semiOrderedPermutation([2, 1, 4, 3]), 2);
});

Deno.test("#lengthOfLIS", () => {
  assertEquals(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
});

Deno.test("#numberGame", () => {
  assertEquals(numberGame([5, 4, 2, 3]), [3, 2, 5, 4]);
});

Deno.test("#uniqueOccurrences", () => {
  assertEquals(uniqueOccurrences([1, 2, 2, 1, 1, 3]), true);
  assertEquals(uniqueOccurrences([1, 2]), false);
  assertEquals(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]), true);
});

Deno.test("#climbStairs", () => {
  assertEquals(climbStairs(2), 2);
  assertEquals(climbStairs(3), 3);
});

Deno.test("#numberOfPoints", () => {
  assertEquals(
    numberOfPoints([
      [3, 6],
      [1, 5],
      [4, 7],
    ]),
    7
  );
  assertEquals(
    numberOfPoints([
      [1, 3],
      [5, 8],
    ]),
    7
  );
});

Deno.test("#maxFrequencyElements", () => {
  assertEquals(maxFrequencyElements([1, 2, 2, 3, 1, 4]), 4);
  assertEquals(maxFrequencyElements([1, 2, 3, 4, 5]), 5);
});

Deno.test("#timeRequiredToBuy", () => {
  assertEquals(timeRequiredToBuy([2, 3, 2], 2), 6);
});

Deno.test("#minimumCost", () => {
  assertEquals(minimumCost([1, 2, 3, 12]), 6);
});

Deno.test("#findIndices", () => {
  assertEquals(findIndices([5, 1, 4, 1], 2, 4), [0, 3]);
});
