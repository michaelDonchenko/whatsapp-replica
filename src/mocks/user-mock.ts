import { User } from '../types/user'
import MyUser from '../assets/images/my-user.jpg'
import User1 from '../assets/images/user1.jpg'
import User2 from '../assets/images/user2.jpg'
import User3 from '../assets/images/user3.jpg'

export const user: User = {
  username: 'my user',
  imgUrl: MyUser,
  contacts: [
    {
      imgUrl: User1,
      contactName: 'user1',
      lastConnected: 'yestarday',
      unreadMessages: 3,
      messages: [
        {
          createdAt: '02:00',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'my user',
        },
        {
          createdAt: '02:02',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'my user',
        },
        {
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
      unreadMessages: 0,
      messages: [
        {
          createdAt: '04:30',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'user2',
        },
        {
          createdAt: '04:31',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'user2',
        },
        {
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
          createdAt: '03:45',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'user3',
        },
        {
          createdAt: '03:50',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'user3',
        },
        {
          createdAt: '03:51',
          messageText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt lobortis sem eget laoreet.',
          sentFrom: 'my user',
        },
      ],
    },
  ],
}
