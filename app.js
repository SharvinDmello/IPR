// IPR Quiz data
const quizData = {
  "title": "IPR Quiz Portal - Introduction to Intellectual Property Rights",
  "subtitle": "HU1006-1 Unit 1 - Complete Question Bank",
  "unit": {
    "title": "Unit 1: Introduction to IPR",
    "description": "Comprehensive coverage of IPR basics, Indian IP laws, international treaties, and IP management strategies.",
    "totalQuestions": 100,
    "estimatedTime": "2 Hours",
    "questions": [
      {"id": 1, "question": "What does IPR stand for?", "options": {"A": "International Public Relations", "B": "Internal Proprietary Regulation", "C": "Intellectual Property Rights", "D": "International Policy Review"}, "correct": "C"},
      {"id": 2, "question": "Which type of intellectual property protects inventions?", "options": {"A": "Trademark", "B": "Patent", "C": "Copyright", "D": "Trade Secret"}, "correct": "B"},
      {"id": 3, "question": "Which of the following is protected by copyright?", "options": {"A": "Novel", "B": "Logo", "C": "Invention", "D": "Company Name"}, "correct": "A"},
      {"id": 4, "question": "What is a trademark used to protect?", "options": {"A": "Business methods", "B": "Chemical formulas", "C": "Literary works", "D": "Brand names and logos"}, "correct": "D"},
      {"id": 5, "question": "Which IP right provides protection for a new, original, and useful process or machine?", "options": {"A": "Trademark", "B": "Copyright", "C": "Patent", "D": "Trade Secret"}, "correct": "C"},
      {"id": 6, "question": "Which type of intellectual property includes No registration?", "options": {"A": "Copyright", "B": "Trademark", "C": "Patent", "D": "Trade Secret"}, "correct": "D"},
      {"id": 7, "question": "Which type of IP right is granted for a creative work, such as a book or a song?", "options": {"A": "Trademark", "B": "Copyright", "C": "Patent", "D": "Trade Secret"}, "correct": "B"},
      {"id": 8, "question": "How long does a typical patent last?", "options": {"A": "10 years", "B": "15 years", "C": "20 years", "D": "25 years"}, "correct": "C"},
      {"id": 9, "question": "Which IP right can last indefinitely as long as it is in use and renewed?", "options": {"A": "Patent", "B": "Trademark", "C": "Copyright", "D": "Trade Secret"}, "correct": "B"},
      {"id": 10, "question": "Which of the following can be considered a trade secret?", "options": {"A": "A company's logo", "B": "A recipe", "C": "A published book", "D": "A registered patent"}, "correct": "B"},
      {"id": 11, "question": "Which IP right is often used to protect the unique appearance or structure of a product?", "options": {"A": "Patent", "B": "Trademark", "C": "Design Patent", "D": "Copyright"}, "correct": "C"},
      {"id": 12, "question": "Which organization is responsible for granting patents in the United States?", "options": {"A": "USPTO (United States Patent and Trademark Office)", "B": "WIPO (World Intellectual Property Organization)", "C": "EPO (European Patent Office)", "D": "ICC (International Chamber of Commerce)"}, "correct": "A"},
      {"id": 13, "question": "Which term refers to the exclusive right to reproduce, distribute, and display an original work?", "options": {"A": "Trademark", "B": "Trade Secret", "C": "Copyright", "D": "Patent"}, "correct": "C"},
      {"id": 14, "question": "What is the main purpose of intellectual property law?", "options": {"A": "To promote competition", "B": "To encourage innovation and creativity", "C": "To regulate international trade", "D": "To manage public resources"}, "correct": "B"},
      {"id": 15, "question": "Which of the following is NOT a requirement for obtaining a patent?", "options": {"A": "Novelty", "B": "Non-obviousness", "C": "Utility", "D": "Commercial success"}, "correct": "D"},
      {"id": 16, "question": "What does the term 'public domain' refer to in intellectual property?", "options": {"A": "Works that are protected by IP laws", "B": "Works that are free to use without IP restrictions", "C": "IP rights that are in litigation", "D": "IP rights that are pending approval"}, "correct": "B"},
      {"id": 17, "question": "Which type of intellectual property is concerned with the protection of distinctive symbols, designs, or words?", "options": {"A": "Patent", "B": "Trademark", "C": "Copyright", "D": "Trade Secret"}, "correct": "B"},
      {"id": 18, "question": "Which of the following is NOT a form of IP protection under copyright law?", "options": {"A": "Literary works", "B": "Software", "C": "Scientific discoveries", "D": "Artworks"}, "correct": "C"},
      {"id": 19, "question": "What is the term for copying and using someone else's copyrighted work without permission?", "options": {"A": "Patent infringement", "B": "Trademark dilution", "C": "Copyright infringement", "D": "Trade secret misappropriation"}, "correct": "C"},
      {"id": 20, "question": "Which organization deals with international IP disputes and policy development?", "options": {"A": "WTO (World Trade Organization)", "B": "WIPO (World Intellectual Property Organization)", "C": "ICC (International Chamber of Commerce)", "D": "UN (United Nations)"}, "correct": "B"},
      {"id": 21, "question": "Which of the following is NOT typically eligible for patent protection?", "options": {"A": "Business methods", "B": "Physical inventions", "C": "Scientific theories", "D": "Industrial designs"}, "correct": "C"},
      {"id": 22, "question": "What is the primary role of the USPTO?", "options": {"A": "To enforce copyright laws", "B": "To manage international IP treaties", "C": "To grant patents and trademarks", "D": "To protect trade secrets"}, "correct": "C"},
      {"id": 23, "question": "Which of the following best describes a 'trademark'?", "options": {"A": "A written work that is original and creative", "B": "A symbol used to distinguish goods or services", "C": "An invention that is useful and novel", "D": "A confidential business strategy"}, "correct": "B"},
      {"id": 24, "question": "Which IP protection is most likely to be used for a new software program?", "options": {"A": "Trademark", "B": "Copyright", "C": "Patent", "D": "Trade Secret"}, "correct": "B"},
      {"id": 25, "question": "Which of the following is a feature of a design patent?", "options": {"A": "Protects the function of an invention", "B": "Protects the ornamental design of an object", "C": "Protects a company's brand name", "D": "Protects original written content"}, "correct": "B"},
      {"id": 26, "question": "Which IP right is generally not disclosed to the public?", "options": {"A": "Trademark", "B": "Patent", "C": "Copyright", "D": "Trade Secret"}, "correct": "D"},
      {"id": 27, "question": "What is 'patentable' subject matter?", "options": {"A": "Abstract ideas", "B": "Natural phenomena", "C": "Human-made inventions", "D": "Artistic creations"}, "correct": "C"},
      {"id": 28, "question": "What is the term for the exclusive rights granted to the creator of an original work for a limited time?", "options": {"A": "Trade Secret", "B": "Patent", "C": "Copyright", "D": "Trademark"}, "correct": "C"},
      {"id": 29, "question": "How can a trademark be registered in the United States?", "options": {"A": "By publishing it in a journal", "B": "By using it in commerce", "C": "By applying to the USPTO", "D": "By obtaining a patent"}, "correct": "C"},
      {"id": 30, "question": "Which of the following is NOT a requirement for copyright protection?", "options": {"A": "Novelty", "B": "Fixed in a tangible medium", "C": "Originality", "D": "Creativity"}, "correct": "A"},
      {"id": 31, "question": "Which term refers to the unauthorized use of a patented invention?", "options": {"A": "Patent infringement", "B": "Trademark counterfeiting", "C": "Copyright piracy", "D": "Trade secret violation"}, "correct": "A"},
      {"id": 32, "question": "What does 'fair use' refer to in copyright law?", "options": {"A": "Unauthorized use of copyrighted material", "B": "Limited use of copyrighted material without permission", "C": "The process of obtaining a copyright", "D": "A type of trademark protection"}, "correct": "B"},
      {"id": 33, "question": "What is the term for a brand's name or logo that has become so well-known it is considered generic?", "options": {"A": "Trademark dilution", "B": "Trademark infringement", "C": "Genericide", "D": "Trade secret misappropriation"}, "correct": "C"},
      {"id": 34, "question": "Which of the following types of intellectual property protection typically requires the inventor to disclose details about the invention?", "options": {"A": "Trademark", "B": "Patent", "C": "Copyright", "D": "Trade Secret"}, "correct": "B"},
      {"id": 35, "question": "Which year marked the adoption of the Indian Patents Act, which significantly reformed patent laws in India?", "options": {"A": "1952", "B": "1970", "C": "1999", "D": "2005"}, "correct": "B"},
      {"id": 36, "question": "Which organization is responsible for the registration and enforcement of intellectual property rights in India?", "options": {"A": "WIPO", "B": "ICICI", "C": "IPO India", "D": "CCI"}, "correct": "C"},
      {"id": 37, "question": "The Copyright Act of India was first enacted in which year?", "options": {"A": "1957", "B": "1965", "C": "1978", "D": "1984"}, "correct": "A"},
      {"id": 38, "question": "Which international agreement, to which India is a signatory, governs patents and is administered by the WIPO?", "options": {"A": "Berne Convention", "B": "Paris Convention", "C": "TRIPS Agreement", "D": "Madrid Protocol"}, "correct": "C"},
      {"id": 39, "question": "When was the Trade Marks Act, which governs trademarks in India, enacted?", "options": {"A": "1958", "B": "1976", "C": "1999", "D": "2002"}, "correct": "C"},
      {"id": 40, "question": "Which act regulates the protection of industrial designs in India?", "options": {"A": "Patents Act", "B": "Trade Marks Act", "C": "Designs Act", "D": "Copyright Act"}, "correct": "C"},
      {"id": 41, "question": "In which year did India join the World Trade Organization (WTO), committing to comply with the TRIPS Agreement?", "options": {"A": "1995", "B": "2000", "C": "2002", "D": "2004"}, "correct": "A"},
      {"id": 42, "question": "Which of the following has geographical indications tag in India?", "options": {"A": "BT Brinjal", "B": "Red Rose", "C": "Darjeeling Tea", "D": "Raspuri Mango"}, "correct": "C"},
      {"id": 43, "question": "What was the primary focus of the 2005 amendment to the Patents Act in India?", "options": {"A": "Strengthening copyright laws", "B": "Enhancing protection for traditional knowledge", "C": "Introducing product patents in pharmaceuticals", "D": "Simplifying trademark registration processes"}, "correct": "C"},
      {"id": 44, "question": "Which Indian body oversees the enforcement of intellectual property rights and provides a platform for dispute resolution?", "options": {"A": "Intellectual Property Appellate Board (IPAB)", "B": "Indian Patent Office", "C": "Competition Commission of India (CCI)", "D": "Reserve Bank of India (RBI)"}, "correct": "A"},
      {"id": 45, "question": "In what year did the Indian Parliament pass the National Intellectual Property Rights Policy?", "options": {"A": "2005", "B": "2010", "C": "2012", "D": "2016"}, "correct": "D"},
      {"id": 46, "question": "Which of the following is NOT covered by the Copyright Act in India?", "options": {"A": "Literary works", "B": "Music", "C": "Industrial processes", "D": "Artistic works"}, "correct": "C"},
      {"id": 47, "question": "The Trade Marks Act, 1999, replaced which earlier act?", "options": {"A": "Trade Marks Act, 1940", "B": "Trade Marks Act, 1958", "C": "Trade Marks Act, 1976", "D": "Trade Marks Act, 1984"}, "correct": "A"},
      {"id": 48, "question": "Which amendment to the Patents Act, 1970, introduced the concept of compulsory licensing?", "options": {"A": "1999 Amendment", "B": "2002 Amendment", "C": "2005 Amendment", "D": "2010 Amendment"}, "correct": "B"},
      {"id": 49, "question": "What is the primary purpose of the Designs Act, 2000?", "options": {"A": "To Import designs", "B": "To protect industrial designs", "C": "To sell designs", "D": "To manage trade marks"}, "correct": "B"},
      {"id": 50, "question": "Which Indian law provides protection for plant varieties?", "options": {"A": "Plant Varieties Protection and Farmers' Rights Act", "B": "Patents Act", "C": "Trade Marks Act", "D": "Farmer's Association Act"}, "correct": "A"},
      {"id": 51, "question": "The Geographical Indications of Goods (Registration and Protection) Act was enacted in which year?", "options": {"A": "1999", "B": "2002", "C": "2005", "D": "2006"}, "correct": "B"},
      {"id": 52, "question": "Which of the following is a key objective of the National IPR Policy in India?", "options": {"A": "To eliminate all forms of IP protection", "B": "To promote and protect IP rights effectively", "C": "To restrict foreign IP investments", "D": "To decentralize IP administration"}, "correct": "B"},
      {"id": 53, "question": "Which Indian agency is responsible for examining patent applications and granting patents?", "options": {"A": "Central Board of Indirect Taxes and Customs", "B": "Indian Patent Office", "C": "Indian Council of Scientific and Industrial Research", "D": "Directorate General of Foreign Trade"}, "correct": "B"},
      {"id": 54, "question": "What is the main objective of the Copyright Act, 1957, in India?", "options": {"A": "To protect trademarks", "B": "To regulate patent applications", "C": "To provide exclusive rights to authors and creators", "D": "To manage industrial designs"}, "correct": "C"},
      {"id": 55, "question": "Which international agreement sets minimum standards for intellectual property protection and is administered by the World Trade Organization (WTO)?", "options": {"A": "Berne Convention", "B": "TRIPS Agreement", "C": "Paris Convention", "D": "Madrid Protocol"}, "correct": "B"},
      {"id": 56, "question": "The Berne Convention for the Protection of Literary and Artistic Works primarily deals with which type of intellectual property?", "options": {"A": "Patents", "B": "Trademarks", "C": "Copyrights", "D": "Trade Secrets"}, "correct": "C"},
      {"id": 57, "question": "Which international agreement provides for the protection of trademarks and service marks across member countries?", "options": {"A": "Berne Convention", "B": "Paris Convention", "C": "Madrid Protocol", "D": "TRIPS Agreement"}, "correct": "C"},
      {"id": 58, "question": "The Paris Convention for the Protection of Industrial Property focuses on which types of intellectual property?", "options": {"A": "Copyrights and patents", "B": "Patents and trademarks", "C": "Trademarks and designs", "D": "Copyrights and trade secrets"}, "correct": "B"},
      {"id": 59, "question": "Which organization administers the Patent Cooperation Treaty (PCT), which facilitates international patent filings?", "options": {"A": "World Intellectual Property Organization (WIPO)", "B": "International Chamber of Commerce (ICC)", "C": "World Trade Organization (WTO)", "D": "United Nations (UN)"}, "correct": "A"},
      {"id": 60, "question": "What is the primary objective of the Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS)?", "options": {"A": "To eliminate intellectual property rights globally", "B": "To establish minimum standards for IP protection and enforcement", "C": "To restrict international trade in IP-related goods", "D": "To harmonize copyright laws only"}, "correct": "B"},
      {"id": 61, "question": "Which international treaty provides protection for the geographical indications of goods?", "options": {"A": "Berne Convention", "B": "TRIPS Agreement", "C": "Lisbon Agreement", "D": "Madrid Agreement"}, "correct": "C"},
      {"id": 62, "question": "Which agreement facilitates the international registration of trademarks and service marks?", "options": {"A": "Paris Convention", "B": "Madrid Protocol", "C": "Berne Convention", "D": "Hague Agreement"}, "correct": "B"},
      {"id": 63, "question": "The Hague Agreement pertains to the international registration of which type of intellectual property?", "options": {"A": "Patents", "B": "Industrial designs", "C": "Trademarks", "D": "Copyrights"}, "correct": "B"},
      {"id": 64, "question": "Which international convention is designed to protect new plant varieties and promote plant breeding?", "options": {"A": "UPOV Convention", "B": "Paris Convention", "C": "TRIPS Agreement", "D": "Berne Convention"}, "correct": "A"},
      {"id": 65, "question": "What does the TRIPS Agreement require member countries to establish regarding enforcement of IP rights?", "options": {"A": "Minimum penalties for IP violations", "B": "Uniform international IP laws", "C": "Effective measures to enforce IP rights and prevent infringements", "D": "Harmonized IP court procedures"}, "correct": "C"},
      {"id": 66, "question": "Which international organization is responsible for promoting the development and use of international patent laws?", "options": {"A": "World Intellectual Property Organization (WIPO)", "B": "World Trade Organization (WTO)", "C": "International Court of Justice (ICJ)", "D": "World Bank"}, "correct": "A"},
      {"id": 67, "question": "Which agreement provides a framework for the international protection of industrial designs, including their registration and enforcement?", "options": {"A": "Hague Agreement", "B": "Lisbon Agreement", "C": "Madrid Protocol", "D": "TRIPS Agreement"}, "correct": "A"},
      {"id": 68, "question": "Which treaty requires its members to protect traditional knowledge, folklore, and cultural expressions?", "options": {"A": "TRIPS Agreement", "B": "Paris Convention", "C": "Berne Convention", "D": "No specific international treaty exists for this purpose"}, "correct": "D"},
      {"id": 69, "question": "Which treaty governs the protection of performances and phonograms?", "options": {"A": "Rome Convention", "B": "Berne Convention", "C": "Paris Convention", "D": "Madrid Protocol"}, "correct": "A"},
      {"id": 70, "question": "What is the purpose of the World Trade Organization's (WTO) Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS)?", "options": {"A": "To eliminate trade barriers related to intellectual property", "B": "To standardize IP protection and enforcement across member countries", "C": "To encourage countries to avoid IP enforcement", "D": "To create an international IP court"}, "correct": "B"},
      {"id": 71, "question": "Which international body deals with disputes related to the TRIPS Agreement?", "options": {"A": "International Court of Justice", "B": "World Trade Organization Dispute Settlement Body", "C": "World Intellectual Property Organization", "D": "International Trade Centre"}, "correct": "B"},
      {"id": 72, "question": "Which treaty addresses the protection of plant varieties and promotes the rights of plant breeders?", "options": {"A": "UPOV Convention", "B": "Paris Convention", "C": "Hague Agreement", "D": "Lisbon Agreement"}, "correct": "A"},
      {"id": 73, "question": "The TRIPS Agreement is part of which larger international organization's agreements?", "options": {"A": "United Nations (UN)", "B": "World Trade Organization (WTO)", "C": "World Intellectual Property Organization (WIPO)", "D": "International Monetary Fund (IMF)"}, "correct": "B"},
      {"id": 74, "question": "Which of the following agreements is designed to harmonize international copyright laws?", "options": {"A": "Paris Convention", "B": "Berne Convention", "C": "Rome Convention", "D": "Hague Agreement"}, "correct": "B"},
      {"id": 75, "question": "What is the primary goal of IP management within a company?", "options": {"A": "To reduce the number of patents", "B": "To maximize the value and strategic use of intellectual property", "C": "To avoid IP litigation", "D": "To register all IP globally"}, "correct": "B"},
      {"id": 76, "question": "Which IP management strategy involves using IP assets to generate revenue through licensing agreements?", "options": {"A": "IP Monetization", "B": "IP Protection", "C": "IP Enforcement", "D": "IP Valuation"}, "correct": "A"},
      {"id": 77, "question": "How can trademarks be used effectively in marketing?", "options": {"A": "By registering them in only one country", "B": "By creating brand recognition and differentiation", "C": "By keeping them confidential", "D": "By avoiding any use in advertising"}, "correct": "B"},
      {"id": 78, "question": "What is a common way to use patents in marketing?", "options": {"A": "By keeping the invention details secret", "B": "By showcasing patented technology in promotional materials", "C": "By avoiding patent registration", "D": "By using patents only for internal R&D purposes"}, "correct": "B"},
      {"id": 79, "question": "Which of the following is a benefit of using IP in marketing strategies?", "options": {"A": "Enhanced competitive advantage", "B": "Increased legal costs", "C": "Limited market reach", "D": "Reduced brand value"}, "correct": "A"},
      {"id": 80, "question": "What role does IP management play in the branding process?", "options": {"A": "It eliminates the need for branding", "B": "It restricts the use of brand names", "C": "It focuses solely on legal issues", "D": "It ensures the protection and strategic use of brand assets"}, "correct": "D"},
      {"id": 81, "question": "How can trade secrets be utilized in marketing?", "options": {"A": "By publicly disclosing them to competitors", "B": "By keeping them confidential to maintain competitive advantage", "C": "By registering them as patents", "D": "By using them only in internal communications"}, "correct": "B"},
      {"id": 82, "question": "What is the impact of IP management on a company's market position?", "options": {"A": "It has no impact", "B": "It can strengthen market position through effective IP use", "C": "It weakens the market position by increasing costs", "D": "It reduces market opportunities"}, "correct": "B"},
      {"id": 83, "question": "Which IP asset is crucial for creating a unique brand identity?", "options": {"A": "Trade Secret", "B": "Patent", "C": "Trademark", "D": "Copyright"}, "correct": "C"},
      {"id": 84, "question": "How can IP management assist in entering new markets?", "options": {"A": "By ignoring local IP laws", "B": "By ensuring IP protection and compliance in new regions", "C": "By avoiding IP registrations in new markets", "D": "By relying solely on existing IP protections"}, "correct": "B"},
      {"id": 85, "question": "Which strategy involves leveraging IP to form strategic partnerships and collaborations?", "options": {"A": "IP Enforcement", "B": "IP Auditing", "C": "IP Licensing", "D": "IP Dispute Resolution"}, "correct": "C"},
      {"id": 86, "question": "What is the role of IP valuation in marketing?", "options": {"A": "It helps in determining the financial worth of IP assets for investment or sale", "B": "It focuses on legal compliance only", "C": "It avoids any financial assessment of IP assets", "D": "It restricts IP use to internal purposes"}, "correct": "A"},
      {"id": 87, "question": "Which IP type can be used to protect original content such as literature and art?", "options": {"A": "Patent", "B": "Trademark", "C": "Trade Secret", "D": "Copyright"}, "correct": "D"},
      {"id": 88, "question": "How can companies use IP portfolios to enhance their market strategy?", "options": {"A": "By keeping IP portfolios undisclosed", "B": "By leveraging them to attract investors and partners", "C": "By avoiding IP portfolio management", "D": "By reducing the number of IP assets"}, "correct": "B"},
      {"id": 89, "question": "What is a key consideration in managing IP for global marketing?", "options": {"A": "Ignoring international IP laws", "B": "Ensuring IP protection in each target market", "C": "Limiting IP registration to domestic markets", "D": "Avoiding any IP protection measures"}, "correct": "B"},
      {"id": 90, "question": "How can IP management contribute to brand loyalty?", "options": {"A": "By reducing the visibility of IP assets", "B": "By ignoring brand-related IP issues", "C": "By creating and maintaining a strong and recognizable brand", "D": "By solely focusing on internal IP management"}, "correct": "C"},
      {"id": 91, "question": "Which IP management activity helps in protecting a company's market share?", "options": {"A": "IP Infringement", "B": "IP Enforcement", "C": "IP Abandonment", "D": "IP Violation"}, "correct": "B"},
      {"id": 92, "question": "What is a strategic use of IP in product development and marketing?", "options": {"A": "Avoiding IP registrations to reduce costs", "B": "Using IP to differentiate products and enhance market appeal", "C": "Keeping IP assets undisclosed to competitors", "D": "Reducing R&D investments"}, "correct": "B"},
      {"id": 93, "question": "Which IP management tool can help track and manage IP assets effectively?", "options": {"A": "IP Dashboard", "B": "IP Litigation Report", "C": "IP Compliance Checklist", "D": "IP Enforcement Handbook"}, "correct": "A"},
      {"id": 94, "question": "How can companies use IP to create competitive barriers in the market?", "options": {"A": "By enforcing IP rights and protecting key assets", "B": "By sharing IP with competitors", "C": "By avoiding IP registrations", "D": "By reducing IP protection efforts"}, "correct": "A"},
      {"id": 95, "question": "If you write an original story, what type of intellectual property gives you the right to decide who can make and sell copies of your work?", "options": {"A": "Copyright", "B": "Geographical Indication", "C": "Patent", "D": "Trademark"}, "correct": "A"},
      {"id": 96, "question": "What does a trademark protect?", "options": {"A": "An invention", "B": "Logos, Names and Brands", "C": "A work of Art", "D": "Look and Feel of the Product"}, "correct": "B"},
      {"id": 97, "question": "Which of these is a Geographical Indication?", "options": {"A": "BMW", "B": "World Wide Web", "C": "Play Station", "D": "Havana Cigars"}, "correct": "D"},
      {"id": 98, "question": "Under which type of agreement royalty is paid on the basis of total sale price?", "options": {"A": "Patent", "B": "Copyright", "C": "Trademark", "D": "Traditional Knowledge"}, "correct": "C"},
      {"id": 99, "question": "Intellectual Property Rights protect the use of the information and expression of ideas that are of....", "options": {"A": "Commercial Value", "B": "Ethical Value", "C": "Moral Value", "D": "Social Value"}, "correct": "A"},
      {"id": 100, "question": "The Trade Secrets ensure ……….", "options": {"A": "Production and Marketing monopoly", "B": "Employee Invention", "C": "Business Ethics", "D": "Competitive Advantage"}, "correct": "D"}
    ]
  }
};

// Quiz state
let currentQuestionIndex = 0;
let userAnswers = {}; // Store user answers
let totalQuestions = 100;
let hasAnsweredCurrent = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Add event listeners for start quiz button
    const startBtn = document.querySelector('.start-quiz-btn');
    if (startBtn) {
        startBtn.addEventListener('click', function(e) {
            e.preventDefault();
            startQuiz();
        });
    }

    // Navigation event listeners
    const backToHomeBtn = document.getElementById('back-to-home');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', goToHome);
    }
    
    const restartBtn = document.getElementById('restart-quiz');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartQuiz);
    }
    
    const backToHomeResultsBtn = document.getElementById('back-to-home-results');
    if (backToHomeResultsBtn) {
        backToHomeResultsBtn.addEventListener('click', goToHome);
    }

    // Navigation controls
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', previousQuestion);
    }
    
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }

    // Option buttons event listeners
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.addEventListener('click', selectAnswer);
    });
}

// Start quiz function
function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = {};
    hasAnsweredCurrent = false;

    // Update UI
    const unitTitle = document.getElementById('current-unit-title');
    if (unitTitle) {
        unitTitle.textContent = quizData.unit.title;
    }
    
    const totalQuestionsElement = document.getElementById('total-questions');
    if (totalQuestionsElement) {
        totalQuestionsElement.textContent = totalQuestions;
    }
    
    showPage('quiz');
    loadQuestion();
}

// Load current question
function loadQuestion() {
    const question = quizData.unit.questions[currentQuestionIndex];
    
    // Update question text
    const questionText = document.getElementById('question-text');
    if (questionText) {
        questionText.textContent = question.question;
    }
    
    // Update options
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        const option = btn.getAttribute('data-option');
        const optionTextElement = btn.querySelector('.option-text');
        if (optionTextElement) {
            optionTextElement.textContent = question.options[option];
        }
        
        // Reset button state
        btn.classList.remove('correct', 'wrong', 'selected');
        btn.disabled = false;
    });
    
    // Restore previous answer if exists
    const previousAnswer = userAnswers[currentQuestionIndex];
    if (previousAnswer) {
        const selectedBtn = document.querySelector(`[data-option="${previousAnswer.selected}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('selected');
            showImmediateFeedback(previousAnswer.selected, question.correct);
        }
        hasAnsweredCurrent = true;
    } else {
        // Hide feedback if no previous answer
        hideFeedback();
        hasAnsweredCurrent = false;
    }
    
    // Update progress and navigation
    updateProgress();
    updateNavigationButtons();
    updateScoreDisplay();
}

// Handle answer selection
function selectAnswer(event) {
    const selectedOption = event.currentTarget.getAttribute('data-option');
    const question = quizData.unit.questions[currentQuestionIndex];
    const correctOption = question.correct;
    const isCorrect = selectedOption === correctOption;
    
    // Clear previous selection
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Mark new selection
    event.currentTarget.classList.add('selected');
    
    // Store user answer
    userAnswers[currentQuestionIndex] = {
        selected: selectedOption,
        correct: correctOption,
        isCorrect: isCorrect
    };
    
    hasAnsweredCurrent = true;
    
    // Show immediate feedback
    showImmediateFeedback(selectedOption, correctOption);
    
    // Update score
    updateScoreDisplay();
}

// Show immediate feedback
function showImmediateFeedback(selectedOption, correctOption) {
    const isCorrect = selectedOption === correctOption;
    const feedback = document.getElementById('feedback');
    const feedbackMessage = document.getElementById('feedback-message');
    
    if (feedback && feedbackMessage) {
        feedback.classList.remove('hidden', 'correct', 'wrong');
        
        if (isCorrect) {
            feedback.classList.add('correct');
            feedbackMessage.innerHTML = '✅ Correct! Well done!';
        } else {
            feedback.classList.add('wrong');
            feedbackMessage.innerHTML = `❌ Wrong! The correct answer is <strong>${correctOption}</strong>`;
        }
    }
}

// Hide feedback
function hideFeedback() {
    const feedback = document.getElementById('feedback');
    if (feedback) {
        feedback.classList.add('hidden');
        feedback.classList.remove('correct', 'wrong');
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Next question
function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // Last question - finish quiz
        showResults();
    }
}

// Update navigation buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) {
        prevBtn.disabled = currentQuestionIndex === 0;
    }
    
    if (nextBtn) {
        if (currentQuestionIndex === totalQuestions - 1) {
            nextBtn.innerHTML = 'Finish Quiz';
            nextBtn.classList.remove('btn--outline');
            nextBtn.classList.add('btn--primary');
        } else {
            nextBtn.innerHTML = 'Next Question →';
            nextBtn.classList.remove('btn--primary');
            nextBtn.classList.add('btn--outline');
        }
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    
    const currentQuestionElement = document.getElementById('current-question');
    if (currentQuestionElement) {
        currentQuestionElement.textContent = currentQuestionIndex + 1;
    }
}

// Update score display
function updateScoreDisplay() {
    const answeredQuestions = Object.keys(userAnswers).length;
    const correctAnswers = Object.values(userAnswers).filter(answer => answer.isCorrect).length;
    
    const currentScoreElement = document.getElementById('current-score');
    if (currentScoreElement) {
        currentScoreElement.textContent = correctAnswers;
    }
    
    const questionsAnsweredElement = document.getElementById('questions-answered');
    if (questionsAnsweredElement) {
        questionsAnsweredElement.textContent = answeredQuestions;
    }
}

// Show results page
function showResults() {
    const answeredQuestions = Object.keys(userAnswers).length;
    const correctAnswers = Object.values(userAnswers).filter(answer => answer.isCorrect).length;
    const percentage = answeredQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    
    // Update results UI
    const resultsUnitTitle = document.getElementById('results-unit-title');
    if (resultsUnitTitle) {
        resultsUnitTitle.textContent = quizData.unit.title;
    }
    
    const finalScoreNumber = document.getElementById('final-score-number');
    if (finalScoreNumber) {
        finalScoreNumber.textContent = correctAnswers;
    }
    
    const percentageScore = document.getElementById('percentage-score');
    if (percentageScore) {
        percentageScore.textContent = percentage + '%';
    }
    
    // Set performance message
    const performanceMessage = document.getElementById('performance-message');
    if (performanceMessage) {
        performanceMessage.classList.remove('excellent', 'good', 'average');
        
        if (percentage >= 80) {
            performanceMessage.textContent = 'Excellent work! You have mastered IPR concepts.';
            performanceMessage.classList.add('excellent');
        } else if (percentage >= 60) {
            performanceMessage.textContent = 'Good job! You have a solid understanding of IPR.';
            performanceMessage.classList.add('good');
        } else {
            performanceMessage.textContent = 'Keep studying! Review the IPR topics and try again.';
            performanceMessage.classList.add('average');
        }
    }
    
    showPage('results');
}

// Navigation functions
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function goToHome() {
    showPage('home');
    // Reset quiz state
    currentQuestionIndex = 0;
    userAnswers = {};
    hasAnsweredCurrent = false;
}

function restartQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    userAnswers = {};
    hasAnsweredCurrent = false;
    
    showPage('quiz');
    loadQuestion();
}