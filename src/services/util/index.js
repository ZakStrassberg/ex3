import { mergeWith, isArray, isObject } from 'lodash';

export const mergeWithArrays = (object, sources) =>
  mergeWith(object, sources, (objValue, srcValue) => {
    if (isArray(objValue)) {
      return objValue.concat(srcValue);
    } else if (isObject(objValue)) {
      return {
        ...objValue,
        ...srcValue,
      };
    }
    return srcValue;
  });

export const shutup = () => {};
