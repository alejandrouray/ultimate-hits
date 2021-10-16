import { Genre } from "../../utils/types"
import { useRouter } from "next/router"
import { useState } from "react"

interface ShowProps {
  genre: Genre
  url: string
}

function Show(props: ShowProps) {
  const router = useRouter()
  const [genre, setGenre] = useState<Genre>(props.genre)

  const handleComplete = async () => {
    if (!genre.title) {
      const newGenre: Genre = { ...genre, title: 'ACTUALIZADO' }

      await fetch(props.url + "/" + genre._id, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGenre),
      })
      setGenre(newGenre)
    }
  }

  const handleDelete = async () => {
    await fetch(props.url + "/" + genre._id, {
      method: "delete",
    })
    router.push("/")
  }

  return (
    <div>
      <h1>{genre.title}</h1>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
      <button
        onClick={() => {
          router.push("/")
        }}
      >
        Go Back
      </button>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const res = await fetch(process.env.API_URL + "/" + context.query.id)
  const genre = await res.json()

  return { props: { genre, url: process.env.API_URL } }
}

export default Show