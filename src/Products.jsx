


var product=[
    {id:1, title:'Product1',des:'abccvjhvcgvcb',cat:'ph'},
    {id:2, title:'Product2',des:'abccvjhvcgvcb',cat:'ph'},
    {id:3, title:'Product3',des:'abccvjhvcgvcb',cat:'tv'},
    {id:4, title:'Product4',des:'abccvjhvcgvcb',cat:'ph'},
    {id:5, title:'Product5',des:'abccvjhvcgvcb',cat:'ph'},
]

function Products()
{
  let data=product.filter((a)=>a.cat=='ph')
    return (
        <div>
            <ol>
                {data.map((a)=> (
                    <li key ={a.id}>{a.title}</li>
                ))}
            </ol>



        </div>


    )
}

export default Products