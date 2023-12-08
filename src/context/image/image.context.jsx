import { createContext, useState } from "react";

export const ImageContext = createContext({
    imageUrl: '',
    setImageUrl: () => null,
    rectangles: [],
    setRectangles: () => null,
});

export const ImageProvider = ({ children }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [rectangles, setRectangles] = useState([]);
    const value = { imageUrl, setImageUrl, rectangles, setRectangles };
    return <ImageContext.Provider value={value}>{ children }</ImageContext.Provider>
}
