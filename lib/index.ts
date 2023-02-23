export const index = (text: string) => {
  const tokenized: string[] = splitTextToArray(text);
  return builder(tokenized);
};

const builder = (tokenized: string[]) => {
  let processedText = [];
  for (let i = 0; i < tokenized.length; i++) {
    const htmlText = singleTextTokenizer(tokenized[i]);
    processedText.push(htmlText);
  }

  return processedText.join(' ');
};

const singleTextTokenizer = (singleTokenizedText: string) => {
  const storedText = singleTokenizedText.split('');

  const textLength = singleTokenizedText.length;

  const spliceBy = Math.floor(textLength / 1.3);
  const splicedText: string[] = storedText.splice(0, spliceBy);

  const splicedEndText: string[] = storedText.splice(spliceBy - spliceBy);

  const textJoined = splicedText.join('');
  const toHtml = `<b>${textJoined}</b>${splicedEndText.join('')}`;
  const temp = document.createElement('span');
  temp.innerHTML = toHtml;

  const htmlObject = temp.innerHTML;
  return htmlObject;
};

const splitTextToArray = (text: string): string[] => {
  const textAsArray = text.split(' ');
  return textAsArray;
};
