function age(){
    var y1 = document.getElementById("byear").value;

    var date = new Date();
    var y2 =date.getFullYear();
    if(y2>y1){
        var y = y2-y1;
    }else{
        alert('Enter Valid Birth year');
    }

   
    document.getElementById("answer").value=y;

}
   



