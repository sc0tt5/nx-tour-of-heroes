import { Injectable } from '@nestjs/common';

import { ContentType, FieldType, PageOne, PageTwo } from '@nx-demo/shared/models';

@Injectable()
export class DemoOneService {
  getPages(param: string): PageOne | PageTwo {
    const pages = [
      {
        param: 'page-one',
        name: 'Page 1',
        content: 'Page 1 content...',
        accordionItems: [
          { header: 'header 1', content: { type: ContentType.STRING, body: 'content 1' } },
          { header: 'header 2', content: { type: ContentType.STRING, body: 'content 2' } },
          { header: 'header 3', content: { type: ContentType.STRING, body: 'content 3' } }
        ]
      },
      {
        param: 'page-two',
        name: 'Page 2',
        content: 'Page 2 content...',
        accordionItems: [
          {
            header: 'header 4',
            content: {
              type: ContentType.FORM,
              body: [
                {
                  name: 'firstName',
                  type: FieldType.TEXTFIELD,
                  placeholder: 'First Name',
                  value: 'Bill',
                  required: true
                },
                {
                  name: 'lastName',
                  type: FieldType.TEXTFIELD,
                  placeholder: 'Last Name',
                  value: 'Gates',
                  required: true
                },
                {
                  name: 'favoriteFood',
                  type: FieldType.SELECTDROPDOWN,
                  label: 'Favorite Food',
                  options: ['Ice Cream', 'Pizza', 'Tacos'],
                  placeholder: 'Select food',
                  value: 'Pizza'
                },
                {
                  name: 'favoriteColor',
                  type: FieldType.SELECTDROPDOWN,
                  label: 'Favorite Color',
                  options: ['Red', 'Blue', 'Yellow'],
                  placeholder: 'Select color',
                  value: 'Blue'
                }
              ]
            }
          },
          { header: 'header 5', content: { type: ContentType.STRING, body: 'content 5' } },
          { header: 'header 6', content: { type: ContentType.STRING, body: 'content 6' } }
        ]
      }
    ];

    return (<any>pages).find((page: PageOne | PageTwo) => page.param === param);
  }
}
