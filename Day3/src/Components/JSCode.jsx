import './JSCode.css'

var person = {
        name:"Shanmukh",
        age:31,
        city:"Goa",
        girlfriendstatus:"Unlimited"
    }

    var styling = {
        color : "blue",
        backgroundColor : "pink",
        padding : "30px",
        margin: "30px",
        textAlign : "center"
    } 
function JSCode(){
    
    return(
        <div>
        <h1 className="header1">Hello Everyone</h1>
        <p className="para1">{person.name} is {person.age}, staying in {person.city}, gfstatus is {person.girlfriendstatus}, so earely lookimg for Friends</p>
        <div>
           <h2 style={{color:'white', backgroundColor:'purple', textAlign:'center'}}>Today is Monday, Sunday Already Completed.</h2> 
           <h3 style={{textAlign:'end', color:'white', backgroundColor:'orange'}}>Tomorrow is Tuesday</h3>
        <div>
            <p style={styling}>Providing styling in the form of Objects</p>
        </div>
        </div>
        </div>
        
    )
}
export default JSCode;