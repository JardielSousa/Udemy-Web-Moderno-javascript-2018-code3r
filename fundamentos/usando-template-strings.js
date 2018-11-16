const nome = 'Jardiel'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome} !
`

console.log(concatenacao, template);

// Expressões...
console.log(`1 + 1 = ${1 + 1}`);

const up = t => t.toUpperCase()
console.log(`Ei... ${up('cuidado')} !`);
