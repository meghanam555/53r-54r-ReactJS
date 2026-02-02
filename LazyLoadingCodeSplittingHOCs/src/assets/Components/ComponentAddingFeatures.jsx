export default function ComponentAddingFeatures(Original){
    return function EnhancedFunction(props){
        console.log("Component Added with new Features", Original.name);
        return <Original {...props}/>
    }
}