import { User } from '../types/user'
import MyUser from '../assets/images/my-user.jpg'
import User1 from '../assets/images/user1.jpg'
import User2 from '../assets/images/user2.jpg'
import User3 from '../assets/images/user3.jpg'
import User4 from '../assets/images/user4.jpg'
import User5 from '../assets/images/user5.jpg'

export const user: User = {
  username: 'my user',
  imgUrl: MyUser,
  contacts: [
    {
      imgUrl: User1,
      contactName: 'user1',
      lastConnected: 'yestarday',
      unreadMessages: 1,
      messages: [
        {
          id: 'idjsidsjisa',
          createdAt: '02:00',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'my user',
        },
        {
          id: 'idjsidsjisfdfdda',
          createdAt: '02:02',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'my user',
        },
        {
          id: 'idjsidsjidfsdfdfdsfsa',
          createdAt: '02:03',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'user1',
        },
      ],
    },
    {
      imgUrl: User2,
      contactName: 'user2',
      lastConnected: 'monday',
      unreadMessages: 3,
      messages: [
        {
          id: 'idjsfdfddfdsfsa',
          createdAt: '04:30',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'user2',
        },
        {
          id: 'idjsidsjidfsdrewrrerewfdfdsfsa',
          createdAt: '04:31',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'user2',
        },
        {
          id: 'idjsidsjirewrwerwedfsdfdfdsfsa',
          createdAt: '04:35',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'user2',
        },
      ],
    },
    {
      imgUrl: User3,
      contactName: 'user3',
      lastConnected: 'monday',
      unreadMessages: 0,
      messages: [
        {
          id: 'idjsidsjdsadasasidfsdfdfdsfsa',
          createdAt: '03:45',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'user3',
        },
        {
          id: 'idjsidsjidsdssdfsdfdfdsfsa',
          createdAt: '03:50',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'user3',
        },
        {
          id: 'idjsadsassidsjdsdasdsdidfsdfdfdsfsa',
          createdAt: '03:51',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'my user',
        },
      ],
    },
    {
      imgUrl: User4,
      contactName: 'test1',
      lastConnected: 'yestarday',
      unreadMessages: 0,
      messages: [
        {
          id: 'idjsidsjisa',
          createdAt: '02:00',
          messageText: 'Lorem ipsum dolor sit amet, consectetur',
          sentFrom: 'my user',
        },
        {
          id: 'idjsidsjisfdfdda',
          createdAt: '02:02',
          messageText: 'Lorem ipsum dolor sit amet',
          sentFrom: 'my user',
        },
        {
          id: 'idjsidsjidfsdfdfdsfsa',
          createdAt: '02:03',
          messageText: 'Lorem ipsum',
          sentFrom: 'my user',
        },
      ],
    },
    {
      imgUrl: User5,
      contactName: 'test2',
      lastConnected: 'yestarday',
      unreadMessages: 0,
      messages: [
        {
          id: 'idjsidsjisa',
          createdAt: '02:00',
          messageText:
            'consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'test2',
        },
        {
          id: 'idjsidsjisfdfdda',
          createdAt: '02:02',
          messageText: 'Lorem ipsum dolor sit amet,',
          sentFrom: 'test2',
        },
        {
          id: 'idjsidsjidfsdfdfdsfsa',
          createdAt: '02:03',
          messageText: 'Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'my user',
        },
      ],
    },
  ],
}
