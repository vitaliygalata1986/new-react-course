import { Comment } from './Comment';

export function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}
