"use server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const Cloudinary = () => {
  const uploadFile = async (formData) => {
    "use server";
    try {
      console.log("create");
      const file = formData.get("file");

      const bytes = await file.arrayBuffer();
      const buffer = new Uint8Array(bytes);
      await new Promise((resolve, reject) => {
        const uploaded_file = cloudinary.uploader
          .upload_stream(
            {
              tags: ["file-upload-in-nextjs"],
            },
            function (error, result) {
              if (error) {
                console.log("Cloudinary error", error);
                reject(error);
                return;
              }
              resolve(result);
            }
          )
          .end(buffer);
        console.log(uploaded_file);
      }).then((result) => console.log(result))
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <>
      <div>
        <form
          className="p-5 rounded border-dotted border-2"
          action={uploadFile}
        >
          <input type="file" name="file" id="file" />
          <br />
          <button
            type="submit"
            className="bg-black text-white rounded py-2 px-5 mt-2"
          >
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Cloudinary;
