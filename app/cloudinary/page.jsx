import { v2 as cloudinary } from "cloudinary";
import React from "react";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const Cloudinary = () => {
  const uploadFile = async (formData) => {
    "use server";
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
            <button
              type="submit"
              className="bg-black text-white rounded py-2 px-5 mt-2"
            >
              Upload
            </button>
          </form>
        </form>
      </div>
    </>
  );
};

export default Cloudinary;
