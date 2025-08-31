// src/utils/products.js

import { list } from "postcss";
import {
   Customer,
   VayuBanner,
   Horizontal_Lamiar_Air_Flow_cabinet_2,
   Horizontal_Laminar_Air_Flow_cabinet_1,
   Vertical_Laminar_Air_Flow_cabine_2,
   Vertical_Laminar_Air_Flow_cabine_1,
   Vertical_Laminar_Air_Flow_cabine_3,
   Vertical_Laminar_Air_Flow_cabine_4,
   Vertical_Laminar_Air_Flow_cabine_5,
   Vertical_Laminar_Air_Flow_cabine_6,
   RLAF_1,RLAF_2,RLAF_3,
   static_pass_box_1,static_pass_box_2 ,
   Mechanical_Pass_Box1,Mechanical_Pass_Box2,
   L_Type_Static_Pass_Box_1,L_Type_Static_Pass_Box_2,
   Dynamic_Pass_Box_1,Dynamic_Pass_Box_2,Dynamic_Pass_Box_3,Dynamic_Pass_Box_4,Dynamic_Pass_Box_5,Dynamic_Pass_Box_6,
   passboxshowcase_image_1,passboxshowcase_image_2,
   air_shower_1,air_shower_2,air_shower_3,air_shower_4,air_shower_5,air_shower_6,single_person_air_sower_1,single_person_air_sower_2,
   Material_Air_Showe_1,Material_Air_Showe_2,
   L_Shaped_Air_Shower_1,L_Shaped_Air_Shower_2,
   Cargo_Air_Shower_1,Cargo_Air_Shower_2,
   bibo_1,bibo_2,ahu_1,ahu_2,bibo_and_ahu_filter_1,bibo_and_ahu_filter_2,
   wet_shower_1,wet_shower_2,wet_shower_3,wet_shower_4,
   Biological_Safety_Cabinet,Bio_Safety_Cabinet_1,Bio_Safety_Cabinet_2,Bio_Safety_Cabinet_3,Bio_Safety_Cabinet_4,
   Industrial_De_Dusting_Booth_1,Industrial_De_Dusting_Booth_2,
   Dynamic_Garment_Cabinet_1,Dynamic_Garment_Cabinet_2,
   Mist_Shower_1,Mist_Shower_2,
   mobile_trolley_2,mobile_trolley_1,
   Operating_Room_Laminar_Air_Flow_1,Operating_Room_Laminar_Air_Flow_2,
   cleanroom_equipment_1,cleanroom_equipment_2,cleanroom_equipment_3,cleanroom_equipment_4,
  } from "./utils.js";

export const products = [
  {
    id: 1,
    name: "Horizontal Laminar Air Flow (HLAF)",
    slug: "horizontal-laminar-air-flow",
    description:
      "Provides a continuous horizontal stream of HEPA-filtered air to protect sensitive samples from contamination. Ideal for microbiology, tissue culture, and electronics assembly.",
    description2: "The Horizontal Laminar Air Flow Workstation is designed for maximum product protection, ensuring a clean ISO Class 5 particle-free work area for handling critical processes.Equipped with a high-performance HEPA filtration system, the workstation delivers a continuous horizontal flow of sterile air across the work surface, preventing contamination from the operator or surrounding environment.Its laminar flow design further eliminates cross-contamination risks, making it ideal for pharmaceutical, biotechnology, and research applications.",
    category: "Laminar Air Flow",
    categorySlug: "laminar-air-flow",
    image: Horizontal_Lamiar_Air_Flow_cabinet_2,
    imagesslide: [
      Horizontal_Lamiar_Air_Flow_cabinet_2,
      Horizontal_Laminar_Air_Flow_cabinet_1,
    ],
    listdesc: "HORIZONTAL LAMINAR AIR FLOW WORKSTATION MOC SS 304, 316, 316L",
    list: [
      {
        title: "HEPA Filter",
        description: "Imported Miniplate HEPA filter with hot melt technology, which conforms to EU-14 Grade at supply position with an efficiency rating better than 99.999% for 0.3 micron",
      },
      {
        title: "Pre-filter",
        description: "Pre-filters are made from Non-woven synthetic with HDPE mesh; conforms to EU-06 Grade, with an efficiency rating better than 95% down to 5 micron",
      },
      {
        title: "Motor blower assembly",
        description: "Motor blower designed of statically* and dynamically balanced for supply of sufficient capacity and static pressure to take care of air flow requirement on entire life of HEPA filter",
      },
      {
        title: "Pressure Gauge",
        description: "Magnehelic gauge (0-25mm: 1 Nos.) to monitor pressure drop across HEPA Filter",
      },
      {
        title: "Lighting",
        description: "Fluorescent Light with milky white diffuser (250 Lux) at work surface",
      },
      {
        title: "ON/OFF Switches",
        description: "Keypad ON/OFF Switches for motor Blower, UV Light & Led Light.",
      },
      {
        title: "Switch socket",
        description: "6/15 Amp single-phase switch socket use for external equipment",
      },
      {
        title: "Work Table",
        description: "SS work table with due reinforcement",
      },
      {
        title: "Side Panel",
        description: "Glass side panel screens for maximum visibility",
      },
      {
        title: "DOP Port",
        description: "DOP test port at up stream of HEPA filter integrity test. (With PAO Solution)",
      },
      {
        title: "Electrical Supply",
        description: "230V AC 1-ø 50 Hz/415V AC 3-ø 50 Hz",
      },
      {
        title: "Noise Level",
        description: "Less than 67 dB on Scale ‘A’ when Ambient is not greater than 55 dB on Scale ‘A’",
      },
      {
        title: "Vibration Level",
        description: "Minimum",
      },
    ],
    optional: [   //56 👈 New field for extra items
      "UV Light with Hour Meter",
      "SS 304 Cock for Gas and Air",
      "Audio visual alarm indicating condition of HEPA filters",
      "Clean down timer with pre-purging Iodid indicator",
      "VFD based control systems",
      "Photohelic gauge",
      "Sodium vapor lamps",
      "Flame proof fitting"
    ]
  },
  {
    id: 2,
    name: "Vertical Laminar Air Flow",
    slug: "vertical-laminar-air-flow",
    description: "Delivers sterile air vertically from top to bottom, ensuring product and operator safety in pharmaceutical production and quality testing.",
    description2: "Vertical Laminar Air Flow cabinets are designed for creation of a bacterial dust-free air space. The work area is continuously supplied with positive pressure HEPA filtered vertical air flow and prevents contamination from operator and environment to work area. Air flow cabinets are used for work with low risk substances & material.",
    category: "Laminar Air Flow",
    categorySlug: "laminar-air-flow",
    image: Vertical_Laminar_Air_Flow_cabine_2,
    imagesslide: [
      Vertical_Laminar_Air_Flow_cabine_1,
      Vertical_Laminar_Air_Flow_cabine_2,
      Vertical_Laminar_Air_Flow_cabine_3,
      Vertical_Laminar_Air_Flow_cabine_4,
      Vertical_Laminar_Air_Flow_cabine_5,
      Vertical_Laminar_Air_Flow_cabine_6,
    ],
    listdesc: "VERTICAL LAMINAR AIR FLOW (VLAF) MOC SS 304, 316, 316L",
    list: [
      {
        title: "HEPA Filter",
        description: "Imported Minipleat HEPA filter with hot melt technology which conforms to EU-14 Grade at supply position with an efficiency rating better than 99.999% for 0.3 micron",
      },
      {
        title: "Pre-filter",
        description: "Pre-filters are made from Non-woven synthetic with HDPE mesh; conforms to EU-06 Grade, with an efficiency rating better than 95% down to 5 micron",
      },
      {
        title: "Motor blower assembly",
        description: "Motor blower designed of statically and dynamically balanced for supply of sufficient capacity and static pressure to take care of air flow requirement for entire life of HEPA",
      },
      {
        title: "Pressure Gauge",
        description: "Magnehelic Gauge (0-25 mm: 1 Nos.) to monitor pressure drop across HEPA Filter",
      },
      {
        title: "Lighting",
        description: "Fluorescent Light (250 Lux) at work surface",
      },
      {
        title: "ON/OFF Switches",
        description: "Keypad ON/OFF Switches for motor & lights",
      },
      {
        title: "Switch socket",
        description: "6/15 Amp single-phase switch socket use for external equipment",
      },
      {
        title: "Control Panel",
        description: "Electrical Control Panel mounted in unit",
      },
      {
        title: "Work Table (SMVLAF)",
        description: "SS work table with due reinforcement",
      },
      {
        title: "DOP Port",
        description: "DOP test port at upstream of HEPA filter integrity test (With PAO Solution)",
      },
      {
        title: "Side Panel (SMVLAF)",
        description: "Toughened Glass / SS Sheet / Acrylic Sheet side panel screens for maximum visibility",
      },
      {
        title: "Electrical Supply",
        description: "230V AC 1-Ø 50 Hz / 415V AC 3-Ø 50 Hz",
      },
      {
        title: "Noise Level",
        description: "Less than 67 dB on Scale 'A' when Ambient is not greater than 55 dB on Scale 'A'",
      },
      {
        title: "Vibration Level",
        description: "Minimum",
      },
      {
        title: "Air Flow",
        description: "Vertical",
      },
    ],
    optional: [   // 👈 New field for extra items
      "PVC Curtains Suspension",
      "SS 304 Cock option",
      "Clean down timer with operational hold",
      "Pressure gauge to monitor pressure drop across HEPA",
      "Available in MS and SS models",
      "UV Light with hour meter",
      "Audio Visual alarm indicating condition of HEPA filters",
      "VFD based control systems",
      "Photohelic gauge"
    ]
  },
  {
    id: 3,
    name: "Reverse Laminar Air Flow",
    slug: "reverse-laminar-air-flow",
    description:
      "Creates a safe, negative-pressure environment by reversing airflow, designed for handling potent powders and preventing cross-contamination.",
    description2: "Booths for product sampling and dispensing are designed as open front containment systems with built-in scavenging arrangements that draw powder aerosol away from the operator and the operating environment.This ensures protection of both product & personnel.",
    category: "Laminar Air Flow",
    categorySlug: "laminar-air-flow",
    image: RLAF_2,
    imagesslide: [
      RLAF_1,
      RLAF_2,
      RLAF_3,
    ],
    listdesc: "REVERSE LAMINAR AIR FLOW (RLAF) MOC SS 304, 316, 316L",
    list: [
      {
        "title": "Supply HEPA Filter",
        "description": "Imported Minipleat HEPA filter with hot melt technology, which conforms to EU-14 Grade at supply position with an efficiency rating better than 99.999% for 0.3 micron"
      },
      {
        "title": "Exhaust HEPA Filter",
        "description": "Imported Minipleat HEPA filter with hot melt technology, which conforms to EU-14 Grade at exhaust position with an efficiency rating better than 99.999% for 0.3 micron"
      },
      {
        "title": "Intermediate Filter",
        "description": "Made from Non-woven synthetic with HDPE mesh; conforms to EU-07 Grade, with an efficiency rating better than 95% down to 3 micron"
      },
      {
        "title": "Pre-filter",
        "description": "Made from Non-woven synthetic with HDPE mesh; conforms to EU-04 Grade, with an efficiency rating better than 90% down to 10 micron"
      },
      {
        "title": "Motor blower assembly",
        "description": "Motor blower designed statically and dynamically balanced for supply of sufficient capacity and static pressure to take care of air flow requirement for entire life of HEPA filter"
      },
      {
        "title": "Differential Pressure Gauge",
        "description": "Magnehelic Gauge (0–25 mm: 1 No.) to monitor pressure drop across HEPA & Intermediate filter and (0–10 mm: 1 No.) across pre-filter"
      },
      {
        "title": "Lighting",
        "description": "Fluorescent Light (250 Lux) at work surface"
      },
      {
        "title": "ON/OFF Switches",
        "description": "Keypad ON/OFF Switches for motor blower & lights"
      },
      {
        "title": "Switch Socket",
        "description": "6/15 Amp single-phase switch socket for external equipment"
      },
      {
        "title": "Control Panel",
        "description": "Electrical control panel mounted on side panel of the unit"
      },
      {
        "title": "DOP Port",
        "description": "DOP test port at upstream of HEPA filter integrity test (With PAO Solution)"
      },
      {
        "title": "Side Panel",
        "description": "SS 304 PUF insulated double-walled side panels"
      },
      {
        "title": "Electrical Supply",
        "description": "230V AC 1-Ø 50 Hz / 415V AC 3-Ø 50 Hz"
      },
      {
        "title": "Noise Level",
        "description": "Less than 67 dB on Scale ‘A’ when ambient is not greater than 55 dB on Scale ‘A’"
      },
      {
        "title": "Vibration Level",
        "description": "Minimum"
      }
    ],
    optional: [   // 👈 New field for extra items
      "Static PVC strip overlapping curtains",
      "Audio visual alarm indicating condition of HEPA filters",
      "Clean down timer with operational hold indicator",
      "VFD based control systems",
      "Photohelic gauge",
      "Digital pressure gauge for pressure drop across filters",
      "Sodium vapor lamps",
      "Flame proof fitting"
    ]

  },
  {
    id: 4,
    name: "STATIC PASS BOX",
    slug: "static-pass-box",
    description: "A Static Pass Box is used for safe material transfer between cleanroom areas without cross-contamination.It reduces personnel movement and maintains product integrity.Equipped with interlocking doors to prevent simultaneous opening.",
    description2: "Our Static Pass Box is designed to prevent cross contamination between different classified areas and to maintain the integrity of products and processes while transferring materials. Static Pass Boxes allow material transfer between cleanrooms without excessive personnel movement,ensuring minimal particulate contamination.",
    category: "Pass Boxesr",
    categorySlug: "pass-box-static-dynamic",
    image: static_pass_box_2,
    imagesslide: [
      static_pass_box_1,
      static_pass_box_2,
    ],
    listdesc: "Static Pass Box MOC: SS 304, 316, 316L",
    list: [
      {
        "title": "Door",
        "description": "Double-walled stainless steel construction with flush glass view panels, SS handles, and SS hinges"
      },
      {
        "title": "Interlocking",
        "description": "Electro-Magnetic Interlocking system ensures only one side door can be opened at a time"
      },
      {
        "title": "Door Indications",
        "description": "Indicators on either side show door open condition"
      },
      {
        "title": "Door Release",
        "description": "Door Release Switch provided on both sides"
      },
      {
        "title": "SS Coving",
        "description": "Internal covings for easy cleaning"
      },
    ],
    optional: [   // 👈 New field for extra items
      "UV Light with Hour Meter (for bacteria/virus killing) with interlock to shut off UV when door opens",
      "Support Stand for mounting",
      "Flange for sealing gaps between pass box and cleanroom wall",
      "Mechanical / Electro-Magnetic Interlocking",
      "Floor-mounted model with 3-side wall structure & Door Drop Seal",
      "Ventilation with perforated grills",
      "Flame Proof fittings",
    ]
  }, 
  {
    id: 5,
    name: "MECHANICAL PASS BOX",
    slug: "mechanical-pass-box",
    description: "The Mechanical Pass Box provides contamination-free transfer using a manual interlocking system.It is durable, easy to operate, and prevents both doors from being opened at the same time.Ideal for controlled environments requiring simple mechanical operation",
    description2: "The Mechanical Pass Box is specially designed for material transfer between classified areas where manual mechanical interlocking is preferred.It reduces personnel traffic and prevents cross contamination, ensuring cleanroom integrity.",
    category: "Pass Boxesr",
    categorySlug: "pass-box-static-dynamic",
    image: Mechanical_Pass_Box2,
    imagesslide: [
      Mechanical_Pass_Box1,
      Mechanical_Pass_Box2,
    ],
    listdesc: "Mechanical Pass Box MOC: SS 304, 316, 316L",
    list: [
      {
        "title": "Door",
        "description": "Stainless steel double-walled door with glass view panels, SS handles, and SS hinges"
      },
      {
        "title": "Interlocking",
        "description": "Mechanical Interlocking system prevents both doors from being opened at the same time"
      },
      {
        "title": "Door Indications",
        "description": "Mechanical indicator for open/closed status"
      },
      {
        "title": "Door Release",
        "description": "Manual release lever/knob"
      },
      {
        "title": "SS Coving",
        "description": "Smooth internal covings for contamination-free cleaning"
      },
    ],
    optional: [   // 👈 New field for extra items
      "UV Light with Hour Meter (auto-off when door opens)",
      "Support stand for floor mounting",
      "Sealing flanges for wall integration",
      "Ventilation grill system",
      "Flame Proof fittings",
    ]
  },
  {
    id: 6,
    name: "L-TYPE STATIC PASS BOX",
    slug: "L-type-static-pass-box",
    description: "The L-Type Static Pass Box is designed for corner mounting in cleanrooms to save space.It ensures safe material transfer with electromagnetic interlocking doors.Best suited for compact layouts where efficiency and hygiene are critical.",
    description2: "The L-Type Static Pass Box is designed for corner installation (L-shaped) in cleanrooms.It provides contamination-free material transfer while maximizing space utilization in compact cleanroom layouts.",
    category: "Pass Boxesr",
    categorySlug: "pass-box-static-dynamic",
    image: L_Type_Static_Pass_Box_1,
    imagesslide: [
      L_Type_Static_Pass_Box_1,
      L_Type_Static_Pass_Box_2,
    ],
    listdesc: "L-Type Static Pass Box MOC: SS 304, 316, 316L",
    list: [
      {
        "title": "Door",
        "description": "L-shaped, double-walled stainless steel doors with flush glass panels, SS handles, and SS hinges"
      },
      {
        "title": "Interlocking",
        "description": "Electro-Magnetic Interlocking arrangement to ensure only one door opens at a time"
      },
      {
        "title": "Door Indications",
        "description": "LED indicators for open/close status on both sides"
      },
      {
        "title": "Door Release",
        "description": "Door Release Switch on either side"
      },
      {
        "title": "SS Coving",
        "description": "Internal covings designed for corner fit, ensuring easy cleaning"
      },
    ],
    optional: [   // 👈 New field for extra items
      "UV Germicidal Light with Hour Meter",
      "Floor-mounted support structure",
      "Flange sealing system for corner mounting",
      "electro-Magnetic / Mechanical Interlock",
      "Door Drop Seal for airtight closure",
      "Flame Proof fittings",
      "Ventilation system with perforated grills",
    ]
  },
  {
    id: 7,
    name: "DYNAMIC PASS BOX",
    slug: "Dynamic-pass-box",
    description: "A Dynamic Pass Box is equipped with HEPA filters to maintain air cleanliness during transfer.It uses continuous airflow to protect materials from contamination.Essential for critical cleanroom applications like pharma and biotech industries.",
    description2: "Our world-class range of Dynamic Pass Boxes is designed in strict conformation with international standards.They are used for transferring materials between classified areas through a controlled environment,ensuring zero cross-contamination and maintaining product & process integrity.",
    category: "Pass Boxesr",
    categorySlug: "pass-box-static-dynamic",
    image: Dynamic_Pass_Box_1,
    imagesslide: [
      Dynamic_Pass_Box_1,
      Dynamic_Pass_Box_2,
      Dynamic_Pass_Box_3,
      Dynamic_Pass_Box_4,
      Dynamic_Pass_Box_5,
      Dynamic_Pass_Box_6,
    ],
    listdesc: "Dynamic Pass Box (MOC – SS 304 / 316 / 316L)",
    list: [
      {
        "title": "HEPA Filter",
        "description": "Imported Minipleat HEPA filter with hot melt technology, conforms to EU-14 Grade, with efficiency > 99.999% at 0.3 micron."
      },
      {
        "title": "Pre-filter",
        "description": "Made from Non-woven synthetic with HDPE mesh, conforms to EU-06 Grade, efficiency > 95% down to 5 micron."
      },
      {
        "title": "Fresh Air Filter",
        "description": "Made from Non-woven synthetic with HDPE mesh, conforms to EU-04 Grade, efficiency > 90% down to 10 micron."
      },
      {
        "title": "Motor Blower Assembly",
        "description": "Dynamically & statically balanced motor blower, designed for long life & stable airflow across HEPA filter."
      },
      {
        "title": "Pressure Gauge",
        "description": "Magnehelic Gauge (0–25 mm, 1 No.) to monitor pressure drop across HEPA filter."
      },
      {
        "title": "Door",
        "description": "SS 304 double-walled door with flush toughened glass view panels, SS handles, and SS hinges."
      },
      {
        "title": "Interlocking",
        "description": "Electro-magnetic interlocking system to ensure only one door can be opened at a time."
      },
      {
        "title": "Door Indicators",
        "description": "LED indicators on both sides for door open/close status."
      },
      {
        "title": "Door Release",
        "description": "Push-button door release switch provided on either side."
      },
      {
        "title": "SS Coving",
        "description": "Rounded SS covings inside chamber for easy cleaning & zero dust accumulation."
      },
      {
        "title": "ON/OFF Switches",
        "description": "Keypad ON/OFF switches for motor blower & lighting."
      },
      {
        "title": "DOP Port",
        "description": "est port provided upstream of HEPA filter for integrity testing (with PAO solution)."
      },
      {
        "title": "Noise Level",
        "description": "< 67 dB (Ambient ≤ 55 dB, Scale 'A')."
      },
      {
        "title": "Vibration Level",
        "description": "Minimum, ensuring stable operation."
      },
      {
        "title": "Electrical Supply",
        "description": "230V AC 1Ø 50 Hz / 415V AC 3Ø 50 Hz"
      },      
    ],
    optional: [   // 👈 New field for extra items
      "UV Light with Hour Meter & Auto Interlocking Cut-off",
      "Electro-Magnetic / Mechanical Interlocking",
      "Floor-Mounted Construction with 3-Side Wall & Door Drop Seal",
      "Perforated Ventilation Grills",
      "Flame-Proof Fittings",
      "Audio-Visual Alarm for HEPA Filter Condition",
      "Pressure Gauge for Monitoring Filters"
    ]
  },
  {
    id: 8,
    name: "Single-Person Air Shower",
    slug: "Single-Person-Air-Shower",
    description: "Compact air shower designed for one individual at a time.Ensures effective particle removal with high-velocity air jets.Best for small cleanrooms and laboratories.",
    description2: "Our Single-Person Air Shower is a compact and efficient system designed to decontaminate one individual at a time before entering a cleanroom. It ensures complete particle removal from clothing and skin using high-velocity air jets, maintaining strict contamination control.",
    category: "Air Shower",
    categorySlug: "air-shower",
    image: single_person_air_sower_1,
    imagesslide: [
      single_person_air_sower_1,
      single_person_air_sower_2, 
    ],
    listdesc: "Single-Person Air Shower (MOC – SS 304 / 316 / 316L)",
    list: [
      {
        "title": "HEPA Filter",
        "description": "Minipleat HEPA filter (H13/H14) with efficiency > 99.997% down to 0.3 micron."
      }, 
      {
        "title": "Pre-filter",
        "description": "Washable synthetic pre-filter, 95% efficiency down to 5 micron"
      }, 
      {
        "title": "Motor & Blower Assembly",
        "description": "Dynamically & statically balanced motor blower ensuring stable airflow."
      }, 
      {
        "title": "Air Velocity at Nozzle",
        "description": "20–25 m/s for effective particle removal."
      }, 
      {
        "title": "Door",
        "description": "SS double-walled with flush view glass panel & heavy-duty hinges."
      }, 
      {
        "title": "Interlocking",
        "description": "Electro-magnetic interlocking prevents both doors from opening at once."
      }, 
      {
        "title": "Lighting",
        "description": "Fluorescent/LED light with ON/OFF switches inside chamber."
      }, 
      {
        "title": "Noise Level",
        "description": "< 72 dB (ambient ≤ 60 dB)."
      }, 
      {
        "title": "Electrical Supply",
        "description": "230V AC 1Ø / 415V AC 3Ø, 50 Hz."
      },   

    ],
    applications: [   // 👈 New field for extra items
      "Pharmaceutical & biotech cleanrooms",
      "R&D laboratories",
      "Electronics & optics production",
      "Small-scale sterile areas",
    ]
  },
  {
    id: 9,
    name: "Tunnel / Multiple-Person Air Shower",
    slug: "Tunnel-Multiple-Person_Air_Shower",
    description: "Extended air shower tunnel for handling multiple users simultaneously.Provides decontamination from all sides with strong airflow.Ideal for large-scale pharmaceutical or semiconductor facilities.",
    description2: "The Air Shower Tunnel is a protected passageway designed to allow personnel to pass into controlled environments free from surface contaminants. It delivers high-velocity sterile air streams to remove dust and contaminating particles from clothes and skin surfaces as the user stands or walks through the tunnel. These tunnels provide maximum decontamination solutions for particle-sensitive processes and research applications, ensuring high safety and reliability.",
    category: "Air Shower",
    categorySlug: "air-shower",
    image: air_shower_1,
    imagesslide: [
      air_shower_1,
      air_shower_2,
      air_shower_3,
      air_shower_4,
    ],
    listdesc: "Air Shower Tunnel (MOC: SS 304, 316, 316L)",
    list: [
      {
        "title": "Type",
        "description": "Air Shower Tunnel"
      },   
      {
        "title": "MOC",
        "description": "SS 304 / SS 316 / SS 316L"
      },   
      {
        "title": "Flow",
        "description": "From 3 sides"
      },   
      {
        "title": "Velocity at Nozzle",
        "description": "25–30 m/s"
      },   
      {
        "title": "Air Cleanliness",
        "description": "ISO Class-5"
      },   
      {
        "title": "Motor & Blower",
        "description": "Statically & dynamically balanced inbuilt motor blower"
      },   
      {
        "title": "HEPA Filter",
        "description": "HEPA filter H13/H14 grade.Efficiency: 99.997% at 0.3 micron"
      },   
      {
        "title": "Pre-filter",
        "description": "G4 grade pre-filter.Efficiency: 95% down to 5 micron"
      },   
      {
        "title": "Door",
        "description": "SS 304 double-wall sandwich panel with toughened view glass"
      },   
      {
        "title": "Interlocking",
        "description": "Electro-magnetic door interlocking system"
      },   
      {
        "title": "Lights/Switches",
        "description": "Fluorescent lighting.ON/OFF switches for blower and lights"
      },   
      {
        "title": "Vibration Level",
        "description": "Minimum"
      },   
      {
        "title": "Power Supply",
        "description": "220–230V AC / 3-Ø / 50 Hz"
      },   
         
    ],
    applications: [   // 👈 New field for extra items
      "Cleanrooms",
      "Pharmaceutical production",
      "Microelectronics fabrication and production units",
      "Semiconductor production lines",
      "Research & applied science laboratories",
      "Automobile industry",
      "Conveyor lines"
    ]
  },
  {
    id: 10,
    name: "Material Air Shower",
    slug: "material-air-shower",
    description: "Specially designed for trolleys, equipment, and materials.Removes dust particles before entry into sterile areas.Ensures contamination-free material transfer.",
    description2: "The Material Air Shower is engineered to decontaminate trolleys, equipment, and raw material before entry into clean zones. It prevents contamination transfer into sterile production areas by ensuring thorough dust removal.",
    category: "Air Shower",
    categorySlug: "air-shower",
    image: Material_Air_Showe_1,
    imagesslide: [
      Material_Air_Showe_1,
      Material_Air_Showe_2, 
    ],
    listdesc: "Material Air Shower (MOC – SS 304 / 316 / 316L)",
    list: [
      {
        "title": "HEPA Filter",
        "description": "Imported HEPA filter, efficiency > 99.997% at 0.3 micron."
      }, 
      {
        "title": "Pre-filter",
        "description": "G4 grade pre-filter, efficiency 95% down to 5 micron."
      }, 
      {
        "title": "Motor & Blower Assembly",
        "description": "High-capacity blower system for large load decontamination."
      }, 
      {
        "title": "Air Velocity at Nozzle",
        "description": "20–25 m/s, uniform airflow across load surfaces."
      }, 
      {
        "title": "Door",
        "description": "Wide SS double doors with glass panels for easy equipment entry."
      }, 
      {
        "title": "Interlocking",
        "description": "Electro-magnetic/mechanical locks for contamination control."
      }, 
      {
        "title": "Lighting",
        "description": "Energy-efficient LED lighting."
      }, 
      {
        "title": "Floor Construction",
        "description": "SS anti-vibration floor, reinforced for trolleys & loads."
      }, 
      {
        "title": "Electrical Supply",
        "description": "230V AC 1Ø / 415V AC 3Ø, 50 Hz."
      },      
    ],
    applications: [   // 👈 New field for extra items
      "Pharmaceutical & chemical industries",
      "Semiconductor and electronic assembly",
      "Food & beverage sterile units",
      "Research & biotech facilities"
    ]
  },
  {
    id: 11,
    name: "L-Type Air Shower",
    slug: "L-type-air-shower",
    description: "Built in an L shaped design to save space in cleanrooms.Forces personnel to turn, enhancing exposure to air jets.Ideal where straight passage installation isn’t possible.",
    description2: "The L-Type Air Shower is designed in an L configuration to save cleanroom space. By forcing personnel to turn, it maximizes exposure to high-velocity air jets for better decontamination.",
    category: "Air Shower",
    categorySlug: "air-shower",
    image: L_Shaped_Air_Shower_1,
    imagesslide: [
      L_Shaped_Air_Shower_1,
      L_Shaped_Air_Shower_2,
    ],
    listdesc: "L-Type Air Shower (MOC – SS 304 / 316 / 316L)",
    list: [
      {
        "title": "HEPA Filter",
        "description": "High-efficiency H13/H14 filter, > 99.997% at 0.3 micron."
      },  
      {
        "title": "Pre-filter",
        "description": "Washable synthetic pre-filter, efficiency 95% down to 5 micron."
      },  
      {
        "title": "Motor & Blower Assembly",
        "description": "Balanced blower system, ensuring stable airflow."
      },  
      {
        "title": "Air Velocity at Nozzle",
        "description": "20–25 m/s from multiple sides for uniform cleaning."
      },  
      {
        "title": "Door",
        "description": "SS swing doors with flush glass view panel."
      },  
      {
        "title": "Interlocking",
        "description": "Electro-magnetic locking with push-button release."
      },  
      {
        "title": "Lighting",
        "description": "LED lights with protective SS covering."
      },  
      {
        "title": "Chamber Shape",
        "description": "L-shaped design for space efficiency in cleanrooms."
      },  
      {
        "title": "Electrical Supply",
        "description": "230V AC 1Ø / 415V AC 3Ø, 50 Hz."
      },  

    ],
    applications: [   // 👈 New field for extra items
      "Cleanroom areas with space constraints",
      "Pharmaceutical units",
      "Semiconductor industries",
      "Biotechnology laboratories"
    ]
  },
  {
    id: 12,
    name: "Cargo Air Shower",
    slug: "cargo-air-shower",
    description: "Heavy-duty version for pallets and bulk materials.Equipped with wider doors and stronger blowers.Ensures contamination-free bulk transfer into clean zones.",
    description2: "The Cargo Air Shower is a heavy-duty chamber designed to decontaminate pallets, bulk materials, and large equipment. With reinforced blowers and wide entry doors, it ensures contamination-free transfer into controlled environments.",
    category: "Air Shower",
    categorySlug: "air-shower",
    image: Cargo_Air_Shower_1,
    imagesslide: [
      Cargo_Air_Shower_1,
      Cargo_Air_Shower_2,
    ],
    listdesc: "Cargo Air Shower (MOC – SS 304 / 316 / 316L)",
    list: [
      {
        "title": "HEPA Filter",
        "description": "High-performance HEPA filter with > 99.997% efficiency at 0.3 micron."
      },  
      {
        "title": "Pre-filter",
        "description": "G4 pre-filter, washable, efficiency 95% at 5 micron."
      },  
      {
        "title": "Motor & Blower Assembly",
        "description": "Heavy-duty blowers for bulk material decontamination."
      },  
      {
        "title": "Air Velocity at Nozzle",
        "description": "20–25 m/s across pallet/equipment surfaces."
      },  
      {
        "title": "Door",
        "description": "Extra-wide SS double/sliding doors with reinforced handles."
      },  
      {
        "title": "Interlocking",
        "description": "Electro-magnetic interlocking system with safety sensors."
      },  
      {
        "title": "Lighting",
        "description": "High-intensity LED lighting."
      },      
      {
        "title": "Floor Construction",
        "description": "Reinforced SS anti-vibration floor for palletized loads."
      },  
      {
        "title": "Electrical Supply",
        "description": "415V AC, 3Ø, 50 Hz (heavy-duty)."
      },  
    ],
    applications: [   // 👈 New field for extra items
      "Bulk pharmaceutical manufacturing",
      "Food & beverage packaging plants",
      "Automobile & heavy equipment industries",
      "Semiconductor & electronic fabrication"
    ]
  },
  {
    id: 13,
    name: "Bag in Bag Out (BIBO) Filter Systems",
    slug: "bag-in-bag-out-filter-system",
    description: "Specialized filtration units designed for safe replacement of HEPA/ULPA filters in hazardous environments.Ensures maximum worker safety by preventing exposure to biohazards and viruses.Ideal for cleanrooms, isolation areas, and critical contamination control zones.",
    description2: "Bag in Bag Out (BIBO) Filter Systems are designed to provide the highest level of safety during filter replacement in contaminated environments. They protect operators from biohazardous organisms, viruses, and hazardous particles by ensuring safe filter handling without direct exposure.",
    category: "Clean Air & Filtration Equipment",
    categorySlug: "clean-air-filtration-equipment",
    image: bibo_1,
    imagesslide: [
      bibo_1,
      bibo_2,
    ],
    listdesc: "Bag in Bag Out Filter System (MOC – SS 304 / 316 / 316L)",
    list: [
      {
        "title": "Pre-Filter (with access door)",
        "description": "Captures larger dust particles before HEPA/ULPA filtration."
      },  
      {
        "title": "HEPA / ULPA Filter (with access door)",
        "description": "High-efficiency particulate or ultra-low penetration air filter for critical applications."
      },  
      {
        "title": "Inlet & Outlet Connections",
        "description": "Heavy-duty duct flange unit for secure integration with HVAC/cleanroom systems."
      }, 
      {
        "title": "Frame & Mounting Bracket",
        "description": "Rigid stainless steel frame with wall/ceiling mounting option."
      }, 
      {
        "title": "Construction",
        "description": "Argon-welded stainless steel body with removable maintenance doors."
      }, 
      {
        "title": "Filter Replacement",
        "description": "Safe replacement via bag-in bag-out mechanism, ensuring zero exposure."
      }, 
    ],
    applications: [   // 👈 New field for extra items
      "Radiological Contamination Zones",
      "Pharmaceutical & Biotechnology Cleanrooms",
      "Medical Device Cleanrooms",
      "Microelectronics & Nanotechnology Facilities",
      "Hospital Isolation Rooms",
      "Biosafety Laboratories"
    ]
  },
  {
    id: 14,
    name: "AHU Filter Cleaning Equipment",
    slug: "AHU-filter-cleaning-equipment",
    description: "High-efficiency machine for washing, drying, and reconditioning AHU filters.Equipped with multi-chamber systems for thorough cleaning and fast drying.Delivers cost-effective, repeatable performance for cleanroom air handling units.",
    description2: "The AHU Filter Cleaning Machine is a high-performance system for cleaning and drying medium to small-sized AHU filters. It is designed to extend filter life, improve efficiency, and reduce operational costs.",
    category: "Clean Air & Filtration Equipment",
    categorySlug: "clean-air-filtration-equipment",
    image: ahu_1,
    imagesslide: [
      ahu_1,
      ahu_2,
    ],
    listdesc: "AHU Filter Cleaning Equipment",
    list: [
      {
        "title": "Cleaning Type",
        "description": "High-pressure water spray & drying system"
      }, 
      {
        "title": "Washing & Drying",
        "description": "Separate chamber operation for washing & drying"
      }, 
      {
        "title": "Capacity",
        "description": "Handles AHU filters with micron size range 3µ to 20µ"
      }, 
      {
        "title": "Automation",
        "description": "PLC-based operation with automatic door closing/opening"
      }, 
      {
        "title": "Drying Method",
        "description": "High-quality heated air drying system"
      }, 
      {
        "title": "Construction",
        "description": "Stainless steel frame & corrosion-resistant design"
      }, 
      {
        "title": "Availability",
        "description": "Fully automatic / Semi-automatic models"
      }, 
      {
        "title": "Customization",
        "description": "Designed as per client requirements"
      }, 
    ],
    features: [
      "High-quality drying, filter ready to use in AHU",
      "Compact, durable, and efficient design",
      "Reduces filter replacement costs",
      "Ensures consistent cleaning performance",
      "Available in multiple sizes and capacities",
    ],
    applications: [   // 👈 New field for extra items
      "Pharmaceuticals & Biotechnology Industries",
      "HVAC & Cleanroom Systems",
      "Hospitals & Laboratories",
      "Electronic & Semiconductor Units"
    ]
  },
  {
    id: 15,
    name: "Wet Shower",
    slug: "wet-shower",
    description: "Wet Shower is a decontamination chamber designed for cleanrooms and laboratories. It sprays a fine mixture of air and water to remove particles from clothing, ensuring contamination control for pharmaceuticals, life sciences, and high-precision industries.",
    description2: "The Wet Shower from Quality Clean Equipment is uniquely designed for micro labs and clean room applications. It is widely used in industries for decontamination of particles from the clothing of users. \n\nA mixture of air and water is sprayed on the user’s clothing. The entire process is controlled by a Microprocessor or PLC unit. \n\nThe Wet Shower is highly effective for controlling contamination in particle-sensitive processes such as pharmaceuticals, drug testing, and research applications involving molecular biology, biochemical experiments, and cell & tissue culture experiments.",
    category: "Wet shower",
    categorySlug: "wet-shower",
    image: wet_shower_1,
    imagesslide: [
      wet_shower_1,
      wet_shower_2,
      wet_shower_3,
      wet_shower_4,
    ],
    listdesc: "WET SHOWER (MOC SS 304,316,316L)",
    
    list: [
      {
        "title": "Type",
        "description": "Wet Shower"
      }, 
      {
        "title": "MOC",
        "description": "SS 304 / SS 316 / Customized"
      }, 
      {
        "title": "Flow",
        "description": "From 2 sides"
      }, 
      {
        "title": "Velocity at nozzle",
        "description": "25–30 MPS"
      }, 
      {
        "title": "Air cleanliness",
        "description": "ISO Class 5"
      }, 
      {
        "title": "HEPA filter",
        "description": "H13/H14 (99.997% efficiency, down to 0.3 micron)"
      }, 
      {
        "title": "Door",
        "description": "SS 304 double wall with service panel & toughened view glass"
      }, 
      {
        "title": "Interlocking",
        "description": "Electromagnetic door interlocks"
      }, 
      {
        "title": "Lights/Switches",
        "description": "Fluorescent light & ON/OFF switches for blower & lights"
      }, 
      {
        "title": "Vibration level",
        "description": "Minimum"
      }, 
      {
        "title": "Power supply",
        "description": "220–230V AC / Three Phase / 50Hz"
      }, 

    ],
    optional: [
      "Audio-visual alarm indicating condition of HEPA filters",
      "Clean down timer with operation hold indicator",
      "VFD-based control systems",
      "PLC control",
    ],
    applications: [
      "Microelectronics and semiconductor industries",
      "Biomedical research",
      "Life sciences",
      "Pharmaceuticals",
      "Spray painting",
      "High-precision manufacturing processes"
    ]

  },
  {
    id: 16,
    name: "BIO- SAFETY CABINET (CLASS 1, CLASS 2, CLASS 3)",
    slug: "biological-safety-cabinet",
    description: "The Biological Safety Cabinet Class II Type A2 ensures maximum personnel, product, and environmental protection. It uses HEPA-filtered laminar airflow to minimize cross-contamination and maintain a sterile workspace. Built with stainless steel and toughened glass, it features advanced filtration, low noise operation, and easy-to-clean design. Ideal for laboratories, pharmaceuticals, and research applications.",
    description2: "Biological Safety Cabinet Class II Type A2 provides personnel, environmental, and product protection. Air flow is drawn around the operator into the front grill of the cabinet, which provides personnel protection. In addition, the downward laminar flow of HEPA-filtered air provides product protection by minimizing the chance of cross-contamination along the work surface of the cabinet. Because cabinet air has passed through the exhaust HEPA filter, it is contaminant-free (environmental protection).",
    category: "BIO-SAFETY CABINET",
    categorySlug: "bio-safety-cabinet",
    image: Bio_Safety_Cabinet_1,
    imagesslide: [
      Bio_Safety_Cabinet_1,
      Bio_Safety_Cabinet_2,
      Bio_Safety_Cabinet_3,
      Bio_Safety_Cabinet_4,
    ],
    listdesc: "BIO SAFETY CABINET (MOC SS 304, 316, 316L)",
    
    list: [
      {
        "title": "Supply HEPA Filter",
        "description": "Imported Minipleat HEPA filter with hot melt technology, conforms to EU-14 Grade at supply position with efficiency rating better than 99.999% for 0.3 micron."
      }, 
      {
        "title": "Exhaust HEPA Filter",
        "description": "Imported Minipleat HEPA filter with hot melt technology, conforms to EU-14 Grade at exhaust position with efficiency rating better than 99.999% for 0.3 micron."
      }, 
      {
        "title": "Pre-filter",
        "description": "Made from Non-woven synthetic with HDPE mesh; conforms to EU-06 Grade with efficiency rating better than 95% down to 5 micron."
      }, 
      {
        "title": "Motor Blower Assembly",
        "description": "Statical & dynamically balanced motor blower, sufficient capacity and static pressure to handle air flow requirement for entire life of HEPA filter."
      }, 
      {
        "title": "Differential Pressure Gauge",
        "description": "Magnehelic Gauge (0-25 mm: 2 Nos.) to monitor pressure drop across HEPA filter & work area."
      }, 
      {
        "title": "Lighting",
        "description": "Fluorescent light (250 Lux) at work surface."
      }, 
      {
        "title": "ON/OFF Switches",
        "description": "Keypad ON/OFF switches for Motor Blower, UV Lights, & LED light."
      }, 
      {
        "title": "SS 304 Worktable",
        "description": "Worktable with perforations at front & back, removable for cleaning."
      }, 
      {
        "title": "Front Door",
        "description": "Single fully openable sliding toughened glass with counterweight arrangement."
      }, 
      {
        "title": "Door Opening Alarm",
        "description": "Alarm triggers if front door is raised more than 8' (safe clear door opening during operation)."
      }, 
      {
        "title": "Exhaust Duct",
        "description": "SS 304, 1 ft long elbow duct for exhaust."
      }, 
      {
        "title": "Side Panels",
        "description": "Double walled, insulated toughened glass slide panels."
      },
      {
        "title": "Electrical Supply",
        "description": "230V AC ± 10, 50 Hz / 415V AC ± 3, 50 Hz."
      },
      {
        "title": "Noise Level",
        "description": "Less than 67 dB on Scale 'A' when ambient noise ≤ 55 dB."
      },
      {
        "title": "Illumination Level",
        "description": "Minimum"
      },

    ],
    optional: [
      "SS 304 Cock for Gas, Air & Vacuum",
      "Polycarbonate front door",
      "Audio Visual Alarm",
      "Clean down timer",
      "Differential Pressure Indicator",
      "VFD based control system",
      "Photo cell-based operation",
      "UV hour meter",
      "Extra socket",
      "Static pressure dampers",
      "SS stool",
      "Tabletop stand",
      "Exhaust ducting with blower",
      "Switch change bag / Bag out arrangement for filter",
      "Transfer hatch for material movement",
      "PLC based control system"
    ]


  },
  {
    id: 17,
    name: "DE-DUSTING BOOTH",
    slug: "de-dusting-booth",
    description: "The De-Dusting Booth is designed to remove loose dust particles from materials before storage or processing. Equipped with HEPA filtration, stainless steel body, and efficient blower system, it ensures contamination-free handling with optional roller conveyors and programmable controls.",
    description2: [
      "The De-Dusting Tunnel/Booth system is used to remove the loose particles/dust present on the receiving materials, which will be brought into the warehousing area before they are transferred into the quarantine area.",
      "Motorized roller conveyor leads to transfer of heavy load material from material loading to De-Dusting chamber and then finally to material unloading side.",
      "Material: SS",
      "Switch: On/Off switch Digital Differential Pressure Gauge"
    ],
    category: "Clean Air & Filtration Equipment",
    categorySlug: "clean-air-filtration-equipment",
    image: Industrial_De_Dusting_Booth_1,
    imagesslide: [
      Industrial_De_Dusting_Booth_1,
      Industrial_De_Dusting_Booth_2,
    ],
    listdesc: "DE-DUSTING BOOTH (MOC SS 304, 316, 316L)",
    list: [
      {
        "title": "Type",
        "description": "De-Dusting Booth"
      }, 
      {
        "title": "MOC",
        "description": "SS 304 / CRCA Powder coated / double wall PUFF filled panel"
      }, 
      {
        "title": "SS/PVC roller option",
        "description": "Vertical brushing system also available"
      }, 
      {
        "title": "Nozzle Material",
        "description": "Plastic/Stainless Steel (SS 304) fixed type or adjustable flush type; fitted on either side of walls & ceiling"
      }, 
      {
        "title": "High Velocity",
        "description": "HEPA FILTER Jet system (above 5000 fpm) with manual adjustable direction control"
      }, 
      {
        "title": "HEPA Filter",
        "description": "HEPA Filter H13/H14, efficiency 99.997% down to 0.3 micron"
      }, 
      {
        "title": "Door",
        "description": "PUFF insulated"
      }, 
      {
        "title": "Drive Unit",
        "description": "Multiple industrial chains controlled with in-built motor, varied speeds"
      }, 
      {
        "title": "Lights/Switches",
        "description": "Fluorescent light & On/Off switches for blower & lights"
      }, 
      {
        "title": "Features",
        "description": "Air intake fan unit, nozzle with flexible hose, grating flooring, dust collector, collection bin"
      },
      {
        "title": "Power Supply",
        "description": "3 Phase, 2 HP, 415 V ± 5 V, 50 Hz"
      }, 
    ],
    operation: [
      "Vehicle arrives and docks at receiving bay.",
      "An operator starts the De-dusting chamber’s blowers first and then Conveyor by pushing the buttons on the push button station.",
      "Loose material (one at a time) is manually loaded onto the conveyor.",
      "The material passes through the De-dusting chamber and onto the exit side.",
      "These are again manually retrieved from the conveyor.",
      "Belt conveyor moves material with minimal human effort.",
      "Roller conveyor can lift instant heavy loads with gear box motor.",
      "Vertical brushing system can also be used for cleaning.",
    ],
    capacity: [   // 👈 New field for extra items
      "Manual and automatic operation available.",
      "Load carrying capacity: 80 kg to 1000 kg.",
      "HMI / PLC based control system with programmable features.",
      "Optional: Double door or high-speed rolling shutter."
    ]
  },
  {
    id: 18,
    name: "DYNAMIC GARMENT CABINET",
    slug: "dynamic-garment-cabinet",
    description: "Dynamic Garment Cabinet is designed for safe storage of sterile aprons, preventing dust contamination and bacterial growth. Widely used in pharmaceuticals, biotech, food, and electronics industries, it ensures positive pressure HEPA-filtered air circulation.",
    description2: "The application of Garment Cabinet is for storing sterile aprons. The unit is used to avoid dust contamination as well as bacterial growth.It is widely used in Pharmaceuticals, Bio-tech, Food, and Electronic Industries.The work area is continuously supplied with positive pressure HEPA filtered recirculated air flow.",
    category: "CLEANROOM EQUIPMENT",
    categorySlug: "cleanroom-equipment",
    image: Dynamic_Garment_Cabinet_1,
    imagesslide: [
      Dynamic_Garment_Cabinet_1,
      Dynamic_Garment_Cabinet_2, 
    ],
    listdesc: "DYNAMIC GARMENT CABINET (MOC SS 304, 316, 316L)",
    list: [
      {
        "title": "HEPA Filter",
        "description": "Imported Minipleat HEPA filter with hot melt technology, conforms to EU-14 Grade.Efficiency rating: better than 99.999% for 0.3 micron."
      },
      {
        "title": "Pre-filter",
        "description": "Made from Non-woven synthetic with HDPE mesh, conforms to EU-06 Grade, efficiency > 95% down to 5 micron."
      },
      {
        "title": "Fresh Air Filter",
        "description": "Made from Non-Woven Synthetic with HOPE mesh, conforms to EU-4 Grade.Efficiency rating: better than 90% down to 5 micron."
      },
      {
        "title": "Motor Blower Assembly",
        "description": "Statistically & dynamically balanced motor blower for uniform airflow."
      },
      {
        "title": "Pressure Gauge",
        "description": "Magnehelic Gauge (0–25 mm of water). Monitors pressure drop across HEPA filter."
      },
      {
        "title": "Door",
        "description": "SS 304 doors with double-walled flush toughened glass and SS handles."
      },
      {
        "title": "Interlocking",
        "description": "Electro-magnetic interlocking arrangement to cut off UV light if either side door opens."
      },
      {
        "title": "Shelves",
        "description": "SS 304 hanging arrangement or removable type shelves."
      },
      {
        "title": "Temperature Control",
        "description": "Heater with thermostat for cabinet temperature control."
      },
      {
        "title": "On/Off Switches",
        "description": "Keypad ON/OFF switches for motor, UV light, and LED light."
      },
      {
        "title": "Switch Socket",
        "description": "6/15 Amp single-phase socket for external equipment."
      },
      {
        "title": "DOP Port",
        "description": "DOP test port at upstream of HEPA filter for integrity testing (with PAO solution)."
      },
      {
        "title": "Vibration Level",
        "description": "Minimum"
      }, 
      {
        "title": "Electrical Supply",
        "description": "230V AC 1-phase, 50 Hz / 415V AC 3-phase, 50 Hz"
      }, 
      {
        "title": "Noise Level",
        "description": "Less than 67 dB when ambient is not greater than 55 dB."
      },      
    ],
    optional: [   // 👈 New field for extra items
      "UV Light with Hour Meter",
      "Electro-Magnetic / Mechanical Interlocking",
      "Audio-Visual Alarm",
      "Clean Down Timer with auto shut-off",
      "VFD based control system",
      "Photocell gauge",
      "Digital pressure gauge",
      "Flame-proof fitting",
      "Sodium vapor lamps"
      
    ]
  },
  {
    id: 19,
    name: "MIST SHOWER",
    slug: "mist-shower",
    description: "Mist Shower is designed for decontamination of clothes in cleanroom and laboratory applications. It sprays a fine mist of air and water to reduce contamination, widely used in pharmaceuticals, biotech, and research facilities.",
    description2: "The Mist Shower from Quality Clean Equipment is uniquely designed for micro labs and cleanroom applications.Mist Shower is widely used in industries for decontamination of clothes of the userA mixture of air and water is sprayed on the clothes of the users.It comes with a microprocessor or PLC unit to control the whole process.This versatile Mist Shower effectively controls contamination for practical sensitive processes such as pharmaceuticals, drug testing, and research applications involving molecular biology, biochemical experiments, cell and tissue culture experiments etc.",
    category: "CLEANROOM EQUIPMENT",
    categorySlug: "cleanroom-equipment",
    image: Mist_Shower_1,
    imagesslide: [
      Mist_Shower_1,
      Mist_Shower_2, 
    ],
    listdesc: "MIST SHOWER (MOC SS 304, 316, 316L)",
    list: [
      {
        "title": "Type",
        "description": "Mist Shower"
      },
      {
        "title": "MOC",
        "description": "SS 304 / SS 316 / Customized"
      },
      {
        "title": "Flow",
        "description": "From 2 sides"
      },
      {
        "title": "Eloctiyat Nozzle",
        "description": "25–30 MPS"
      },
      {
        "title": "Air Cleanliness",
        "description": "ISO Class – 5"
      },
      {
        "title": "HEPA Filter",
        "description": "Confirms to H 13/H14 with efficiency of 99.997% down to 0.3 micron"
      },
      {
        "title": "Door",
        "description": "SS 304 double-wall sandwich panel with toughened view glass"
      },
      {
        "title": "Interlocking",
        "description": "Electro-magnetic interlocking between the doors"
      },
      {
        "title": "Lights / Switches",
        "description": "Fluorescent light & On/Off switches for blower & lights"
      },
      {
        "title": "Vibration Level",
        "description": "Minimum"
      },
      {
        "title": "Power Supply",
        "description": "220–230 V AC / 3-Phase / 50 Hz"
      },

           
    ],
    optional: [   // 👈 New field for extra items
      "Audio visual alarm (HEPA condition)",
      "Clean down timer with hold indicator",
      "VFD based control systems",
      "PLC control",
      "For Microelectronics & Semiconductor industries",
      "Biomedical research",
      "Life sciences",
    ],
    applications: [
      "Spray painting",
      "High precision manufacturing processes",
    ],
  },
  {
    id: 20,
    name: "MOBILE TROLLEY",
    slug: "mobile-trolley",
    description: "Mobile Trolley is designed for safe transport of sterile products in cleanroom environments. Equipped with HEPA filtration, horizontal airflow, and lockable castor wheels, it ensures contamination-free movement of materials in pharmaceuticals, biotech, and research labs.",
    description2: "Mobile Trolley is designed for transporting sterile products under ISO Class 5 (Class 100) particle-free work area.The work area is continuously supplied with positive pressure HEPA filtered recirculated horizontal airflow.",
    category: "CLEANROOM EQUIPMENT",
    categorySlug: "cleanroom-equipment",
    image: mobile_trolley_1,
    imagesslide: [
      mobile_trolley_1,
      mobile_trolley_2, 
    ],
    listdesc: "MOBILE TROLLEY (MOC SS 304, 316, 316L)",
    list: [
      {
        "title": "HEPA Filter",
        "description": "Imported Minipleat HEPA filter with hot melt technology, conforms to EU-14 Grade.Efficiency rating: better than 99.999% for 0.3 micron."
      },
      {
        "title": "Return Air Pre-filter",
        "description": "Made from Non-woven Synthetic with HDPE mesh, conforms to EU-6 Grade.Efficiency rating: better than 95% down to 5 micron."
      },
      {
        "title": "Fresh Air Filter",
        "description": "Made from Non-woven Synthetic with HOPE mesh, conforms to EU-4 Grade.Efficiency rating: better than 90% down to 10 micron."
      },
      {
        "title": "Motor Blower Assembly",
        "description": "Statistically and dynamically balanced blower, sufficient capacity to handle HEPA airflow."
      },
      {
        "title": "Pressure Gauge",
        "description": "Magnehelic Gauge (0–25 mm: 1 Nos.) to monitor pressure drop across HEPA filter."
      },
      {
        "title": "Door",
        "description": "SS 304 doors with double-walled flush toughened glass view panels and SS handles."
      },
      {
        "title": "Interlocking",
        "description": "Electro-magnetic interlocking arrangement to cut off UV light if either side door opens (with LED indicator)."
      },
      {
        "title": "Shelves",
        "description": "SS 304 hanging arrangement or removable shelves."
      },
      {
        "title": "Battery Backup",
        "description": "Battery backup with inverter for 30 minutes."
      },
      {
        "title": "Castor Wheels",
        "description": "PU-coated lockable castor wheels."
      },
      {
        "title": "On/Off Switches",
        "description": "Keypad ON/OFF switches for motor blower, UV, and LED light"
      },
      {
        "title": "Switch Socket",
        "description": "6/15 Amp single-phase socket for external equipment."
      },
      {
        "title": "DOP Port",
        "description": "DOP test port at upstream of HEPA filter integrity test (with PAO solution)."
      },
      {
        "title": "Handle",
        "description": "SS 304 handle for mobility."
      },
      {
        "title": "Electrical Supply",
        "description": "230V AC 1Ø 50 Hz / 415V AC 3Ø 50 Hz"
      },
      {
        "title": "Noise Level",
        "description": "Less than 67 dB when ambient is not greater than 55 dB."
      },
      {
        "title": "Vibration Level",
        "description": "Minimum"
      },
      
     
    ],
    optional: [   // 👈 New field for extra items
      "UV Light with Hour Meter",
      "Electro-Magnetic / Mechanical Interlocking",
      "Audio Visual Alarm",
      "Clean Down Timer with Auto Hold Indicator",
      "VFD-based control system",
      "Photocell gauge",
      "Digital pressure gauge",
      "Sodium vapor lamps",
      "Flame-proof fittings"
    ],
  },
  {
    id: 21,
    name: "Operating Room Laminar Air Flow (OT LAF) – Med & Tech",
    slug: "operating-room-laminar-air-flow",
    description: "Operating Room Laminar Air Flow (OT LAF) provides ultra-clean air at the surgical site, minimizing airborne contamination in operating theatres. With HEPA/ULPA filters and controlled airflow, it ensures a sterile environment for safe surgeries and critical medical procedures.",
    description2: `The Laminar Air Flow (LAF) System ensures ultra-clean, particle-free air in critical areas like operating theatres and laboratories. Designed with modular construction, high-capacity HEPA/ULPA filters, and precise airflow control, it guarantees contamination-free environments. Customizable to project-specific requirements.`,
    category: "CLEANROOM EQUIPMENT",
    categorySlug: "cleanroom-equipment",
    image: Operating_Room_Laminar_Air_Flow_1,
    imagesslide: [
      Operating_Room_Laminar_Air_Flow_1,
      Operating_Room_Laminar_Air_Flow_2, 
    ],
    listdesc: "Standard Design Characteristics",
    list: [
      {
        title: "Compact Modular Construction",
        description:
          "Engineered to minimize ventilation plant capacity while ensuring efficient performance.",
      },
      {
        title: "HEPA Filtration",
        description:
          "Minipleat high-capacity filters with 99.99% efficiency on 0.3 μm particles and gel sealing technology.",
      },
      {
        title: "Airflow Distribution",
        description:
          "Perforated stainless steel diffuser delivers controlled vertical airflow for sterile zones.",
      },
      {
        title: "Central Duct",
        description:
          "Integrated provision for operating theatre light stem to maintain design efficiency.",
      },
    ],

    optional: [
      "120 mm HC Minipleat HEPA filters",
      "ULPA filters (99.9995% efficiency on 0.12 μm particles)",
      "Integrated perimeter lighting",
      "Return air grilles with seamless design",
      "Differential pressure gauge for filter monitoring",
      "Fully customized design for specific project needs",
    ],

    features: [
      "Ultra-clean air distribution with downward and outward flow",
      "Maximum of 0.5 bacteria-carrying particles per m³ at filter output",
      "Less than 10 bacteria-carrying particles per m³ near wound area",
      "Less than 20 bacteria-carrying particles per m³ at sterile working zone",
      "Maintains sterility of instruments and prevents wound contamination",
    ],

    applications: [
      "Hospital operating theatres",
      "Microbiology & pharmaceutical labs",
      "Cleanrooms for medical device assembly",
      "Research & testing facilities",
    ],
  },
  {
    id: 22,
    name: "Cleanroom Area",
    slug: "cleanroom-area",
    description: "Cleanroom Area is a contamination-controlled environment equipped with HEPA filtration to eliminate airborne particles. It ensures sterile conditions required in pharmaceuticals, biotechnology, medical devices, and semiconductor manufacturing.",
    description2: `A Cleanroom is designed to maintain ultra-clean air by controlling particle levels and airflow. Built with modular panels, smooth finishes, and high-efficiency HEPA filters, it supports ISO 1–9 classifications. Cleanrooms ensure regulatory compliance while protecting sensitive processes and sterile operations.`,
    category: "CLEANROOM EQUIPMENT",
    categorySlug: "cleanroom-equipment",
    image: cleanroom_equipment_1,
    imagesslide: [
      cleanroom_equipment_1,
      cleanroom_equipment_2,
      cleanroom_equipment_3,
      cleanroom_equipment_4
    ],
    listdesc: "Cleanroom Classification Standards",
    list: [
      {
        title: "ISO 1",
        description: "Super clean classification with <3,520 particles ≥0.5µm/m³ and 250–300 air changes/hour."
      },
      {
        title: "ISO 2",
        description: "Very clean environment with <35,200 particles ≥0.5µm/m³ and 180 air changes/hour."
      },
      {
        title: "ISO 3",
        description: "Common classification with <352,000 particles ≥0.5µm/m³ and 60 air changes/hour."
      },
      {
        title: "ISO 4",
        description: "Basic cleanroom with <35,200,000 particles ≥0.5µm/m³ and 20 air changes/hour."
      }
    ]
  }

];

// ✅ Category list separately

export const categories = [
  {
    name: "Laminar Air Flow",
    description: "Laminar Air Flow (LAF) Units are advanced cleanroom equipment designed to provide a sterile, particle-free working environment by directing HEPA-filtered air in a uniform flow. They ensure product and sample protection in pharmaceutical, biotech, research, and industrial applications",
    image: VayuBanner,
    slug: "laminar-air-flow",
  },
  {
    name: "Air Shower",
    description: "Air Showers are specialized entry systems designed to remove dust and particulate contaminants from personnel and materials before entering controlled environments. They use high-velocity HEPA-filtered air jets to ensure maximum cleanliness. Ideal for cleanrooms, pharmaceutical, electronics, and biotech industries.",
    image: air_shower_2,
    slug: "air-shower",
  },
  {
    name: "Wet shower",
    description: "Wet Shower is a decontamination chamber designed for cleanrooms and laboratories. It sprays a fine mixture of air and water to remove particles from clothing, ensuring contamination control for pharmaceuticals, life sciences, and high-precision industries.",
    image: wet_shower_2,
    slug: "wet-shower",
  },
  {
    name: "Pass Boxes",
    description: "Pass Boxes are specially designed cleanroom equipment used to safely transfer materials between controlled environments while minimizing contamination. Available in Static, Mechanical, L-Type, and Dynamic models, they ensure product protection, maintain cleanroom integrity, and support compliance with pharmaceutical, biotech, and research standards.",
    image: passboxshowcase_image_1,
    slug: "pass-box-static-dynamic",
  },
  {
    name: "Clean Air & Filtration Equipment",
    description: "Our Clean Air & Filtration Equipment ensures contamination-free environments by maintaining the highest air purity standards. This category includes Bag in Bag Out (BIBO) Filter Systems for safe filter replacement in hazardous areas and AHU Filter Cleaning Equipment for efficient washing and drying of filters. Together, hey deliver reliable air quality solutions for cleanrooms, laboratories, and critical industries.",
    image: bibo_and_ahu_filter_2,
    slug: "clean-air-filtration-equipment",
  },
  {
    name: "BIO-SAFETY CABINET",
    description: "The Biological Safety Cabinet Class II Type A2 ensures maximum personnel, product, and environmental protection. It uses HEPA-filtered laminar airflow to minimize cross-contamination and maintain a sterile workspace. Built with stainless steel and toughened glass, it features advanced filtration, low noise operation, and easy-to-clean design. Ideal for laboratories, pharmaceuticals, and research applications.",
    image: Biological_Safety_Cabinet,
    slug: "bio-safety-cabinet",
  },
  {
    name: "CLEANROOM EQUIPMENT",
    description: "Cleanroom equipment is specially designed to maintain contamination-free environments in industries such as pharmaceuticals, biotechnology, food, and electronics. These systems ensure controlled airflow, dust prevention, and sterile working conditions. From garment storage cabinets to mist showers and air filtration systems, cleanroom solutions help achieve regulatory compliance and protect sensitive processes. Ideal for research labs, manufacturing, and critical production areas.",
    image: Dynamic_Garment_Cabinet_1,
    slug: "cleanroom-equipment",
  },
  
];
