// 2. Create a Promise that resolves with 'Success' after 2 seconds and rejects with 'Failed' if success
// is false.

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

promiseFunction(true)
.then(res => console.log(res))
.catch(err => console.log(err));

promiseFunction(false)
.then(res => console.log(res))
.catch(err => console.log(err));