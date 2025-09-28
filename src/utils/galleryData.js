// utils/galleryData.js

import {
  Horizontal_Laminar_Air_Flow_cabinet_1,
  Vertical_Laminar_Air_Flow_cabine_1,
  RLAF_1,
  static_pass_box_1,
  Dynamic_Pass_Box_1,
  air_shower_1,
  bibo_1,
  ahu_1,
  wet_shower_1,
  Bio_Safety_Cabinet_1,
  Industrial_De_Dusting_Booth_1,
  mobile_trolley_1,
  Operating_Room_Laminar_Air_Flow_1,
  cleanroom_equipment_1,
} from "./utils"; // adjust path if needed

export const galleryCategories = [
  "All",
  "Laminar Flow",
  "Pass Box",
  "Air Shower",
  "BIBO & AHU",
  "Wet Shower",
  "Bio Safety",
  "De-Dusting Booth",
  "Trolley",
  "Operating Room",
  "Cleanroom Equipments",
];

export const galleryImages = [
  { src: Horizontal_Laminar_Air_Flow_cabinet_1, category: "Laminar Flow" },
  { src: Vertical_Laminar_Air_Flow_cabine_1, category: "Laminar Flow" },
  { src: RLAF_1, category: "Laminar Flow" },
  { src: static_pass_box_1, category: "Pass Box" },
  { src: Dynamic_Pass_Box_1, category: "Pass Box" },
  { src: air_shower_1, category: "Air Shower" },
  { src: bibo_1, category: "BIBO & AHU" },
  { src: ahu_1, category: "BIBO & AHU" },
  { src: wet_shower_1, category: "Wet Shower" },
  { src: Bio_Safety_Cabinet_1, category: "Bio Safety" },
  { src: Industrial_De_Dusting_Booth_1, category: "De-Dusting Booth" },
  { src: mobile_trolley_1, category: "Trolley" },
  { src: Operating_Room_Laminar_Air_Flow_1, category: "Operating Room" },
  { src: cleanroom_equipment_1, category: "Cleanroom Equipments" },
];
