import React from "react";

const Cloudinary = () => {
  const uploadFile = async (formData) => {
    console.log("create");
    const file = formData.get("file");
    console.table(file);
  };

  return (
    <>
      <div>
        <form className="p-5 rounded border-dotted border-2">
          <form action={uploadFile}>
            <input type="file" name="file" id="file" />
            <br />
            <button type="submit">Upload</button>
          </form>
        </form>
      </div>
    </>
  );
};

export default Cloudinary;
