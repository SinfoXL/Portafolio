
import '../Tool/Tool.css'

export default function Tool(props){
    return(
            <div className='container-tool'>
                <img src={props.Logo} alt="logo" />
                  <h4>{props.name}</h4> 
            </div>
    )
}