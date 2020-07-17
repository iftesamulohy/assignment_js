//All Functions
        //feet to mile converter
        function feetToMile(feetValue){
            return feetValue/5280;
            }
        //Wood Calculator
        function woodCalculator(chair, table, khat){
            return (chair*1)+(table*3)+(khat*5);
            }
        //Brick Calculator
        function brickCalculator(floorValue){
            var brickNumber;
        if(floorValue<=10){
        return (floorValue*15)*1000;
        }
        else if(floorValue<=20){
            return ((10*15)+(floorValue-10)*12)*1000;
        }
        else{
            return ((10*15)+(10*12)+(floorValue-20)*10)*1000;
        }
        
        }
        //Tiny Friends
        function tinyFriend(allFriends){
            var min=allFriends[0];
            
        for(var i=0;i<allFriends.length;i++){
            if(min.length>allFriends[i].length){
                min=allFriends[i];
            }
        }
        return min;
        }
//All Inputs
    //feet inputs
    var feet=10
    //wood calculators inputs
    var chairNumber= 10;
    var tableNumber= 3;
    var khatNumber= 2;
    //Bricks Calculators inputs
    var floorNumber= 30;
    //tiny friends inputs
    var allFriends=["ifte","mahi","akash","ohi"];
//Body Part
        //feet to miles body
        if(feet<0){
            console.log("Invalid. Feet can't be negative");
        }
        else{
            var mile= feetToMile(feet);
            console.log(feet+" feets = "+mile.toPrecision(8)+" miles");
        }
    //wood calculator body
    if(chairNumber!=0||tableNumber!=0||khatNumber!=0){
        var woodNeeded = woodCalculator(chairNumber,tableNumber,khatNumber);
        console.log(woodNeeded+' Cubic Metere');
    }
    else{
        console.log("You have not select any furniture yet");
    }
    //Bricks Calculators body
    if(floorNumber<0){
        console.log("Invalid. Floor Number can't be less than zero");
    }
    else if(floorNumber==0){
        console.log("You have not any floor number");
    }
    else{
        var bricks=brickCalculator(floorNumber);
        console.log("Total Bricks Number = " +bricks);
    
    }
    //Tiny Friends Body
    if(allFriends.length==0){
        console.log("Amar kono bondhu nai :-)")
       }
       else{
           var chottoBondhu=tinyFriend(allFriends);
           console.log(chottoBondhu);
       }            

