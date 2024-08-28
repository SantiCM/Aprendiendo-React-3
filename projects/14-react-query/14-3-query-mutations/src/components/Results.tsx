import { CommentWithId } from '../service/comments'

export const Results = ({ data }: { data?: CommentWithId | CommentWithId[] }) => {
  return (
    <ul>
      <li>
        {Array.isArray(data) ? (
          data.map((comment) => (
            <article
              key={comment.id}
              className={`
                ${comment.preview ? 'bg-gray-400' : 'bg-white'}
                block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100
              `}
            >
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{comment.title}</h5>
              <p className='font-normal text-gray-700'>{comment.message}</p>
            </article>
          ))
        ) : (
          data && (
            <article
              key={data.id}
              className={`
                ${data.preview ? 'bg-gray-400' : 'bg-white'}
                block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100
              `}
            >
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{data.title}</h5>
              <p className='font-normal text-gray-700'>{data.message}</p>
            </article>
          )
        )}
      </li>
    </ul>
  )
}
