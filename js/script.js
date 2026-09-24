

/* ============================================================================
   1. DATA LAYER & LOCAL STORAGE REPOSITORY (data.js)
   ============================================================================ */
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
      verificationStatus: "Verified",
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
        { name: "Mojeed", gender: "Male", religion: "Muslim", faculty: "Science", level: "200L", tags: ["Male", "Muslim", "Quiet", "Studious"] }
      ],
      comments: [
        {
          id: "comm-101-1",
          author: "Segun Adebayo",
          avatar: "SA",
          date: "2 hours ago",
          text: "Is the generator running for 24 hours during semester exams?",
          reply: "Yes, the compound generator operates on an extended schedule during exam periods.",
          replyDate: "1 hour ago"
        },
        {
          id: "comm-101-2",
          author: "Fadekemi Alabi",
          avatar: "FA",
          date: "Yesterday",
          text: "Can two female students apply for the roommate slot together?",
          reply: null,
          replyDate: null
        }
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
      verificationStatus: "Verified",
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
      currentRoommates: [],
      comments: [
        {
          id: "comm-102-1",
          author: "Chidinma Eze",
          avatar: "CE",
          date: "3 hours ago",
          text: "How far is this hostel from the campus second gate by walking?",
          reply: "It is approximately a 5 to 7 minutes stroll directly through Awolowo Way gate.",
          replyDate: "2 hours ago"
        }
      ]
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
      status: "Occupied",
      verificationStatus: "Verified",
      occupiedDate: "2026-08-15",
      interestsCount: 18,
      isFeatured: true,
      hasVideo: true,
      videoDuration: "0:52",
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Walking distance to UNILAG second gate. Brand new fittings, dedicated transformer, pop ceiling, clean borehole water. Currently occupied by returning students.",
      amenities: ["Prepaid Meter", "Running Water", "Pop Ceiling", "WiFi Ready", "Gated Security"],
      isRoommateShared: false,
      roommatesGotten: 0,
      roommatesNeeded: 0,
      roommateSharePrice: 0,
      currentRoommates: [],
      comments: [
        {
          id: "comm-103-1",
          author: "Boluwatife Ojo",
          avatar: "BO",
          date: "1 week ago",
          text: "When will this mini flat be vacant again next session?",
          reply: "Current lease expires next July. You can submit early interest to be waitlisted.",
          replyDate: "6 days ago"
        }
      ]
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
      verificationStatus: "Unverified",
      interestsCount: 8,
      isFeatured: true,
      hasVideo: true,
      videoDuration: "0:38",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Cozy serviced studio with generator backup in Yaba tech corridor. Fiber-optic ready, gated security, uninterrupted water supply. Currently queued for Cynic Admin verification review.",
      amenities: ["Generator Backup", "Prepaid Meter", "Running Water", "Gated Security"],
      isRoommateShared: false,
      roommatesGotten: 0,
      roommatesNeeded: 0,
      roommateSharePrice: 0,
      currentRoommates: [],
      comments: [
        {
          id: "comm-104-1",
          author: "Damilola Ade",
          avatar: "DA",
          date: "Yesterday",
          text: "Is parking space available for student cars?",
          reply: null,
          replyDate: null
        }
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
      maxOccupants: 3,
      minOccupants: 1,
      toiletBathType: "Shared",
      kitchenType: "Shared",
      initialCharge: 220000,
      subsequentCharge: 160000,
      totalPackage: 220000,
      annualCharge: 160000,
      cleaningFee: 15000,
      status: "Available",
      verificationStatus: "Verified",
      interestsCount: 9,
      isFeatured: true,
      hasVideo: false,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Affordable accommodation 5 minutes from LASUED Epe main gate. Serene environment, study-friendly with treated borehole.",
      amenities: ["Running Water", "Prepaid Meter", "Gated Security"],
      isRoommateShared: true,
      roommatesGotten: 2,
      roommatesNeeded: 1,
      roommateSharePrice: 80000,
      currentRoommates: [
        { name: "Glory", gender: "Female", religion: "Christian", faculty: "Education", level: "200L", tags: ["Female", "Christian", "Neat", "Quiet"] },
        { name: "Blessing", gender: "Female", religion: "Christian", faculty: "Languages", level: "100L", tags: ["Female", "Fresher", "Early Riser"] }
      ],
      comments: [
        {
          id: "comm-105-1",
          author: "Kafayat Shittu",
          avatar: "KS",
          date: "2 days ago",
          text: "Can I inspect the room this Saturday afternoon?",
          reply: "Yes, inspection is available on Saturday from 12pm.",
          replyDate: "Yesterday"
        }
      ]
    },
    {
      id: "cyn-106",
      title: "Executive En-suite Room near FUTA Junction",
      address: "12 South Gate Road, Obanla Axis",
      town: "Akure",
      schoolArea: "FUTA Akure Axis",
      buildingType: "Self-Contain",
      apartmentType: "Self-Contain",
      availableUnits: 1,
      maxOccupants: 2,
      minOccupants: 1,
      toiletBathType: "En-suite / Private",
      kitchenType: "Personal",
      initialCharge: 320000,
      subsequentCharge: 240000,
      totalPackage: 320000,
      annualCharge: 240000,
      cleaningFee: 15000,
      status: "Available",
      verificationStatus: "Unverified",
      interestsCount: 4,
      isFeatured: false,
      hasVideo: false,
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Brand new modern room with personal bath, clean borehole water, and paved access road. Recently uploaded and undergoing compliance verification.",
      amenities: ["Prepaid Meter", "Running Water", "Gated Security", "Tiled Floor"],
      isRoommateShared: false,
      roommatesGotten: 0,
      roommatesNeeded: 0,
      roommateSharePrice: 0,
      currentRoommates: [],
      comments: []
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

  // Notifications (Replaces Reports)
  notifications: [
    {
      id: "notif-01",
      type: "comment",
      title: "New Student Comment",
      message: "Segun Adebayo commented on 'Executive Boys Quarters with Personal Kitchen': \"Is the generator running for 24 hours during semester exams?\"",
      listingId: "cyn-101",
      listingTitle: "Executive Boys Quarters with Personal Kitchen",
      date: "10 mins ago",
      read: false,
      author: "Segun Adebayo",
      authorAvatar: "SA"
    },
    {
      id: "notif-02",
      type: "admin",
      title: "Listing Verification Approved",
      message: "Cynic Compliance Admin verified your listing 'Executive Boys Quarters with Personal Kitchen' (cyn-101). Roommate Matching is now unlocked.",
      listingId: "cyn-101",
      listingTitle: "Executive Boys Quarters with Personal Kitchen",
      date: "1 hour ago",
      read: false
    },
    {
      id: "notif-03",
      type: "comment",
      title: "New Student Comment",
      message: "Chidinma Eze asked on 'Self-Contain at Ikeja': \"How far is this hostel from the campus second gate by walking?\"",
      listingId: "cyn-102",
      listingTitle: "Self-Contain at Ikeja LASUCOM Campus",
      date: "3 hours ago",
      read: false,
      author: "Chidinma Eze",
      authorAvatar: "CE"
    },
    {
      id: "notif-04",
      type: "roommate",
      title: "Roommate Match Application",
      message: "Babatunde applied to fill an open roommate slot on 'Lasued-Epe Budget Student Room'.",
      listingId: "cyn-105",
      listingTitle: "Lasued-Epe Budget Student Room",
      date: "Yesterday",
      read: true,
      author: "Babatunde",
      authorAvatar: "BA"
    },
    {
      id: "notif-05",
      type: "admin",
      title: "Listing Pending Admin Review",
      message: "Your newly submitted listing 'Serviced Studio Apartment at Yaba Tech Axis' (cyn-104) is currently queued for physical and document verification.",
      listingId: "cyn-104",
      listingTitle: "Serviced Studio Apartment at Yaba Tech Axis",
      date: "2 days ago",
      read: true
    }
  ],

  // Legacy Reports preserved for reference
  reports: [
    {
      id: "rep-01",
      listingId: "cyn-101",
      listingTitle: "Executive Boys Quarters with Personal Kitchen",
      user: "John Doe",
      reason: "Bathroom leaking from the shower pipe connection",
      date: "2026-09-03",
      status: "Resolved",
      urgency: "Medium"
    }
  ]
};

// Utility to format Nigerian Naira
function formatNaira(amount) {
  return "₦" + Number(amount || 0).toLocaleString('en-NG');
}

// Retrieve Stored Notifications
function getStoredNotifications() {
  const stored = localStorage.getItem('cynic_notifications');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
  }
  return CYNIC_DATA.notifications;
}

function saveStoredNotifications(notifs) {
  localStorage.setItem('cynic_notifications', JSON.stringify(notifs));
}

function markNotificationRead(notifId) {
  const notifs = getStoredNotifications();
  const index = notifs.findIndex(n => n.id === notifId);
  if (index !== -1) {
    notifs[index].read = true;
    saveStoredNotifications(notifs);
  }
}

function markAllNotificationsRead() {
  const notifs = getStoredNotifications();
  notifs.forEach(n => n.read = true);
  saveStoredNotifications(notifs);
}

// Reply to Listing Comment
function replyToListingComment(listingId, commentId, replyText) {
  const rawListings = localStorage.getItem('cynic_listings');
  let listings = rawListings ? JSON.parse(rawListings) : CYNIC_DATA.listings;
  const listingIndex = listings.findIndex(l => l.id === listingId);
  if (listingIndex === -1) return false;

  if (!listings[listingIndex].comments) {
    listings[listingIndex].comments = [];
  }

  const comment = listings[listingIndex].comments.find(c => c.id === commentId);
  if (comment) {
    comment.reply = replyText;
    comment.replyDate = "Just now";
  } else {
    // If replying as a new response to author
    listings[listingIndex].comments.push({
      id: "comm-" + Date.now(),
      author: "Prospective Student",
      avatar: "ST",
      date: "Just now",
      text: "Inquiry about room utilities",
      reply: replyText,
      replyDate: "Just now"
    });
  }

  localStorage.setItem('cynic_listings', JSON.stringify(listings));
  return true;
}

// Toggle Listing Occupied / Available
function toggleListingOccupied(listingId) {
  const rawListings = localStorage.getItem('cynic_listings');
  let listings = rawListings ? JSON.parse(rawListings) : CYNIC_DATA.listings;
  const listingIndex = listings.findIndex(l => l.id === listingId);
  if (listingIndex === -1) return null;

  const currentStatus = listings[listingIndex].status || "Available";
  const newStatus = currentStatus === "Occupied" ? "Available" : "Occupied";
  listings[listingIndex].status = newStatus;
  if (newStatus === "Occupied") {
    listings[listingIndex].occupiedDate = new Date().toISOString().split('T')[0];
  }

  localStorage.setItem('cynic_listings', JSON.stringify(listings));
  return newStatus;
}

// Delete Listing
function deleteListing(listingId) {
  const rawListings = localStorage.getItem('cynic_listings');
  let listings = rawListings ? JSON.parse(rawListings) : CYNIC_DATA.listings;
  listings = listings.filter(l => l.id !== listingId);
  localStorage.setItem('cynic_listings', JSON.stringify(listings));
  return true;
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

  // Create corresponding notification for agent
  const notifs = getStoredNotifications();
  notifs.unshift({
    id: "notif-" + Date.now(),
    type: interestData.matchStatus && interestData.matchStatus.includes('other') ? "roommate" : "comment",
    title: interestData.matchStatus && interestData.matchStatus.includes('other') ? "Roommate Application" : "New Student Interest",
    message: `${interestData.name} expressed interest in '${interestData.listingTitle}'. Preferred contact: WhatsApp.`,
    listingId: interestData.listingId,
    listingTitle: interestData.listingTitle,
    date: "Just now",
    read: false,
    author: interestData.name,
    authorAvatar: newInterest.avatar
  });
  saveStoredNotifications(notifs);

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
    totalListings: 12,
    successionRate: 94,
    avgResponseTime: "< 15 Mins",
    studentsHoused: 48,
    activeInterests: 34,
    activeChats: 8,
    pendingNotifications: 4,
    cacNumber: agentData.cacNumber || "RC-293841",
    lasreraNumber: "LASRERA/AGT/2024/098",
    coverageAreas: agentData.coverageAreas || ["UNILAG-Akoka", "LASU-Ojo", "YABATECH", "Lasued-Epe"]
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
        if (defaultItem) {
          if (item.verificationStatus === undefined || item.comments === undefined) {
            updated = true;
            return {
              ...item,
              verificationStatus: defaultItem.verificationStatus || "Verified",
              status: item.status || defaultItem.status || "Available",
              comments: defaultItem.comments || [],
              currentRoommates: item.currentRoommates || defaultItem.currentRoommates || [],
              isRoommateShared: item.isRoommateShared !== undefined ? item.isRoommateShared : defaultItem.isRoommateShared,
              roommatesGotten: item.roommatesGotten !== undefined ? item.roommatesGotten : defaultItem.roommatesGotten,
              roommatesNeeded: item.roommatesNeeded !== undefined ? item.roommatesNeeded : defaultItem.roommatesNeeded,
              roommateSharePrice: item.roommateSharePrice || defaultItem.roommateSharePrice
            };
          }
        }
        return item;
      });

      // Ensure cyn-106 (pending listing) is added if missing
      if (!listings.find(l => l.id === 'cyn-106')) {
        const cyn106 = CYNIC_DATA.listings.find(l => l.id === 'cyn-106');
        if (cyn106) {
          listings.push(cyn106);
          updated = true;
        }
      }

      if (updated) {
        localStorage.setItem('cynic_listings', JSON.stringify(listings));
      }
    } catch(e) {
      localStorage.setItem('cynic_listings', JSON.stringify(CYNIC_DATA.listings));
    }
  }

  if (!localStorage.getItem('cynic_notifications')) {
    localStorage.setItem('cynic_notifications', JSON.stringify(CYNIC_DATA.notifications));
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

/* ============================================================================
   2. APP SHELL, NAVIGATION & GLOBAL UTILITIES (app.js)
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initToastContainer();
  syncAgentProfileUI();
  highlightActiveNav();
});

/* Initialize Mobile Sidebar & Overlay */
function initSidebar() {
  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const sidebar = document.getElementById('appSidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (toggleBtn && sidebar && overlay) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
      overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('active');
    });
  }
}

/* Toast Notification Utility */
function initToastContainer() {
  if (!document.querySelector('.cynic-toast-container')) {
    const container = document.createElement('div');
    container.className = 'cynic-toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'success') {
  const container = document.querySelector('.cynic-toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `cynic-toast toast-${type}`;
  
  let iconClass = 'ri-checkbox-circle-fill text-green';
  if (type === 'danger' || type === 'error') iconClass = 'ri-error-warning-fill text-danger';
  if (type === 'warning') iconClass = 'ri-alert-fill text-warning';
  if (type === 'info') iconClass = 'ri-information-fill text-muted';

  toast.innerHTML = `
    <i class="${iconClass}" style="font-size: 1.25rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function showToastNotification(message, type = 'success') {
  showToast(message, type);
}

/* Synchronize Agent Profile from localStorage */
function syncAgentProfileUI() {
  const raw = localStorage.getItem('cynic_agent');
  if (!raw) return;

  try {
    const agent = JSON.parse(raw);
    const nameEls = document.querySelectorAll('.agent-name-display');
    const emailEls = document.querySelectorAll('.agent-email-display');
    const agencyEls = document.querySelectorAll('.agent-agency-display');
    const avatarEls = document.querySelectorAll('.agent-avatar-img');

    nameEls.forEach(el => el.textContent = agent.name);
    emailEls.forEach(el => el.textContent = agent.email);
    agencyEls.forEach(el => el.textContent = agent.agency);
    avatarEls.forEach(el => {
      if (agent.avatar) el.src = agent.avatar;
    });
  } catch (e) {
    console.error('Error syncing profile UI', e);
  }
}

/* Highlight Active Sidebar Item based on current URL */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'dashboard.html';
  const navLinks = document.querySelectorAll('.nav-item a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'dashboard.html')) {
      link.parentElement.classList.add('active');
    } else {
      link.parentElement.classList.remove('active');
    }
  });
}

/* Logout Utility */
function handleAgentLogout() {
  if (confirm('Are you sure you want to sign out of Cynic Agent Portal?')) {
    showToast('Signing out...', 'info');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 600);
  }
}

/* ============================================================================
   3. LISTINGS & ROOMMATE MATCHING CONTROLLER (listings.js)
   ============================================================================ */
/**
 * CYNIC AGENT PORTAL - LISTINGS & MEDIA HANDLER
 * Handles listings rendering, status toggling, media uploaders, and add/edit forms
 */

// Retrieve listings from localStorage
function getStoredListings() {
  const stored = localStorage.getItem('cynic_listings');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
  }
  return CYNIC_DATA.listings;
}

function saveStoredListings(listings) {
  localStorage.setItem('cynic_listings', JSON.stringify(listings));
}

// Render Listings Grid
function renderListingsGrid(containerId, filterStatus = 'all', searchQuery = '') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const listings = getStoredListings();
  let filtered = listings;

  if (filterStatus !== 'all') {
    const f = filterStatus.toLowerCase();
    if (f === 'verified') {
      filtered = filtered.filter(item => (item.verificationStatus || 'Verified') === 'Verified' && item.status !== 'Occupied');
    } else if (f === 'unverified' || f === 'pending') {
      filtered = filtered.filter(item => (item.verificationStatus || 'Verified') === 'Unverified');
    } else if (f === 'occupied') {
      filtered = filtered.filter(item => item.status === 'Occupied');
    } else {
      filtered = filtered.filter(item => 
        (item.status && item.status.toLowerCase() === f) || 
        (item.verificationStatus && item.verificationStatus.toLowerCase() === f)
      );
    }
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.town.toLowerCase().includes(q) ||
      item.schoolArea.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border-radius: 12px; border: 1px dashed var(--light-gray);">
        <i class="ri-home-line" style="font-size: 3rem; color: var(--slate-400);"></i>
        <h3 style="margin-top: 12px; color: var(--dark-slate);">No listings found</h3>
        <p style="color: var(--slate-500); font-size: 0.9rem;">Try adjusting your search query or filter options.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    let statusClass = 'status-verified';
    let statusText = '<i class="ri-verified-badge-fill"></i> Verified';
    
    if (item.status === 'Occupied') {
      statusClass = 'status-occupied';
      statusText = '<i class="ri-lock-2-fill"></i> Occupied';
    } else if ((item.verificationStatus || 'Verified') === 'Unverified') {
      statusClass = 'status-unverified';
      statusText = '<i class="ri-time-fill"></i> Pending Review';
    }

    const firstImage = (item.images && item.images.length > 0) 
      ? item.images[0] 
      : 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80';

    const commentCount = (item.comments && item.comments.length) || 0;

    return `
      <div class="listing-card" id="card-${item.id}">
        <div class="listing-media">
          <img src="${firstImage}" alt="${item.title}" class="listing-thumbnail" loading="lazy" />
          <span class="listing-status-badge ${statusClass}">${statusText}</span>
          ${item.hasVideo ? `
            <div class="video-badge">
              <i class="ri-video-fill"></i>
              <span>${item.videoDuration || 'Video'}</span>
            </div>
          ` : ''}
        </div>
        <div class="listing-content">
          <div class="listing-location-tag">
            <i class="ri-map-pin-2-fill"></i>
            <span>${item.town} &bull; ${item.schoolArea.split('(')[0]}</span>
          </div>
          <h3 class="listing-title">${item.title}</h3>
          
          <div class="listing-meta-row">
            <span><i class="ri-building-line"></i> ${item.apartmentType}</span>
            <span><i class="ri-restaurant-line"></i> ${item.kitchenType}</span>
            <span><i class="ri-drop-line"></i> ${item.toiletBathType.split('/')[0]}</span>
          </div>

          <div class="listing-pricing">
            <div class="price-total">${formatNaira(item.totalPackage)} <span style="font-size: 0.8rem; font-weight: 500; color: var(--slate-500);">/ total package</span></div>
            <div class="price-sub">Annual: ${formatNaira(item.annualCharge)} &bull; Cleaning: ${formatNaira(item.cleaningFee)}</div>
          </div>

          ${item.isRoommateShared ? `
            <div style="margin: 8px 0;">
              <span class="roommate-allocation-badge">
                <i class="ri-team-fill"></i>
                <span>${item.roommatesGotten || 1} Gotten &bull; <span class="highlight-needed">${item.roommatesNeeded || 1} Looking to Join</span></span>
              </span>
              ${item.currentRoommates && item.currentRoommates.length > 0 ? `
                <div style="font-size: 0.76rem; color: var(--slate-500); margin-top: 4px;">
                  Occupants: <strong>${item.currentRoommates.map(r => r.name).join(', ')}</strong>
                </div>
              ` : ''}
            </div>
          ` : ''}

          <div class="flex items-center justify-between" style="margin: 8px 0 12px;">
            <span class="listing-interests-count">
              <i class="ri-user-heart-line"></i> ${item.interestsCount || 0} Interested
            </span>
            <button type="button" onclick="openListingCommentsModal('${item.id}')" class="listing-comment-pill" title="View & Reply to Comments">
              <i class="ri-chat-3-line"></i>
              <span>Comments</span>
              <span class="comment-count-badge" id="comment-pill-count-${item.id}">${commentCount}</span>
            </button>
          </div>

          <div class="listing-actions-row">
            <a href="edit-listing.html?id=${item.id}" class="btn btn-secondary btn-sm" style="flex: 1;">
              <i class="ri-edit-line"></i> Edit
            </a>
            <a href="public-listings.html?id=${item.id}" target="_blank" class="btn btn-outline-green btn-sm" style="flex: 1;" title="Preview Public Listing">
              <i class="ri-external-link-line"></i> Preview
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Comments Modal & Reply Management
let currentActiveListingId = null;

function ensureCommentModalExists() {
  if (document.getElementById('commentReplyModal')) return;
  const modalDiv = document.createElement('div');
  modalDiv.className = 'cynic-modal-backdrop';
  modalDiv.id = 'commentReplyModal';
  modalDiv.innerHTML = `
    <div class="cynic-modal-dialog">
      <div class="cynic-modal-header">
        <div>
          <h3 id="modalListingTitle">Property Comments</h3>
          <span style="font-size: 0.8rem; color: var(--slate-500);" id="modalListingSubtitle">Loading...</span>
        </div>
        <button type="button" class="cynic-modal-close-btn" onclick="closeCommentModal()">
          <i class="ri-close-line"></i>
        </button>
      </div>

      <div class="cynic-modal-body" id="modalCommentsList"></div>

      <div class="cynic-modal-footer">
        <button type="button" class="btn btn-secondary" onclick="closeCommentModal()">Close</button>
      </div>
    </div>
  // `
  document.body.appendChild(modalDiv);

  modalDiv.addEventListener('click', (e) => {
    if (e.target.id === 'commentReplyModal') closeCommentModal();
  });
}

function openListingCommentsModal(listingId) {
  ensureCommentModalExists();
  currentActiveListingId = listingId;
  const listings = getStoredListings();
  const listing = listings.find(l => l.id === listingId);
  if (!listing) return;

  document.getElementById('modalListingTitle').textContent = `Comments on Listing`;
  document.getElementById('modalListingSubtitle').textContent = `${listing.title} (${listing.location || listing.town})`;

  renderModalComments(listing);
  document.getElementById('commentReplyModal').classList.add('active');
}

function renderModalComments(listing) {
  const body = document.getElementById('modalCommentsList');
  if (!body) return;
  const comments = listing.comments || [];

  if (comments.length === 0) {
    body.innerHTML = `
      <div class="text-center" style="padding: 28px 16px; color: var(--slate-400);">
        <i class="ri-chat-smile-2-line" style="font-size: 2.2rem;"></i>
        <h4 style="margin-top: 10px; color: var(--dark-slate);">No Comments Yet</h4>
        <p style="font-size: 0.88rem; color: var(--slate-500);">Students haven't asked questions on this property yet.</p>
      </div>
    `;
    return;
  }

  body.innerHTML = comments.map(c => `
    <div class="listing-comment-card" id="comment-box-${c.id}">
      <div class="comment-author-row">
        <span class="comment-author-name">
          <i class="ri-user-3-line" style="color: var(--primary-green);"></i> ${c.author}
        </span>
        <span class="comment-date">${c.date}</span>
      </div>
      <p class="comment-text">${c.text}</p>
      
      <div class="agent-replies-list">
        ${c.reply ? `
          <div class="agent-reply-bubble">
            <div class="agent-reply-header">
              <span><i class="ri-reply-fill"></i> Agent Response (You)</span>
              <span>${c.replyDate || 'Recently'}</span>
            </div>
            <div class="agent-reply-text">${c.reply}</div>
          </div>
        ` : `
          <div style="font-size: 0.78rem; color: #94a3b8; font-style: italic;">No reply sent yet.</div>
        `}
      </div>

      <form class="comment-reply-form" onsubmit="handleSendCommentReply(event, '${c.id}')">
        <input type="text" class="comment-reply-input" id="reply-input-${c.id}" placeholder="${c.reply ? 'Update your reply...' : 'Type your reply as Agent...'}" required>
        <button type="submit" class="btn btn-primary btn-sm">
          <i class="ri-send-plane-fill"></i> Reply
        </button>
      </form>
    </div>
  `).join('');
}

function handleSendCommentReply(e, commentId) {
  e.preventDefault();
  const input = document.getElementById(`reply-input-${commentId}`);
  const text = input.value.trim();
  if (!text) return;

  const success = replyToListingComment(currentActiveListingId, commentId, text);
  if (success) {
    if (typeof showToast === 'function') {
      showToast("Reply published successfully!");
    } else if (typeof showToastNotification === 'function') {
      showToastNotification("Reply published successfully!", "success");
    }
    const listings = getStoredListings();
    const listing = listings.find(l => l.id === currentActiveListingId);
    renderModalComments(listing);
  }
}

function closeCommentModal() {
  const modal = document.getElementById('commentReplyModal');
  if (modal) modal.classList.remove('active');
}

// Setup Media Uploaders (Images & Video with 1 min check)
function setupMediaUploaders() {
  const imageInput = document.getElementById('listingImagesInput');
  const imageDropzone = document.getElementById('imageDropzone');
  const imagePreviewGrid = document.getElementById('imagePreviewGrid');

  const videoInput = document.getElementById('listingVideoInput');
  const videoDropzone = document.getElementById('videoDropzone');
  const videoPreviewBox = document.getElementById('videoPreviewBox');

  // Image Upload Handling
  if (imageDropzone && imageInput) {
    imageDropzone.addEventListener('click', () => imageInput.click());

    ['dragover', 'dragenter'].forEach(eventName => {
      imageDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        imageDropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      imageDropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        imageDropzone.classList.remove('dragover');
      });
    });

    imageDropzone.addEventListener('drop', (e) => {
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleImageFiles(e.dataTransfer.files, imagePreviewGrid);
      }
    });

    imageInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleImageFiles(e.target.files, imagePreviewGrid);
      }
    });
  }

  // Video Upload Handling (Max 1 min per spec)
  if (videoDropzone && videoInput) {
    videoDropzone.addEventListener('click', () => videoInput.click());

    videoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        validateAndPreviewVideo(file, videoPreviewBox);
      }
    });
  }
}

function handleImageFiles(files, container) {
  if (!container) return;
  Array.from(files).forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const div = document.createElement('div');
        div.className = 'preview-item';
        div.innerHTML = `
          <img src="${e.target.result}" alt="Listing photo preview" />
          <button type="button" class="preview-remove-btn" onclick="this.parentElement.remove()" title="Remove photo">
            <i class="ri-close-line"></i>
          </button>
        `;
        container.appendChild(div);
      };
      reader.readAsDataURL(file);
    }
  });
  showToast('Image(s) added to preview gallery');
}

function validateAndPreviewVideo(file, container) {
  if (!container) return;
  if (!file.type.startsWith('video/')) {
    showToast('Please select a valid video file (.mp4, .mov)', 'warning');
    return;
  }

  const url = URL.createObjectURL(file);
  const tempVideo = document.createElement('video');
  tempVideo.preload = 'metadata';
  tempVideo.src = url;

  tempVideo.onloadedmetadata = () => {
    window.URL.revokeObjectURL(tempVideo.src);
    const duration = tempVideo.duration; // in seconds
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (duration > 65) { // allow a few grace seconds
      showToast(`Video is ${formattedDuration} long. Specification requires Max 1 min!`, 'warning');
      container.innerHTML = `
        <div style="padding: 12px; border-radius: 8px; background: var(--status-danger-bg); color: var(--status-danger); font-size: 0.88rem; display: flex; align-items: center; gap: 8px;">
          <i class="ri-error-warning-fill"></i>
          <span>Video exceeds 1 minute limit (${formattedDuration}). Please upload a shorter clip.</span>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="margin-top: 12px; background: #fff; padding: 12px; border-radius: 8px; border: 1px solid var(--light-gray); display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 36px; height: 36px; border-radius: 6px; background: rgba(0, 168, 90,0.12); color: var(--emerald-600); display: flex; align-items: center; justify-content: center;">
            <i class="ri-film-line" style="font-size: 1.25rem;"></i>
          </div>
          <div>
            <strong style="font-size: 0.88rem; color: var(--dark-slate);">${file.name}</strong>
            <div style="font-size: 0.78rem; color: var(--slate-400);">Duration: ${formattedDuration} &bull; ${(file.size / (1024*1024)).toFixed(1)} MB</div>
          </div>
        </div>
        <button type="button" class="btn btn-secondary btn-sm" onclick="this.closest('#videoPreviewBox').innerHTML=''" style="padding: 4px 8px;">
          <i class="ri-delete-bin-line text-danger"></i>
        </button>
      </div>
    `;
    showToast(`Video loaded (${formattedDuration}) - within 1 min limit!`);
  };
}

/* ============================================================================
   4. REAL-TIME CHAT & MESSAGING SYSTEM (chat.js)
   ============================================================================ */
let activeChatId = 'chat-01';

function getStoredChats() {
  const stored = localStorage.getItem('cynic_chats');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
  }
  return CYNIC_DATA.chats;
}

function saveStoredChats(chats) {
  localStorage.setItem('cynic_chats', JSON.stringify(chats));
}

function initChatSystem() {
  const chats = getStoredChats();

  // Check if URL specifies a particular student/user or chat ID
  const urlParams = new URLSearchParams(window.location.search);
  const targetUser = urlParams.get('user');
  const targetChatId = urlParams.get('id');

  if (targetChatId) {
    activeChatId = targetChatId;
    const appContainer = document.querySelector('.chat-app-container');
    if (appContainer) appContainer.classList.add('in-conversation');
  } else if (targetUser) {
    const found = chats.find(c => c.user.toLowerCase() === targetUser.toLowerCase());
    if (found) {
      activeChatId = found.id;
      const appContainer = document.querySelector('.chat-app-container');
      if (appContainer) appContainer.classList.add('in-conversation');
    }
  }

  renderChatList();
  renderActiveConversation();
  setupChatInputs();
}

function renderChatList() {
  const listContainer = document.getElementById('chatListContainer');
  if (!listContainer) return;

  const chats = getStoredChats();
  listContainer.innerHTML = chats.map(c => `
    <li class="chat-item ${c.id === activeChatId ? 'active' : ''}" onclick="selectChat('${c.id}')">
      <div class="chat-item-avatar">
        ${c.userInitial}
        ${c.online ? '<span class="online-dot"></span>' : ''}
      </div>
      <div class="chat-item-content">
        <div class="chat-item-top">
          <span class="chat-item-name">${c.user}</span>
          <span class="chat-item-time">${c.lastTime}</span>
        </div>
        <div class="chat-item-sub">${c.listingTitle}</div>
        <div class="chat-item-preview">${c.lastMessage}</div>
      </div>
      ${c.unread > 0 ? `<span class="nav-badge badge-green" style="margin-left: 6px;">${c.unread}</span>` : ''}
    </li>
  `).join('');
}

function selectChat(chatId) {
  activeChatId = chatId;
  const chats = getStoredChats();
  const chat = chats.find(c => c.id === chatId);
  if (chat) {
    chat.unread = 0;
    saveStoredChats(chats);
  }

  // Handle mobile container class
  const appContainer = document.querySelector('.chat-app-container');
  if (appContainer) {
    appContainer.classList.add('in-conversation');
  }

  renderChatList();
  renderActiveConversation();
}

function backToChatList() {
  const appContainer = document.querySelector('.chat-app-container');
  if (appContainer) {
    appContainer.classList.remove('in-conversation');
  }
}

function renderActiveConversation() {
  const chats = getStoredChats();
  const currentChat = chats.find(c => c.id === activeChatId) || chats[0];
  if (!currentChat) return;

  // Header
  const headerUser = document.getElementById('activeChatUser');
  const headerListing = document.getElementById('activeChatListing');
  const headerStatus = document.getElementById('activeChatStatus');

  if (headerUser) headerUser.textContent = currentChat.user;
  if (headerListing) headerListing.textContent = currentChat.listingTitle;
  if (headerStatus) {
    headerStatus.innerHTML = currentChat.online 
      ? '<span style="color: var(--emerald-600);"><i class="ri-checkbox-blank-circle-fill" style="font-size: 8px;"></i> Online</span>' 
      : '<span style="color: var(--slate-400);">Offline</span>';
  }

  // Messages
  const messagesArea = document.getElementById('chatMessagesArea');
  if (!messagesArea) return;

  messagesArea.innerHTML = `
    <div class="chat-date-separator">
      <span>Today</span>
    </div>
    ${currentChat.messages.map(m => `
      <div class="message-bubble ${m.sender === 'agent' ? 'outgoing' : 'incoming'}">
        <div class="message-text">${m.text}</div>
        <div class="message-time">${m.time}</div>
      </div>
    `).join('')}
  `;

  // Auto scroll to bottom
  messagesArea.scrollTop = messagesArea.scrollHeight;
}

function setupChatInputs() {
  const form = document.getElementById('chatSendForm');
  const input = document.getElementById('chatMessageInput');

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      sendAgentMessage(text);
      input.value = '';
      input.focus();
    });
  }

  // Quick reply chips
  const chips = document.querySelectorAll('.quick-reply-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const template = chip.getAttribute('data-reply');
      if (input) {
        input.value = template;
        input.focus();
      }
    });
  });
}

function sendAgentMessage(text) {
  const chats = getStoredChats();
  const chatIndex = chats.findIndex(c => c.id === activeChatId);
  if (chatIndex === -1) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const newMsg = {
    sender: 'agent',
    text: text,
    time: timeStr
  };

  chats[chatIndex].messages.push(newMsg);
  chats[chatIndex].lastMessage = text;
  chats[chatIndex].lastTime = timeStr;
  saveStoredChats(chats);

  renderActiveConversation();
  renderChatList();

  // Simulated student response after 1.5 seconds
  setTimeout(() => {
    simulateStudentReply(chatIndex);
  }, 1500);
}

function simulateStudentReply(chatIndex) {
  const chats = getStoredChats();
  const chat = chats[chatIndex];
  if (!chat) return;

  const replies = [
    "Thank you for the update agent! That sounds very good.",
    "Understood. Will call you when I arrive at the gate.",
    "Can you please send me the estate security contact as well?",
    "Great! I am sharing this with my parents right away."
  ];
  const randomReply = replies[Math.floor(Math.random() * replies.length)];
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  chat.messages.push({
    sender: 'user',
    text: randomReply,
    time: timeStr
  });
  chat.lastMessage = randomReply;
  chat.lastTime = timeStr;
  saveStoredChats(chats);

  renderActiveConversation();
  renderChatList();
  showToast(`New message from ${chat.user}`);
}
