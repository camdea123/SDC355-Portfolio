        // Ask the visitor for their name
        let userName = prompt("What is your name?");

        // Update the welcome message
        if (userName && userName.trim() !== "") {
            document.getElementById("welcomeMessage").textContent =
                "Welcome, " + userName.trim() + "! Thanks for visiting my portfolio.";
        } else {
            document.getElementById("welcomeMessage").textContent =
                "Welcome to my personal portfolio!";
        }
       const skills = [
            "C",
            "C++",
            "C#",
            "JavaScript",
            "HTML",
            "Responsive Web Design"
        ];

        // Select the skills list

        const skillsList = document.getElementById("skillsList");

        // Loop through the array and display each skill

        skills.forEach(function(skill) {

            const listItem = document.createElement("li");

            listItem.textContent = skill;

            skillsList.appendChild(listItem);

        });


        // 3. FEATURED CONTENT CONDITIONAL STATEMENT

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


        // 4. DARK MODE TOGGLE

        const darkModeToggle =
            document.getElementById("darkModeToggle");

        darkModeToggle.addEventListener("change", function() {

            if (darkModeToggle.checked) {

                document.body.classList.add("dark-mode");

            } else {

                document.body.classList.remove("dark-mode");

            }

        });


        // 5. CONTACT FORM SUBMIT BUTTON INTERACTION

        const submitButton =
            document.querySelector("#submitButton");

        const contactForm =
            document.getElementById("contactForm");

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

            // Display a personalized confirmation

            alert(
                "Thank you, " + senderName +
                ", your message has been sent!"
            );

            // Clear the form after confirmation

            contactForm.reset();

        });