// import { User } from '../models/User'
import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User('Alexandre', 'alexfingersb@gmail.com')
  expect(user.name).toEqual('Alexandre')
})
