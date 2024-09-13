import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  return (
    <>
      <SkeletonTheme baseColor="#cbd5e0" highlightColor="#111827">
        <div className="bg-gray-900" style={{margin:"1rem"}}>
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap -m-4">
            <div
              className="p-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3"
              style={{ width: "18rem" }}
            >
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden p-2">
                  {" "}
                  <Skeleton  height={150} width={235} />
                  <div className="p-6">
                  
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1" style={{marginLeft:"-1.4rem"}}><Skeleton count={2} /></h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3"></h1>
                    <p className="leading-relaxed mb-3"></p>
                  </div>
                  <Skeleton count={5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
}
export default SkeletonCard;
