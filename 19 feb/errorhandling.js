function dosomething(){
    throw new Error(
        'a error is thrown from dosomething'
    );
}
function init(){
    try{dosomething();

    }
    catch(e){
        console.log(e.message);
    }
    console.log("after successfull error handling")
}
init();