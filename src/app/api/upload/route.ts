import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



export async function POST(request: Request) {
  try {
    const links: string[] = [];
    // Get the form data from the request
    const formData = await request.formData();
   const files = Array.from(formData.values())
    
   for (const file of files){
    
      // Check if the file is provided and if it's a valid Blob
      if (!file || !(file instanceof Blob)) {
        return NextResponse.json(
          { message: "File not found or invalid type" },
          { status: 400 }
        );
      }

      // Convert the file to a buffer to upload to Cloudinary
      const buffer = Buffer.from(await file.arrayBuffer());

      // Upload to Cloudinary
      const cloudinaryResult = await new Promise<any>((resolve, reject) => {
        cloudinary.v2.uploader
          .upload_stream(
            { resource_type: "auto" }, // auto handles different file types
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            }
          )
          .end(buffer);
      });

      // Return the result with the secure URL
      const link = cloudinaryResult?.secure_url;
      links.push(link);
     
     
    }
    
    return NextResponse.json({ imageUrl: links });
    



  } catch (error: any) {
    // Return the error message in case of failure
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export const config = {
  api: { bodyParser: false }, // Disable default body parser to handle file uploads manually
};
