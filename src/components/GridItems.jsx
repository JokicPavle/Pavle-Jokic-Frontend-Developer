import React, { useEffect, useState } from "react";
import { ItemPopup } from "./ItemPopup";
import Pagination from "./Pagination";
import "../App.css";

export const GridItems = () => {
  const [data, setData] = useState([]);
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  const [searchCapsulesValue, setSearchCapsulesValue] = useState("");
  const [searchOriginalLaunchValue, setSearchOriginalLaunchValue] =
    useState("");
  const [searchTypeValue, setSearchTypeValue] = useState("");

  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const searchCapsules = (e) => {
    const searchValue = e.target.value;
    setSearchCapsulesValue(searchValue);
    const filteredStatus = data.filter((item) =>
      item.status.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filteredStatus);
  };

  const searchOriginalLaunch = (e) => {
    const searchValue = e.target.value;
    setSearchOriginalLaunchValue(searchValue);
    const filteredOriginalLaunch = data.filter((item) => {
      return item.original_launch && item.original_launch.includes(searchValue);
    });
    setFilteredItems(filteredOriginalLaunch);
  };

  const searchType = (e) => {
    const searchValue = e.target.value;
    setSearchTypeValue(searchValue);
    const filteredType = data.filter((item) =>
      item.type.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filteredType);
  };

  const clearSearch = () => {
    setSearchCapsulesValue("");
    setSearchOriginalLaunchValue("");
    setSearchTypeValue("");
    setFilteredItems(data);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredItems.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredItems(data);
      })
      .catch((error) => {
        setData(["An Error Happened: ", error]);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentCapsules = filteredItems.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <>
      <div>
        <div className="block sm:grid-cols-1 text-center xl:flex xl:flex-row xl:justify-center flex-col md:grid md:grid-cols-2 md:ml-4 xl:items-center my-12 mb-10">
          <div>
            <input
              onChange={(e) => {
                setSearchCapsulesValue(e.target.value);
                searchCapsules(e);
              }}
              value={searchCapsulesValue}
              className="text-gray-900 sm:w-[300px] py-2 px-4 mx-6 my-6 border-2 rounded-2xl focus:border-orange-500 focus:outline-none"
              type="text"
              placeholder="Search Capsule Status"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setSearchOriginalLaunchValue(e.target.value);
                searchOriginalLaunch(e);
              }}
              value={searchOriginalLaunchValue}
              className="text-gray-900 sm:w-[300px] py-2 px-4 mx-6 my-6 border-2 rounded-2xl focus:border-orange-500 focus:outline-none"
              type="text"
              placeholder="Search Original Launch"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setSearchTypeValue(e.target.value);
                searchType(e);
              }}
              value={searchTypeValue}
              className="text-gray-900 sm:w-[300px] py-2 px-4 mx-6 my-6 border-2 rounded-2xl focus:border-orange-500 focus:outline-none"
              type="text"
              placeholder="Search Type"
            />
          </div>
          <div>
            <button
              onClick={clearSearch}
              className="border rounded-xl mt-2 py-2 px-2  sm:mt-6 md:mt-0 hover:border-yellow-600 w-[220px] sm:w-[300px]"
            >
              Clear
            </button>
          </div>
        </div>
        <div className="mx-auto sm:grid sm:gap-6 px-10 sm:grid-cols-3 relative md:grid-cols-3 lg:grid-cols-4 lg:h-[300px]">
          {currentCapsules.map((capsule, indx) => (
            <button key={indx} onClick={() => setSelectedCapsule(capsule)}>
              <div className="border h-[280px] my-2 border-2xl border-orange-500 p-4 rounded-3xl text-left hover:scale-105 duration-300 md:h-[320px] 2xl:h-[220px]">
                <p className="my-1">
                  <span className="font-bold">Serial Number: </span>
                  {capsule.capsule_serial}
                </p>
                <p className="my-1">
                  <span className="font-bold">Type: </span>
                  {capsule.type}
                </p>
                <p className="my-1">
                  <span className="font-bold">Status: </span>
                  {capsule.status}
                </p>
                <p className="my-1">
                  <span className="font-bold">Original Launch: </span>
                  {capsule.original_launch}
                </p>
                {capsule.details ? (
                  <p className="my-1">
                    <span className="font-bold">Description: </span>
                    {capsule.details}
                  </p>
                ) : (
                  <p>No description available</p>
                )}
              </div>
            </button>
          ))}
        </div>
        <Pagination
          length={filteredItems.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
      {selectedCapsule && (
        <ItemPopup
          capsule={selectedCapsule}
          onClose={() => setSelectedCapsule(null)}
        />
      )}
    </>
  );
};
