import React from "react";
import UserProfileDropdown from "./UserProfileDropdown";
import ShoppingCartDropdown from "./ShoppingCartDropdown";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-x-2 text-xs">
      <UserProfileDropdown />

      <ShoppingCartDropdown />
    </div>
  );
};

export default NavIcons;
