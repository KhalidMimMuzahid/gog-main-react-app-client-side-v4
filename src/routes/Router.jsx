import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Parent from "../Layout/Parent/Parent";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import HireFromUs from "../Pages/HireFromUs/HireFromUs";
import CoursesDefault from "../Pages/Courses/CoursesDefault/CoursesDefault";
import Super30 from "../Pages/Courses/Super30/Super30";
import AdmissionForm from "../Pages/AdmissionForm/AdmissionForm";
import Additionals from "../Pages/Additionals/Additionals";
import Webinar from "../Pages/Additionals/Webinar/Webinar";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ChampsOfBasicCoding from "../Pages/Courses/SpecificCourses/ChampsOfBasicCoding";
import Alumni from "../Pages/Alumni/Alumni";
import ReferAndEarn from "../Pages/ReferAndEarn/ReferAndEarn";
import Faq from "../Pages/Faq/Faq";
import Careers from "../Pages/Careers/Careers";
import RefundPolicy from "../Pages/RefundPolicy/RefundPolicy";
import OurTeam from "../Pages/OurTeam/OurTeam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent />,
    errorElement: <h1>this is 404 page</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/admission-form",
        element: <AdmissionForm />,
      },
      {
        path: "/courses",
        element: <Courses />,
        children: [
          {
            path: "/courses",
            element: <CoursesDefault />,
          },
          {
            path: "/courses/champs-of-basic-coding",
            element: <ChampsOfBasicCoding />,
          },
          {
            path: "/courses/super-30",
            element: <Super30 />,
          },
        ],
      },
      {
        path: "/hire-from-us",
        element: <HireFromUs />,
      },
      {
        path: "/alumni",
        element: <Alumni/>
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/refer-earn",
        element: <ReferAndEarn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/additionals",
        element: <Additionals />,
        children: [
          {
            path: "/additionals/webinar",
            element: <Webinar />,
          },
        ],
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
    ],
  },
]);

export default router;
