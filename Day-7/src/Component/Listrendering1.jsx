function Listrendering1(){
    const movies = ["Hi nana", "OG", "July", "Avatar", "Varanasi", "salar"]
    return(
        <>
        <ul type="none">{
            movies.map((name, index)=>(
                <li key={index}>{name}</li>
            ))
            }</ul>
        </>
    )
}
export default Listrendering1;