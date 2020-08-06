export const arrayFlattening1 = (inputArr: number[]): number[] => {
  return inputArr.reduce((accumulator: number[], currentValue: number) => {
    accumulator.push(currentValue);
    return accumulator;
  }, []);
};

export const arrayFlattening2 = (inputArr: Array<Array<number>>) =>
  inputArr.reduce((accumulator, currentValue) => [...accumulator, ...currentValue], []);

export const arrayMapping1 = (inputArr: number[]): number[] => {
  return inputArr.map((value) => {
    return Math.pow(value, 2);
  });
};

export const arraySum = (inputArr: number[]): number => {
  return inputArr.reduce((accumulator, currentValue) => {
    let output = accumulator + currentValue;
    return output;
  }, 0);
};

export const arrayFiltering1 = (inputArr: number[]): number[] => {
  return inputArr.filter((value: number) => value % 2 === 0);
};

export const arrayFiltering2 = (inputArr: Array<number | string>) => {
  return inputArr.filter((element) => {
    return typeof element === 'number' ? element % 2 === 0 : '';
  });
};

export const arrayMapping2 = (inputArr: Array<string>) => {
  return inputArr.map((element) => {
    const x = element.charAt(0).toLowerCase();
    return x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' ? true : false;
  });
};
