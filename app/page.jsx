"use client";

// import ImageList from "@/components/ImageList";
import Image from "next/image";
import useSWR from "swr";
import { useState, useEffect } from "react";
import axios from "axios";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [postImage, setPostImage] = useState({ title: "" });
  const [images, setImages] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // transform it to base64
  //   getImages();
  //   console.log(data);

  // const { data, error } = useSWR("/api/imageupload", fetcher);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, mutate, error, isLoading } = useSWR("/api/upload", fetcher);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBases64(file);
    console.log(base64);
    setPostImage({ ...postImage, title: base64 });
  };

  const handleUpload = async () => {
    try {
      await axios.post("/api/upload", postImage);
      console.log(postImage);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleUpload = async () => {
  //   console.log(postImage);
  //   if (!selectedFile) return;
  //   console.log(postImage);
  //   try {
  //     const response = await fetch("/api/upload", {
  //       method: "POST",
  //       body: postImage,
  //     });
  //     if (response.ok) {
  //       console.log("file uploaded successfuly! Frontend");
  //     } else {
  //       console.error("File upload failed.");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred during file upload:", error);
  //   }
  // };
  // const formData = new FormData();
  // formData.append("file", selectedFile)
  // console.log(formData);
  //   try {
  //     const response = await fetch("/api/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       console.log("File uploaded successfully! Front end");
  //       router.refresh();
  //     } else {
  //       console.error("File upload failed.");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred during file upload:", error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/upload");
      const { files } = await response.json();
      setImages(files);
    };
    fetchData();
  }, []);

  console.log(images);

  function convertToBases64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  return (
    <div className="flex max-w-6xl mx-auto min-h-screen items-center justify-center">
      <div className="left w-1/2">
        <input type="file" size="120" onChange={handleFileChange} />
        <button
          className="px-2 py-1 bg-slate-700 rounded-lg text-white ml-24"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
      <div className="right w-1/2">
        {/* <ImageList images={images} /> */}
        {/* {images?.map((image) => {
          <Image
            src={`data:image/${
              image.title.contentType
            };base64,${image.title.data?.toString("base64")}`}
            width="80"
            height="80"
          />;
        })} */}
        {images?.map((image) => {
          return (
            <div className="w-1/2 p-4 flex-wrap">
              <Image
                src={image.title}
                width="100"
                height="100"
                alt={image.id}
              />
            </div>
          );
        })}
        {/* {data.map((image) => {
          return (
            <div className="w-1/2 p-4 flex-wrap">
              <Image
                src={image.title}
                width="100"
                height="100"
                alt={image.id}
              />
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
