import emailjs from 'emailjs-com';
import { Form, Input, TextArea,Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import "./ContactUs.css"

const ContactUsForm = () => {
    const SERVICE_ID = "service_q7jfaw4";
    const TEMPLATE_ID = "template_220q62k";
    const USER_ID = "RpfI2tiLJvbu5BKwH";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
        };
 return (
    <main className="margin contact-us-page">
      <figure className="contact-hero">
          <img className="no-right-click" src={process.env.PUBLIC_URL + '/images/ocean-view-portobelo-panama.JPG'} alt="ocean view from Portebelo Panama"/>
      </figure>
      <section className="contact-us-form-container">
        <h1 className="centered">If you have any questions, I'd like to hear from you.</h1>
        <Form className="contact-us-form" onSubmit={handleOnSubmit}>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Email'
            name='user_email'
            placeholder='Email…'
            required
            icon='mail'
            iconPosition='left'
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Name'
            name='user_name'
            placeholder='Name…'
            required
            icon='user circle'
            iconPosition='left'
          />
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Message'
            name='user_message'
            placeholder='Message…'
            rows='10'
            cols='30'
            required
          />
          <Button type='submit' color='green'>Submit</Button>
        </Form>
      </section>
    </main>
 )

}



export default ContactUsForm