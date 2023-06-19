import React from "react";

const Faq = () => {
  const faqs = [
    {
      q: "Is the workshop certified?",
      a: "Yes, the workshop is certified. Participants will receive a certificate of completion upon successfully attending and completing the workshop.",
    },
    {
      q: "What should I be prepared with before the workshop starts?",
      a: "Before the workshop starts, it is recommended to have a stable internet connection, a device (computer or laptop) with a webcam and microphone, and any necessary software or tools as communicated by the organisers. It's also helpful to have a notebook and pen for taking notes during the session.",
    },
    {
      q: "When is the workshop?",
      a: "The workshop is scheduled for Wednesday, May 24, 2023 at 2.00 pm.",
    },
    {
      q: "Can AI tools replace human creativity?",
      a: "AI tools are powerful assistants that can enhance creativity, but they are not intended to replace human creativity. Instead, they can provide inspiration, generate ideas, and assist in creative processes.",
    },
    {
      q: "Are these AI tools accessible to non-programmers?",
      a: "Yes, many AI tools are designed to be user-friendly and do not require programming knowledge. The webinar will highlight user-friendly AI tools that can be utilized by non-programmers.",
    },
    {
      q: "Will there be practical demonstrations during the webinar?",
      a: "Yes, the webinar will include practical demonstrations to showcase the capabilities and functionalities of AI tools, allowing participants to observe their usage in action.",
    },
    {
      q: "Do I need any prior knowledge or technical expertise to attend this webinar?",
      a: "No, this webinar is designed for both beginners and individuals with technical backgrounds. The content will be presented in a way that is accessible to all participants.",
    },
    {
      q: `I made the payment but didn't receive any email.`,
      a: "Please write to us at support@geeksofgurukul.com. Our awesome support team will get back to you as soon as possible.",
    },
    {
      q: "Will there be opportunities for interactive participation, such as asking que or engaging in discussions?",
      a: "Yes, absolutely! The webinar will provide opportunities for interactive participation, including asking questions. There will be a Q&A session at the end of the webinar.  We value your input and encourage active participation from all attendees.",
    },
    {
      q: "Is there a limit on the number of questions I can ask during the Q&A session?",
      a: "No, there is no limit on the number of questions you can ask during the Q&A session. We encourage active participation and value your curiosity.",
    },
  ];
  return (
    <div className='md:w-9/12 my-[120px] mx-[30px] md:mx-auto'>
      <h3 className='text-center md:text-[36px]  text-[25px] font-medium text-transparent bg-clip-text text-gradient bg-gradient-to-r from-[#4BA25D] via-[#3DA5BD] to-[#905BEC] mb-[80px] '>

        Frequently Asked Questions
      </h3>
      <div className='join join-vertical w-full'>
        {faqs?.map((faq, i) => (
          <div key={i} className='collapse collapse-arrow join-item'>

            <input type='radio' name='my-accordion-4'/>
            <div className='collapse-title text-[15px] md:text-[18px] font-medium dark:text-white'>

              {faq?.q}
            </div>
            <div className='collapse-content'>
              <p className='text-[#98A2B3] text-[14px] md:text-[16px]'>
                {faq?.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
