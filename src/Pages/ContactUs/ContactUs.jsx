import React from "react";
import badge from "../../assets/Contact-Us/Badge.svg";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const ContactUs = {
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      message: data?.message,
      accepted: data.accepted,
    };
    console.log("Contact US Info :", ContactUs);
    reset();
  };

  return (
    <div className='p-5 md:p-10'>
      <div className='grid grid-cols-12'>
        <div className='col-span-full md:col-span-6 ml-4'>
          <h1 className='text-[28px] md:text-[38px] text-[Black] dark:text-white font-semibold'>
            Get in <span className='text-[#37ED81]'>touch</span> <br /> with us
          </h1>
          <div className='my-20'>
            <div className='flex flex-col items-start justify-center font-medium dark:text-white'>
              <div className='flex items-center gap-4'>
                <img src={badge} alt='badge' />
                <p>Trusted by thousands of learners worldwide.</p>
              </div>
              <div className='flex items-center gap-4'>
                <img src={badge} alt='badge' />
                <p>Expertly curated courses led by industry professionals.</p>
              </div>
              <div className='flex items-center gap-4'>
                <img src={badge} alt='badge' />
                <p>
                  Cutting-edge technology for an immersive learning experience
                </p>
              </div>
              <div className='flex items-center gap-4'>
                <img src={badge} alt='badge' />
                <p>Continuous updates to keep pace with industry trends.</p>
              </div>
              <div className='flex items-center gap-4'>
                <img src={badge} alt='badge' />
                <p>Privacy and security of your data are our top priorities</p>
              </div>
            </div>
          </div>
          <div className='ml-4 font-medium dark:text-white'>
            <p>
              Over <span className='text-[#4BA25D]'>200+ student</span> have
              enrolled with Geeks of Gurukul
            </p>
          </div>
        </div>
        <div className='col-span-full md:col-span-6 p-10 my-10 md:my-0 bg-[#D1FFD0] dark:bg-[#1C202A] dark:text-white rounded-[40px] border dark:border-[#8A8F98]'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full flex flex-col items-start justify-start gap-[24px]'>
              <div className='w-full'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  placeholder='Enter Your Name'
                  name='name'
                  {...register("name", { required: "Enter Your Name" })}
                  aria-invalid={errors.name ? "true" : "false"}
                  className='w-full px-[14px] py-[10px] bg-white dark:bg-[#8A8F98] text-black dark:text-white dark:placeholder:text-white rounded-[8px] dark:border-white hover:border-[green] '
                />
                {errors.name && (
                  <p role='alert' className='text-red-600'>
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className='w-full'>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='email'
                  placeholder='Enter Your Email'
                  name='email'
                  {...register("email", { required: "Enter Your Email" })}
                  aria-invalid={errors.name ? "true" : "false"}
                  className='w-full px-[14px] py-[10px] bg-white dark:bg-[#8A8F98] text-black dark:text-white dark:placeholder:text-white rounded-[8px] dark:border-white hover:border-[green] '
                />
                {errors.name && (
                  <p role='alert' className='text-red-600'>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className='w-full'>
                <label htmlFor='phone'>Phone Number</label>
                <input
                  type='tel'
                  placeholder='Enter Phone Number'
                  name='phone'
                  {...register("phone", {
                    required: "Enter Your Pnone Number",
                  })}
                  aria-invalid={errors.phone ? "true" : "false"}
                  className='w-full px-[14px] py-[10px] bg-white dark:bg-[#8A8F98] text-black dark:text-white dark:placeholder:text-white rounded-[8px] dark:border-white hover:border-[#06b906] '
                />
                {errors.phone && (
                  <p role='alert' className='text-red-600'>
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className='w-full'>
                <label htmlFor='message'>Your Message</label>
                <textarea
                  type='text'
                  placeholder='Your Message'
                  name='message'
                  {...register("message", {
                    required: "Enter Your Pnone Number",
                  })}
                  aria-invalid={errors.message ? "true" : "false"}
                  className='w-full px-[14px] py-[10px] bg-white dark:bg-[#8A8F98] text-black dark:text-white dark:placeholder:text-white rounded-[8px] dark:border-white hover:border-[green] '
                />
                {errors.message && (
                  <p role='alert' className='text-red-600'>
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className='flex gap-4'>
                <input
                  type='radio'
                  name='accepted'
                  id='accepted'
                  {...register("accepted", {
                    required: "Accept Terms and condition",
                  })}
                  className='w-12 bg-green-600'
                  aria-invalid={errors.accepted ? "true" : "false"}
                />
                <p className='text-justify text-[14px]'>
                  I authorize Geeks of Gurukul and its representative to contact
                  me with updates and notifications via Email, SMS, Whatsapp,
                  and Call.
                </p>
              </div>
              <input
                type='submit'
                className='w-full border py-6 text-white bg-[#00A3FF] rounded-[25px] hover:transition hover:duration-5000 hover:ease-in-out hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
