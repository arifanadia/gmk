import PropTypes from "prop-types";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const FormContent = ({ data }) => {
  const customForm = data?.customForm;
  // const [formData, setFormData] = useState({
  //   name: "",
  //   surname: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const { name, email, message, surname } = formData;

  //   if (!name || !email || !message || !surname) {
  //     toast.error("Please fill in all fields.");
  //     return;
  //   }

  //   try {
  //     const result = await emailjs.send(
  //       import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
  //       import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
  //       {...formData},
  //       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  //     );

  //     toast.success("Email sent successfully");

  //     // Send the auto-reply to the user with dynamic reply_to field
  //     const autoReplyResult = await emailjs.send(
  //       import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
  //       import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID, // Auto-reply template ID
  //       {
  //         name,
  //         email,
  //         message,
  //       },
  //       import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Public Key
  //       { reply_to: email } // Dynamically set the reply_to field to user's email
  //     );
  //     toast.success("auto-reply sent successfully");
  //   } catch (error) {
  //     toast.error("Error sending email");
  //   }
  // };


  return (
    <div id="contact" className="flex flex-col lg:flex-row relative lg:static">
      {/* Image Section */}
      <div
        className="bg-cover lg:bg-center flex lg:items-center lg:max-w-[600px] xl:max-w-[1093px] lg:min-h-screen -mt-72 lg:mt-0"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      >
        <section className="px-5 py-[150px] -mt-12 md:px-28 lg:my-20 flex items-center font-actor">
          <div className="flex justify-between items-center">
            {data?.addressForm && (
              <div className="text-left">
                <h4 className="font-medium text-xl lg:text-2xl text-primaryText">
                  {data?.addressForm?.title}
                </h4>
                <p className="text-lg lg:text-xl text-primaryText pb-2">
                  {data?.addressForm?.description}
                </p>
                <input
                  placeholder={
                    data.addressForm.placeholder || "Enter your address"
                  }
                  className="rounded-md w-full px-3 py-1"
                />
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Form Section */}
      <div className="px-4 flex-1 md:flex items-center justify-center bg-slate-50 lg:min-h-screen absolute lg:static -bottom-72 md:-bottom-80 w-full">
        {customForm && (
          <form onSubmit={handleSubmit} className="my-6 md:pt-0 mt-2">
            <h1 className="text-2xl lg:text-3xl text-center pb-5 text-formTitle w-2/3 mx-auto font-tiltWarp">
              {customForm.title}
            </h1>
            {customForm.formFields && (
              <div className="mx-auto space-y-4 border p-5 font-actor mb-10 lg:mb-0">
                <div className="flex lg:flex-col gap-6">
                  {customForm.formFields[0]?.label && (
                    <div className="space-y-3">
                      <label htmlFor="name" className="block text-left">
                        {customForm.formFields[0]?.label}
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={
                          customForm.formFields[0]?.placeholder ||
                          "Enter your name"
                        }
                        className="border w-full rounded-lg px-3 py-2"
                      />
                    </div>
                  )}
                  {customForm.formFields[1]?.label && (
                    <div className="space-y-3">
                      <label htmlFor="surName" className="block text-left">
                        {customForm.formFields[1]?.label}
                      </label>
                      <input
                        name="surname"
                        value={formData.surName}
                        onChange={handleChange}
                        placeholder={
                          customForm.formFields[1]?.placeholder ||
                          "Enter your surname"
                        }
                        className="border w-full rounded-lg px-3 py-2"
                      />
                    </div>
                  )}
                </div>
                <div className="flex lg:flex-col gap-6">
                  {customForm.formFields[2]?.label && (
                    <div className="space-y-3">
                      <label htmlFor="email" className="block text-left">
                        {customForm.formFields[2]?.label}
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={
                          customForm.formFields[2]?.placeholder ||
                          "Enter your email"
                        }
                        type="email"
                        className="border w-full rounded-lg px-3 py-2"
                      />
                    </div>
                  )}

                  {customForm.formFields[3]?.label && (
                    <div className="space-y-3">
                      <label htmlFor="message" className="block text-left">
                        {customForm.formFields[3]?.label}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={
                          customForm.formFields[3]?.placeholder ||
                          "Enter your message"
                        }
                        className="border w-full rounded-lg px-3 py-2"
                      />
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button className="bg-formTitle w-full rounded-md py-2 text-primaryText">
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

FormContent.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
    ]),
    addressForm: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      placeholder: PropTypes.string,
    }),
    customForm: PropTypes.shape({
      title: PropTypes.string,
      formFields: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          placeholder: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};
export default FormContent;
