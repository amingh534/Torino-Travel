import { personalInfoSchema } from "@/lib/constants";
import Calendar from "@/public/icons/Calendar";

function PersonalInfoInputs({ profiledata, setProfileData }) {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "fullName") {
      const parts = value.trim().split(" ");
      const firstName = parts[0] || "";
      const lastName = parts.slice(1).join(" ") || "";

      setProfileData({
        ...profiledata,
        firstName,
        lastName,
      });
      return;
    }
    setProfileData({ ...profiledata, [name]: value });
  };

  return (
    <div className="flex flex-wrap mr-6 gap-6 mb-5 mt-5 ">
      <div className="flex flex-wrap gap-4 *:p-3 *:w-[255px] *:h-[45px] *:border *:border-[#00000033] *:rounded-[5px] *:outline-none">
        {personalInfoSchema.map((field, index) => {
          if (field.type === "date") {
            return (
              <div key={index} className="flex gap-2 ">
                <Calendar />
                <input
                  placeholder={field.placeholder}
                  type={field.type}
                  name={field.name}
                  value={profiledata[field.name] || ""}
                  onChange={handleChange}
                />
              </div>
            );
          }

          if (field.type === "select") {
            return (
              <select
                key={index}
                name={field.name}
                value={profiledata[field.name] || ""}
                onChange={handleChange}
                
              >
                {field.options.map((opt, idx) => (
                  <option key={idx} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            );
          }

          return (
            <input
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              value={profiledata[field.name] || ""}
              onChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PersonalInfoInputs;
