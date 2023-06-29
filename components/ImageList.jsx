// // import Image from "next/image";

// // const getImages = async () => {
// //   try {
// //     await fetch("http://localhost:3000/api/upload", {
// //       cache: "no-store",
// //     });

// //     if (!res.ok) {
// //       throw new Error("failed to fetch images");
// //     }
// //     return res.json();
// //   } catch (error) {
// //     console.log("error loading Images");
// //   }
// // };
// // export default async function ImageList() {
// //   const data = await getImages();

// //   return (
// //     <div className="flex items-center justify-center gap-4">
// //       <div>
// //         {/* {data.map((file) => (
// //           <div>{file}</div>
// //         ))} */}
// //       </div>
// //       <div>Image list2</div>
// //     </div>
// //   );
// // }
// "use client";
// import Image from "next/image";
// import useSWR from "swr";
// import { useState, useEffect } from "react";

// // const getImages = async () => {
// //   const fetcher = (...args) => fetch(...args).then((res) => res.json());

// //   const { data, error, isLoading } = useSWR("/api/upload", fetcher);
// //   console.log(data);
// //   try {
// //     await fetch("http://localhost:3000/api/upload");

// //     if (!res.ok) {
// //       throw new Error("failed to fetch images");
// //     }
// //     return res.json();
// //     // const response = res.json
// //   } catch (error) {
// //     console.log("error loading Images");
// //   }
// // };
// // };
// export default async function ImageList({ images }) {
//   //   const [images, setImages] = useState({null});
//   //   //   getImages();
//   //   //   console.log(data);

//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //       fetch("http://localhost:3000/api/upload")
//   //         .then((res) => res.json())
//   //         .then((data) => setImages(data));
//   //     };
//   //     fetchData();
//   //   }, []);
//   console.log(images);
//   return (
//     <div className="flex items-center justify-center gap-4">
//       <div>
//         {/* {data.map((file) => (
//           <div>{file}</div>
//         ))} */}
//       </div>
//       <div>Image list2</div>
//     </div>
//   );
// }
