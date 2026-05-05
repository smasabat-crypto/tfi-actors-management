// Tollywood Stars Hub - Complete Frontend Application with ALL 15 Celebrities

// ============ DATA - ALL 15 CELEBRITIES ============
const celebrityData = [
    // ACTORS (9)
    { 
        id: 9, name: "Sr. NTR", type: "actor", year: 1923, image: "images/srntr.webp", 
        rating: 5.0, likes: 2000,
        bio: "N.T. Rama Rao, the foundational pillar of Tollywood, achieved god-like status among Telugu people. Also served as Chief Minister of Andhra Pradesh.",
        fullDetails: {
            nickname: "Anna, Viswa Vikhyatha Nata Sarvabhouma, Messiah of the Masses",
            birthplace: "Nimmakuru, Madras Presidency (Andhra Pradesh)",
            occupation: "Actor, Director, Producer, Politician",
            debutFilm: "Mana Desam (1949)",
            blockbusters: "Mayabazar, Lava Kusa, Pathala Bhairavi, Daana Veera Soora Karna",
            awards: "Padma Shri (1968), 3 National Film Awards, 10 Filmfare Awards South",
            politicalRole: "10th Chief Minister of Andhra Pradesh (3 terms)",
            family: "Basavatarakam (m. 1943-1985), Lakshmi Parvathi (m. 1993-1996), Father of Balakrishna"
        },
        movies: ["Mayabazar", "Lava Kusa", "Pathala Bhairavi", "Daana Veera Soora Karna", "Bhakta Kannappa", "Sri Krishnam Vande Jagadgurum"],
        achievements: ["Padma Shri 1968", "3 National Film Awards", "Chief Minister AP", "Tollywood Legend"],
        reviews: []
    },
    { 
        id: 7, name: "Chiranjeevi", type: "actor", year: 1955, image: "images/chiru1.webp", 
        rating: 4.8, likes: 1380,
        bio: "Chiranjeevi, the Megastar, redefined Tollywood's commercial landscape with unmatched dancing grace and became India's highest-paid actor.",
        fullDetails: {
            nickname: "Megastar, Chiru, Boss is Boss",
            birthplace: "Mogalthur, Andhra Pradesh",
            occupation: "Actor, Producer, Philanthropist, Former Minister",
            debutFilm: "Pranam Khareedu (1978)",
            blockbusters: "Khaidi, Indra, Tagore, Gang Leader, Hitler",
            awards: "Padma Vibhushan (2024), Padma Bhushan (2006), 10 Filmfare South",
            upcoming: "Shankar Vara Prasad Garu Pandagaki Vasthunnaru",
            family: "Surekha (wife), Ram Charan (son), 2 daughters"
        },
        movies: ["Khaidi", "Indra", "Tagore", "Gang Leader", "Hitler", "Magadheera"],
        achievements: ["Padma Vibhushan 2024", "150+ Films", "Highest-paid Actor", "Union Minister"],
        reviews: []
    },
    { 
        id: 6, name: "Nandamuri Balakrishna", type: "actor", year: 1960, image: "images/bala1.jpeg", 
        rating: 4.6, likes: 920,
        bio: "Nandamuri Balakrishna (NBK), revered as Nata Simham, is the son of legendary Sr. NTR with over 100 films and 50+ years in cinema.",
        fullDetails: {
            nickname: "Balayya, NBK, Nata Simham, Lion of Tollywood",
            birthplace: "Madras (Chennai), Tamil Nadu",
            occupation: "Actor, MLA, TV Host, Philanthropist",
            debutFilm: "Sahasame Jeevitham (1984 - Solo Lead)",
            blockbusters: "Aditya 369, Narasimha Naidu, Legend, Akhanda, Veera Simha Reddy",
            awards: "Padma Bhushan (2025), Multiple Nandi Awards",
            upcoming: "New projects in 2026",
            family: "Son of Sr. NTR, Vasundhara Devi (wife), MLA from Hindupur"
        },
        movies: ["Legend", "Akhanda", "Veera Simha Reddy", "Aditya 369", "Narasimha Naidu", "Unstoppable with NBK"],
        achievements: ["Padma Bhushan 2025", "100+ Films", "MLA Hindupur", "Unstoppable Show Host"],
        reviews: []
    },
    { 
        id: 8, name: "Pawan Kalyan", type: "actor", year: 1972, image: "images/pk1.jpeg", 
        rating: 4.7, likes: 1090,
        bio: "Pawan Kalyan, the Power Star, commands cult-like following with rebellious attitude and stylized martial arts action. Now Deputy Chief Minister of AP.",
        fullDetails: {
            nickname: "Power Star, Kalyan Babu, Deputy CM",
            birthplace: "Bapatla, Andhra Pradesh",
            occupation: "Actor, Deputy CM of Andhra Pradesh, Martial Artist, Philanthropist",
            debutFilm: "Akkada Ammayi Ikkada Abbayi (1996)",
            blockbusters: "Gabbar Singh, Attarintiki Daredi, Vakeel Saab",
            awards: "National Film Award (Producer), Filmfare Best Actor South",
            upcoming: "PSPK 29",
            family: "Brother of Chiranjeevi, Anna Lezhneva (wife), 4 children"
        },
        movies: ["Gabbar Singh", "Attarintiki Daredi", "Vakeel Saab", "Kushi", "Jalsa", "Advertise Ramudu"],
        achievements: ["Deputy Chief Minister AP", "Martial Artist", "National Award Producer", "Youth Icon"],
        reviews: []
    },
    { 
        id: 3, name: "Jr. NTR", type: "actor", year: 1983, image: "images/ntr1.webp", 
        rating: 4.8, likes: 1450,
        bio: "Nandamuri Taraka Rama Rao Jr., the Young Tiger, is celebrated for exceptional acting range and Kuchipudi mastery. His role in RRR earned international acclaim.",
        fullDetails: {
            nickname: "Young Tiger, Man of Masses, Tarak",
            birthplace: "Hyderabad, Andhra Pradesh",
            occupation: "Actor, Dancer (Kuchipudi), Playback Singer, TV Host",
            debutFilm: "Ninnu Choodalani (2001 - Lead)",
            blockbusters: "Simhadri, Yamadonda, Temper, Janatha Garage, RRR, Devara",
            awards: "2 Nandi Awards, 3 Filmfare Awards South, 2 SIIMA Awards",
            upcoming: "Devara 2 (Koratala Siva), Dragon (with Prashanth Neel)",
            family: "Grandson of Sr. NTR, Lakshmi Pranathi (wife), 2 children"
        },
        movies: ["RRR", "Temper", "Janatha Garage", "Simhadri", "Yamadonda", "Devara"],
        achievements: ["RRR Global Success", "Kuchipudi Master", "2 Nandi Awards", "International Recognition"],
        reviews: []
    },
    { 
        id: 5, name: "Mahesh Babu", type: "actor", year: 1975, image: "images/mahesh.jpg", 
        rating: 4.5, likes: 1220,
        bio: "Mahesh Babu, the Prince of Tollywood, is renowned for effortless screen presence and sophisticated acting. Son of legendary actor Krishna.",
        fullDetails: {
            nickname: "Super Star, Prince of Tollywood, One & Only",
            birthplace: "Chennai, Tamil Nadu",
            occupation: "Actor, Producer, Philanthropist",
            debutFilm: "Rajakumarudu (1999 - Lead)",
            blockbusters: "Pokiri, Okkadu, Dookudu, Srimanthudu, Bharat Ane Nenu, Maharshi",
            awards: "8 Filmfare Awards South, 5 Nandi Awards, 4 SIIMA Awards",
            upcoming: "SSMB29 (with S.S. Rajamouli), Other projects",
            family: "Son of Krishna, Namrata Shirodkar (wife), 2 children"
        },
        movies: ["Pokiri", "Okkadu", "Dookudu", "Srimanthudu", "Bharat Ane Nenu", "Maharshi"],
        achievements: ["8 Filmfare Awards South", "5 Nandi Awards", "Bankable Star", "Philanthropist"],
        reviews: []
    },
    { 
        id: 1, name: "Allu Arjun", type: "actor", year: 1982, image: "images/aa1.webp", 
        rating: 4.7, likes: 1250,
        bio: "Allu Arjun, the Icon Star, evolved from Stylish Star to global phenomenon through trendsetting fashion, unmatched dance skills, and box-office dominance. His portrayal of Pushpa Raj made history as the first Telugu actor to win the National Film Award for Best Actor.",
        fullDetails: {
            nickname: "Icon Star, Stylish Star, Mallu Arjun",
            birthplace: "Hyderabad, Telangana",
            occupation: "Actor, Dancer, Producer, Philanthropist",
            debutFilm: "Gangotri (2003 - Lead)",
            blockbusters: "Arya, Desamuduru, Race Gurram, Ala Vaikunthapurramuloo, Pushpa: The Rise, Pushpa 2",
            awards: "National Film Award Best Actor, 4 Filmfare South",
            upcoming: "Pushpa 2: The Rule (2026 Blockbuster)",
            family: "Sneha Reddy (wife), Ayaan & Arha (children)"
        },
        movies: ["Pushpa: The Rise", "Pushpa 2", "Ala Vaikunthapurramuloo", "Arya", "Desamuduru", "Race Gurram"],
        achievements: ["National Film Award Best Actor", "4 Filmfare South Awards", "Icon Star Status", "Pan-Indian Superstar"],
        reviews: []
    },
    { 
        id: 2, name: "Ram Charan", type: "actor", year: 1985, image: "images/rc1.webp", 
        rating: 4.6, likes: 980,
        bio: "Ram Charan, the Mega Power Star, is a global phenomenon celebrated for his intense screen presence and world-class dancing. RRR catapulted him to international stardom.",
        fullDetails: {
            nickname: "Mega Power Star, King of Tollywood",
            birthplace: "Vijayawada, Andhra Pradesh",
            occupation: "Actor, Producer, Entrepreneur, Polo Player",
            debutFilm: "chirutha (2003 - Lead)",
            blockbusters: "Magadheera, Racha, Dhruva, Rangasthalam, RRR, Acharya",
            awards: "3 Filmfare Awards South, 3 Nandi Awards, 2 SIIMA Awards",
            upcoming: "RC15 (with Buchibabu Peddi), Other untitled projects",
            family: "Son of Megastar Chiranjeevi, Upasana Kamineni (wife)"
        },
        movies: ["Magadheera", "Racha", "Dhruva", "Rangasthalam", "RRR", "Acharya"],
        achievements: ["RRR International Success", "3 Filmfare Awards South", "Global Recognition", "Business Entrepreneur"],
        reviews: []
    },
    
    { 
        id: 4, name: "Prabhas", type: "actor", year: 1979, image: "images/prab1.jpg", 
        rating: 4.7, likes: 1120,
        bio: "Prabhas, the Rebel Star, became the first true Pan-Indian Superstar following the historic success of Baahubali franchise, revolutionizing Telugu cinema globally.",
        fullDetails: {
            nickname: "Rebel Star, Pan-India Superstar, Darling",
            birthplace: "Chennai, Tamil Nadu",
            occupation: "Actor, Philanthropist",
            debutFilm: "Eeswar (2002)",
            blockbusters: "Chatrapathi, Mirchi, Salaar, Kalki 2898 AD, Baahubali 1 & 2",
            awards: "3 Filmfare Awards South, 2 SIIMA Awards, Nandi Award",
            upcoming: "Salaar 2, Kalki 2898 AD Part 2, Spirit, Raja Saab",
            family: "Uncle of Ram Charan, Single, Height: 6'2\""
        },
        movies: ["Baahubali: The Beginning", "Baahubali 2: The Conclusion", "Salaar", "Kalki 2898 AD", "Chatrapathi", "Mirchi"],
        achievements: ["Baahubali Phenomenon", "Pan-Indian Star", "Global Recognition", "Highest-paid Actor"],
        reviews: []
    },

    {
        id: 10, name: "Samantha Ruth Prabhu", type: "actress", year: 1987, image: "images/sam1.jpg", 
        rating: 4.6, likes: 1050,
        bio: "Samantha Ruth Prabhu is one of the most accomplished actresses in Tollywood, known for natural acting and ability to perform both commercial and performance-oriented roles.",
        fullDetails: {
            nickname: "Sam, Sammy",
            birthplace: "Chennai, Tamil Nadu, India",
            occupation: "Actress, Philanthropist",
            debutFilm: "Ye Maaya Chesave (2010)",
            blockbusters: "Ye Maaya Chesave, Dookudu, Eega, Attarintiki Daaredi, Rangasthalam",
            awards: "4 Filmfare Awards South, 6 SIIMA Awards",
            knownFor: "Natural Acting, Strong Female Roles, Pan-Indian Success",
            family: "Recently divorced, Focusing on career"
        },
        movies: ["Ye Maaya Chesave", "Dookudu", "Eega", "Attarintiki Daaredi", "Rangasthalam", "Majili"],
        achievements: ["4 Filmfare Awards South", "6 SIIMA Awards", "Pan-Indian Actress", "Strong Female Roles"],
        reviews: []
    },
    {
        id: 11, name: "Rashmika Mandanna", type: "actress", year: 1996, image: "images/rasmi.jpg", 
        rating: 4.4, likes: 920,
        bio: "Rashmika Mandanna, the National Crush of India, is one of the most popular actresses in Tollywood. She quickly won hearts with her charming screen presence.",
        fullDetails: {
            nickname: "National Crush, Rash",
            birthplace: "Virajpet, Karnataka, India",
            occupation: "Actress, Model",
            debutFilm: "Chalo (2018)",
            blockbusters: "Geetha Govindam, Dear Comrade, Sarileru Neekevvaru, Bheeshma, Pushpa",
            awards: "Filmfare Awards South, SIIMA Awards",
            knownFor: "Romantic Roles, Expressive Acting, Mass Appeal",
            panIndian: "Success in Telugu, Tamil, Kannada, Hindi films"
        },
        movies: ["Geetha Govindam", "Dear Comrade", "Sarileru Neekevvaru", "Bheeshma", "Pushpa: The Rise", "Aadavallu Meeku Johaarlu"],
        achievements: ["National Crush Status", "Pan-Indian Actress", "Romantic Icon", "Growing International Recognition"],
        reviews: []
    },
    {
        id: 12, name: "Kajal Aggarwal", type: "actress", year: 1985, image: "images/kajal.jpg", 
        rating: 4.3, likes: 780,
        bio: "Kajal Aggarwal is one of the most popular and successful actresses in Tollywood. She rose to fame with the blockbuster Magadheera.",
        fullDetails: {
            nickname: "Kaju, Kajju",
            birthplace: "Mumbai, Maharashtra, India",
            occupation: "Actress, Model",
            debutFilm: "Lakshmi Kalyanam (2007)",
            blockbusters: "Magadheera, Darling, Mr. Perfect, Businessman, Baadshah",
            awards: "Filmfare Awards South, SIIMA Awards",
            knownFor: "Graceful Roles, Commercial Entertainers",
            panIndian: "Success in Telugu, Tamil, Kannada, Hindi films"
        },
        movies: ["Magadheera", "Darling", "Mr. Perfect", "Businessman", "Baadshah", "Natarang"],
        achievements: ["Blockbuster Actress", "Filmfare Awards", "Commercial Success", "Industry Respect"],
        reviews: []
    },
    {
        id: 13, name: "Sai Pallavi", type: "actress", year: 1992, image: "images/saip.jpg", 
        rating: 4.5, likes: 890,
        bio: "Sai Pallavi is widely known for her natural acting, expressive dance movements, and realistic portrayal of characters. She made remarkable impact with Fidaa.",
        fullDetails: {
            nickname: "Natural Actress",
            birthplace: "Coimbatore, Tamil Nadu, India",
            occupation: "Actress, Dancer, Medical Graduate (MBBS)",
            debutFilm: "Fidaa (2017)",
            blockbusters: "Fidaa, MCA, Love Story, Virata Parvam, Shyam Singha Roy",
            awards: "Filmfare Awards South, SIIMA Awards",
            knownFor: "Natural Acting, Dance, Realistic Roles, Medical Background",
            education: "MBBS (Medical Graduate)"
        },
        movies: ["Fidaa", "MCA", "Love Story", "Virata Parvam", "Shyam Singha Roy", "Arjun Reddy"],
        achievements: ["Critical Acclaim", "Dance Master", "MBBS Educated", "Meaningful Roles"],
        reviews: []
    },
    {
        id: 14, name: "Anushka Shetty", type: "actress", year: 1981, image: "images/anu.jpg", 
        rating: 4.4, likes: 950,
        bio: "Anushka Shetty, the Lady Superstar of Tollywood, redefined women's roles in cinema. She earned global recognition for Baahubali franchise.",
        fullDetails: {
            nickname: "Lady Superstar, Sweety, Devasena",
            birthplace: "Mangalore, Karnataka, India",
            occupation: "Actress, Yoga Instructor",
            debutFilm: "Super (2005)",
            blockbusters: "Arundhati, Vedam, Baahubali (1 & 2), Rudhramadevi, Bhaagamathie",
            awards: "3 Filmfare Awards South, 2 Nandi Awards, Kalaimamani (Tamil Nadu)",
            knownFor: "Action Films, Baahubali, Yoga Discipline",
            height: "5'10\" (1.78m)"
        },
        movies: ["Arundhati", "Vedam", "Baahubali: The Beginning", "Baahubali 2: The Conclusion", "Rudhramadevi", "Bhaagamathie"],
        achievements: ["Baahubali Global Success", "3 Filmfare Awards South", "Action Heroine", "Yoga Ambassador"],
        reviews: []
    },
    {
        id: 15, name: "Savitri", type: "actress", year: 1934, image: "images/savtri.jpg", 
        rating: 5.0, likes: 1800,
        bio: "Savitri, fondly known as Mahanati (The Great Actress), is the greatest actress in the history of Tollywood. First female superstar of Telugu cinema.",
        fullDetails: {
            nickname: "Mahanati, Nadigaiyar Thilagam",
            birthplace: "Nimmakuru, Andhra Pradesh, India",
            deathDate: "December 26, 1981 (Aged 47)",
            occupation: "Actress, Director, Producer, Playback Singer",
            debutFilm: "Samsaram (1950)",
            breakthrough: "Pelli Chesi Choodu (1952)",
            notableFilms: "Mayabazar, Devadasu, Missamma, Gundamma Katha, Nartanasala",
            awards: "Rashtrapati Award, Nandi Award, State Honors in Tamil Nadu",
            family: "Gemini Ganesan (husband), 1 Daughter (Vijaya Chamundeswari), 1 Son (Satheesh Kumar)"
        },
        movies: ["Mayabazar", "Devadasu", "Missamma", "Gundamma Katha", "Nartanasala", "Pelli Chesi Choodu"],
        achievements: ["Mahanati Status", "First Female Superstar", "Director & Producer", "Eternal Legacy"],
        reviews: []
    }
];

let allCelebrities = [...celebrityData];
let filteredCelebrities = [...celebrityData];
let currentCelebrity = null;
let adminLoggedIn = false;
const adminPassword = 'Sai!@#8843';

function initializeStorage() {
    if (!localStorage.getItem('celebrities')) {
        localStorage.setItem('celebrities', JSON.stringify(allCelebrities));
    } else {
        allCelebrities = JSON.parse(localStorage.getItem('celebrities'));
        filteredCelebrities = [...allCelebrities];
    }
}

function searchAndFilter() {
    const name = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const type = document.getElementById('typeFilter')?.value || 'all';
    const year = document.getElementById('yearFilter')?.value || 'all';
    const movie = document.getElementById('movieFilter')?.value.toLowerCase() || '';

    filteredCelebrities = allCelebrities.filter(c => {
        const matchName = c.name.toLowerCase().includes(name);
        const matchType = type === 'all' || c.type === type;
        const matchYear = year === 'all' || c.year.toString() === year;
        const matchMovie = !movie || c.movies.some(m => m.toLowerCase().includes(movie));
        return matchName && matchType && matchYear && matchMovie;
    });

    renderGalleryCards();
    showNotification(`Found ${filteredCelebrities.length} celebrities`);
}

// ============ RENDERING ============
function renderHome() {
    const content = document.getElementById('mainContent');
    content.innerHTML = `
        <div class="home-section">
            <div class="welcome-box">
                <h1>🎬 Welcome to Tollywood Stars Hub 🎬</h1>
                <p>Discover, rate, and review all 15 legendary Telugu cinema celebrities!</p>
                <button class="btn btn-primary" onclick="viewSection('gallery')">Explore All Celebrities</button>
            </div>
            <div class="stats-container">
                <div class="stat-box"><h3>${allCelebrities.length}</h3><p>Total Celebrities</p></div>
                <div class="stat-box"><h3>${allCelebrities.filter(c => c.type === 'actor').length}</h3><p>Actors</p></div>
                <div class="stat-box"><h3>${allCelebrities.filter(c => c.type === 'actress').length}</h3><p>Actresses</p></div>
            </div>
        </div>
    `;
}

function renderGallery() {
    const content = document.getElementById('mainContent');
    content.innerHTML = `
        <div class="gallery-section">
            <h2>Browse All ${allCelebrities.length} Celebrities</h2>
            <div class="filters-container">
                <input type="text" id="searchInput" placeholder="Search by name..." onkeyup="searchAndFilter()" class="filter-input">
                <select id="typeFilter" onchange="searchAndFilter()" class="filter-select">
                    <option value="all">All Types</option>
                    <option value="actor">Actors</option>
                    <option value="actress">Actresses</option>
                </select>
                <input type="text" id="movieFilter" placeholder="Search by movie..." onkeyup="searchAndFilter()" class="filter-input">
            </div>
            <div id="gallery" class="gallery-grid"></div>
        </div>
    `;
    renderGalleryCards();
}

function renderGalleryCards() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    
    // Sort celebrities: actors first (by age/seniority), then actresses (by age/seniority)
    const sortedCelebrities = [...filteredCelebrities].sort((a, b) => {
        // First, sort by type (actors before actresses)
        if (a.type !== b.type) {
            return a.type === 'actor' ? -1 : 1;
        }
        // Then, sort by year (ascending - oldest/most senior first)
        return a.year - b.year;
    });
    
    gallery.innerHTML = sortedCelebrities.map(c => `
        <div class="celebrity-card">
            <div class="celebrity-image">
                <img src="${c.image}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/250x300?text=${c.name}'">
            </div>
            <div class="celebrity-info">
                <h3>${c.name}</h3>
                <p class="type-badge ${c.type}">${c.type.toUpperCase()}</p>
                <div class="rating-stars">
                    <span class="stars">${getStars(c.rating)}</span>
                    <span class="rating-value">${c.rating}/5.0</span>
                </div>
                <p class="likes-count">❤️ ${c.likes} Likes</p>
                <button class="btn btn-small" onclick="viewProfile(${c.id})">View Profile</button>
            </div>
        </div>
    `).join('');
}

function getStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - Math.ceil(rating));
}

function viewProfile(id) {
    const c = allCelebrities.find(x => x.id === id);
    if (!c) return;
    currentCelebrity = c;
    const content = document.getElementById('mainContent');
    
    // Extract full details
    const details = c.fullDetails || {};
    
    content.innerHTML = `
        <div class="details-section">
            <button class="btn btn-back" onclick="viewSection('gallery')">← Back to Gallery</button>
            
            <!-- Hero Section with Image and Title -->
            <div class="profile-header">
                <div class="profile-image-container">
                    <img src="${c.image}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/400x500?text=${c.name}'" class="profile-main-image">
                </div>
                <div class="profile-title">
                    <h2>${c.name} - ${details.nickname || c.type.toUpperCase()}</h2>
                </div>
            </div>
            
            <!-- Biography Section -->
            <div class="bio-content">
                <h3>Biography</h3>
                <p>${c.bio}</p>
            </div>
            
            <!-- Full Details Section with Table -->
            <div class="details-table-section">
                <h3>Complete Profile Details</h3>
                <table class="profile-details-table">
                    <tr><td class="detail-label">Full Name</td><td class="detail-value">${c.name}</td></tr>
                    <tr><td class="detail-label">Nicknames</td><td class="detail-value">${details.nickname || 'N/A'}</td></tr>
                    <tr><td class="detail-label">Born</td><td class="detail-value">${c.year}</td></tr>
                    <tr><td class="detail-label">Birthplace</td><td class="detail-value">${details.birthplace || 'N/A'}</td></tr>
                    <tr><td class="detail-label">Type</td><td class="detail-value"><span class="type-badge ${c.type}">${c.type.toUpperCase()}</span></td></tr>
                    <tr><td class="detail-label">Occupation</td><td class="detail-value">${details.occupation || 'Actor/Actress'}</td></tr>
                    <tr><td class="detail-label">Debut Film</td><td class="detail-value">${details.debutFilm || 'N/A'}</td></tr>
                    <tr><td class="detail-label">Blockbusters</td><td class="detail-value">${details.blockbusters || 'N/A'}</td></tr>
                    <tr><td class="detail-label">Awards</td><td class="detail-value">${details.awards || 'N/A'}</td></tr>
                    <tr><td class="detail-label">Family</td><td class="detail-value">${details.family || 'N/A'}</td></tr>
                    ${details.upcoming ? `<tr><td class="detail-label">Upcoming</td><td class="detail-value">${details.upcoming}</td></tr>` : ''}
                    ${details.panIndian ? `<tr><td class="detail-label">Pan-Indian Success</td><td class="detail-value">${details.panIndian}</td></tr>` : ''}
                </table>
            </div>
            
            <!-- Movies & Achievements Section -->
            <div class="movies-achievements">
                <div class="movies-section">
                    <h3>Popular Movies</h3>
                    <ul class="movies-list">${c.movies.map(m => `<li>🎬 ${m}</li>`).join('')}</ul>
                </div>
                <div class="achievements-section">
                    <h3>Major Achievements</h3>
                    <ul class="achievements-list">${c.achievements.map(a => `<li>⭐ ${a}</li>`).join('')}</ul>
                </div>
            </div>
            
            <!-- Interactive Features Section (Like, Rate, Review) -->
            <div class="interactions-section">
                <h3>Share Your Thoughts</h3>
                <div class="interaction-controls">
                    <div class="rating-box">
                        <div class="rating-display">
                            <span class="stars">${getStars(c.rating)}</span>
                            <span class="rating-value">${c.rating}/5.0</span>
                        </div>
                        <label>Rate this celebrity:</label>
                        <input type="range" min="1" max="5" step="0.1" value="${c.rating}" onchange="updateRating(${c.id}, this.value)" class="rating-slider">
                    </div>
                    <div class="like-box">
                        <button class="btn btn-like" onclick="addLike(${c.id})">❤️ Like (${c.likes})</button>
                    </div>
                </div>
            </div>
            
            <!-- Reviews & Comments Section -->
            <div class="reviews-section">
                <h3>Reviews & Comments</h3>
                <div class="add-review">
                    <input type="text" id="reviewName" placeholder="Your name" class="review-input">
                    <textarea id="reviewText" placeholder="Write your review or comment..." class="review-textarea"></textarea>
                    <button class="btn btn-primary" onclick="addReview(${c.id})">Post Review</button>
                </div>
                <div id="reviewsList" class="reviews-list">${renderReviews(c.reviews)}</div>
            </div>
        </div>
    `;
}

function renderReviews(reviews) {
    if (reviews.length === 0) return '<p style="text-align: center; color: #999;">No reviews yet. Be the first!</p>';
    return reviews.map((r, i) => `
        <div class="review-card">
            <div class="review-header"><strong>${r.name}</strong> <span class="review-date">${r.date}</span></div>
            <p>${r.text}</p>
            <button class="btn-small" onclick="deleteReview(${currentCelebrity.id}, ${i})">Delete</button>
        </div>
    `).join('');
}

// ============ INTERACTIONS ============
function addLike(id) {
    const c = allCelebrities.find(x => x.id === id);
    if (c) {
        c.likes++;
        updateStorage();
        if (currentCelebrity?.id === id) viewProfile(id);
        showNotification('Liked! ❤️');
    }
}

function updateRating(id, rating) {
    const c = allCelebrities.find(x => x.id === id);
    if (c) {
        c.rating = parseFloat(rating);
        updateStorage();
        showNotification(`Rated ${rating}/5.0`);
    }
}

function addReview(id) {
    const name = document.getElementById('reviewName')?.value || '';
    const text = document.getElementById('reviewText')?.value || '';
    if (!name || !text) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    const c = allCelebrities.find(x => x.id === id);
    if (c) {
        c.reviews.push({ name, text, date: new Date().toLocaleDateString() });
        updateStorage();
        document.getElementById('reviewName').value = '';
        document.getElementById('reviewText').value = '';
        viewProfile(id);
        showNotification('Review posted!');
    }
}

function deleteReview(id, index) {
    if (confirm('Delete this review?')) {
        const c = allCelebrities.find(x => x.id === id);
        if (c) {
            c.reviews.splice(index, 1);
            updateStorage();
            viewProfile(id);
            showNotification('Review deleted');
        }
    }
}

// ============ ADMIN ============
function renderAdminPanel() {
    const content = document.getElementById('mainContent');
    if (!adminLoggedIn) {
        content.innerHTML = `
            <div class="admin-login">
                <h2>Admin Panel Login</h2>
                <input type="password" id="adminPassword" placeholder="Enter admin password" class="admin-input">
                <button class="btn btn-primary" onclick="adminLogin()">Login</button>
                <button class="btn" onclick="viewSection('home')">Back</button>
            </div>
        `;
        return;
    }
    content.innerHTML = `
        <div class="admin-section">
            <div class="admin-header">
                <h2>Admin Panel</h2>
                <button class="btn btn-danger" onclick="adminLogout()">Logout</button>
            </div>
            <div class="admin-tabs">
                <button class="tab-btn active" onclick="showAdminTab('list')">Manage</button>
                <button class="tab-btn" onclick="showAdminTab('add')">Add New</button>
            </div>
            <div id="adminContent">${renderAdminList()}</div>
        </div>
    `;
}

function adminLogin() {
    const pwd = document.getElementById('adminPassword')?.value || '';
    if (pwd === adminPassword) {
        adminLoggedIn = true;
        renderAdminPanel();
        showNotification('Admin logged in!');
    } else {
        showNotification('Wrong password', 'error');
    }
}

function adminLogout() {
    adminLoggedIn = false;
    renderHome();
    showNotification('Logged out');
}

function showAdminTab(tab) {
    const content = document.getElementById('adminContent');
    if (tab === 'list') {
        content.innerHTML = renderAdminList();
    } else {
        content.innerHTML = renderAddForm();
    }
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
}

function renderAdminList() {
    return `
        <div class="admin-list">
            <h3>All Celebrities</h3>
            <table class="admin-table">
                <thead><tr><th>ID</th><th>Name</th><th>Type</th><th>Year</th><th>Rating</th><th>Actions</th></tr></thead>
                <tbody>
                    ${allCelebrities.map(c => `
                        <tr>
                            <td>${c.id}</td>
                            <td>${c.name}</td>
                            <td><span class="type-badge ${c.type}">${c.type}</span></td>
                            <td>${c.year}</td>
                            <td>${c.rating}</td>
                            <td>
                                <button class="btn-small" onclick="editCelebrity(${c.id})">Edit</button>
                                <button class="btn-small btn-danger" onclick="deleteCelebrity(${c.id})">Delete</button>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function renderAddForm() {
    return `
        <div class="add-form">
            <h3>Add New Celebrity</h3>
            <form onsubmit="saveCelebrity(event)">
                <input type="text" id="formName" placeholder="Name" required>
                <select id="formType" required><option value="actor">Actor</option><option value="actress">Actress</option></select>
                <input type="number" id="formYear" placeholder="Birth Year" required>
                <textarea id="formBio" placeholder="Biography" required></textarea>
                <input type="text" id="formMovies" placeholder="Movies (comma-separated)" required>
                <input type="text" id="formAchievements" placeholder="Achievements (comma-separated)" required>
                <button type="submit" class="btn btn-primary">Add Celebrity</button>
            </form>
        </div>
    `;
}

function editCelebrity(id) {
    const c = allCelebrities.find(x => x.id === id);
    if (!c) return;
    const content = document.getElementById('adminContent');
    content.innerHTML = `
        <div class="edit-form">
            <h3>Edit ${c.name}</h3>
            <form onsubmit="saveCelebrityEdit(${id}, event)">
                <input type="text" id="formName" value="${c.name}" required>
                <select id="formType" required><option value="actor" ${c.type === 'actor' ? 'selected' : ''}>Actor</option><option value="actress" ${c.type === 'actress' ? 'selected' : ''}>Actress</option></select>
                <input type="number" id="formYear" value="${c.year}" required>
                <textarea id="formBio" required>${c.bio}</textarea>
                <input type="text" id="formMovies" value="${c.movies.join(', ')}" required>
                <input type="text" id="formAchievements" value="${c.achievements.join(', ')}" required>
                <button type="submit" class="btn btn-primary">Update</button>
                <button type="button" class="btn" onclick="showAdminTab('list')">Cancel</button>
            </form>
        </div>
    `;
}

function saveCelebrity(e) {
    e.preventDefault();
    const newId = Math.max(...allCelebrities.map(x => x.id), 0) + 1;
    const c = {
        id: newId,
        name: document.getElementById('formName').value,
        type: document.getElementById('formType').value,
        year: parseInt(document.getElementById('formYear').value),
        bio: document.getElementById('formBio').value,
        movies: document.getElementById('formMovies').value.split(',').map(m => m.trim()),
        achievements: document.getElementById('formAchievements').value.split(',').map(a => a.trim()),
        image: 'images/placeholder.jpg',
        rating: 5.0,
        likes: 0,
        reviews: []
    };
    allCelebrities.push(c);
    updateStorage();
    showAdminTab('list');
    showNotification('Celebrity added!');
}

function saveCelebrityEdit(id, e) {
    e.preventDefault();
    const c = allCelebrities.find(x => x.id === id);
    if (c) {
        c.name = document.getElementById('formName').value;
        c.type = document.getElementById('formType').value;
        c.year = parseInt(document.getElementById('formYear').value);
        c.bio = document.getElementById('formBio').value;
        c.movies = document.getElementById('formMovies').value.split(',').map(m => m.trim());
        c.achievements = document.getElementById('formAchievements').value.split(',').map(a => a.trim());
        updateStorage();
        showAdminTab('list');
        showNotification('Celebrity updated!');
    }
}

function deleteCelebrity(id) {
    if (confirm('Delete this celebrity?')) {
        allCelebrities = allCelebrities.filter(x => x.id !== id);
        updateStorage();
        showAdminTab('list');
        showNotification('Celebrity deleted');
    }
}

// ============ UTILITIES ============
function viewSection(section) {
    if (section === 'home') renderHome();
    else if (section === 'gallery') renderGallery();
    else if (section === 'admin') renderAdminPanel();
}

function updateStorage() {
    localStorage.setItem('celebrities', JSON.stringify(allCelebrities));
    filteredCelebrities = [...allCelebrities];
}

function showNotification(msg, type = 'success') {
    const notif = document.createElement('div');
    notif.className = `notification ${type}`;
    notif.textContent = msg;
    document.body.appendChild(notif);
    setTimeout(() => notif.classList.add('show'), 10);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ============ THEME TOGGLE ============
function toggleTheme() {
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button icon
    const icon = themeBtn.querySelector('.theme-icon');
    icon.textContent = newTheme === 'dark' ? '🌚' : '🔆';
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    html.setAttribute('data-theme', savedTheme);
    
    // Set initial icon
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        const icon = themeBtn.querySelector('.theme-icon');
        icon.textContent = savedTheme === 'dark' ? '🌚' : '🔆';
    }
}

// ============ INIT ============
window.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeStorage();
    renderHome();
});
