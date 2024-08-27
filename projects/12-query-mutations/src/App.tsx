import './App.css'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getComments, type CommentWithId, type Comment, postComment } from './service/comments'
import { FormInput, FormTextArea } from './components/Form'
import { Results } from './components/Results'

function App() {
  const { data, isLoading, error } = useQuery<CommentWithId[]>({
    queryKey: ['comments'],
    queryFn: getComments,
  })

  const queryClient = useQueryClient()

  const { mutate, isLoading: isLoadingMutation } = useMutation({
    mutationFn: postComment,
    onMutate: async (newComment) => {
      await queryClient.cancelQueries(["comments"])
      const prevComments = queryClient.getQueryData(["comments"])
      await queryClient.setQueryData(["comments"], (oldData?: Comment[]) => {
        const commentAdd = structuredClone(newComment)
        commentAdd.preview = true
        if (oldData == null) return [commentAdd]
        return [...oldData, commentAdd]
      })
      return { prevComments }
    },
    onSuccess: async (newComment) => {
      /*await queryClient.setQueryData(["comments", (oldData?: CommentWithId[]) => {
        if (oldData === null) return [newComment]
        return { ...oldData, newComment }
      }])*/
      /*await queryClient.invalidateQueries({
        queryKey: ["comments"]
      })*/
    },
    onError(error, variables, context) {
      console.log(error);
      if (context?.prevComments) {
        queryClient.setQueryData(["comments"], context?.prevComments)
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["comments"]
      })
    },
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (isLoadingMutation) return
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const title = formData.get("title")?.toString() ?? ''
    const message = formData.get("message")?.toString() ?? ''
    if (title !== '' && message !== '') {
      mutate({ title, message })
    }
  }

  return (
    <main className='grid h-screen grid-cols-1 sm:grid-cols-2'>
      <div className='col-span-1 p-8 bg-white'>
        {isLoading && <strong>Cargando...</strong>}
        {error != null && <strong>Algo ha ido mal</strong>}
        <Results data={data} />
      </div>
      <div className='col-span-1 p-8 bg-black'>
        <form className={`${isLoadingMutation ? 'opacity-40' : ''} block max-w-xl px-4 m-auto`} onSubmit={handleSubmit}>
          <FormInput />
          <FormTextArea />
          <button
            disabled={isLoadingMutation}
            type='submit' className='mt-4 px-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center mr-2 mb-2'
          >
            {isLoadingMutation ? 'Enviando comentario...' : 'Enviar comentario'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default App