import { Genre } from "../utils/types"
import Link from "next/link"

interface IndexProps {
  genres: Array<Genre>
}

function Index(props: IndexProps) {
  const { genres } = props

  return (
    <div>
      <h1 className="bg-red-400">My Todo List</h1>
      <h2>Click On Todo to see it individually</h2>
      {/* MAPPING OVER THE TODOS */}
      {genres.map(t => (
        <div key={t._id}>
          <Link href={`/todos/${t._id}`}>
            <h3 style={{ cursor: "pointer" }}>
              {t.title}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

// GET PROPS FOR SERVER SIDE RENDERING
export async function getServerSideProps() {
  // get todo data from API
  const res = await fetch(process.env.API_URL as string)
  const genres = await res.json()

  // return props
  return {
    props: { genres },
  }
}

export default Index