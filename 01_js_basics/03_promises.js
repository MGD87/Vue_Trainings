//Bsp. ohne Prommisses
/*
let ms = 3500;
let s = ms / 1000;

setTimeout(() => {
    console.log(`Hallo nach ${s} Sekunden`);
}, ms);
console.log('Hallo!');
*/
//Mit promises möchte man die korrekte Reihenfolge des Codes sicherstellen
let ms = 3500;
let s = ms / 1000;

//
const greeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Hallo nach ${s} Sekunden`);
        resolve('Erledigt');
        //reject kann hier nicht vorkommen
    }, ms);
});

// Bsp.promises
/*
const startGreeting = () => {
    greeting.then((e) => {
        console.log(e);
        console.log('Hallo!');
    });
    //.catch(()=>{console.log('reject block')})
};
startGreeting();
*/

//Bsp. async and await

const startGreeting = async () => {
    try {
        const result = await greeting;
        console.log(result);
        console.log('Hallo!');
    } catch (error) {
        console.log('Error Message');
    }
};
startGreeting();
