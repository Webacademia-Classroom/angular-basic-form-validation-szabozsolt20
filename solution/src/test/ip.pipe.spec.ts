import { IpPipe } from '../app/pipe/ip.pipe';
import { customers } from './customers';

describe('IpPipe', () => {
  it('create an instance', () => {
    const pipe = new IpPipe();
    expect(pipe).toBeTruthy();
  });

  it('should work', () => {
    const pipe = new IpPipe();
    expect(pipe.transform(customers, '2.162')).toEqual([{
      "id": 10,
      "name": "Gustie Bulfield",
      "email": "gbulfield9@tripadvisor.com",
      "address": "53 Pawling Parkway",
      "ip_address": "2.162.82.163",
      "active": true
    }]);
  });
});
