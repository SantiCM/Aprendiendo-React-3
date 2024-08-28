export interface Comment {
  title: string
  message: string
  preview?: boolean
}

export interface CommentWithId extends Comment {
  id: string
}

// ApiKey could be public as service is 100% free
//const apiKey = '$2a$10$ghE/PyFj65.o5.e0muJgxumwhf7D7KEslHQ4hUtLIu9ixiTnZ4iUm'

export const getComments = async () => {
  const response = await fetch('https://api.jsonbin.io/v3/b/66cd22fbe41b4d34e425ba95', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Key': '$2a$10$hdxHF3U0bjgjTq9SBqjKfeNEWO5EiVU1.Qc1SzkJXUNaHDWwdy/..',
      'X-Master-Key': '$2a$10$ghE/PyFj65.o5.e0muJgxumwhf7D7KEslHQ4hUtLIu9ixiTnZ4iUm'
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch comments.')
  }

  const json = await response.json()
  return json?.record
}

// const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms))

export const postComment = async (comment: Comment) => {
  const comments = await getComments()

  const id = crypto.randomUUID()
  const newComment = { ...comment, id }
  const commentsToSave = [...comments, newComment]

  const response = await fetch('https://api.jsonbin.io/v3/b/66cd22fbe41b4d34e425ba95', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Key': '$2a$10$hdxHF3U0bjgjTq9SBqjKfeNEWO5EiVU1.Qc1SzkJXUNaHDWwdy/..',
      'X-Master-Key': '$2a$10$ghE/PyFj65.o5.e0muJgxumwhf7D7KEslHQ4hUtLIu9ixiTnZ4iUm'
    },
    body: JSON.stringify(commentsToSave)
  })
  if (!response.ok) {
    throw new Error('Failed to post comment.')
  }
  return newComment
}
