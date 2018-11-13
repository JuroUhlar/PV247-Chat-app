export const isInsertEmpty = (text?: string): boolean => (!!text && text.trim() === '');

export const addLineBreaks = (text: string): string => (text && text.replace(/(?:\r\n|\r|\n)/g, '<br>'));
