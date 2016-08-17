export default (n: number): number => {
    const numStr = n.toString();
    return numStr.includes('.') ?
        numStr.split('.')[1].length :
        0;
};
