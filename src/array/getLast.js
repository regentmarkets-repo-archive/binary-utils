export default (arr: any[]): ?any =>
    arr && (arr.length === 0 ? undefined : arr[arr.length - 1]);
