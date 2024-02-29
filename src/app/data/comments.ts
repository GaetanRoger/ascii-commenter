import { CommentType } from '../services/comments/comment-type';

export const COMMENTS: CommentType[] = [
  {
    name: 'None',
    char: '',
    space: false,
  },
  {
    name: 'C',
    char: '*',
    first: '/*',
    last: ' */',
    left: ' *',
  },
  {
    name: 'C++',
    char: '/',
    left: '//',
    right: '//',
  },
  {
    name: 'Python',
    char: '#',
  },
  {
    name: 'HTML',
    char: '-',
    first: '<!--',
    last: '  -->',
    left: '  --',
    right: '--',
  },
  {
    name: 'Visual Basic',
    char: "'",
  },
];
