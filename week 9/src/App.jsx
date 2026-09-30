import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      symptoms: "",
    });

    setSubmitted(false);
  };

  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          🏥 MediCare
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#appointment">Appointment</a>
        </div>

        <a href="#appointment" className="nav-button">
          Book Appointment
        </a>
      </nav>


      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="welcome">
            WELCOME TO MEDICARE
          </p>

          <h1>
            Your Health,
            <br />
            <span>Our Priority.</span>
          </h1>

          <p className="hero-text">
            Quality healthcare made simple. Book an appointment
            with our experienced doctors and take the first step
            towards a healthier life.
          </p>

          <div className="hero-buttons">
            <a href="#appointment" className="primary-button">
              Book Appointment
            </a>

            <a href="#services" className="secondary-button">
              Our Services
            </a>
          </div>

        </div>


        <div className="hero-card">

          <div className="doctor-icon">
            👨‍⚕️
          </div>

          <h2>Professional Care</h2>

          <p>
            Experienced doctors and modern healthcare
            facilities for you and your family.
          </p>

          <div className="card-info">
            <div>
              <strong>24/7</strong>
              <span>Emergency</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Doctors</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Patients</span>
            </div>
          </div>

        </div>

      </section>


      {/* Services Section */}
      <section className="services" id="services">

        <div className="section-heading">

          <p>OUR SERVICES</p>

          <h2>Healthcare You Can Trust</h2>

          <span>
            We provide quality medical services for every stage of life.
          </span>

        </div>


        <div className="service-container">

          <div className="service-card">
            <div className="service-icon">🫀</div>

            <h3>Cardiology</h3>

            <p>
              Complete heart care with experienced
              cardiologists and modern facilities.
            </p>
          </div>


          <div className="service-card">
            <div className="service-icon">🧠</div>

            <h3>Neurology</h3>

            <p>
              Specialized diagnosis and treatment
              for neurological conditions.
            </p>
          </div>


          <div className="service-card">
            <div className="service-icon">🦴</div>

            <h3>Orthopedics</h3>

            <p>
              Expert treatment for bones, joints,
              muscles and movement-related problems.
            </p>
          </div>


          <div className="service-card">
            <div className="service-icon">👶</div>

            <h3>Pediatrics</h3>

            <p>
              Professional healthcare services
              specially designed for children.
            </p>
          </div>

        </div>

      </section>


      {/* Doctors Section */}
      <section className="doctors" id="doctors">

        <div className="section-heading">

          <p>OUR SPECIALISTS</p>

          <h2>Meet Our Doctors</h2>

          <span>
            Experienced professionals dedicated to your health.
          </span>

        </div>


        <div className="doctor-container">

          <div className="doctor-card">

            <div className="doctor-image">
              👨‍⚕️
            </div>

            <h3>Dr. Rahul Sharma</h3>

            <p>Cardiologist</p>

            <span>15+ Years Experience</span>

          </div>


          <div className="doctor-card">

            <div className="doctor-image">
              👩‍⚕️
            </div>

            <h3>Dr. Priya Reddy</h3>

            <p>Neurologist</p>

            <span>12+ Years Experience</span>

          </div>


          <div className="doctor-card">

            <div className="doctor-image">
              👨‍⚕️
            </div>

            <h3>Dr. Arjun Kumar</h3>

            <p>Orthopedic Specialist</p>

            <span>10+ Years Experience</span>

          </div>

        </div>

      </section>


      {/* Appointment Section */}
      <section className="appointment-section" id="appointment">

        <div className="appointment-container">

          <div className="appointment-heading">

            <p>BOOK YOUR VISIT</p>

            <h2>Patient Registration</h2>

            <span>
              Fill in your details to schedule an appointment
              with one of our specialists.
            </span>

          </div>


          {submitted ? (

            /* Success Message */

            <div className="success-box">

              <div className="success-icon">
                ✓
              </div>

              <h2>Appointment Confirmed!</h2>

              <p>
                Thank you, <strong>{formData.name}</strong>.
              </p>

              <p>
                Your appointment request has been successfully
                registered.
              </p>

              <div className="appointment-details">

                <p>
                  <strong>Doctor:</strong>{" "}
                  {formData.doctor}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {formData.date}
                </p>

                <p>
                  <strong>Time:</strong>{" "}
                  {formData.time}
                </p>

                <p>
                  <strong>Department:</strong>{" "}
                  {formData.department}
                </p>

              </div>

              <button
                className="reset-button"
                onClick={handleReset}
              >
                Book Another Appointment
              </button>

            </div>

          ) : (

            /* Registration Form */

            <form
              className="appointment-form"
              onSubmit={handleSubmit}
            >

              {/* Row 1 */}

              <div className="form-row">

                <div className="input-group">

                  <label>Patient Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="input-group">

                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Row 2 */}

              <div className="form-row">

                <div className="input-group">

                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="input-group">

                  <label>Age</label>

                  <input
                    type="number"
                    name="age"
                    placeholder="Enter age"
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Row 3 */}

              <div className="form-row">

                <div className="input-group">

                  <label>Gender</label>

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select Gender
                    </option>

                    <option value="Male">
                      Male
                    </option>

                    <option value="Female">
                      Female
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                <div className="input-group">

                  <label>Department</label>

                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select Department
                    </option>

                    <option value="Cardiology">
                      Cardiology
                    </option>

                    <option value="Neurology">
                      Neurology
                    </option>

                    <option value="Orthopedics">
                      Orthopedics
                    </option>

                    <option value="Pediatrics">
                      Pediatrics
                    </option>

                    <option value="Dermatology">
                      Dermatology
                    </option>

                  </select>

                </div>

              </div>


              {/* Row 4 */}

              <div className="form-row">

                <div className="input-group">

                  <label>Select Doctor</label>

                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select Doctor
                    </option>

                    <option value="Dr. Rahul Sharma">
                      Dr. Rahul Sharma
                    </option>

                    <option value="Dr. Priya Reddy">
                      Dr. Priya Reddy
                    </option>

                    <option value="Dr. Arjun Kumar">
                      Dr. Arjun Kumar
                    </option>

                  </select>

                </div>


                <div className="input-group">

                  <label>Appointment Date</label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Row 5 */}

              <div className="form-row">

                <div className="input-group">

                  <label>Preferred Time</label>

                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select Time
                    </option>

                    <option value="09:00 AM">
                      09:00 AM
                    </option>

                    <option value="10:00 AM">
                      10:00 AM
                    </option>

                    <option value="11:00 AM">
                      11:00 AM
                    </option>

                    <option value="02:00 PM">
                      02:00 PM
                    </option>

                    <option value="03:00 PM">
                      03:00 PM
                    </option>

                    <option value="05:00 PM">
                      05:00 PM
                    </option>

                  </select>

                </div>


                <div className="input-group">

                  <label>Symptoms</label>

                  <input
                    type="text"
                    name="symptoms"
                    placeholder="Briefly describe your symptoms"
                    value={formData.symptoms}
                    onChange={handleChange}
                  />

                </div>

              </div>


              {/* Terms */}

              <div className="terms">

                <input
                  type="checkbox"
                  required
                />

                <span>
                  I confirm that the information provided
                  above is correct.
                </span>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="submit-button"
              >
                Confirm Appointment →
              </button>

            </form>

          )}

        </div>

      </section>


      {/* Footer */}

      <footer>

        <div className="footer-logo">
          🏥 MediCare
        </div>

        <p>
          Quality healthcare for you and your family.
        </p>

        <div className="contact-info">
          📧 medicare@example.com &nbsp;&nbsp;
          📞 +91 98765 43210
        </div>

        <p className="copyright">
          © 2026 MediCare Hospital. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;