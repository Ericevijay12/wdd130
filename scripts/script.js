/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
}

html {
  scroll-behavior: smooth;
}

/* Header and Navigation */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.logo h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
}

.logo span {
  color: #4caf50;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.nav-links a:hover, .nav-links .active {
  color: #4caf50;
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px;
  transition: all 0.3s ease;
}

/* Main element with width limit */
main {
  width: 80%;
  margin: 0 auto;
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1580547060358-1bea34cb503d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnZXJpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60');
  background-size: cover;
  background-position: center;
  color: #fff;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.hero h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 400;
}

.btn {
  display: inline-block;
  background-color: #4caf50;
  color: #fff;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #45a049;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* About Section */
.about {
  padding: 5rem 5% 3rem;
}

.profile-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.profile-image {
  flex: 1;
  min-width: 300px;
  text-align: center;
}

/* Modified to be more specific for main images */
main img {
  width: 150px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #4caf50;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.profile {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #4caf50;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.profile:hover {
  transform: scale(1.05);
}

.profile-text {
  flex: 2;
  min-width: 300px;
}

.profile-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  position: relative;
}

.profile-text h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 4px;
  background-color: #4caf50;
}

.profile-text h3 {
  font-size: 1.8rem;
  margin: 1.5rem 0 1rem;
  color: #4caf50;
}

/* Modified paragraph padding to 0 */
p {
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.country-facts {
  list-style: none;
  margin: 1.5rem 0;
}

.country-facts li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

.country-facts i {
  color: #4caf50;
  margin-right: 10px;
}

/* Contact Section */
.contact {
  padding: 3rem 5%;
  background-color: #f1f1f1;
  text-align: center;
}

.contact h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
}

.form-group textarea {
  height: 150px;
  resize: vertical;
}

/* Added aside styling */
aside {
  width: 80%;
  margin: 2rem auto;
  border: 1px solid #4caf50;
  padding: 2rem;
  background-color: #f1f8e9;
  color: #333;
}

/* Added styling for image inside aside */
aside img {
  width: 200px;
  height: auto;
  display: block;
  margin: 1rem 0;
}

/* Modified footer styling */
footer {
  background-color: #333;
  color: #fff;
  padding: 2rem 5%;
  text-align: center;
  margin-top: 2rem;
  border-top: 5px solid #4caf50;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-social {
  margin-bottom: 1.5rem;
}

.footer-social a {
  color: #fff;
  font-size: 1.5rem;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.footer-social a:hover {
  color: #4caf50;
}

footer p {
  margin-bottom: 0.5rem;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .nav-links {
    position: absolute;
    right: 0;
    height: calc(100vh - 70px);
    top: 70px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
  }

  .nav-links li {
    opacity: 0;
    margin: 1.5rem 0;
  }

  .burger {
    display: block;
  }

  .nav-active {
    transform: translateX(0%);
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero h3 {
    font-size: 1.2rem;
  }

  .profile-container {
    flex-direction: column;
  }

  .profile-text h2 {
    font-size: 2rem;
  }

  .profile-text h3 {
    font-size: 1.5rem;
  }
}

/* Animation for nav items */
@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
