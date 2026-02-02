import { lazy, Suspense } from "react"

export function LazyLoading(){
    // Attaching the Component with lazy() method
    const Lazy = lazy(()=>import("./Lazy"))
    return(
        <Suspense fallback={<h1>Loading Page.......</h1>}>
            <Lazy/>
        </Suspense>
    )
}