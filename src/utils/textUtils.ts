export const isInsertEmpty = (text?: string) => (!!text && text.trim() === '');

export const addLineBreaks = (text: string) => (text && text.replace(/(?:\r\n|\r|\n)/g, '<br>'));
