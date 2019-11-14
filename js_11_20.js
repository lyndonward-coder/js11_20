function firstLast6(arry){
    var first = arry[1-1];
    var last = arry[arry.length-1];
    var result = "";
    if( first == 6 || last == 6 ){
        result = true
    }else{
        result= false
    }
    return result;
}

function has23(arry){
    var result = ""
    for(var i = 0; i < arry.length; i++){
        if(arry[i-1]==2 ||arry[i-1]==3 || arry[i]==3){
            result = true
        }else{
            result = false
        }
    }
    return result;
}

function fix23(arry){
    for(var i = 0; i < arry.length; i++){
        if(arry[i]== 2 && arry[i+1]== 3){
            arry[i+1] = 0
        }
    }
    return arry;
}

function countYZ(arry){
    var arry = arry + " ";
    var count = 0;
    for(var i = 0; i < arry.length; i++){
        if(arry[i] == "z" && arry[i+1] == " "){
            count += 1;
        }
        if (arry[i] == "Z" && arry[i+1]== " "){
            count += 1;
        }
        if(arry[i] == "y" && arry[i+1] == " "){
            count += 1;
        }
        if(arry[i]== "Y" && arry[i+1]== " "){
            count +=1;
        }
    }
    return count;
}

function endOther(letters1, letters2) {
    var result
    var lower1 = letters1.toLowerCase();
    var lower2 = letters2.toLowerCase();
    if(lower1.length > lower2.length) {
        var smallstring = lower2
        var bigstring = lower1
    }else{
        var smallstring = lower1
        var bigstring = lower2
    }
    var index = bigstring.indexOf(smallstring);
    var smalllength = smallstring.length;
    if(index == bigstring.length - smalllength ){
        result = true
    }else{
        result = false
    }
    return result
}

function  starOut(string){
    var newString = "";
    for(i = 0 ; i<string.length; i++) {
        if (string[i] != "*" && string[i-1] != "*" && string[i+1] != "*") {
            newString += string[i];
        }
    }
    return newString;
}

function getSandwich(string){
    var result
    var bread = "bread"
    var bread1 = string.indexOf(bread)
    var bread2 = string.lastIndexOf(bread)
if(bread1 == -1 || bread2 == bread1){
        result = ""
}else{
    result = string.substring(bread1 + bread.length, bread2)
}
return result;
}

function canBalance(arr){
    var count = 0;
    var innerCount =0 ;
    for(var i = 0; i<arr.length;i++){
        count += arr[i]
        for( var a = i + 1; a <arr.length; a++){
            innerCount += arr[a]
        }
        if(innerCount == count){
            return true;
        }
        innerCount = 0;
    }
    return false;
}

function countClumps(arr){
    var count = 0;
    for(var i = 0; i<arr.length; i++) {
        if (arr[i] == arr[i - 1] && arr[i] != arr[i + 1]) {
            count += 1
        }
    }
    return count;
}

function evenlySpaced(int1,int2,int3) {
    var min = Math.min(int1, int2, int3);
    var max = Math.max(int1, int2, int3);
    var mid = int1 + int2 + int3 - min - max;
    if (max - mid == mid - min) {
        return true;
    }
        return false;
}


function tester() {
    document.getElementById("output").innerHTML += firstLast6(true, false);
    document.getElementById("output").innerHTML += has23(true, false);
    document.getElementById("output").innerHTML += fix23([1,2,3]);
    document.getElementById("output").innerHTML += countYZ(['fez day']);
    document.getElementById("output").innerHTML += endOther(hello, ello);
    document.getElementById("output").innerHTML += starOut('smidlly');
    document.getElementById("output").innerHTML += getSandwich([1,1,1,2,1]);
    document.getElementById("output").innerHTML += canBalance([1,1,1,2,1]);
    document.getElementById("output").innerHTML += countClumps([1,1,1,2,1]);
    document.getElementById("output").innerHTML += evenlySpaced([2,4,6]);
    //test third method, etc
}
