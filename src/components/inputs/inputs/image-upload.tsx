// "use client";

// // React & next Imports
// import Image from "next/image";
// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import toast from "react-hot-toast";

// // Components
// import Input from "./input";

// // Assets
// import I from "@/../public/assets/icons/Icon.svg";
// import Delete from "@/../public/assets/icons/trash.svg";
// import upload from "@/../public/assets/icons/upload-icon.svg";

// // Formik Imports
// import { FormikValues } from "formik";

// // Services
// import { URL } from "@/services/api-base-urls";
// import { POST } from "@/services/axios-request-handler";
// import CardFrame from "../cards/card-frame";

// interface IProps {
//   error?: boolean;
//   name: string;
//   setFieldValue: FormikValues["setFieldValue"];
//   value: string | null;
// }

// const Upload = ({ name, error, setFieldValue, value }: IProps) => {
//   const [imageSrc, setImageSrc] = useState<string | null>(value);
//   const [fileName, setFileName] = useState<string>("");

//   React.useEffect(() => {
//     setImageSrc(value);
//   }, [value]);
//   const handleImageUpload = async (newFiles: File[]): Promise<void> => {
//     const file = newFiles[0];
//     const formData = new FormData();
//     formData.append("file", file);
//     setFileName(file.name);

//     try {
//       const response = (await POST(URL.UPLOAD_IMAGE, formData)) as {
//         image: string;
//       };
//       setImageSrc(response?.image);
//       setFieldValue(name, response?.image as string);
//       // setFieldValue(name, file.name);

//       toast.success("Image uploaded successfully!", {
//         position: "top-right",
//       });
//     } catch (error) {
//       toast.error("Image upload failed!", {
//         position: "top-right",
//       });
//     }
//   };

//   const onDeleteImage = () => {
//     setFieldValue(name, "");
//     setImageSrc("");
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: handleImageUpload,
//     accept: {
//       "image/jpeg": [],
//       "image/png": [],
//       "image/pdf": [],
//     },
//   });

//   return (
//     <>
//       {imageSrc ? (
//         <CardFrame
//           className="shadow-product-card-shadow flex items-center p-6"
//           {...getRootProps()}
//         >
//           <div className="relative cursor-pointer flex justify-between items-center w-full">
//             <div className="items-center flex gap-x-6">
//               <Image
//                 className="h-[120px] w-[120px] object-cover bg-cover rounded-lg"
//                 src={imageSrc}
//                 alt="profile"
//                 width={100}
//                 height={100}
//               />
//               <Input {...getInputProps()} className="hidden" />
//               <p className="text-[#8D9A9B] font-medium text-sm">{fileName}</p>
//             </div>
//             <button onClick={onDeleteImage}>
//               <Image alt="" src={Delete} width={40} height={40} />
//             </button>
//           </div>
//         </CardFrame>
//       ) : (
//         <div
//           {...getRootProps()}
//           className={`mt-2 border-dashed flex justify-center ite border rounded-lg w-full bg-[#F9FAFB] h-[200px] ${
//             error ? "border-red-500" : "border-gray-300"
//           }`}
//         >
//           <div className="flex justify-center flex-col items-center py-5">
//             <Image src={upload} alt="upload" width={64} height={64} />
//             <div className="flex flex-col items-center">
//               <p className="mb-2 text-base text-text-secondary font-medium">
//                 Click to upload or drag and drop
//               </p>
//               <div className="text-sm text-text-secondary flex gap-x-3 items-center">
//                 <Image src={I} alt="I" width={24} height={24} />
//                 <p>JPG, JPEG and Png (Max. File size: 25 MB)</p>{" "}
//               </div>
//             </div>
//           </div>
//           <Input {...getInputProps()} className="hidden" />
//         </div>
//       )}
//     </>
//   );
// };

// export default Upload;
