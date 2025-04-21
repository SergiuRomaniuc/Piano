window.addEventListener('DOMContentLoaded', () => {
  const whiteKeys = document.querySelectorAll('.key');
  const blackKeys = document.querySelectorAll('.black--key');

  let whiteKeyIndex = 0;
  blackKeys.forEach((blackKey, i) => {
    while (
      whiteKeyIndex < whiteKeys.length &&
      !whiteKeys[whiteKeyIndex].classList.contains('has-black-key')
      ) {
      whiteKeyIndex++;
    }

    if (whiteKeyIndex < whiteKeys.length) {
      const refWhiteKey = whiteKeys[whiteKeyIndex];

      const marginRight = parseFloat(window.getComputedStyle(refWhiteKey).marginRight);
      const paddingRight = parseFloat(window.getComputedStyle(refWhiteKey).paddingRight);
      const borderRight = parseFloat(window.getComputedStyle(refWhiteKey).borderLeftWidth);

      const offset = refWhiteKey.offsetLeft + (refWhiteKey.clientWidth + marginRight + paddingRight - blackKey.offsetWidth / 2);

      console.log(paddingRight);
      blackKey.style.left = `${offset}px`;
      whiteKeyIndex++;
    }
  })
});
