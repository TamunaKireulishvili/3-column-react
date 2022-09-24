import { Main } from '../main/Main'
import ImageSedan from '../image/icon-sedans.svg'
import ImageSuvs from '../image/icon-suvs.svg'
import ImageLuxury from '../image/icon-luxury.svg'
export function Body(props) {
    return (
        
        <div className="body">
            <Main 
            title="SEDANS"
            description="Choose a sedan for its
            affordability and excellent
            fuel economy. Ideal for
            cruising in the city or on
            vour next road trip."
            car={ImageSedan}
            color="orange"
            
            
            
            />
            <Main 
            title="SUVS"
            description="Take an SUV for its spacious
            interior, power, and
            versatility. Perfect for your
            next family vacation and
            off-road adventures."
            car={ImageSuvs}
            color="cyan"
            
            
            

            />
            <Main 
            title="LUXURY"
            description="Cruise in the best car brands
            without the bloated prices.
            Enjoy the enhanced comfort
            of a luxury rental and arrive
            in style."
            car={ImageLuxury}
            color="dark-cyan"
            
            />
            </div>

    )
        
    
}