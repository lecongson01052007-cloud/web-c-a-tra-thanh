const mathTokenPattern = /[\p{L}\p{M}\p{N}₀-₉⁰-⁹⁺⁻]/u;

function isMathToken(character) {
  return Boolean(character && mathTokenPattern.test(character));
}

function findOpeningParenthesis(source, closingIndex) {
  let depth = 0;
  for (let index = closingIndex; index >= 0; index -= 1) {
    if (source[index] === ")") depth += 1;
    if (source[index] === "(") {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  return closingIndex;
}

function findClosingParenthesis(source, openingIndex) {
  let depth = 0;
  for (let index = openingIndex; index < source.length; index += 1) {
    if (source[index] === "(") depth += 1;
    if (source[index] === ")") {
      depth -= 1;
      if (depth === 0) return index + 1;
    }
  }
  return openingIndex + 1;
}

function readNumeratorStart(source, slashIndex) {
  let end = slashIndex;
  while (end > 0 && /\s/.test(source[end - 1])) end -= 1;

  if (source[end - 1] === ")") {
    const openingIndex = findOpeningParenthesis(source, end - 1);
    let start = openingIndex;
    while (start > 0 && isMathToken(source[start - 1])) start -= 1;
    return start;
  }

  if (source[end - 1] === "|") {
    for (let index = end - 2; index >= 0; index -= 1) {
      if (source[index] === "|") return index;
    }
  }

  let start = end;
  while (start > 0 && isMathToken(source[start - 1])) start -= 1;
  return start;
}

function readDenominatorEnd(source, slashIndex) {
  let start = slashIndex + 1;
  while (start < source.length && /\s/.test(source[start])) start += 1;

  if (source[start] === "|") {
    const closingBar = source.indexOf("|", start + 1);
    return closingBar < 0 ? start + 1 : closingBar + 1;
  }

  if (source[start] === "√") {
    const operandStart = start + 1;
    return source[operandStart] === "("
      ? findClosingParenthesis(source, operandStart)
      : readDenominatorEnd(source, operandStart - 1);
  }

  if (source[start] === "(") return findClosingParenthesis(source, start);

  let end = start;
  while (end < source.length && isMathToken(source[end])) end += 1;
  if (end === start) return start + 1;

  if (source[end] === "(") end = findClosingParenthesis(source, end);
  return end;
}

function escapeMathText(text) {
  return text.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function formatMathExpression(source) {
  const fractions = [];
  for (let slashIndex = source.indexOf("/"); slashIndex !== -1; slashIndex = source.indexOf("/", slashIndex + 1)) {
    const start = readNumeratorStart(source, slashIndex);
    const end = readDenominatorEnd(source, slashIndex);
    if (start < slashIndex && end > slashIndex + 1) fractions.push({ start, slashIndex, end });
  }

  let output = "";
  let cursor = 0;
  fractions.forEach(({ start, slashIndex, end }) => {
    if (start < cursor || end <= cursor) return;
    output += escapeMathText(source.slice(cursor, start));
    output += `<span class="math-fraction" role="math"><span class="math-numerator">${escapeMathText(source.slice(start, slashIndex).trim())}</span><span class="math-denominator">${escapeMathText(source.slice(slashIndex + 1, end).trim())}</span></span>`;
    cursor = end;
  });
  output += escapeMathText(source.slice(cursor));
  return output;
}

function renderMathExpressions(root = document) {
  root.querySelectorAll(".formula-expression:not([data-math-rendered])").forEach((element) => {
    element.innerHTML = formatMathExpression(element.textContent);
    element.dataset.mathRendered = "true";
  });
}

renderMathExpressions();
new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) renderMathExpressions(node);
    });
  });
}).observe(document.body, { childList: true, subtree: true });
