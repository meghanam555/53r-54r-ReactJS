function Listrendering2(){
    const products = [{
        name:"trousers",
        price:"1500"
    },{
        name: "kurthaset",
        price: "1500"
    },{
        name:"handbags",
        price:"2000"
    }, {
        name:"watch",
        price:"8000"
    }];
    return(
        <div>
            {
                products.map((product)=>(
                    <div>
                <h1 style={{backgroundColor:"black", color:"white", textAlign:"center"}}>{product.name}</h1>
                <h2 style={{backgroundColor:"orange", color:"red", textAlign:"center"}}>{product.price}</h2>
                </div>
                )
            )
            }
                
        </div>
    )
}
export default Listrendering2;