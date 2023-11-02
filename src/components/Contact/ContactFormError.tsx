type Props = {
  error: string;
};

const ContactFormError: React.FC<Props> = ({ error }) => {
  return <p className="text-sm text-violet-300">{error}</p>;
};

export default ContactFormError;
