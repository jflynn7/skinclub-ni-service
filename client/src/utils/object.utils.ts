export const PATH_DELIM = '.';

/**
 * Get nested data at path
 * @param dataItem
 * @param dataPath
 * @param explicitBoolean
 */
export function getAtPath<T, U = string>(
  dataItem: T,
  dataPath?: string,
  explicitBoolean = false
): U {
  const dataPaths = dataPath ? dataPath.split(PATH_DELIM) : [''];

  return dataPaths.reduce((finalValue: any, currentPath) => {
    const hasValue = explicitBoolean
      ? isBooleanValue(finalValue[currentPath]) || !isNullOrUndefined(finalValue[currentPath])
      : !isNullOrUndefined(finalValue[currentPath]);
    return hasValue ? finalValue[currentPath] : '';
  }, dataItem) as unknown as U;
}

export const isNullOrUndefined = (value: any, includeEmptyString?: boolean) =>
  value === null || value === undefined || (includeEmptyString && value === '') || false;

export const isBooleanValue = (value: any) => typeof value === 'boolean';

export const isEmpty = (value: any) => value == null || value.length === 0;

export const isNumber = (val: any): boolean => !isNaN(parseFloat(val));

export function createKey(...args: (string | number)[]): string {
  // Join all the arguments with an underscore
  return args.join('_');
}
