import { groq } from "next-sanity";

export const  getFeaturedRoom  = groq `*[_type == "hotelRoom" && isFeatured == true ][0] {
    _id,
    description,
    discount,
    images,
    isFeatured,
    name,
    price,
    slug,
    coverImage

}`;