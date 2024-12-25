import HyperService from "../components/HyperService"
import BatteryWarranty from "../components/BatteryWarranty"
import ElectricStore from "../components/ElectricStore"
import HyperCharger from "../components/HyperCharger"
import Referral from "../components/Referral"
export const Data = [
    {
      title: "# HYPERSERVICE",
      description: "1 Lakh third party machanics to be EV ready.",
     
      images:[
             "../assets/images/Ownership-Images/hyperservice_img_one.webp",
           
            
            ],
      component: HyperService,
    },
    {
      title: "# BATTERY WARRANTY",
      description: "Enjoy up to 8 years or 1,25,000 km of worry-free riding.",
      images:[
      "../assets/images/Ownership-Images/battery_warranty_img-one-sm.webp",
      "../assets/images/Ownership-Images/battery_warranty_img-one-lg.webp",
      
       
       ],
      component: BatteryWarranty,
    },
    {
      title: "# ELECTRIC STORE",
      description: "Come on over. Let’s meet in person.",
      images: [
        "../assets/images/Ownership-Images/E-store-img.webp",
      
      ],
      component: ElectricStore,
    },
    {
      title: "# HYPERCHARGER",
      description: "What’s so hyper about our Hyperchargers?",
     
       images:["../assets/images/Ownership-Images/hypercharger_one-sm.webp",
             "../assets/images/Ownership-Images/hypercharger_one-lg.webp"
      ] ,
      component: HyperCharger,
    },
    {
      title: "# REFERRALS",
      description: "# ENDICEage Referral Program  Exclusively for the community.",
      images:["../assets/images/Ownership-Images/ref-img-one-sm.webp",
             "../assets/images/Ownership-Images/ref-img-one-lg.webp",
           
      ] ,
      component: Referral,
    } 
               ]