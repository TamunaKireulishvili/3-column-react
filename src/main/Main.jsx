
import { Button } from '../button/Button'
export function Main(props){
    return(
        <div className={`cars-card ${props.color}`}>
            <img className="car" src={props.car} alt="car-screens"
            ></img>
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.description}</p>
                     <Button 
                     />
                     
                     

        </div>
        
        
    )
}