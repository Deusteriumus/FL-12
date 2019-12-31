function makeNumber(str) {
    const arraySplit = str.split('');
    let array = [];
    for (let i = 0; i < arraySplit.length; i++) {
        if (isNaN(arraySplit[i]) === false) {
            array.push(arraySplit[i]);
        }
    }
    return array.join('');
}

makeNumber('erer384jjjfd123');