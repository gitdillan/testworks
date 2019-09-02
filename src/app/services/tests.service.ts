import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  
  magics=[

    {mname:'UX UI Design', micon:'design.svg', mcontent:'Interactive and responsive content enable better user experience in every device. Genie always gives you the most user friendly experience that is enjoyable for the end user.'},
    {mname:'Development', micon:'bug.svg', mcontent:'Genie has the world class design and coding experience. Whatever be you requirement; Genie knows how to make it work in your website.'},
    {mname:'Branding & Marketing', micon:'search.svg', mcontent:'Use Genie’s innovative products to boost your business and improve your brand value. Genie comes up with most subtle and effective way to enhance your business.'}
  ]

  constructor() {}
}
