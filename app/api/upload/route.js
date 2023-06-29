import connectMongoDB from "@/libs/mongodb";
import File from "@/models/File";
import { NextResponse } from "next/server";
import formidable from "formidable";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export async function POST(request) {
//   const form = formidable({});
//   await connectMongoDB();
//   form.parse(request, (err, fields, files) => {
//     if (err) {
//       next(err);
//       return;
//     }
//     const { name, path, type } = files.file;
//     // File.create({
//     //   title: name,
//     // });
//     console.log(name);
//     // res.json({ fields, files });
//     return NextResponse.json(
//       { message: "file created successfuly" },
//       { status: 201 }
//     );
//   });

export async function POST(request) {
  // const form = formidable({});
  // const formData = await request.formData();
  // const file = formData.get("file");
  // console.log("form data", formData, file);

  // await connectMongoDB();
  // await File.create({
  //   title: file.name,
  // });
  // return NextResponse.json({
  //   message: "file successfully uploaded to MongoDB. From server",
  // });
  // form.parse(request, (err, fields, files) => {
  //   if (err) {
  //     next(err);
  //     return;
  //   }
  //   console.log(files);
  //   // return NextResponse.json({ fields, files });
  //   res.json({ fields, files });
  // });
  // const { title } = await request.json();
  const body = await request.json();
  const newImage = new File(body);

  try {
    await connectMongoDB();
    await newImage.save();
    return new NextResponse("Image has been created", { status: 200 });
  } catch (err) {
    return new NextResponse("database error", { status: 500 });
  }

  // await File.create({ title });
  // return NextResponse.json(
  //   { message: "File Upload successfully" },
  //   { status: 201 }
  // );
}

// const { title } = await request.json();
// await connectMongoDB();
// await File.create({ title });
// return NextResponse.json(
//   { message: "File Upload successfully" },
//   { status: 201 }
//   // );
// }

export async function GET() {
  await connectMongoDB();
  const files = await File.find();
  return NextResponse.json({ files });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await File.findByIdAndDelete(id);
  return NextResponse.json({ message: "File deleted" }, { status: 200 });
}
