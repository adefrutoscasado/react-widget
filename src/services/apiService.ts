import { parkingResponseI } from './../models'
import parkingResponse from './../mocks/parking/model.json'

/** 
 * Request parking data and its available slots
*/
export const getParkingData = (parkingId: string): Promise<parkingResponseI> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(parkingResponse as parkingResponseI)
        }, 250);
    })
}
