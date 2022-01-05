function timeToEat(myDate){
    const inputArr=myDate.split(" ")
    const result=[]
    let hour=0
    hourArr= inputArr[0].split(":")
    let min= +hourArr[1]
    const meal=[new Date(7*3600000).getTime(),new Date(12*3600000).getTime(),new Date(19*3600000).getTime()]

    if (inputArr[1][0] == 'p') {
        hour= parseInt(hourArr[0]) +12
    }else{
        hour= parseInt(hourArr[0])
    }

    const now=new Date(hour*3600000+min*60000).getTime()
    const minResult=meal.map((item) =>{
        return ((item - now)/60000);
    });

    const res=minResult.map((item,index)=>{
        return Math.floor(item/60)
    })
    return res  
}

console.log(timeToEat("5:50 a.m."))  //1:10
console.log(timeToEat("2:20 p.m."))  //4:40
console.log(timeToEat("6:00 p.m."))  //1
console.log(timeToEat("9:10 p.m."))  //9:50