// Rewrite Q2 implementation using async/await and handle errors using try-catch.

const promiseFunction = (success) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success) {
                resolve('Success');
            } else {
                reject('Failed');
            }
        }, 2000)
    })
}

const handlePromise = async (success) => {
    try {
        const result = await promiseFunction(success);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
};

handlePromise(true);
handlePromise(false);