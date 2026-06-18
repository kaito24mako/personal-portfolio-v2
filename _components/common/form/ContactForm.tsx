function ContactForm() {
  return (
    <form className="border bg-border border-surface rounded-md w-md p-6">
      <legend className="text-center text-accent font-semibold">
        Email me
      </legend>

      <label className="label">Username</label>
      <input
        type="text"
        className="input"
        placeholder="username"
        name="username"
      />

      <label className="label">Password</label>
      <input
        type="password"
        className="input"
        placeholder="password"
        name="password"
        autoComplete="current-password"
      />

      <button className="btn btn-neutral mt-4">Login</button>
    </form>
  );
}

export default ContactForm;
