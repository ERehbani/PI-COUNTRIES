import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { countryDetail } from "../../redux/actions"


const Detail = () => {
    
    const {id} = useParams()
    const detail = useSelector(state => state.detail)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(countryDetail(id))
    }, [dispatch, id])
    

    return (
        <div>
                <div>
                    <h1>{detail.name}</h1>
                </div>
        </div>
    )

}


export default Detail