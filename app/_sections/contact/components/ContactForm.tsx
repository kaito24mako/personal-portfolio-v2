import Button from "@/_components/common/button/Button";

// todo: implement Formspree to send form data to serverless client for email submissions https://help.formspree.io/articles/using-the-cli/build-a-contact-form-with-react/

function ContactForm() {
  return (
    <form className="flex flex-col gap-10 bg-surface shadow-sm rounded-xs p-15">
      <legend className="text-center text-accent font-semibold text-xl">
        Send a message!
      </legend>

      <input
        type="text"
        id="name"
        name="name"
        className="border-b border-border/40 text-foreground-muted focus:outline-hidden"
        placeholder="Full Name *"
        required
      />

      <input
        type="email"
        id="email"
        name="email"
        className="border-b border-border/40 text-foreground-muted focus:outline-hidden"
        placeholder="Email *"
        required
      />

      <textarea
        id="message"
        name="message"
        className="border-b border-border/40 text-foreground-muted focus:outline-hidden"
        placeholder="Message *"
        required
      />

      <Button
        type="submit"
        size="small"
        ariaLabel="Submit"
        className="text-foreground bg-border/40 hover:bg-border/90!"
      >
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
