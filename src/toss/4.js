const { get } = require("http");

/**
 * 이 테이블은 유니코드 기반의 초성 중성 종성 글자 표입니다
 * 문제 풀이에 활용해 주세요
 */
const table = {
  cho: [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ],
  jung: [
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅘ",
    "ㅙ",
    "ㅚ",
    "ㅛ",
    "ㅜ",
    "ㅝ",
    "ㅞ",
    "ㅟ",
    "ㅠ",
    "ㅡ",
    "ㅢ",
    "ㅣ",
  ],
  jong: [
    "",
    "ㄱ",
    "ㄲ",
    "ㄳ",
    "ㄴ",
    "ㄵ",
    "ㄶ",
    "ㄷ",
    "ㄹ",
    "ㄺ",
    "ㄻ",
    "ㄼ",
    "ㄽ",
    "ㄾ",
    "ㄿ",
    "ㅀ",
    "ㅁ",
    "ㅂ",
    "ㅄ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ],
};

/**
 * 한글을 분해해 초성 중성 종성 Index를 반환합니다
 *
 * @param hangul 한글로 이루어진 글자 하나
 * @returns [초성Index, 중성Index, 종성Index]
 */
function decompositeHangulCode(hangul) {
  const char = hangul.charCodeAt() - 0xac00;
  const cho = Math.floor(char / (28 * 21));
  const jung = Math.floor((char / 28) % 21);
  const jong = Math.floor(char % 28);
  return [cho, jung, jong];
}

/**
 * 가장 많이 사용하는 자음과 갯수를 콤마로 반환하는 함수입니다
 *
 * @param input 한글로만 구성되어 있는 글자입니다
 * @returns 주어진 글자에서 가장 많이 사용되는 자음과 갯수를 콤마로 반환
 */
function getMostJaumPair(input) {
  const [x, y, z] = decompositeHangulCode(input[1]);
  const arrCho = table.cho;
  const arrJong = table.jong;
  const map = new Map();
  for (const str of input) {
    const [x, y, z] = decompositeHangulCode(str);
    const target = z;
    const index = arrCho.indexOf(arrJong[target]);
    if (index !== -1) {
      if (map.has(index)) {
        map.set(index, map.get(index) + 1);
      } else {
        map.set(index, 1);
      }
    }

    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 1);
    }
  }

  const mapToArray = Array.from(map);
  mapToArray.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });
  const sortedMap = new Map(mapToArray);

  const result = Array.from(sortedMap);

  const maxChar = arrCho[result[0][0]];
  const maxLength = result[0][1];
  //   console.log(`${maxChar},${maxLength}`);
  return `${maxChar},${maxLength}`;
}

// 해당 부분을 수정하시면, 채점이 어려울 수 있습니다.
const solution = getMostJaumPair;

solution("대한민국");
