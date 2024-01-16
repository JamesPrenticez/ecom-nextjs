import React from 'react'
import { getInitials } from "@/lib/utils";
import { User } from "@/payload-types"

interface Props {
  width?: number,
  height?: number
  user?: User
}

function Avatar ({
  width = 45,
  height = 45,
  user
}: Props) {

  return (
    <div className="flex space-x-4 items-center relative text-muted">

      { user?.img ? (
        <div 
          className="block rounded-full bg-cover bg-center overflow-hidden"
          style={{ 
            width: width,
            height: height,
            backgroundImage: `url("${user.img}")`
          }}
        />
      ) : (user?.firstName && user?.lastName) ? (
        <div className="flex justify-center items-center rounded-full border-2 overflow-hidden bg-primary font-bold text-[18px]"
          style={{ 
            width: width,
            height: height,
          }}
        >
          {getInitials(user.firstName, user.lastName)}
        </div>
      ) : (
        // TODO update with default image
        <div className="flex justify-center items-center rounded-full overflow-hidden bg-red-500 font-bold text-[18px]"
          style={{ 
            width: width,
            height: height,
          }}
        >
          N/A
        </div>
        // <div 
        //   className="block rounded-full bg-cover bg-center border-2 overflow-hidden"
        //   style={{ 
        //     width: width,
        //     height: height,
        //     backgroundImage: `url("avatar.png")`
        //   }}
        // />
      )}

    </div>
   );
};

export default Avatar;