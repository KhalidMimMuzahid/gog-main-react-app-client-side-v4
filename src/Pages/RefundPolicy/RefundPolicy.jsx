import React from "react";

function RefundPolicy() {
  return (
    <div className="px-[20px] md:px-[115px] text-[#101010] dark:text-white my-10">
      <h1 className="mb-5 text-center font-semibold text-[24px] md:text-[36px] text-transparent bg-clip-text text-gradient bg-gradient-to-br from-[#4BA25D] via-[#3DA5BD] to-[#905BEC]">
        Refund Policy
      </h1>
      <div className="text-[14px] md:text-[16px]">
        Thank you for purchasing one of our courses. We make certain that our
        users have a rewarding experience while discovering, evaluating, and
        purchasing our courses.
        <br />
        <br />
        As with any online purchase experience, there are terms and conditions
        that govern the Refund Policy. When you buy a course on Skillscan Edtech
        India Private Limited (Geeks of Gurukul), you agree to our Privacy
        Policy, Terms of Use, and refund policy.
        <br />
        <br />
        Submit a refund request within 7 days of purchasing the course. If a
        participant has accessed more than 25% of any course's content, has
        attended Online Classes, or has received recordings for more than one
        day, the money-back guarantee is null and void.
        <br />
        <br />
        <span className="text-[20px] font-medium">Refunds: </span>Online Courses
        We provide a 100% refund for our online courses if the request is raised
        within 7 days of the batch start date. Post 7 days of batch start, fees
        are not refundable under any circumstances.
        <br />
        <br />
        To claim a “7-days no question asked” refund, kindly follow the below
        procedure:
        <ol className="flex flex-col gap-5">
          <li>
            1. Send an email with the subject "Online course refund with
            Registered email id" to: support@geeksofgurukul.com (Remember to
            include the registered email address in the subject.)
          </li>
          <li>
            2. Give a valid reason for the refund. [for our internal purpose
            only]
          </li>
          <li>
            3. Ensure that the email is received within six days of the batch
            start date. The refund will be processed within 30 working days of
            receiving the refund email.
          </li>
        </ol>
        <br />
        <br />
        <p className="text-[20px] font-medium">For the Duplicate Payment:</p>
        The refund for the duplicate payment made by the delegate will be
        processed via the same source (original method of payment) within 15
        working days of the customer's notification.
        <br />
        <br />
        <span className="text-[20px] font-medium">Note: </span>All refunds will
        be processed within 30 working days after the refund request is approved
        by Skillscan Edtech India Private Limited.
      </div>
    </div>
  );
}

export default RefundPolicy;
