import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

// behind the scene TS is checking whether USer is mappable or not
const user = new User()
const company = new Company()

// install @types/googlemaps: thats because we added global variable...we have to inform TS
// new google.maps.Map(document.getElementById('map'), {
//   zoom: 1,
//   center: {
//     lat: 0,
//     lng: 0,
//   },
// })

const customMap = new CustomMap('map')

// customMap.addUserMarker(user)
customMap.addMarker(user)
customMap.addMarker(company)
