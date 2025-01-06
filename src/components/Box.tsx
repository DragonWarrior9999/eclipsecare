import React, { useState } from 'react';

const DraggableBox = () => {
  // State to store the position of the box
  const [position, setPosition] = useState({ x: 0, y: 300 });
  const [isDragging, setIsDragging] = useState(false); // To track if dragging is happening
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: MouseEvent) => {
    // Set the drag state and calculate the offset between the mouse pointer and the top-left corner of the box
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      // Calculate the new position based on the mouse movement
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); // Stop dragging when the mouse is released

    // Determine which side of the screen the box is closer to
    const screenWidth = window.innerWidth;
    const boxLeftEdge = position.x;
    const boxRightEdge = boxLeftEdge + 50; // Box width is 50px

    // Move the box to the closest edge
    if (boxLeftEdge + 50 / 2 < screenWidth / 2) {
      setPosition({ x: 0, y: position.y }); // Move to the left edge
    } else {
      setPosition({ x: screenWidth - 50, y: position.y }); // Move to the right edge
    }
  };

  // Add event listeners to handle mouse movement and mouse up globally
  React.useEffect(() => {
    if (isDragging) {
      // Attach mousemove and mouseup event listeners to the window
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    // Cleanup event listeners when not dragging
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        cursor: 'pointer',
        transition: 'left ease-out', // Add a transition for smooth movement
      }}
    ></div>
  );
};

export default DraggableBox;
