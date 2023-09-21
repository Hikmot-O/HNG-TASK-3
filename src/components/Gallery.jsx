import React, { useRef, useState, useEffect } from "react";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Gallery = (props) => {
  // const [searchValue, setSearchResult] = useState(props.searchResult)
  const [galleryImages, setGalleryImages] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  let draggedItem = useRef(null);
  let draggedOverItem = useRef(null);

  const dragStartHandler = (e, index) => {
    console.log("drag started", index);
  };
  const dragEnterHandler = (e, index) => {
    console.log("drag entered", index);
  };
  const dragEndHandler = (e, index) => {
    console.log("drag ended", index);
  };

  useEffect(() => {
    searchResult();
    // setGalleryImages(images)
  }, [props.Result], galleryImages);

  //Display search results
  const searchResult = () => {
    let _galleryImages = [...galleryImages];

    const filteredImages = _galleryImages.filter(
      (image) => image === +props.Result
    );
    console.log(filteredImages);
    if (props.Result !== '') {
      setGalleryImages(filteredImages);
    }else{
      setGalleryImages(images)
    }
  };

  //Sort gallery
  const sortGallery = () => {
    let _galleryImages = [...galleryImages];
    console.log(galleryImages);
    //remove and save the dragged item content
    const draggedItemContent = _galleryImages.splice(draggedItem.current, 1)[0];

    //Switch poition of the dragge item
    _galleryImages.splice(draggedOverItem.current, 0, draggedItemContent);
    console.log(_galleryImages);
    //Reset
    draggedItem.current = null;
    draggedOverItem.current = null;

    //update images array
    setGalleryImages(_galleryImages);
  };
  return (
    <section className="scroll-smooth grid  sm:grid-cols-2 xl:grid-cols-3 gap-12 px-5 lg:px-20 py-[100px]">
      {galleryImages.map((image, index) => (
        <div
          // onMouseMove={(e) => {
          //   console.log(e.pageX, e.pageY);
          // }}
          key={index}
          onDragStart={(e) => {
            draggedItem.current = index;
            e.target.style.opacity = "0";
          }}
          //When on top of another item
          onDrag={(e) => {
            e.target.style.opacity = "1";
          }}
          onDragEnter={(e) => (draggedOverItem.current = index)}
          onDragEnd={(e) => {
            sortGallery();
            e.target.style.opacity = "0.99999";
          }}
          draggable
          className=" hover:scale-[1.05] translate-x-1 duration-[.2s] ease-in-out  bg-gray-400 w-auto h-[300px] rounded-[14px] shadow-lg cursor-move"
        >
          <div className="bg-gray-100 text-[#010101] rounded-[16px] w-max ml-3 mt-3 py-1 px-4">
            Tag {image}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
