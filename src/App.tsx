import React from 'react';
import './App.css';
import { useToggle } from './utils'
import VendorAreaHeader from './components/VendorAreaHeader'
import Feature from './components/Feature'
import { getParkingData } from './services/apiService'
import { usePromise } from './utils'
import { parkingResponseI, parkingSlot } from './models'


// TODO: Receive parking slot by props
const App: React.FC = (props: any) => {
  const [isOpen, toggle] = useToggle(true)
  const [parking, fetching, error] = usePromise(getParkingData) as [parkingResponseI, boolean, any]
  
  if (fetching) return <div>Loading</div>
  if (error) return <div>Error</div>

  return (
    <div className="parkingWidget">
      <VendorAreaHeader 
        text={`${parking.dictionary.bookYourParking} Milano`} 
        onClickShowMore={toggle} 
      />
      {isOpen &&
        <div>
          <div>
            {parking.dictionary.featuresTitle}
          </div>
          <div>
            <span>
              <img src={parking.vendor.map}></img>
            </span>
            <span>
              {parking.vendor.features.map((f: string) => <Feature text={f}/>)}
            </span>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
