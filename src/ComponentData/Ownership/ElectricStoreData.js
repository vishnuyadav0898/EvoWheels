import CityStore from "../../components/CityStore"
export const Data = {
       subtitle: ["Come on over.", "Let’s meet in person"],
       customContent: CityStore,
       testRide: {
         title: "Take the Ola S1 for a spin",
         description: "Try out its features. Test out the speed. Get to know the Ola S1.",
         images:[ "../assets/images/Ownership-Images/E-store-img-six.webp","../assets/images/Ownership-Images/ec_img2.webp",]
                 },
       financing: {
         title: "Financing. Keep it simple, silly.",
         description: "Your ride. Your choice of payment.",
         images: [
           { src: "../assets/images/Ownership-Images/E-store-img-three.webp", button: "Calculate EMI" },
           { src: "../assets/images/Ownership-Images/E-store-img-four.webp" },
           { src: "../assets/images/Ownership-Images/E-store-img-five.webp" },
         ],
                  },
       relationship: {
         title: "It's a long-term relationship",
         description: "Service. Maintenance. Post-sale queries. Bring it on.",
         items: [
           {
             image: "../assets/images/Ownership-Images/E-store-img-nine.webp",
             title: "# HYPERSERVICE",
             description: "Get your S1 serviced faster, easier, better.",
           },
           {
             image: "../assets/images/Ownership-Images/E-store-img-two.webp",
             title: "# CHARGING",
             description: "Charging points are waiting for you at our Ola Stores.",
           },
                ],
                     },
       meetInPerson: {
         title: "Let’s meet in person.",
         description: "Come by for exclusive offers, benefits and more.",
         cards: [
           {
             image: "../assets/images/Ownership-Images/E-store-img-ten.webp",
             title: "Make the switch to electric!",
             description: "Get up to ₹40,000 in exchange of your old scooter",
           },
           {
             image: "../assets/images/Ownership-Images/E-store-img-seven.webp",
             title: "Owning an Ola S1 has never been easier!",
             description: "Get interest rates on the Ola S1 now starting at as low as 6.99%*",
           },
                ],
                     },
       progress: {
         title: "Look how far we've come",
         description: "From 5 to 500 to 900+ Ola Electric Store. We've come a long way. And we’re still going.",
         images:[ "../assets/images/Ownership-Images/ec_far_img2.webp","../assets/images/Ownership-Images/E-store-img-eight.webp",]

                 },
       findUs: {
         title: "Find us",
         description: "Find Ola Electric Store all across India",
         cities: [
           { name: "JAIPUR", image: "../assets/images/Ownership-Images/es_city_jaipur.webp" },
           { name: "DELHI NCR", image: "../assets/images/Ownership-Images/es_city_delhi.webp" },
           { name: "BANGALORE", image: "../assets/images/Ownership-Images/es_city_bengaluru.webp" },
           { name: "CHENNAI", image: "../assets/images/Ownership-Images/es_city_chennai.webp" },
           { name: "HYDERABAD", image: "../assets/images/Ownership-Images/es_city_hyderabad.webp" },
           { name: "KOLKATA", image: "../assets/images/Ownership-Images/es_city_kolkata.webp" },
           { name: "PUNE", image: "../assets/images/Ownership-Images/es_city_pune.webp" },
           { name: "MUMBAI", image: "../assets/images/Ownership-Images/es_city_mumbai.webp" },
                 ],
               },
                       
             CityStore: {
        jaipur: [
   {
     name: "Ola Electric Store, Vidyut Nagar",
     address: "A/11, Purani Chungi, Ajmer Rd, Vidyut Nagar B, Jaipur, Rajasthan 302021",
   },
   {
     name: "Ola Electric Store, Malviya Nagar",
     address: "Jagatpura Road, Model Town - B, Model Town, Malviya Nagar, Jaipur, Rajasthan 302017",
   },
   {
     name: "Ola Electric Store, Vaishali Nagar",
     address: "#789, Vaishali Nagar, Jaipur, Rajasthan 302021",
   },
   {
     name: "Ola Electric Store, Tonk Road",
     address: "#123, Tonk Road, Jaipur, Rajasthan 302015",
   },
   {
     name: "Ola Electric Store, Mansarovar",
     address: "Mansarovar Plaza, Jaipur, Rajasthan 302020",
   },
 ],
 delhi: [
   {
     name: "Ola Electric Store, Connaught Place",
     address: "D Block, Connaught Place, New Delhi, Delhi 110001",
   },
   {
     name: "Ola Electric Store, Lajpat Nagar",
     address: "Central Market, Lajpat Nagar, New Delhi, Delhi 110024",
   },
   {
     name: "Ola Electric Store, Karol Bagh",
     address: "Ajmal Khan Rd, Karol Bagh, New Delhi, Delhi 110005",
   },
   {
     name: "Ola Electric Store, Rohini",
     address: "Sector 10, Rohini, New Delhi, Delhi 110085",
   },
   {
     name: "Ola Electric Store, Dwarka",
     address: "Sector 6, Dwarka, New Delhi, Delhi 110075",
   },
 ],
 mumbai: [
   {
     name: "Ola Electric Store, Andheri",
     address: "Andheri East, Mumbai, Maharashtra 400069",
   },
   {
     name: "Ola Electric Store, Bandra",
     address: "Hill Road, Bandra West, Mumbai, Maharashtra 400050",
   },
   {
     name: "Ola Electric Store, Powai",
     address: "Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
   },
   {
     name: "Ola Electric Store, Colaba",
     address: "Colaba Causeway, Mumbai, Maharashtra 400005",
   },
   {
     name: "Ola Electric Store, Borivali",
     address: "Borivali West, Mumbai, Maharashtra 400092",
   },
 ],
 bangalore:[
   {
     name: "Ola Electric Store, Jayanagar",
     address: "#363, Ground floor, 10th B Main Rd, Jayanagar 3rd Block, Jayanagar, Bengaluru, Karnataka 560011",
   },
   {
     name: "Ola Electric Store, Rr nagar",
     address: "Bhoopanna Building, Kenchena Halli Rd, Janankshi Layout, 5th Stage, RR Nagar, Bengaluru,",
   },
   {
     name: "Ola Electric Store, Yelahanka",
     address: "290-284, 15th A Cross Rd, Yelahanka Satellite Town, Yelahanka, Bengaluru, Karnataka 560064",
   },
   {
     name: "Ola Electric Store,Banashankari",
     address: "Ground Floor, #01, 100 Feet Road, 5th Block, 3rd Stage, Banashankari, Bangalore,",
   },
   {
     name: "Ola Electric Store, Mahadevapura",
     address: "#89, T Govindappa Complex, ITPL Main Road, Kamadhenu Nagar, B Narayanapura,",
   },
 ],
 hyderabad:[
   {
     name: "Ola Electric Store,Begumpet",
     address: "No 1-8-303/34/B3, Mayfair complex, Sardar Patel Rd, Sindhi Colony, Begumpet, Secunderabad, Telangana 500003",
   },
   {
     name: "Ola Electric Store,Sangeet nagar",
     address: "NH65, Mumbai Highway, Sangeet Nagar, Kukatpally, Hyderabad, Telangana 500072",
   },
   {
     name: "Ola Electric Store,Somajiguda",
     address: "No. 6-3-902/1/A, Shanti Sikhara Complex, Raj Bhavan Road, Durga Nagar Colony, Somajiguda",
   },
   {
     name: "Ola Electric Store,Madhapur",
     address: "Plot No. 4, Survey No. 2-54, Hitech City Road, Sri Rama Colony, Madhapur, Hyderabad",
   },
   {
     name: "Ola Electric Store,Nagole",
     address: "Door No.-2-3-235, Inner Ring Road, Adarsh Nagar Colony, Nagole, Hyderabad, Telangana",
   },
 ],
 pune:[
   {
     name: "Ola Electric Store,Phugewadi",
     address: "S No 390/2B, near Neeta Tower, opp. SANDVIK ASIA, Dapodi, Pune, Maharashtra 411012",
   },
   {
     name: "Ola Electric Store,Hadapsar",
     address: "#16/1/1, KPCT, Wanwadi Fatima Nagar, Opp Parmare Nagar, Hadapsar, Pune, Maharashtra",
   },
   {
     name: "Ola Electric Store,Baner",
     address: "Icon Tower, Baner-Aundh Rd, Baner, Pune, Maharashtra 411045",
   },
   {
     name: "Ola Electric Store,Erandwane",
     address: "Shop No. 101 B, 1st Floor, Karve Road, Erandwane, Pune, Maharashtra 411004",
   },
   {
     name: "Ola Electric Store,Viman nagar",
     address: "Shop #14, Nyati Empress, Survey #198, Hissa #2/1 & 2/2, CTS #110(Part), Viman Nagar Road, Clover Park, Viman Nagar, Pune, Maharashtra 411014",
   },
 ],
 kolkata:[
   {
     name: "Ola Electric Store,Shibpur",
     address: "Ananya Apartment, #22+24/1, Andul Rd, Dakhin Buxrah, Shibpur, Howrah, West Bengal 711109",
   },
   {
     name: "Ola Electric Store,Bhowanipore",
     address: "227/1B, Acharya Jagadish Chandra Bose Rd, Sreepally, Bhowanipore, Kolkata, West",
   },
   {
     name: "Ola Electric Store,Garia",
     address: "Netaji Subhash Chandra Bose Road, Ramkrishna Nagar, Garia Gardens, Garia, Kolkata, West",
   },
   {
     name: "Ola Electric Store,Noapara",
     address: "#2247, Adityam Building, Krishnanagar Road, Noapara, Barasat, Kolkata, West Bengal 700124",
   },
   {
     name: "Ola Electric Store,Habra",
     address: "Jessore Road, Habra, North 24 Parganas, West Bengal 743263",
   },
 ],
 chennai:[
   {
     name: "Ola Electric Store,Ambattur",
     address: "ANo.-123, First Main Road, 68B Ambattur Industrial Estate, Ambattur, Chennai, Tamil Nadu",
   },
   {
     name: "Ola Electric Store,Guindy",
     address: "Old #37, New #3, Sardar Patel Rd, Opposite to Park Hyatt, Guindy, Chennai, Tamil Nadu 600032",
   },
   {
     name: "Ola Electric Store,Porur",
     address: "#3-15, Mount Poonamallee Road, Devi Nagar, Porur, Chennai, Tamil Nadu 600116",
   },
   {
     name: "Ola Electric Store,Chintadripet",
     address: "110, Gaiety Palace, Blackers Road, Chintadripet, Chennai, Tamil Nadu 600002",
   },
   {
     name: "Ola Electric Store,Nungambakkam",
     address: "Pioneer Sudarshan Plaza 9, Uthamar Gandhi Road, Ponnangipuram, Tirumurthy",
   },
 ]


                 },   

                }