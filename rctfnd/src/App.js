import { useEffect, useState } from "react"

function App() {
  
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://newapp-963.herokuapp.com/article/")
      .then((res) => res.json())
      .then((data) => {
        setData(data.reverse());
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p className="text-center mt-[30%] text-3xl " > Loading... </p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <div className="p-5 lg:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {data.map((res) => (
          <div className="rounded overflow-hidden shadow-lg" key={res.id}>
            <img className="w-full" src={res.img_link} alt={res.title}></img>
            <div className="px-6 py-4 ">
              <p className="text-sm text-gray-600 flex items-center ">
                {res.source}
              </p>
              <a
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                href={res.art_link}
                target="_blank"
                rel="noreferrer"
              >
                {res.title}
              </a>
              <p className="mb-3 font-normal text-justify max-h-96 overflow-auto scrollbar">
                {res.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
