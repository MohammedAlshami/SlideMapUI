import dynamic from 'next/dynamic'

function HomePage() {
  const Map = dynamic(
    () => import('@/components/Map/Map'), // replace '@components/map' with your component's location
    {
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  )
  return <Map />
}



export default HomePage

