
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update navigation links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        }

        function showCommunityTab(tab) {
            if (tab === 'my') {
                document.getElementById('my-communities').style.display = 'block';
                document.getElementById('discover-communities').style.display = 'none';
                document.getElementById('my-tab').style.background = '#8b5cf6';
                document.getElementById('my-tab').style.color = 'white';
                document.getElementById('discover-tab').style.background = 'transparent';
                document.getElementById('discover-tab').style.color = '#8b5cf6';
            } else {
                document.getElementById('my-communities').style.display = 'none';
                document.getElementById('discover-communities').style.display = 'block';
                document.getElementById('discover-tab').style.background = '#8b5cf6';
                document.getElementById('discover-tab').style.color = 'white';
                document.getElementById('my-tab').style.background = 'transparent';
                document.getElementById('my-tab').style.color = '#8b5cf6';
            }
        }

        // Initialize
        showCommunityTab('my');
    