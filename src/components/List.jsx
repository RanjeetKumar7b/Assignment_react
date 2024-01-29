const List = () => {
  const data = [
    {
      id: 1,
      social_link: "timesonline.co.uk",
      prefix: "Uz3Uq87",
      tags: [
        "Technology", 
        "Fashion", 
        "Food", 
        "Travel",
        "Sports", 
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance"
      ],
      selectedTags: ["Technology", "Fashion", "Food", "Travel"],
    },
    {
      id: 2,
      social_link: "state.gov",
      prefix: "PwT2wMc",
      tags: [
        "Technology", 
        "Fashion", 
        "Food", 
        "Travel",
        "Sports", 
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance"
      ],
      selectedTags: ["Technology", "Fashion"],
    },
    {
      id: 3,
      social_link: "microsoft.com",
      prefix: "5leG2TS",
      tags: [
        "Technology", 
        "Fashion", 
        "Food", 
        "Travel",
        "Sports", 
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance"
      ],
      selectedTags: ["Technology", "Fashion", "Food", "Travel"],
    },
    {
      id: 4,
      social_link: "www.google.pl",
      prefix: "NNq9FXo",
      tags: [
        "Technology", 
        "Fashion", 
        "Food", 
        "Travel",
        "Sports", 
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance"
      ],
      selectedTags: ["Technology", "Fashion", "Food", "Travel"],
    },
    {
      id: 5,
      social_link: "newyorker.com",
      prefix: "Z9i2o9o",
      tags: [
        "Technology", 
        "Fashion", 
        "Food", 
        "Travel",
        "Sports", 
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance"
      ],
      selectedTags: ["Technology", "Fashion", "Food", "Travel"],
    },
  ];

  return (
    <>
      <h1 className="sm:text-xl sm:font-semibold font-semibold ml-12 sm:ml-28">
        Uploads
      </h1>
      <div className=" h-[464px] sm:h-[497px] mb-10 w-[312px] sm:w-max mx-auto overflow-scroll sm:overflow-hidden rounded-md sm:p-4 bg-[#F5F5F5] ">
        <table className="bg-[#F5F5F5] border-spacing-y-5 border-separate sm:w-full  ">
          <thead className="p-4">
            <tr className="bg-[#F5F5F5]">
              <th className="sticky sm:static left-[-1px] pl-[16px] bg-[#F5F5F5]">
                SI No.
              </th>
              <th>Links</th>
              <th>Prefix</th>
              <th>Add Tags</th>
              <th>Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val) => (
              <tr key={val.id} className="bg-white m-4 ">
                <td className="sticky sm:static rounded-l-md sm:bg-white bg-[#F5F5F5] left-[-1px]  p-[16px]">
                  {val.id}
                </td>
                <td className="bg-whit p-4">
                  <a
                    className=" text-blue-500 underline"
                    href={`https://${val.Links}`}
                    target="#blank"
                  >
                    {val.social_link}
                  </a>
                </td>
                <td className="bg-white p-4">{val.prefix}</td>
                <td className="bg-white  p-4">
                  <select>
                    <option value="none" selected disabled hidden>
                      Select Tag
                    </option>
                    {val.tags.map((linkVal, index) => (
                      <option key={index}>{linkVal}</option>
                    ))}
                  </select>
                </td>
                <td className=" rounded-r-md bg-white flex gap-1   p-4 ">
                  {val.selectedTags.map((selTags) => (
                    <span className="bg-blue-500 flex items-center  text-white p-1 gap-1  text-sm rounded w-max">
                      {selTags}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
