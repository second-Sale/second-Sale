module.exports = ((state={isExitUser:''},action)=>{
    switch(action.type){
        case 'REGISTER_COMMIT':{
            console.log("reducer",action.isExitUser);
            return({isExitUser:action.isExitUser});
        }
        default: return state;
    }
})