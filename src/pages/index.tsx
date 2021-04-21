export default function Home(props) {
  return (
    <h1>Hello</h1>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  const EIGHT_HOURS = 60 * 60 * 8

  return {
    props: {
      episodes: data
    },
    revalidate: EIGHT_HOURS,
  }
}
