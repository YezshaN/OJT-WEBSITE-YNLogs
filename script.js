
        const slideshowStates = {};
        const cardData = [
            { 
                week: '01', date: 'Feb 23 - Feb 27', title: 'Office Orientation and Document Routing', 
                desc: 'Office orientation, document routing, and creation of a Cell Physiology lecture presentation.',
                contentBlocks: [
                    {
                        type: 'text',
                        content: '<p>During the first week of our On-the-Job Training at the Dean’s Office, we were introduced to the office environment, workplace policies, and the different offices within the university. We learned the proper procedures for handling and routing documents, as well as the importance of professionalism, communication, and time management in an office setting. We also assisted in routing documents from different offices within the university, which helped us understand how administrative processes are managed efficiently.</p> <br> <p>Aside from office-related tasks, we were assigned to create a lecture presentation for Cell Physiology. This involved organizing the content, designing the presentation, and ensuring that the information was clear and visually engaging. Through this task, I enhanced my creativity, technical skills, and attention to detail while contributing educational materials that support teaching and learning.</p>'
                    
                    },

                    {
                        type: 'images',
                        urls: ['Images/heroo.jpg', 'Images/profile.jpg']
                    },
                ]
            },
            { 
                week: '02', date: 'Mar 02 - Mar 08', title: 'Document Organization and Event Assistance', 
                desc: 'Document scanning and organization, syllabus cover redesign, and assistance in event documentation and program card creation.',
                contentBlocks: [
                    {
                        type: 'text',
                        content: '<p>During the second week of my On-the-Job Training at the Dean’s Office, we were assigned to organize and scan the AR and TR documents of all teaching faculty in BUCS. We also assisted Sir Clyde in scanning important office documents needed for record keeping and administrative purposes. These tasks helped me improve my organizational skills, attention to detail, and ability to manage documents efficiently in a professional office environment.</p> <br> <p>In addition, we were tasked by the secretary to redesign the cover layout of the Course Syllabus for each department in BUCS. Before creating the design, we coordinated with the secretary to identify the important details and elements that needed to be included in the cover. This activity enhanced my communication, creativity, and layout design skills while ensuring that the output met the office’s standards and expectations.</p> <br> <p>Aside from office tasks, we also contributed to creating the program card for the “Dinner for a Cause” event organized by the Biology Department. During the event held at BU Bulwagan, I assisted in documenting and facilitating the program to help ensure the smooth flow of activities. Through this experience, I developed teamwork, event coordination, and multitasking skills while participating in an important departmental event.</p>'
                    
                    },

                    
                    {
                        type: 'images',
                        urls: ['Images/.jpg']
                    },
                ]
            },
            { 
                week: '03', date: 'Mar 09 - Mar 13', title: '...', 
                desc: '...',
                contentBlocks: [{ type: 'text', content: '<p>...</p>' }]
            },
            { 
                week: '04', date: 'Mar 16 - Mar 20', title: '...', 
                desc: '...',
                contentBlocks: [{ type: 'text', content: '<p>...</p>' }]
            },
            { week: '05', date: 'Mar 23 - Mar 27', title: '...', desc: '...', contentBlocks: [{type: 'text', content: '<p>...</p>'}] },
            { week: '06', date: 'Mar 30 - Apr 03', title: '...', desc: '...', contentBlocks: [{type: 'text', content: '<p>...</p>'}] },
            { week: '07', date: 'Apr 06 - Apr 10', title: '...', desc: '...', contentBlocks: [{type: 'text', content: '<p>...</p>'}] },
            { week: '08', date: 'Apr 13 - Apr 17', title: '...', desc: '...', contentBlocks: [{type: 'text', content: '<p>...</p>'}] },
            { week: '09', date: 'Apr 20 - Apr 24', title: '...', desc: '...', contentBlocks: [{type: 'text', content: '<p>...</p>'}] },
            { week: '10', date: 'Apr 27 - May 01', title: '...', desc: '...', contentBlocks: [{type: 'text', content: '<p>...</p>'}] },
            { week: '11', date: 'May 04 - May 08', title: '...', desc: '...', contentBlocks: [{type: 'text', content: '<p>...</p>'}] },
            { week: '12', date: 'May 11 - May 15', title: '...', desc: '...', contentBlocks: [{type: 'text', content: '<p>...</p>'}] }
        ];

        let currentPage = 1;
        const itemsPerPage = 6;
        const totalPages = Math.ceil(cardData.length / itemsPerPage);

        const cardsContainer = document.getElementById('cards-container');
        const homeView = document.getElementById('home-view');
        const detailView = document.getElementById('detail-view');
        const aboutView = document.getElementById('about-view');

        function renderCards() {
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const paginatedData = cardData.slice(start, end);

            cardsContainer.innerHTML = paginatedData.map((item, idx) => `
                <div class="blog-card glass-card rounded-[2.5rem] p-8 flex flex-col group h-full">
                    <div class="flex justify-between items-start mb-8">
                        <span class="bg-white/5 border border-white/10 text-pink-500 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest group-hover:bg-pink-500 group-hover:text-white transition-all">Week ${item.week}</span>
                        <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest">${item.date}</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 tracking-tight group-hover:text-pink-500 transition-colors">${item.title}</h3>
                    <p class="text-gray-400 text-sm leading-relaxed mb-10 flex-grow font-light">
                        ${item.desc}
                    </p>
                    <button onclick="showDetail('${item.week}')" class="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all">
                        VIEW FULL BLOG <i class="fas fa-chevron-right text-[8px]"></i>
                    </button>
                </div>
            `).join('');

            updateButtons();
        }

        function updateButtons() {
            document.getElementById('prevBtn').disabled = currentPage === 1;
            document.getElementById('nextBtn').disabled = currentPage === totalPages;
        }

        function nextPage() { if (currentPage < totalPages) { currentPage++; renderCards(); } }
        function prevPage() { if (currentPage > 1) { currentPage--; renderCards(); } }

        function showDetail(week) {
            const data = cardData.find(item => item.week === week);
            if (!data) return;

            document.getElementById('detail-week').innerText = `Week ${data.week}`;
            document.getElementById('detail-date').innerText = data.date;
            document.getElementById('detail-title').innerText = data.title;
            const container = document.getElementById('detail-dynamic-content');
            container.innerHTML = '';
            
            data.contentBlocks.forEach((block, blockIndex) => {
                if (block.type === 'text') {
                    const div = document.createElement('div');
                    //div.innerHTML = block.content;
                    div.className = "detail-text-block";
                    div.innerHTML = block.content;
                    container.appendChild(div);
                    container.appendChild(document.createElement("hr")).className = "border-white/20 my-10";
                } else if (block.type === 'images') {
                    const id = `slideshow-${week}-${blockIndex}`;
                    slideshowStates[id] = { urls: block.urls, currentIndex: 0 };
                    const div = document.createElement('div');
                    div.className = 'relative w-full group py-8';
                    const isMulti = block.urls.length > 1;

                    div.innerHTML = `
                        <div class="relative w-full aspect-video bg-black rounded-[2.5rem] overflow-hidden border border-white/10 flex items-center justify-center">

                            <!-- Blurred background -->
                            <img id="bg-${id}" src="${block.urls[0]}"
                                class="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40">

                            <!-- Main image -->
                            <img id="img-${id}" src="${block.urls[0]}"
                                class="relative max-h-full max-w-full object-contain z-10">

                            ${isMulti ? `
                                <div class="absolute inset-0 flex items-center justify-between px-6 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                    <button onclick="prevSlide('${id}')" class="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all">
                                        <i class="fas fa-chevron-left"></i>
                                    </button>
                                    <button onclick="nextSlide('${id}')" class="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all">
                                        <i class="fas fa-chevron-right"></i>
                                    </button>
                                </div>

                                <div class="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-white border border-white/10">
                                    <span id="counter-${id}">1 / ${block.urls.length}</span>
                                </div>
                            ` : ''}
                        </div>

                        </div>

                        <p class="text-center text-xs text-gray-500 mt-3 uppercase tracking-widest">
                            Weekly documentation photo
                        </p>
                    `;
                    container.appendChild(div);
                }
            });

            [homeView, detailView, aboutView].forEach(v => v.classList.add('hidden-section'));
            detailView.classList.remove('hidden-section');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function updateSlideshow(id, index) {
            const state = slideshowStates[id];
            if (index < 0) index = state.urls.length - 1;
            if (index >= state.urls.length) index = 0;
            state.currentIndex = index;
            const newSrc = state.urls[index];
           document.getElementById(`img-${id}`).src = newSrc;
            // Background blurred image (NEW)
            document.getElementById(`bg-${id}`).src = newSrc;
            // Counter
            document.getElementById(`counter-${id}`).innerText =
                `${index + 1} / ${state.urls.length}`;
        }

        function prevSlide(id) { updateSlideshow(id, slideshowStates[id].currentIndex - 1); }
        function nextSlide(id) { updateSlideshow(id, slideshowStates[id].currentIndex + 1); }

        function showHome() {
            [homeView, detailView, aboutView].forEach(v => v.classList.add('hidden-section'));
            homeView.classList.remove('hidden-section');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function showAbout() {
            [homeView, detailView, aboutView].forEach(v => v.classList.add('hidden-section'));
            aboutView.classList.remove('hidden-section');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function scrollToBlogs() {
            showHome();
            setTimeout(() => {
                document.getElementById('blogs-section').scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }

        function toggleMobileMenu() {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
        }

        // Init
        renderCards();