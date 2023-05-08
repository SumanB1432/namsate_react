import {useRouteError} from "react-router-dom"

function Error (){
    const err = useRouteError();
    return (
        <div>
            <h3>OOPS! SOMETHING WENT WRONG</h3>
            <h2>{err.status+ " : "+ err.statusText}</h2>
        </div>
    )
}
export default Error;