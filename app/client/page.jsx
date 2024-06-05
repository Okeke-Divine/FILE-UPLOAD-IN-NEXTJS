"use client";
import { useState } from "react";

const ClientUpload = () => {
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error(await res.text());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Client Component</h1>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
        /><br />
        <input type="submit" value="Upload" className="bg-blue-500 text-white rounded p-2 mt-2" />
      </form>
    </>
  );
};

export default ClientUpload;
