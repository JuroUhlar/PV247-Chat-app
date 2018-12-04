export const getBearer = (): string => 'Bearer ' + localStorage.getItem('user');
