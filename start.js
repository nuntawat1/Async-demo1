(() =>{

function simulateAsyncAPI(text, timeout){
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                // if (text=== 'B') return reject ('B got rejected');
                console.log(text);
                resolve();
            },timeout);
        });
    }

    async function run(){
    }
})();