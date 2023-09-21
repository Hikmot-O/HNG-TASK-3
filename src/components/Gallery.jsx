import React, { useRef, useState, useEffect } from "react";

const images = [
  {
    src: "https://images.pexels.com/photos/13722298/pexels-photo-13722298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tag: "nature",
  },
  {
    src: "https://images.unsplash.com/photo-1642329875537-8291bf696705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDNibm05NWlzSXhFfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    tag: "monochrome",
  },
  {
    src: "https://images.unsplash.com/photo-1694088957234-2e3932f7c786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    tag: "animal",
  },
  {
    src: "https://images.unsplash.com/photo-1692708639789-5da0401badd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    tag: "food",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1688124010168-659d723bf6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tag: "nature",
  },
  {
    src: "https://images.unsplash.com/photo-1692194741580-b8b99eefb40b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    tag: "food",
  },
  {
    src: "https://images.unsplash.com/photo-1694231005456-5f0df60ae96f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    tag: "animal",
  },
  {
    src: "https://images.unsplash.com/photo-1694554060925-c36fa7f9918d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    tag: "nature",
  },
  {
    src: "https://images.unsplash.com/photo-1692467482423-e7c47521a4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    tag: "animal",
  },
  {
    src: "https://images.unsplash.com/photo-1599985060986-888909c787e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDNibm05NWlzSXhFfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    tag: "monochrome",
  },
];

const Gallery = (props) => {
  // const [searchValue, setSearchResult] = useState(props.searchResult)
  const [galleryImages, setGalleryImages] = useState(images);
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

  useEffect(
    () => {
      searchResult();
      // setGalleryImages(images)
    },
    [props.Result],
    galleryImages
  );

  //Display search results
  const searchResult = () => {
    let _galleryImages = [...galleryImages];

    const filteredImages = _galleryImages.filter(
      (image) => image.tag.includes(props.Result)
      // (image) => image === +props.Result
    );
    console.log(filteredImages);
    if (props.Result !== "") {
      setGalleryImages(filteredImages);
    } else {
      setGalleryImages(images);
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
          className="relative hover:scale-[1.05] translate-x-1 duration-[.2s] ease-in-out  bg-gray-400 w-auto h-[300px] rounded-[14px] shadow-lg cursor-move"
        >
          <div className="absolute bg-gray-100 text-[#010101] rounded-[16px] w-max ml-3 mt-3 py-1 px-4">
            {image.tag}
          </div>
          <img
            src={image.src}
            alt=""
            className="w-full h-[300px] rounded-[14px]"
          />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
