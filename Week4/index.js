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
        