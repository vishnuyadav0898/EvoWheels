import SoftwareDetail from "../components/SoftwareDetail";
import CellDetail from "../components/CellDetail";
import ManufacturingDetail from "../components/ManufacturingDetail";
import EngineeringDetail from "../components/EngineeringDetail";
import DesignDetail from "../components/DesignDetail";
export const Data = [
  {
    title: "Our Software.",
    description: "Upgraded Riding Experience Advanced features Enabled by Move OS.",
    images:[
        "../assets/images/Tech-Images/tech-software-main-sm.webp",
        "../assets/images/Tech-Images/tech-software-main-lg.webp",
    ],
   
    component: SoftwareDetail,
  },
  {
    title: "Cell Tech.",
    description: "Cutting-edge battery technology for unparalleled efficiency and reliability.",
    images:[
      "../assets/images/Tech-Images/4680 cell-sm.webp",
      "../assets/images/Tech-Images/4680 cell-lg.webp",
  ],
    component: CellDetail,
  },
  {
    title: "Manufacturing.",
    description: "Precision and quality at every step of the production process.",
    images:[
          "../assets/images/Tech-Images/tech-manu-main-sm.webp",
          "../assets/images/Tech-Images/tech-manu-main-lg.webp",
      ],
    component: ManufacturingDetail,
  },
  {
    title: "Engineering.",
    description: "Innovative engineering delivering top-notch performance and safety.",
    images:[
      "../assets/images/Tech-Images/tech-eng-main-sm.webp",
      "../assets/images/Tech-Images/tech-eng-main-lg.webp",
  ],
    component: EngineeringDetail,
  },
  {
    title: "Design.",
    description: "Futuristic aesthetics blended with user-focused ergonomics.",
    
    images:[
     "../assets/images/Tech-Images/tech-design-main.webp",
    
  ],
    component: DesignDetail,
  },
];
