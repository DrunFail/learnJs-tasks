const checkSpam = (str) => {
    let strLower = str.toLowerCase();

    return strLower.includes('viagra') || strLower.includes('xxx');
}