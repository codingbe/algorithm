const today = new Date(Date.now() - 32400000);

const years = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

console.log(`${years}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`);