import Naveen from "../Image/Marvel.jpg"
import Audio from "../Audio/Audio2.mp3"
import Video from "../Video/Video1.mp4"
import Data from "../Components/JSON DATA/Data.json"

export default function ImageInserting(){
    return(
        <>
        <h1>Image Adding from the Public Folder</h1>
        <img src="Car1.jpg" style={{position:"relative" ,left:"70px"}}></img>

        <h2>Image Adding through ES6 way</h2>
        <img src={Naveen} style={{position:"relative" ,left:"150px"}}></img>
       
       <h3>Audio inserting by public folder</h3>
       <audio controls style={{position:"relative" ,left:"200px"}}>
        <source src="Audio1.mp3"></source>
       </audio>

       <h4>Audio Inserting through ES6 way</h4>
       <audio controls style={{position:"relative" ,left:"400px"}}>
        <source src={Audio}></source>
       </audio>

       <h3>Video including through Public Folder</h3>
       <video controls width="300" height="200" style={{position:"relative" ,left:"600px"}}>
        <source src="Christmas.mp4"></source>
       </video>

        <h4>Video inserting through ES6 way</h4>
        <video controls width="300" height="200" style={{position:"relative" ,left:"900px"}}>
            <source src={Video}></source>
        </video>

        <div style={{display:"flex"}}>
            {
                Data.map((data)=>(
                    <div  key={data.id} style={{border:"2px solid blue", backgroundColor:"yellow", color:"black", textAlign:"center", padding:"10px", margin:"10px", width:"200px", height: "150px", borderRadius:"10px"}}>
                    <p>{data.name}</p>
                    <p>{data.email}</p>
                    <p>{data.password}</p>
                    <p>{data.mobileno}</p>
                    </div>
                ))
            }
        </div>
        </>
    )
}