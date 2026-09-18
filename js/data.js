/**
 * CYNIC AGENT PORTAL & PUBLIC DIRECTORY - CENTRAL MOCK DATABASE & STATE
 * Context: Nigerian Student Accommodation Platform (Lagos/Ikeja/Akoka/Yaba/Ojo/Epe/Ibadan)
 */

const CYNIC_DATA = {
  agent: {
    name: "Tunde Balogun",
    email: "tunde.balogun@cynichomes.ng",
    phone: "08031234567",
    agency: "Prime Campus Properties Ltd",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    verified: true,
    totalListings: 12,
    activeInterests: 34,
    activeChats: 8,
    pendingReports: 3
  },

  // Top University Areas matching Screenshot 1 & 2
  universityAreas: [
    {
      id: "lasued-epe",
      name: "Lasued-Epe",
      shortName: "LASUED Epe Campus",
      listingsCount: 3,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "unilag-akoka",
      name: "UNILAG-Akoka",
      shortName: "University of Lagos",
      listingsCount: 8,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "lasu-ojo",
      name: "LASU-Ojo",
      shortName: "Lagos State University",
      listingsCount: 5,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "yabatech",
      name: "Yabatech",
      shortName: "Yaba College of Technology",
      listingsCount: 6,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "ui-ibadan",
      name: "UI-Ibadan",
      shortName: "University of Ibadan",
      listingsCount: 4,
      image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // Listings with Dual-pricing matching Screenshot 3, 4, 5
  listings: [
    {
      id: "cyn-101",
      title: "Executive Boys Quarters with Personal Kitchen",
      address: "59345 STONEWALL DR, Plaquemine / LASU Gate Road",
      town: "Ojo",
      schoolArea: "LASU-Ojo",
      buildingType: "Boys Quarters",
      apartmentType: "Self-Contain",
      availableUnits: 1,
      maxOccupants: 2,
      minOccupants: 1,
      toiletBathType: "Shared",
      kitchenType: "Personal",
      initialCharge: 300000,
      subsequentCharge: 200000,
      totalPackage: 300000,
      annualCharge: 200000,
      cleaningFee: 20000,
      status: "Available",
      interestsCount: 12,
      isFeatured: true,
      hasVideo: true,
      videoDuration: "0:45",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Modern serviced boys quarters apartment within a guarded community along the LASU Ojo main corridor. Steady water, personal kitchen fittings, and verified cynic accreditation.",
      amenities: ["Prepaid Meter", "Running Water", "Gated Security", "Tiled Floor", "Wardrobe", "Waste Disposal"],
      isRoommateShared: true,
      roommatesGotten: 1,
      roommatesNeeded: 1,
      roommateSharePrice: 150000,
      currentRoommates: [
        { name: "Mojeed", gender: "Male", religion: "Muslim", faculty: "Science", tags: ["Male", "Muslim", "Quiet", "Studious"] }
      ]
    },
    {
      id: "cyn-102",
      title: "Self-Contain at Ikeja LASUCOM Campus",
      address: "14 Obafemi Awolowo Way, Ikeja",
      town: "Ikeja",
      schoolArea: "LASUCOM-Ikeja",
      buildingType: "Self-Contain",
      apartmentType: "Self-Contain",
      availableUnits: 2,
      maxOccupants: 2,
      minOccupants: 1,
      toiletBathType: "En-suite / Private",
      kitchenType: "Personal",
      initialCharge: 650000,
      subsequentCharge: 500000,
      totalPackage: 650000,
      annualCharge: 500000,
      cleaningFee: 25000,
      status: "Available",
      interestsCount: 15,
      isFeatured: true,
      hasVideo: true,
      videoDuration: "0:52",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Spacious self-contain in a quiet, gated compound close to LASUCOM Ikeja campus. Pre-paid meter, running water 24/7, security guard on duty. Perfect for medical students.",
      amenities: ["Prepaid Meter", "Running Water", "Gated Security", "Tiled Floor", "Wardrobe"],
      isRoommateShared: false,
      roommatesGotten: 0,
      roommatesNeeded: 0,
      roommateSharePrice: 0,
      currentRoommates: []
    },
    {
      id: "cyn-103",
      title: "Modern Mini-Flat near UNILAG Gate",
      address: "22 St. Finbarr's College Road, Akoka",
      town: "Akoka / Yaba",
      schoolArea: "UNILAG-Akoka",
      buildingType: "Mini Flat",
      apartmentType: "Mini Flat",
      availableUnits: 1,
      maxOccupants: 3,
      minOccupants: 1,
      toiletBathType: "En-suite / Private",
      kitchenType: "Personal",
      initialCharge: 950000,
      subsequentCharge: 750000,
      totalPackage: 950000,
      annualCharge: 750000,
      cleaningFee: 30000,
      status: "Available",
      interestsCount: 18,
      isFeatured: true,
      hasVideo: true,
      videoDuration: "0:52",
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Walking distance to UNILAG second gate. Brand new fittings, dedicated transformer, pop ceiling, clean borehole water. Ideal for serious undergraduates.",
      amenities: ["Prepaid Meter", "Running Water", "Pop Ceiling", "WiFi Ready", "Gated Security"],
      isRoommateShared: false,
      roommatesGotten: 0,
      roommatesNeeded: 0,
      roommateSharePrice: 0,
      currentRoommates: []
    },
    {
      id: "cyn-104",
      title: "Serviced Studio Apartment at Yaba Tech Axis",
      address: "8 Hughes Avenue, Alagomeji, Yaba",
      town: "Yaba",
      schoolArea: "YABATECH",
      buildingType: "Studio",
      apartmentType: "Studio Apartment",
      availableUnits: 1,
      maxOccupants: 2,
      minOccupants: 1,
      toiletBathType: "En-suite / Private",
      kitchenType: "Personal",
      initialCharge: 800000,
      subsequentCharge: 600000,
      totalPackage: 800000,
      annualCharge: 600000,
      cleaningFee: 20000,
      status: "Available",
      interestsCount: 8,
      isFeatured: true,
      hasVideo: true,
      videoDuration: "0:38",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Cozy serviced studio with generator backup in Yaba tech corridor. Fiber-optic ready, gated security, uninterrupted water supply.",
      amenities: ["Generator Backup", "Prepaid Meter", "Running Water", "Gated Security"],
      isRoommateShared: true,
      roommatesGotten: 1,
      roommatesNeeded: 1,
      roommateSharePrice: 400000,
      currentRoommates: [
        { name: "Emeka", gender: "Male", religion: "Christian", faculty: "Engineering", tags: ["Male", "Christian", "Techie", "Early Riser"] }
      ]
    },
    {
      id: "cyn-105",
      title: "Lasued-Epe Budget Student Room",
      address: "4 Campus Link Road, Noforija, Epe",
      town: "Epe",
      schoolArea: "Lasued-Epe",
      buildingType: "Single Room",
      apartmentType: "Single Room",
      availableUnits: 3,
      maxOccupants: 2,
      minOccupants: 1,
      toiletBathType: "Shared",
      kitchenType: "Shared",
      initialCharge: 220000,
      subsequentCharge: 160000,
      totalPackage: 220000,
      annualCharge: 160000,
      cleaningFee: 15000,
      status: "Available",
      interestsCount: 9,
      isFeatured: true,
      hasVideo: false,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Affordable accommodation 5 minutes from LASUED Epe main gate. Serene environment, study-friendly with treated borehole.",
      amenities: ["Running Water", "Prepaid Meter", "Gated Security"],
      isRoommateShared: true,
      roommatesGotten: 1,
      roommatesNeeded: 1,
      roommateSharePrice: 110000,
      currentRoommates: [
        { name: "Glory", gender: "Female", religion: "Christian", faculty: "Education", tags: ["Female", "Christian", "Neat", "Quiet"] }
      ]
    }
  ],

  // Student Interests
  interests: [
    {
      id: "int-01",
      user: "John Doe",
      listingId: "cyn-101",
      listingTitle: "Executive Boys Quarters with Personal Kitchen",
      studentStatus: "Fresher",
      matchStatus: "Me & 1 other",
      gender: "Male",
      notes: "I prefer quiet roommates who take academics seriously. Studying at LASU Ojo campus.",
      whatsapp: "08123456789",
      whatsappInternational: "+2348123456789",
      contactMethod: "In-app",
      date: "2026-09-03",
      avatar: "JD"
    },
    {
      id: "int-02",
      user: "Sarah Alabi",
      listingId: "cyn-103",
      listingTitle: "Modern Mini-Flat near UNILAG Gate",
      studentStatus: "Returning Student (300L)",
      matchStatus: "Solo",
      gender: "Female",
      notes: "Need space for study desk and quiet environment. Available for inspection this Friday.",
      whatsapp: "08098765432",
      whatsappInternational: "+2348098765432",
      contactMethod: "WhatsApp",
      date: "2026-09-02",
      avatar: "SA"
    },
    {
      id: "int-03",
      user: "Emeka Okafor",
      listingId: "cyn-104",
      listingTitle: "Serviced Studio Apartment at Yaba Tech Axis",
      studentStatus: "Fresher",
      matchStatus: "Me & 1 other",
      gender: "Male",
      notes: "Studying Computer Engineering. Looking for someone tech-oriented to share utilities.",
      whatsapp: "07012349876",
      whatsappInternational: "+2347012349876",
      contactMethod: "In-app",
      date: "2026-09-01",
      avatar: "EO"
    },
    {
      id: "int-04",
      user: "Zainab Bello",
      listingId: "cyn-102",
      listingTitle: "Self-Contain at Ikeja LASUCOM Campus",
      studentStatus: "Final Year (400L)",
      matchStatus: "Solo",
      gender: "Female",
      notes: "Finalist preparing for project work. Need guaranteed electricity and security.",
      whatsapp: "08155566778",
      whatsappInternational: "+2348155566778",
      contactMethod: "WhatsApp",
      date: "2026-08-30",
      avatar: "ZB"
    }
  ],

  // Chats
  chats: [
    {
      id: "chat-01",
      user: "John Doe",
      userInitial: "JD",
      online: true,
      listingId: "cyn-101",
      listingTitle: "Executive Boys Quarters with Personal Kitchen",
      lastMessage: "Thank you sir! Can we do inspection on Saturday morning?",
      lastTime: "10:42 AM",
      unread: 1,
      messages: [
        { sender: "user", text: "Hello, good day. I saw your listing on Cynic.", time: "10:30 AM" },
        { sender: "agent", text: "Hello John! Yes, it is still very much available.", time: "10:33 AM" },
        { sender: "user", text: "What is the initial charge and subsequent charge?", time: "10:35 AM" },
        { sender: "agent", text: "Initial charge is ₦300,000. Subsequent renewal charge is ₦200,000.", time: "10:38 AM" },
        { sender: "user", text: "Thank you sir! Can we do inspection on Saturday morning?", time: "10:42 AM" }
      ]
    },
    {
      id: "chat-02",
      user: "Sarah Alabi",
      userInitial: "SA",
      online: false,
      listingId: "cyn-103",
      listingTitle: "Modern Mini-Flat near UNILAG Gate",
      lastMessage: "Okay noted. I will come with my parent for the inspection.",
      lastTime: "Yesterday",
      unread: 0,
      messages: [
        { sender: "user", text: "Good afternoon agent Tunde, is the mini-flat at St. Finbarr's still vacant?", time: "2:15 PM" },
        { sender: "agent", text: "Good afternoon Sarah. Yes, it's vacant and ready for immediate move-in.", time: "2:20 PM" },
        { sender: "user", text: "Okay noted. I will come with my parent for the inspection.", time: "3:00 PM" }
      ]
    },
    {
      id: "chat-03",
      user: "Emeka Okafor",
      userInitial: "EO",
      online: true,
      listingId: "cyn-104",
      listingTitle: "Serviced Studio Apartment at Yaba Tech Axis",
      lastMessage: "Does the generator run 24 hours during exam week?",
      lastTime: "Sep 2",
      unread: 2,
      messages: [
        { sender: "user", text: "Hi, I sent interest for the studio on Hughes Avenue.", time: "11:15 AM" },
        { sender: "user", text: "Does the generator run 24 hours during exam week?", time: "11:16 AM" }
      ]
    }
  ],

  // Reports
  reports: [
    {
      id: "rep-01",
      listingId: "cyn-101",
      listingTitle: "Executive Boys Quarters with Personal Kitchen",
      user: "John Doe",
      reason: "Bathroom leaking from the shower pipe connection",
      date: "2026-09-03",
      status: "Pending",
      urgency: "Medium"
    },
    {
      id: "rep-02",
      listingId: "cyn-103",
      listingTitle: "Modern Mini-Flat near UNILAG Gate",
      user: "Babatunde Adeleke",
      reason: "Borehole pumping machine tripped breaker in flat 3",
      date: "2026-09-01",
      status: "Pending",
      urgency: "High"
    },
    {
      id: "rep-03",
      listingId: "cyn-104",
      listingTitle: "Serviced Studio Apartment at Yaba Tech Axis",
      user: "Chioma Nwosu",
      reason: "Security gate padlock replaced without notifying occupants",
      date: "2026-08-28",
      status: "Pending",
      urgency: "Low"
    }
  ]
};

// Utility to format Nigerian Naira
function formatNaira(amount) {
  return "₦" + Number(amount || 0).toLocaleString('en-NG');
}

// Submit Student Interest from Public Website
function submitStudentInterest(interestData) {
  const stored = localStorage.getItem('cynic_interests');
  let interests = stored ? JSON.parse(stored) : CYNIC_DATA.interests;

  const newInterest = {
    id: "int-" + Date.now().toString().slice(-4),
    user: interestData.name,
    listingId: interestData.listingId,
    listingTitle: interestData.listingTitle,
    studentStatus: interestData.studentStatus || "Fresher",
    matchStatus: interestData.matchStatus || "Solo",
    gender: interestData.gender || "Not specified",
    notes: interestData.notes || "Looking forward to accommodation inspection.",
    whatsapp: interestData.whatsapp || "08000000000",
    whatsappInternational: interestData.whatsapp.startsWith('0') 
      ? "+234" + interestData.whatsapp.slice(1) 
      : (interestData.whatsapp.startsWith('+') ? interestData.whatsapp : "+234" + interestData.whatsapp),
    contactMethod: interestData.contactMethod || "WhatsApp",
    date: new Date().toISOString().split('T')[0],
    avatar: interestData.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  };

  interests.unshift(newInterest);
  localStorage.setItem('cynic_interests', JSON.stringify(interests));

  // Also increment interest counter on the listing
  const storedListings = localStorage.getItem('cynic_listings');
  let listings = storedListings ? JSON.parse(storedListings) : CYNIC_DATA.listings;
  const listingIndex = listings.findIndex(l => l.id === interestData.listingId);
  if (listingIndex !== -1) {
    listings[listingIndex].interestsCount = (listings[listingIndex].interestsCount || 0) + 1;
    localStorage.setItem('cynic_listings', JSON.stringify(listings));
  }

  return newInterest;
}

// Register New Agent
function registerNewAgent(agentData) {
  const newAgent = {
    name: agentData.name,
    email: agentData.email,
    phone: agentData.phone,
    agency: agentData.agency,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    verified: true,
    totalListings: 0,
    activeInterests: 0,
    activeChats: 0,
    pendingReports: 0,
    cacNumber: agentData.cacNumber || "RC-000000",
    coverageAreas: agentData.coverageAreas || ["UNILAG-Akoka"]
  };

  localStorage.setItem('cynic_agent', JSON.stringify(newAgent));
  return newAgent;
}

// Local Storage initialization
(function initLocalStorage() {
  const storedListings = localStorage.getItem('cynic_listings');
  if (!storedListings) {
    localStorage.setItem('cynic_listings', JSON.stringify(CYNIC_DATA.listings));
  } else {
    try {
      let listings = JSON.parse(storedListings);
      let updated = false;
      listings = listings.map(item => {
        const defaultItem = CYNIC_DATA.listings.find(l => l.id === item.id);
        if (defaultItem && (item.isRoommateShared === undefined || item.currentRoommates === undefined)) {
          updated = true;
          return {
            ...item,
            isRoommateShared: defaultItem.isRoommateShared || false,
            roommatesGotten: defaultItem.roommatesGotten !== undefined ? defaultItem.roommatesGotten : 0,
            roommatesNeeded: defaultItem.roommatesNeeded !== undefined ? defaultItem.roommatesNeeded : 0,
            roommateSharePrice: defaultItem.roommateSharePrice || 0,
            currentRoommates: defaultItem.currentRoommates || []
          };
        }
        return item;
      });
      if (updated) {
        localStorage.setItem('cynic_listings', JSON.stringify(listings));
      }
    } catch(e) {
      localStorage.setItem('cynic_listings', JSON.stringify(CYNIC_DATA.listings));
    }
  }
  if (!localStorage.getItem('cynic_agent')) {
    localStorage.setItem('cynic_agent', JSON.stringify(CYNIC_DATA.agent));
  }
  if (!localStorage.getItem('cynic_reports')) {
    localStorage.setItem('cynic_reports', JSON.stringify(CYNIC_DATA.reports));
  }
  if (!localStorage.getItem('cynic_chats')) {
    localStorage.setItem('cynic_chats', JSON.stringify(CYNIC_DATA.chats));
  }
  if (!localStorage.getItem('cynic_interests')) {
    localStorage.setItem('cynic_interests', JSON.stringify(CYNIC_DATA.interests));
  }
})();
