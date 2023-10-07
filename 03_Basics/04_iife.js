// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`Db Connected ${name}`)
})('prasad')