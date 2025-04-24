document.addEventListener('DOMContentLoaded', () => {

    // --- Data Definitions ---
    const certificationsData = [
        // ... (same data as before)
         { name: "ISO 22000:2018", description: "Food Safety Management System", certificateNumber: "", iconName: "badge-help" },
        { name: "ISO 41001:2018", description: "Facility Management System", certificateNumber: "", iconName: "badge-help" },
        { name: "ISO 18788:2015", description: "Security Operations Management System", certificateNumber: "", iconName: "badge-help" },
        { name: "ISO 9001:2015", description: "Quality Management System", certificateNumber: "", iconName: "badge-help" },
        { name: "PSARA License", description: "Security service licenses", certificateNumber: "PSA/L/73/GJ/2024/AUG/2882", iconName: "file-text" },
        { name: "GSTIN", description: "Goods and Services Tax Identification Number", certificateNumber: "24AAJCG2063M1ZH", iconName: "file-text" },
        { name: "PAN", description: "Permanent Account Number", certificateNumber: "AAJ*****3M", iconName: "file-text" },
        { name: "EPF", description: "Employees' Provident Fund", certificateNumber: "GJRAJ2441551000", iconName: "file-text" },
        { name: "ESIC", description: "Employee State Insurance Corporation", certificateNumber: "37001256240000999", iconName: "file-text" },
        { name: "Shops & Establishment Act No.", description: "License for Shops and Establishments", certificateNumber: "2023-2024/SR/000342", iconName: "file-text" },
        { name: "Professional Tax Enrollment", description: "Professional Tax Enrollment", certificateNumber: "PEC04131418", iconName: "file-text" },
        { name: "Udyam Registration No.", description: "Udyam Registration Number", certificateNumber: "UDYAM-GJ-20-0214233", iconName: "file-text" },
    ];

    const servicesData = [
        // ... (same data as before)
        { name: "Guard Service", description: "Trained security personnel for various needs.", iconName: "shield" },
        { name: "Bouncer Service", description: "Professional bouncers for events and establishments.", iconName: "user" },
        { name: "Armed Security", description: "Security personnel with firearms for high-risk situations.", iconName: "shield-alert" },
        { name: "Event Security", description: "Comprehensive security solutions for events.", iconName: "calendar-days" },
        { name: "Commercial Security", description: "Security solutions for commercial properties.", iconName: "store" },
        { name: "Corporate Security", description: "Security solutions for corporate entities.", iconName: "briefcase" },
        { name: "Government Sector Security", description: "Security solutions for government facilities.", iconName: "landmark" },
        { name: "Office Security", description: "Security solutions for office environments.", iconName: "building-2" },
        { name: "VIP Security", description: "Security solutions for VIP protection.", iconName: "id-card" },
        { name: "Wind Farm / Solar Site Security", description: "Specialized security for renewable energy sites.", iconName: "lightbulb" },
        { name: "Industrial Security", description: "Security solutions for industrial facilities.", iconName: "factory" },
        { name: "Hotel Security", description: "Security solutions for hotels.", iconName: "key-round" },
        { name: "Bank Security", description: "Security solutions for financial institutions.", iconName: "locate" },
        { name: "Residence Security", description: "Security solutions for residential properties.", iconName: "home" },
        { name: "Facility Attendants", description: "Attendants for offices, buildings, and parking lots", iconName: "users" },
        { name: "Surveillance & Monitoring", description: "Advanced surveillance and monitoring services.", iconName: "camera" },
    ];

    // --- Function Definitions ---

    function generateCertifications() {
        const listContainer = document.getElementById('certifications-list');
        if (!listContainer) {
            console.error("Certifications list container not found!");
            return;
        }

        let htmlContent = '';
        certificationsData.forEach((cert, index) => {
            // Added data-aos for animation with a staggered delay
            htmlContent += `
                <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-6 text-center border"
                     data-aos="fade-up" data-aos-delay="${index * 50}">
                    <div class="mb-3 text-blue-600">
                        ${cert.iconName ? `<i data-lucide="${cert.iconName}" class="w-8 h-8"></i>` : ''}
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">${cert.name}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        ${cert.description}
                        ${cert.certificateNumber ? `<br><span class="font-medium block mt-1">No:</span> ${cert.certificateNumber}` : ''}
                    </p>
                </div>
            `;
        });
        listContainer.innerHTML = htmlContent;
    }

    function generateServices() {
        const listContainer = document.getElementById('services-list');
         if (!listContainer) {
            console.error("Services list container not found!");
            return;
         }

        let htmlContent = '';
        servicesData.forEach((service, index) => {
             // Added data-aos for animation with a staggered delay
            htmlContent += `
                <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border"
                     data-aos="fade-up" data-aos-delay="${index * 50}">
                    <div class="flex items-center gap-3 mb-3">
                         ${service.iconName ? `<i data-lucide="${service.iconName}" class="w-6 h-6 text-blue-600 flex-shrink-0"></i>` : ''}
                        <h3 class="text-lg font-semibold text-gray-800">${service.name}</h3>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed">${service.description}</p>
                </div>
            `;
        });
        listContainer.innerHTML = htmlContent;
    }

    function initAccordion() {
        const accordionItems = document.querySelectorAll('.accordion-item');

        accordionItems.forEach(item => {
            const trigger = item.querySelector('.accordion-trigger');
            const content = item.querySelector('.accordion-content');
            // const icon = trigger.querySelector('.accordion-icon'); // Icon rotation is handled by aria-expanded in CSS now

            if (!trigger || !content) return;

            trigger.addEventListener('click', () => {
                const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

                // Toggle the current item
                trigger.setAttribute('aria-expanded', !isExpanded);
                if (!isExpanded) {
                    // Open: Set max-height to scrollHeight
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    // Close: Set max-height to 0
                    content.style.maxHeight = '0px';
                }

                // Optional: Close other items if you want only one open at a time
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherTrigger = otherItem.querySelector('.accordion-trigger');
                        const otherContent = otherItem.querySelector('.accordion-content');
                        if (otherTrigger && otherContent) {
                             otherTrigger.setAttribute('aria-expanded', 'false');
                             otherContent.style.maxHeight = '0px';
                        }
                    }
                });

                 // Refresh AOS calculations slightly after opening accordion
                 // This helps if animated items inside were initially hidden
                 setTimeout(() => { AOS.refresh(); }, 400); // Delay should match transition duration

            });

             // Set initial max-height to 0 for closed state
             content.style.maxHeight = '0px';
        });
    }

     function updateFooterYear() {
        const yearSpan = document.getElementById('current-year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }


    // --- Initialization ---
    generateCertifications();
    generateServices();
    initAccordion();
    updateFooterYear();

    // Initialize AOS animations
    AOS.init({
        duration: 700, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once - while scrolling down
        offset: 100, // Offset (in px) from the original trigger point
        easing: 'ease-in-out', // Default easing
    });

    // Call Lucide Icons *after* dynamic content is added
    // Use try/catch or check window.lucide if loading order is uncertain
    try {
        if (window.lucide) {
            lucide.createIcons();
        } else {
            console.warn("Lucide library not loaded yet, icons might not render immediately.");
            // Attempt again after a short delay
            setTimeout(() => {
                if (window.lucide) {
                     lucide.createIcons();
                     AOS.refresh(); // Refresh AOS in case icons changed layout
                }
            }, 300);
        }
    } catch (e) {
        console.error("Error creating Lucide icons:", e);
    }


}); // End DOMContentLoaded

// --- No more Google Map code needed here ---
