import { parkingResponseI } from './../models'
import parkingResponse from './../mocks/parking/model.json'

/** 
 * Request parking data and its available slots
*/
export const getParkingData = (): Promise<parkingResponseI> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(parkingResponse as parkingResponseI)
        }, 250);
    })
}
