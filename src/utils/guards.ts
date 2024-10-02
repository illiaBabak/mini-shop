import { ItemType } from 'src/types/dataTypes';

const isString = (data: unknown): data is string => typeof data === 'string';

const isNumber = (data: unknown): data is number => typeof data === 'number';

const isObj = (data: unknown): data is object => !!data && typeof data === 'object';

export const isItem = (data: unknown): data is ItemType =>
  isObj(data) &&
  'title' in data &&
  isString(data.title) &&
  'category' in data &&
  isString(data.category) &&
  'description' in data &&
  isString(data.description) &&
  'price' in data &&
  isNumber(data.price) &&
  'image' in data &&
  isString(data.image) &&
  'id' in data &&
  isNumber(data.id);

export const isItemArr = (data: unknown): data is ItemType[] => Array.isArray(data) && data.every((el) => isItem(el));
