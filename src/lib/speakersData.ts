export type Speaker = {
  name: string;
  designation: string;
  organization: string;
  image: string;
  accentColor: string;
  bgAccent: string;
  borderAccent: string;
};

export type SpeakerGroup = {
  id: string;
  label: string;
  speakers: Speaker[];
};

const accentStyles = [
  {
    accentColor: "from-primary to-deep-purple",
    bgAccent: "bg-primary/10",
    borderAccent: "border-primary/30",
  },
  {
    accentColor: "from-secondary to-gold",
    bgAccent: "bg-secondary/10",
    borderAccent: "border-secondary/30",
  },
  {
    accentColor: "from-accent to-teal",
    bgAccent: "bg-accent/10",
    borderAccent: "border-accent/30",
  },
  {
    accentColor: "from-deep-purple to-primary",
    bgAccent: "bg-deep-purple/10",
    borderAccent: "border-deep-purple/30",
  },
  {
    accentColor: "from-gold to-secondary",
    bgAccent: "bg-gold/10",
    borderAccent: "border-gold/30",
  },
  {
    accentColor: "from-teal to-accent",
    bgAccent: "bg-teal/10",
    borderAccent: "border-teal/30",
  },
];

const withAccent = (index: number) => accentStyles[index % accentStyles.length];

// Helper function to get image path from filename
const getImagePath = (filename: string) => `/speakers/${filename}`;

export const speakerGroups: SpeakerGroup[] = [
  {
    id: "k12",
    label: "K12 Speakers",
    speakers: [
      {
        name: "Dr. Biswajit Saha",
        designation: "Professor & Director (Skill Education)",
        organization: "CBSE, Ministry of Education, Government of India",
        image: getImagePath("Biswajit Saha.png"),
        ...withAccent(0),
      },
      {
        name: "Ashish Vidyarthi",
        designation: "Actor & Motivational Speaker",
        organization: "Transformational Leader, Mumbai",
        image: getImagePath("Ashish Vidyarthi  .png"),
        ...withAccent(1),
      },
      {
        name: "Group Captain Angad Pratap",
        designation: "Astronaut Designate",
        organization: "India",
        image: getImagePath("Angad Pratap .png"),
        ...withAccent(2),
      },
      {
        name: "Shri V.V. Lakshminarayana",
        designation: "Tenant Farmer, CBI Ex-JD",
        organization: "Additional Director General of Police (Retd.), Maharashtra",
        image: getImagePath("shri v.v lakshmi Narayana.png"),
        ...withAccent(3),
      },
      {
        name: "Dr. Ashok Kumar Pandey",
        designation: "Chairperson",
        organization: "Council for Global Citizenship Education Delhi",
        image: getImagePath("ashok-pandey.png"),
        ...withAccent(4),
      },
      {
        name: "Mr. Rajendran Dandapani",
        designation: "Business Solutions Evangelist",
        organization: "Zoho Corporation. President, Zoho Schools of Learning",
        image: getImagePath("Rajendran Dandapani.png"),
        ...withAccent(5),
      },
      {
        name: "Dr. Shankar Goenka",
        designation: "Author, Coach & TEDx Speaker",
        organization: "",
        image: getImagePath("Shankar Goenka.png"),
        ...withAccent(0),
      },
      {
        name: "Dr. R. Kishore Kumar",
        designation: "Chairman",
        organization: "St. John's Public Schools, Chennai",
        image: getImagePath("Dr. R. Kishore Kumar - Photo 1.png"),
        ...withAccent(1),
      },
      {
        name: "Mr. Naga Tummala",
        designation: "Co-founder & CEO",
        organization: "Coschool. Co-founder & Chairman, People Combine",
        image: getImagePath("Nagaprasad tummala.png"),
        ...withAccent(2),
      },
      {
        name: "Dr. Liisa Toivonen",
        designation: "Counsellor, Science & Higher Education Policy",
        organization: "Embassy of Finland, New Delhi",
        image: getImagePath("Liisa Toivonen.png"),
        ...withAccent(3),
      },
      {
        name: "Praveen Raju Kalidindi",
        designation: "Founder",
        organization: "Suchitra Academy & Sagebrook International School. President - ARISE",
        image: getImagePath("Praveen Raju.png"),
        ...withAccent(4),
      },
      {
        name: "Dr. Kondal Reddy Kandadi",
        designation: "Founder Chairman",
        organization: "Manchester Global School, Hyderabad",
        image: getImagePath("Dr Kondal Reddy.png"),
        ...withAccent(5),
      },
      {
        name: "Sadula Madhusudhan",
        designation: "President",
        organization: "Telangana Recognised School Managements Association",
        image: getImagePath("Sudula Madhusudhan.png"),
        ...withAccent(0),
      },
      {
        name: "Sreekanth Koganti",
        designation: "Director",
        organization: "NextGen & Kennedy Schools. President, ISMA",
        image: getImagePath("Sreekanth Koganti .png"),
        ...withAccent(1),
      },
      {
        name: "Kanak Gupta",
        designation: "Group Director",
        organization: "Seth M.R. Jaipuria Schools",
        image: getImagePath("Kanak Gupta .png"),
        ...withAccent(2),
      },
      {
        name: "Yeshwanth Raj Parasmal",
        designation: "Founder & CEO",
        organization: "21K School, Bengaluru",
        image: getImagePath("Yeswanth Parasmal.png"),
        ...withAccent(3),
      },
      {
        name: "Dr. Tushar Guha",
        designation: "Founder, Chairman",
        organization: "Nrityanjali Group & Open Forum for Principals, Mumbai",
        image: getImagePath("Tushar Guha.png"),
        ...withAccent(4),
      },
      {
        name: "Rev. Fr. J.R. Bharat Reddy Y",
        designation: "Correspondent & Principal",
        organization: "STEM School, Guntur",
        image: getImagePath("bharath reddy.png"),
        ...withAccent(5),
      },
      {
        name: "Dr. Seetha Murty",
        designation: "Director Education",
        organization: "Silver Oaks International Schools. Vice President, IB Heads Association India",
        image: getImagePath("Dr seetha Murty.png"),
        ...withAccent(0),
      },
      {
        name: "Prof. Usha Raman",
        designation: "Professor",
        organization: "Department of Communication, University of Hyderabad",
        image: getImagePath("Usha Raman.png"),
        ...withAccent(1),
      },
      {
        name: "Dr. Swati Popat Vats",
        designation: "President",
        organization: "Early Childhood Association India & Podar Education Network, Mumbai",
        image: getImagePath("Swati papat vats.png"),
        ...withAccent(2),
      },
      {
        name: "Pradeep Sharma",
        designation: "Founder & CEO",
        organization: "Teacherfirst.in, Jaipur",
        image: getImagePath("Pradeep Sharma.png"),
        ...withAccent(3),
      },
      {
        name: "Ms. Geeta Ramanujam",
        designation: "Founder & Director",
        organization: "Kathalaya's International Academy of Storytelling, Bengaluru",
        image: getImagePath("Geeta Ramanujam .png"),
        ...withAccent(4),
      },
      {
        name: "Dr. Anjum Babu Khan",
        designation: "Author, ABCs of Brain-Compatible Learning & Lead Consultant",
        organization: "Edvatage Leadership Institute & Formerly Founder-Director, Glendale Education",
        image: getImagePath("Anjum Babu Khan.png"),
        ...withAccent(5),
      },
      {
        name: "Dr. Revathi Srinivasan",
        designation: "Director",
        organization: "Singhania Group of Schools, Mumbai",
        image: getImagePath("REVATHI  SRINIVASAN.png"),
        ...withAccent(0),
      },
      {
        name: "Ms. Deepti Asnani Nambiar",
        designation: "Director",
        organization: "The Ivy Global School, Bhopal",
        image: getImagePath("deepti asnani.png"),
        ...withAccent(1),
      },
      {
        name: "Ms. Jhansi Christopher",
        designation: "Head Academic Excellence",
        organization: "Ryan International",
        image: getImagePath("Jhansi Christopher .png"),
        ...withAccent(2),
      },
      {
        name: "Ms. Shreya Yashwanth",
        designation: "TEDx Speaker",
        organization: "India 2018",
        image: getImagePath("Shreya yashwanth.png"),
        ...withAccent(3),
      },
    ],
  },
];

// All speakers for the full speakers page
export const allSpeakers: Speaker[] = [
  ...speakerGroups.flatMap((group) => group.speakers),
];

// Featured speakers for the homepage carousel
const featuredSpeakerNames = [
  "Ashish Vidyarthi",
  "Dr. Biswajit Saha",
  "Group Captain Angad Pratap",
  "Shri V.V. Lakshminarayana",
  "Dr. Ashok Kumar Pandey",
  "Dr. Shankar Goenka",
  "Dr. R. Kishore Kumar",
  "Dr. Kondal Reddy Kandadi",
];

export const featuredSpeakers: Speaker[] = allSpeakers.filter((speaker) =>
  featuredSpeakerNames.includes(speaker.name)
);

// Raw image filenames for additional speakers (used on /speakers page as a gallery)
// NOTE: These files must exist in public/speakers with exactly these names.
export const extraSpeakerImageFiles: string[] = [
  "Pradeep Sharma.png",
  "Chandrashekhar D P.png",
  "Nidhi Thapar.png",
  "Krishna Chalam Vice-Chancellor 1.png",
  "Dr Reeta Sonawat.png",
  "Dr Mayuri.png",
  "Francis Joseph formal Photo.png",
  "Geeta Ramanujam 2.png",
  "Yeswanth Parasmal.png",
  "WhatsApp_Image_2024-10-30_at_3.53.16_PM-removebg-preview.png",
  "Shreya yashwanth.png",
  "Vinod Kakamudi.png",
  "Varalakshmi Mogali.png",
  "usha reddy meridian school Oct.png",
  "Usha Raman-Picsart-AiImageEnhancer.png",
  "Tushar Guha.png",
  "Tulasi Vishnu Prasad K.png",
  "tirupati rao.png",
  "Tirupati Panigrahi.png",
  "Thyagaraja.png",
  "sudula-madhusudhan=-=.png",
  "Sudhakar Rao.png",
  "Srikanth Koganti PNG13.png",
  "Srikanth Koganti PNG13+++.png",
  "Sowmya MSL.png",
  "Sonal Profile pic.png",
  "Sindhuri Reddy.png",
  "Shyla.png",
  "shri v.v lakshmi Narayana.png",
  "Shilpa Solanki.png",
  "Sheetal Jethy.png",
  "Shankargouda Hosamani.png",
  "Shailaja Rao M.png",
  "Sesha Reddy 1.png",
  "Seema Sheikh.png",
  "Satyashree gupta 2.png",
  "Satya Kiran Sastry 1.png",
  "Samala Nagaraj.png",
  "Rhea Willibrord.png",
  "REVATHI  SRINIVASAN.png",
  "Ramesh Rao 2.png",
  "Ramachandra Reddy NEW HR 1.png",
  "Rajendran Dandapani.png",
  "Prof. Karanam.png",
  "Priyadarshi Nayak.png",
  "Premchand Paleti HR.png",
  "Premalatha Sellappan PNG7.png",
  "Praveen Raju.png",
  "Poonam Shah.png",
  "pooja jha Nair.png",
  "Ponguleti Srinivas Redyy.png",
  "Pankaj Mishra.png",
  "Naveen Nikolas.png",
  "Nagaprasad tummala.png",
  "Mehek Valecha.png",
  "Meghana Sen.png",
  "Manpreet Manna.png",
  "Lina ashar.png",
  "Liisa_Toivonen-Picsart-AiImageEnhancer-removebg-preview.png",
  "Liisa_Toivonen-Picsart-AiImageEnhancer-removebg-preview 2.png",
  "Lalitha Naidu.png",
  "Karunakaran 2.png",
  "Kanak Gupta New.png",
  "K G Suresh.png",
  "Jhansi Christopher Photo.png",
  "Jawahar Surisetti.png",
  "Jaffar Hussain.png",
  "Group Captain Angad Pratap.png",
  "Geeta Ramanujam 3.png",
  "Dr. R. Kishore Kumar - Photo 1.png",
  "dr-vasudha-mani-education-academia-udaipur-thumb-removebg-preview.png",
  "dr-manjula-pooja-shroff.png",
  "Dr seetha Murty.png",
  "Dr Kondal Reddy.png",
  "Dr Jacob Das.png",
  "deepti_asnani-removebg-preview.png",
  "Chinu Agrawal.png",
  "Chandrashekar D P.png",
  "Br. Vishwanathamrita Chaitanya.png",
  "Biswajit Saha.png",
  "bharath reddy.png",
  "Bharath Geetam University.png",
  "Balakista Reddy 2.png",
  "Azaleeya huii.png",
  "Asma zaidi.png",
  "ashok-pandey.png",
  "Ashok kumar pandey.jpeg",
  "Ashish Vidyarthi  1.png",
  "Anvita Kackar.png",
  "Anjum Babu Khan.png",
  "Angad Pratap 2.png",
  "anantha krishna PNG16.png",
  "Ameer khan.png",
  "Ajay Singh.png",
  "Ajay chowbe.png",
  "Aditya_mohan_jadhav-removebg-preview 2.png",
  "5__Dr._Swati_Popat_Vats-removebg.png",
  "4ade572eff90fdb8c6ca7d1d7fd789ae-removebg-preview.png",
  "2 Premalatha Sellappan 1.png",
];
