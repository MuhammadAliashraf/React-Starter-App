import React from "react";

function UserPagesLayout({ children }) {
  // Corrected 'children'
  //remove h-[100vh] Then Footer Take the height of According To Content
  return (
    <div className="justify-start mx-auto w-10/12 mt-5 h-[60vh]">
      {children}
    </div>
  ); // Removed {}
}

export default UserPagesLayout;
