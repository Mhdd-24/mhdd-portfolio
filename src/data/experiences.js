import samsung from "../assets/images/samsung.png";
import venmurasu from "../assets/images/venmurasu.jpg";
import ibm from "../assets/images/ibm.jpg";
import bajajfinserv from "../assets/images/bajajfinserv.png";

import { blue, skyBlue, black, yellow } from "../utils";

export const experiences = [
  {
    logo: bajajfinserv,
    name: "Bajaj Finserv",
    joined: "Jul'23",
    end: "Present",
    title: "Senior Software Engineer",
    bio: "Engineered a PWA-Android communication bridge for real-time data sync, designed a CI/CD pipeline that cut manual intervention by 60%, led the SalesOne App migration to a PWA for 70,000+ users, developed a Fintech app with 70M+ downloads optimizing load times by 25%, and created an AI chatbot for banking to enhance customer engagement.",
    color: blue,
  },
  {
    logo: ibm,
    name: "IBM",
    joined: "Jul'21",
    end: "Dec'22",
    title: "Internship",
    bio: "Designed and implemented intelligent query resolution for instant customer responses, reducing support tickets and wait times; enhanced engagement with NLP-driven conversational AI for seamless banking queries; optimized chatbot performance with continuous learning; and engineered a scalable architecture for easy integration with banking services.",
    color: skyBlue,
  },
  {
    logo: samsung,
    name: "Samsung",
    joined: "Jul'21",
    end: "Apr'22",
    title: "Internship",
    bio: "Led the development of an AI-powered application categorization system using GloVe and FastText, achieving 91% accuracy; optimized model performance with advanced data analysis, implemented automated workflows to enhance efficiency, and fine-tuned models for faster, more accurate real-time categorization.",
    color: black,
  },
  {
    logo: venmurasu,
    name: "VPT.ai",
    joined: "Dec'21",
    end: "May'22",
    title: "Team Member",
    bio: "Developed 98% accurate Tamil OCR model (Tesseract + Leptonica) forconverting ancient Tamil book text to editable documents using cosinesimilarity for evaluation.",
    color: yellow,
  },
];
