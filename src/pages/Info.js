import { useParams } from "react-router-dom"

export default function Info(){
    const {id} = useParams();

    return (
        <div>
            <p>Mais informações sobre o produto: {id}</p>
        </div>
    )
}