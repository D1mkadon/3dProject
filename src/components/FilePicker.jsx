import CustomButton from "./CustomButton";
const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col items-center">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload file
        </label>
        <p className="mt-2 filePickerText text-xs truncate">
          {file === "" ? "No file selected" : file.name}{" "}
        </p>
      </div>
      <div className="mt-4 flex gap-3 flex-wrap">
        <CustomButton
          type={"filled"}
          title={"Logo"}
          handleClick={() => readFile("full")}
          customStyles={"text-xs"}
        />
      </div>
    </div>
  );
};

export default FilePicker;
