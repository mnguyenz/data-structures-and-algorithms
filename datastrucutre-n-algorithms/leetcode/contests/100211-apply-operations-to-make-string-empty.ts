// You are given a string s.

// Consider performing the following operation until s becomes empty:

// For every alphabet character from 'a' to 'z', remove the first occurrence of that character in s (if it exists).
// Return the value of the string s right before applying the last operation.



// Example 1:

// Input: s = "aabcbbca"
// Output: "ba"
// Explanation: We do the following operations:
// - Remove the underlined characters s = "aabcbbca". The resulting string is s = "abbca".
// - Remove the underlined characters s = "abbca". The resulting string is s = "ba".
// - Remove the underlined characters s = "ba". The resulting string is s = "".
// The string just before the last operation is "ba".
// Example 2:

// Input: s = "abcd"
// Output: "abcd"
// Explanation: We do the following operation:
// - Remove the underlined characters s = "abcd". The resulting string is s = "".
// The string just before the last operation is "abcd".


// Constraints:

// 1 <= s.length <= 5 * 105
// s consists only of lowercase English letters.

function lastNonEmptyString(s: string): string {
    let charMap = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        charMap.set(s[i], (charMap.get(s[i]) || 0) + 1);
    }
    let existedChars = getKeyWithMaxValue(charMap);
    let result = '';
    let index = s.length - 1;
    while (existedChars.length > 0) {
        if (existedChars.includes(s[index])) {
            result = s[index] + result;
            existedChars = existedChars.filter((item) => item !== s[index]);
        }
        index -= 1;
    }
    return result;
};

function getKeyWithMaxValue(map: Map<string, number>): string[] {
    let maxValue = Number.MIN_VALUE;
    let keysWithMaxValue: string[] = [];

    for (const [key, value] of map.entries()) {
        if (value > maxValue) {
            maxValue = value;
            keysWithMaxValue = [key];
        } else if (value === maxValue) {
            keysWithMaxValue.push(key);
        }
    }

    return keysWithMaxValue;
  }