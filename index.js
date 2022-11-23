// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance <42){
        return (42-distance);
        //distance below 42 street
    }
    else{
        return (distance-42);
        //ditance ahead of 42 street
    }


}

function distanceFromHqInFeet(distance){
    //one block is block is equal to 264 feet

    return distanceFromHqInBlocks(distance)*264;

}
function distanceTravelledInFeet(start,destination){
    if (destination>start){
        return ((destination-start)*264);
    }
    else 
      return ((start-destination)*264);
}

function calculatesFarePrice(start,destination) {
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
        return 0;
    }
    if (distance >= 400 && distance <= 2000) {
        return (distance - 400)*0.02;
    }
    else if (distance >=2000 && distance <= 2500){
        return 25;
    }
    else if (distance > 2500){
        return "cannot travel that far";
    }
    
}