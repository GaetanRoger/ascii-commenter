import { CommentType } from './app/services/comments/comment-type';

const comments: CommentType[] = [
  {
    name: 'None',
    char: '',
    space: false
  },
  {
    name: 'C',
    char: '*',
    first: '/*',
    last: ' */',
    left: ' *'
  },
  {
    name: 'C++',
    char: '/',
    left: '//',
    right: '//'
  },
  {
    name: 'Python',
    char: '#'
  },
  {
    name: 'HTML',
    char: '-',
    first: '<!--',
    last: '  -->',
    left: '  --',
    right: '--'
  },
  {
    name: 'Visual Basic',
    char: '\''
  }
];

export default comments;
