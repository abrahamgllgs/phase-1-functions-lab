// Code your solution in this file!
const headquarters = 42
const block = 264
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks-headquarters)
} 
function distanceFromHqInFeet(feet){
    let variable = distanceFromHqInBlocks(feet) * 264
    return  variable
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination-start)*264
}
function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)
    if (feet <=400){
        return feet*0;
    }else if (feet > 400 && feet <=2000){
    return Math.abs((feet-400) *.02);
    } else if (feet >2000 && feet <=2500)
    return 25
    if (destination >=0){
        return 'cannot travel that far';
    }
}