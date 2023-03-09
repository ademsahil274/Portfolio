import React from 'react';

function Contact() {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
           
        </div>
    );
}

<section id="form-section">
      <div class="container">
        <h2>Contact Me</h2>
        <form action="action_page.php">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lastname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="email">Email</label>
          <input 
          type="text" id="email" name="Email" placeholder="Your Email Adress" /> 

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style="height: 200px"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>

export default Contact;