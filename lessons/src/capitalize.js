const capitalize = (string) => {
    if (string === '') {
        return '';
    }
    const firstLetter = string[0].toUpperCase();
    const remainingPart = string.slice(1);
    const result = `${firstLetter}${remainingPart}`;

    return result;
};

export default capitalize;