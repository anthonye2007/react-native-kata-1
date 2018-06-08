export function hasText(testInstance, textToFind) {
  return testInstance.findByProps({children: textToFind});
}
