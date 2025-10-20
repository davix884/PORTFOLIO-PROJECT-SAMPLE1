// ScrollReveal is an external script and can usually run immediately
ScrollReveal().reveal('.reveal', {
    distance: '60px',
    duration: 1500,
    delay: 200,
    origin: 'bottom',
    easing: 'ease',
    reset: false
});

// CRITICAL FIX: Wait for the entire page (DOM) to load before
// trying to find and assign event listeners to the modal elements.
document.addEventListener('DOMContentLoaded', function() {
    
    // ------------------------------------
    // NEW MODAL CONTROLS
    // ------------------------------------
    const backdrop = document.getElementById("modalBackdrop");
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const forgotModal = document.getElementById("forgotPasswordModal");

    // *Error Check: If any critical element is missing, log an error.
    if (!backdrop || !loginModal || !signupModal || !forgotModal) {
        console.error("CRITICAL ERROR: One or more modal elements are missing. Ensure your HTML IDs are correct (modalBackdrop, loginModal, signupModal, forgotPasswordModal).");
        return; 
    }

    // Helper function to show a specific modal
    function showModal(modalElement) {
        backdrop.style.display = "block";
        loginModal.style.display = "none";
        signupModal.style.display = "none";
        forgotModal.style.display = "none";
        modalElement.style.display = "block";
    }

    // Function to close all modals and the backdrop
    function closeAllModals() {
        backdrop.style.display = "none";
        loginModal.style.display = "none";
        signupModal.style.display = "none";
        forgotModal.style.display = "none";
    }

    // 1. Initial Login Button Click
    const openLoginButton = document.getElementById("openLogin");
    if (openLoginButton) {
        openLoginButton.onclick = () => showModal(loginModal);
    }

    // 2. Switching from Login
    const showSignupLink = document.getElementById("showSignup");
    if (showSignupLink) {
        showSignupLink.onclick = (e) => {
            e.preventDefault();
            showModal(signupModal);
        };
    }

    const showForgotLink = document.getElementById("showForgot");
    if (showForgotLink) {
        showForgotLink.onclick = (e) => {
            e.preventDefault();
            showModal(forgotModal);
        };
    }

    // 3. Switching from Forgot/Signup (back to Login)
    const showLoginFromForgotLink = document.getElementById("showLoginFromForgot");
    if (showLoginFromForgotLink) {
        showLoginFromForgotLink.onclick = (e) => {
            e.preventDefault();
            showModal(loginModal);
        };
    }

    const showLoginFromSignupLink = document.getElementById("showLoginFromSignup");
    if (showLoginFromSignupLink) {
        showLoginFromSignupLink.onclick = (e) => {
            e.preventDefault();
            showModal(loginModal);
        };
    }
    
    // 4. Close modal when clicking outside of it (on the backdrop)
    backdrop.onclick = (e) => {
        if (e.target === backdrop) {
            closeAllModals();
        }
    };

    // 5. Password Validation on Signup Form Submission
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
         signupForm.onsubmit = (e) => {
            const pass = document.getElementById("signupPassword").value;
            const confirm = document.getElementById("confirmPassword").value;

            if (pass !== confirm) {
                alert("Passwords do not match!");
                e.preventDefault(); // Stop form submission
                return false;
            }

            // Demonstration alert
            alert("Registration Successful (Demonstration). Passwords match!");
            // e.preventDefault(); // Uncomment this line if you want to prevent the page from reloading.
        };
    }
}); // End of DOMContentLoaded