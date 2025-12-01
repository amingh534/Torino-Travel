import React from "react";

function TextInput() {
  return (
    <div>
      <input
        className=" ml-2 p-2 w-[255px] h-[45px] rounded-md text-[#00000080] border border-[#00000033] outline-none"
        placeholder="آدرس ایمیل"
        name={name}
        value={profiledata[name]}
        onChange={handleChange}
      />
    </div>
  );
}

export default TextInput;
