        // Ask the visitor for their name
        let userName = prompt("What is your name?");

        // Update the welcome message
        /*if (userName && userName.trim() !== "") {
            document.getElementById("welcomeMessage").textContent =
                "Welcome, " + userName.trim() + "! Thanks for visiting my portfolio.";
        } else {
            document.getElementById("welcomeMessage").textContent =
                "Welcome to my personal portfolio!";
        }*/
       const skills = [
            "C",
            "C++",
            "C#",
            "JavaScript",
            "HTML",
            "Responsive Web Design"
        ];

        //Welcome Modal Interaction
        const welcomeModal = document.getElementById("welcomeModal");
        const closeModalButton = document.getElementById("closeModal");
        closeModalButton.addEventListener("click", function() {
            welcomeModal.style.display = "none";
        });

        // Select the skills list

        const skillsList = document.getElementById("skillsList");

        // Loop through the array and display each skill

        skills.forEach(function(skill) {

            const listItem = document.createElement("li");

            listItem.textContent = skill;

            skillsList.appendChild(listItem);

        });


        // Create a new paragraph
        const thankYou = document.createElement("p");

        // Set the message
        thankYou.textContent = "Thanks for visiting my portfolio!";

        // Select the contact form
        const contactSection = document.querySelector("#contactForm");

        // Delay adding the message
        setTimeout(function() {

            contactSection.appendChild(thankYou);

        }, 2500); 

        //MODIFYING EXISTING ELEMENT

        // Select an existing element
        let section = document.querySelector("#about");

        // Select another existing element
        let heading = document.querySelector("h1");

        // Add a mouseover event listener
        section.addEventListener("mouseover", function() {

            // Change the section's background color
            section.style.backgroundColor = "lightblue";

        });

        // Add a mouseout event listener
        section.addEventListener("mouseout", function() {

        // Restore the original background color
        section.style.backgroundColor = "";

        });

    //ADDING PROJECTS DYNAMICALLY

        // Create objects containing project information

        const projectOne = {
            title: "JotPlan",
            summary: "A simple mobile application for task management.",
            image: "https://placehold.co/400x250/007b8a/ffffff?text=JotPlan",
            repository: "https://github.com/camdea123/JotPlan-Repo---SDC340"
        };

        const projectTwo = {
            title: "Weigh Out There",
            summary: "An application that calculates weight on different planets.",
            image: "https://placehold.co/400x250/444444/ffffff?text=Weigh+Out+There",
            repository: "https://github.com/camdea123/Weigh_Out_There"
        };

        /*const projectThree = {
            title: "Project Three",
            summary: "A new project currently in development. Check back soon!",
            image: "https://placehold.co/400x250/00bcd4/ffffff?text=Coming+Soon",
            repository: "https://github.com/"
        };*/

        // Store all project objects inside an array

        const projects = [
            projectOne,
            projectTwo,
            //projectThree
        ];
        // DYNAMICALLY DISPLAY PROJECTS

        // Select the projects section

        const projectSection = document.querySelector(".projects");

        // Loop through the stored project array

        projects.forEach(function(project) {

                // Create a container for each project

                const projectCard = document.createElement("div");

                projectCard.classList.add("project");

                // Create the repository link

                const projectLink = document.createElement("a");

                projectLink.href = project.repository;

                projectLink.target = "_blank";

                // Create the project image

                const projectImage = document.createElement("img");

                projectImage.src = project.image;

                projectImage.alt = project.title;

                // Add the image to the link

                projectLink.appendChild(projectImage);

                // Create the project title

                const projectTitle = document.createElement("h3");

                projectTitle.textContent = project.title;

                // Create the project summary

                const projectSummary = document.createElement("p");

                projectSummary.textContent = project.summary;

                // Add all elements to the project card

                projectCard.appendChild(projectLink);

                projectCard.appendChild(projectTitle);

                projectCard.appendChild(projectSummary);

                // Add the completed card to the projects section

                projectSection.appendChild(projectCard);

        });

//////////////////////////////////////////////////


        // FEATURED CONTENT CONDITIONAL STATEMENT

        // Count the projects in the Projects section

        const projectCount =
            document.querySelectorAll("#projects .project").length;

        // Select both Featured Content div elements

        const universityResources =
            document.getElementById("universityResources");

        const personalResources =
            document.getElementById("personalResources");

        // Determine which resources should appear

        if (projectCount < 3) {

            universityResources.style.display = "block";

            personalResources.style.display = "block";

        } else {

            personalResources.style.display = "block";

            universityResources.style.display = "none";

        }


        // DARK MODE TOGGLE

        const darkModeToggle =
            document.getElementById("darkModeToggle");

        darkModeToggle.addEventListener("change", function() {

            if (darkModeToggle.checked) {

                document.body.classList.add("dark-mode");

            } else {

                document.body.classList.remove("dark-mode");

            }

        });


        // CONTACT FORM SUBMIT BUTTON INTERACTION

        const submitButton =
            document.querySelector("#submitButton");

        const contactForm =
            document.getElementById("contactForm");

        const formMessage = 
            document.getElementById("formMessage");

        submitButton.addEventListener("click", function(event) {

            // Prevent the page from refreshing

            event.preventDefault();

            // Check that all required fields are valid

            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();

                return;

            }

            // Get the sender's name

            const senderName =
                document.getElementById("senderName").value;

            // Display loading message
            formMessage.textContent = "Sending message...";

            //Delay and then show confirmation message
            setTimeout(function() {
                formMessage.textContent =
                    "Thank you, " + senderName + ", for your message! I will get back to you ASAP.";
            }, 1500);
            // Clear the form after confirmation

            contactForm.reset();

        });

        //DARK MODE TOGGLE WITH LOCAL STORAGE
        

        // Check for previously saved preference
        const savedDarkMode = localStorage.getItem("darkMode");

        // Apply dark mode if previously enabled
        if (savedDarkMode === "enabled") {

            document.body.classList.add("dark-mode");

            darkModeToggle.checked = true;

        }

        // Listen for changes to the checkbox
        darkModeToggle.addEventListener("change", function() {

            if (darkModeToggle.checked) {

                document.body.classList.add("dark-mode");

                localStorage.setItem("darkMode", "enabled");

            } else {

                document.body.classList.remove("dark-mode");

                localStorage.setItem("darkMode", "disabled");

            }

        });
        