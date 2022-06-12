// code your solution here
function superbowlWin(arrayTesting){
    let winning =(arrayTesting) => arrayTesting.result === 'W';
    let Kushinda = arrayTesting.find(winning)
    if(Kushinda)
    {
        return Kushinda.year
    }
    else {
        return undefined;
    }
}