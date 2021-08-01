// capital letter name of file if it defines class
import faker from 'faker' // also install Type Defination files
import { Mappable } from './CustomMap'

export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `User Name ${this.name}`
  }
}
