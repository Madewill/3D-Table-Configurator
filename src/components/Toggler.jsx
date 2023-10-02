import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export const Toggler = ({ onToggle }) => {
  const [editMode, setEditMode] = useState(false);

  const handleToggle = () => {
    setEditMode(!editMode);
    onToggle(); // Call the onToggle prop to notify the parent component
  };

  useEffect(() => {
    // Check screen width and set editMode accordingly
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setEditMode(false); // Set to "View" mode for small screens
      } else {
        setEditMode(true); // Set to "Edit" mode for larger screens
      }
    };

    // Initial check on component mount
    handleResize();

    // Add resize event listener to check screen width dynamically
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleToggle}
      sx={{
        display: window.innerWidth <= 768 ? "block" : "none",
        position: "fixed",
        bottom: "0",
        left: "0",
        margin: "20px",
      }}
    >
      {editMode ? "Edit" : "View"}
    </Button>
  );
};
