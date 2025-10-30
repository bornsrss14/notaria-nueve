export const ContactItem = ({ typeDireccion, description, Icono }) => {
  return (
    <div className="contact-item">
      <Icono className="contact-icon" stroke={1} color="blue" />
      <div className="contact-text">
        <h4>{typeDireccion}:</h4>
        <p className="break-text">{description}</p>
      </div>
    </div>
  );
};

export default ContactItem;
