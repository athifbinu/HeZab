import React from "react";
import backgroundImg from "../assets/Images/background.jpg";
import Thoughts from "../Components/Thoughts";
import Count from "../Components/Count";
import Practictice from "../Components/Practictice";
import Atormenys from "../Components/Atormenys";
import ContactForm from "../Components/ContactForm";
import ContactbackgoundImg from "../assets/Images/andreas-m-Ek3-ORVnI0A-unsplash.jpg";
import Globel from "../Components/Globel";
const Home = () => {
  return (
    <div>
       <section>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="text-center">
          <h1 className=" text-5xl font-bold text-black mb-4 " style={{marginTop:"-138px"}}>
            JUSTICE, EXPERTISE, <br /> <br />
            DEDICATION
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo <br />
            exercitationem autem, error officia sunt tempore dolores
          </p>
        </div>
      </div>
    </section>

      <section>
        <Thoughts />
      </section>

      <section className="mb-10">
        <Count />
      </section>

      <section className="mb-7">
        <Practictice />
      </section>

      <section>
        <Atormenys />
      </section>

      <section className="mb-7">
        <ContactForm />
      </section>

      <section>
        <Globel/>
      </section>
    </div>
  );
};

export default Home;
