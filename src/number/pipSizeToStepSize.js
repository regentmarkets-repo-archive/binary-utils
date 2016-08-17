export default (pipSize: number): string => {
    if (isNaN(pipSize)) {
        return '0.01';
    }
    const zeros = Array(pipSize).join('0');
    return '0.' + zeros + 1;
};
