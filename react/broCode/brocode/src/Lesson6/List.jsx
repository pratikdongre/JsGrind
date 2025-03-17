function List({items = [], category = "anonymous"}){
    // const fruits = ['apple','guava','banana','chocolate','icecream','orange'];

    // const fruits = [{id:0,name : 'apple', calories : 95},
    //     {id:1 ,name : 'guava', calories : 95},
    //     {id:2 ,name : 'banana', calories : 101},
    //     {id:3 ,name : 'chocolate', calories : 150},
    //     {id:4 ,name : 'icecream', calories : 140},
    //     {id:5 ,name : 'orange', calories : 56}]
                    
    // fruits.sort();

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // alphabetically 
    // fruits.sort((a,b) => b.name.localeCompare(a.name));// reverse alphabetically

    // fruits.sort((a,b) => a.calories - b.calories ); // number 
    // fruits.sort((a,b) => b.calories - a.calories); // reverse number 

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    // const category = category;
    const itemList = items;

    let listItem = itemList.map(item => {
       
        return <li key={item.id} className="list-group-item lead bg-danger text-light aling-align-items-center">
            <span className='fw-bold'>{item.name} :- </span>
            <span className='text-dark'>{item.calories}</span></li>
      
       
    })





    // let listItem = fruits.map(fruit => {
       
    //     return <li key={fruit.id} className="list-group-item lead bg-danger text-light aling-align-items-center">
    //         <span className='fw-bold'>{fruit.name} :- </span>
    //         <span className='text-dark'>{fruit.calories}</span></li>
      
       
    // })

    //  listItem = lowCalFruits.map(lowCalFruit => {
       
    //     return <li key={lowCalFruit.id} className="list-group-item lead bg-danger text-light aling-align-items-center">
    //         <span className='fw-bold'>{lowCalFruit.name} :- </span>
    //         <span className='text-dark'>{lowCalFruit.calories}</span></li>
      
       
    // })

    // listItem = highCalFruits.map(highCalFruit => {
       
    //     return <li key={highCalFruit.id} className="list-group-item lead bg-danger text-light aling-align-items-center">
    //         <span className='fw-bold'>{highCalFruit.name} :- </span>
    //         <span className='text-dark'>{highCalFruit.calories}</span></li>
      
       
    // })

    return <> <h2>{category}</h2>  
    <ul className="list-group list-group-flush" >{listItem}</ul>
    </>;

   
}

export default List