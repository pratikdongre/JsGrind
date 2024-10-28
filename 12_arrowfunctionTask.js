//26

 let ask = (question,yes,no) =>{
    if(confirm(question)) yes();
    else no();
}


ask("do you agree",
    ()=> {alert("okay");},
    ()=>{alert("pressed cancel");})