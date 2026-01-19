import Image from "next/image";

const Home = async () => {
  const res = await fetch("http://localhost:8080/api/v1/movies", {
    cache: "no-store", // or next: { revalidate: 60 }
  });
  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }
  const movies = await res.json();
  console.log(movies)
  return (
    <div className=''>
      
    </div>
  );
}

export default Home;
