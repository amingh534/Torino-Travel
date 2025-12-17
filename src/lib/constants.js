import Airplane from "@/public/icons/Airplane";
import Transportaion from "@/public/icons/Transportaion";

export const personalInfoSchema = [
  {
    name: "fullName",
    type: "text",
    placeholder: "نام و نام خانوادگی",
  },
  { name: "nationalCode", type: "text", placeholder: "کد ملی" },
  { name: "birthDate", type: "date", placeholder: "تاریخ تولد" },
  {
    name: "gender",
    type: "select",
    options: [
      { value: "male", label: "مرد" },
      { value: "female", label: "زن" },
    ],
  },
];
export const icons = {
  ون: <Transportaion />,
  اتوبوس: <Transportaion />,
  SUV: <Transportaion />,
  هواپیما: <Airplane />,
  لندکروز: <Transportaion />,
};
