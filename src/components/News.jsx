import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import SkeletonCard from "./SkeletonCard";

export default function News({ category, searchQuery, setProgress, apiKey }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (pageNumber) => {
    try {
      setProgress(20);
      let url = "";

      if (searchQuery) {
        url = `https://gnews.io/api/v4/search?q=${searchQuery}&apikey=${apiKey}`;
      } else {
        url = `https://gnews.io/api/v4/top-headlines?country=in&category=${category}&apikey=${apiKey}`;
      }

      setLoader(true);
      let data = await fetch(url);
      setProgress(40);

      if (!data.ok) {
        throw new Error(`Failed to fetch data: ${data.statusText}`);
      }

      let parsedData = await data.json();
      setLoader(false);
      setProgress(70);
      setArticles(parsedData.articles);
      setPage(pageNumber);
      setProgress(100);
      setError(null);
    } catch (error) {
      setLoader(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [category, searchQuery, page]);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "system-ui",
          fontWeight: "600",
          fontSize: "2rem",
          margin: "2%",
        }}
      >
        <span className="inline-block animate-color-move bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-indigo-500 bg-[length:400%_400%]">
          ACONEWS - Top Headlines
        </span>
        {category === "general" ? (
          <span className="inline-block animate-color-move ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-indigo-500 bg-[length:400%_400%]">
            From Various Categories
          </span>
        ) : (
          <>
            {" "}
            Regarding{" "}
            <span style={{ textShadow: "0 0 20px #667eea" }}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </>
        )}
      </h1>
      {loader && (
        <div
          className="flex flex-wrap"
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
      {error && <div>Error: {error}</div>}
      <div className="flex flex-wrap justify-center">
        {!loader &&
          articles.map((element) => (
            <div
              key={element.url}
              className="flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
            >
              <NewsItems
                title={element.title ? element.title.slice(0, 40) : ""}
                description={
                  element.description
                    ? element.description.slice(0, 75)
                    : "Description not provided for this news article."
                }
                newsURL={element.url}
                imgURL={element.image}
                date={element.publishedAt}
              />
            </div>
          ))}
      </div>
      <div className="flex justify-around mt-3 mb-10">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => fetchData(page - 1)}
          disabled={page <= 1 || loader}
        >
          &larr; Previous
        </button>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => fetchData(page + 1)}
          disabled={loader}
        >
          Next &rarr;
        </button>
      </div>
      <style jsx>{`
        @keyframes colorMove {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-color-move {
          animation: colorMove 4s linear infinite;
        }
      `}</style>
    </>
  );
}
