const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello')

// Interpolated
console.log('How are you %s?', 'dude')

// Styled
console.log('%c This is some great text', 'font-size: 18px; background: lightblue;')

// warning!
console.warn('Oh noo')

// Error :|
console.error('Oops')

// Info
console.info('this is a fun fact');

// Testing
console.assert(1 === 2, 'That is wrong!')

// clearing
console.clear()

// Viewing DOM Elements
const p = document.querySelector('p')
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.groupEnd(`${dog.name}`)
})

// counting
console.count('Wes')

// timing
console.time('fetch dogs')
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetch dogs');
    console.log(data);
  });
console.table(dogs)