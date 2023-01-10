import { send } from "@emailjs/browser";
import { Field, Form, Formik } from "formik";

const ContactSection = () => {
  return (
    <section className="min-h-screen flex justify-center relative bg-accent/5">
      <div className="bg-title/50 absolute w-full top-20 lg:top-[15rem] h-1/2 -z-20"></div>
      <div className="flex flex-col lg:flex-row sm:w-9/12 items-center justify-between">
        <div className="flex flex-col sm:w-1/2 ml-2">
          <h2 className="mb-20 text-3xl lg:text-accentContrast pt-5">
            Contacto
          </h2>
          <p className=" text-accentContrast mb-5">
            ¿Tiene alguna pregunta , necesita más información sobre las clase o
            tal vez ya te decidiste y quieres inscribirte ? Contacta conmigo
            completando este formulario.
          </p>
          <p className="text-accentContrast mb-5">
            ¿Tiene alguna pregunta , necesita más información sobre las clase o
            tal vez ya te decidiste y quieres inscribirte ? Contacta conmigo
            completando este formulario.
          </p>
          <p className="text-accentContrast">
            Rellena el formulario y empeieza tu viaje para convertitr en el
            proximo campion de tennis
          </p>
        </div>
        <div className="shadow sm:p-10  py-10 px-2 mt-10 max-w-[30rem] w-full lg:w-1/2 bg-accentContrast rounded-md mb-5">
          <h3 className="text-4xl">Apuntate a jugar</h3>
          <Formik
            initialValues={{
              name: " ",
              email: "",
              message: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              send(
                "TennisService_uww0a1i",
                "tenistemplate_836969l",
                {
                  from_name: values.name,
                  email: values.email,
                  message: values.message,
                },
                "s7afD_Rf_nZcjVQga"
              )
                .then(() => {
                  alert("Mensaje enviado");
                  setSubmitting(false);
                })
                .catch(() => {
                  alert("Error al enviar el mensaje");
                });
            }}
          >
            <Form>
              <div className="flex flex-col my-7">
                <label className="my-2" htmlFor="name">
                  Nombre
                </label>
                <Field
                  className="h-10 border rounded pl-2"
                  id="name"
                  name="name"
                  placeholder="Jose"
                />
              </div>
              <div className="flex flex-col my-7">
                <label className="my-2" htmlFor="email">
                  Email
                </label>
                <Field
                  className="h-10 border rounded pl-2"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="joseAmazing@gmail.com"
                />
              </div>
              <div className="flex flex-col my-7">
                <label className="my-2" htmlFor="message">
                  Mensaje
                </label>
                <Field
                  as="textarea"
                  className="h-40 border rounded pl-2 "
                  id="message"
                  name="message"
                  placeholder="Pon aqui todas tus dudas :)"
                />
              </div>
              <button
                type="submit"
                className="bg-accent w-full rounded text-accentContrast mt-5 h-10"
              >
                Enviar mensaje
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
