function FileDropzone({ handleImageChange }) {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="relative  min-md:mx-auto mb-1 flex items-center justify-center w-full"
      onDrop={handleImageChange}
      onDragOver={handleDragOver}
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col h-48 md:h-72 items-center justify-center w-[100%] border-2 bg-gray-800 border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50  border-gray-600 hover:border-gray-500 hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 md:h-16 min-md:w-16 mb-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm min-md:text-lg text-gray-400">
            <span className="font-semibold min-md:font-bold">
              Click to upload image
            </span>{" "}
            or drag and drop
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
}

export default FileDropzone;
