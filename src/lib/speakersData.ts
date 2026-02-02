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
