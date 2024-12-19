export function formatNumber(num: string | number | bigint) {
  let value: number | bigint = -1;
  try {
    value = BigInt(num);
  } catch (error) {
    return num;
  }
  return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(value);
}

export function stringToBigInt(value: string): BigInt | Error {
  try {
    const result = BigInt(value);
    return result;
  } catch (error) {
    return new Error('Invalid string for BigInt conversion');
  }
}

export default {
  formatNumber,
  stringToBigInt,
};
