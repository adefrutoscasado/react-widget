import React from 'react';

import { useToggle } from './utils'
import Header from './components/Header'
import Body from './components/Body'
import { getParkingData } from './services/apiService'
import { usePromise } from './utils'
import { parkingResponseI } from './models'
import './App.scss'
import cn from 'classnames'

interface Props {
  parkingId?: string
  city?: string
}

const App = ({
  parkingId = '',
  city = ''
}: Props) => {
  const [isOpen, toggle] = useToggle(true)
  const [parking, fetching, error] = usePromise(getParkingData) as [parkingResponseI, boolean, any]
  const loaded = !fetching && !error

  return (
    <div className={cn('card')}>
      {fetching &&
        <div className={cn('center')}>Loading</div>
      }
      {error &&
        <div className={cn('center')}>There was an error trying to retrieve data</div>
      }
      {loaded && <>
        <Header
          text={`${parking.dictionary.bookYourParking} ${city}`} 
          onClickShowMore={toggle}
          isOpen={isOpen}
        />
        {isOpen && (
          <Body
            title = {parking.dictionary.featuresTitle}
            list = {parking.vendor.features}
            image = {parking.vendor.map}
            items = {parking.parkings}
            dictionary = {parking.dictionary}
          />
        )
        }
      </>}
    </div>
  );
}

export default App;
