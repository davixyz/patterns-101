
const MySingleton = (function() {
    let instance;

    // class MyExpensiveObject {
    //     constructor() {
    //         this.something = true;
    //         this.createdAt = new Date();
    //     }
    // }

    function MyExpensiveObject() {
        this.something = true;
        this.createdAt = new Date();
    }

    function getInstance() {
        if(!instance) {
            instance = new MyExpensiveObject();
        }
        return instance;
    }
    return {
        getInstance,
    }
})();

console.log(MySingleton.getInstance());
console.log(MySingleton.getInstance());
console.log(MySingleton.getInstance());
console.log(MySingleton.getInstance());
console.log(MySingleton.getInstance());


