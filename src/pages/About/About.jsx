import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import psg from "../../assets/images/psg.jpg";
import spc from "../../assets/images/spc.jpg";
import mms from "../../assets/images/mms.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
            Full-Stack .NET Developer with 3+ years of experience in building scalable, cloud-native applications using .NET Core, Microservices, Angular, SQL, and NoSQL.
            <br />
            Skilled in architecting robust solutions and leading large-scale migrations, including transitioning a native mobile app to a PWA for over 70,000 users.
            <br />
            Passionate about solving complex challenges and ensuring long-term scalability. Strong communicator, adept at collaborating with both technical and business teams.
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "PSG College of Technology, Coimbatore",
                p: "Bachelors of Information Technology (2019-2023)",
                image: psg,
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Sankar Polytechnic College, Tirunelveli",
                p: "Diploma Computer Science (2017-2019)",
                image: spc,
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "Meenakshi Matriculation Higher Secondary School, Tirunelveli",
                p: "Secondary Education (2007-2017)",
                image: mms,
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
