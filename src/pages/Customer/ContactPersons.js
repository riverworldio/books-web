import React, { useState } from 'react';
import { Container, FlexContainer, CustomInput, TextTypo, TextBtn, FilledBtn } from '../../components';

const ContactPersons = ({ contacts, setContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [emailCont, setEmailCont] = useState('');
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const handleAddContact = () => {
    if (name && number && emailCont) {
      const currentDate = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
      setContacts([...contacts, { name, number, emailCont, date: currentDate }]);
      setName('');
      setNumber('');
      setEmailCont('');
      setIsOpenAdd(false);
    } else {
      alert('All fields are required.');
    }
  };

  return (
    <Container>
      {contacts.map((contact, index) => (
        <Container
          key={index}
          width="60%"
          bgColor="#F8F8F8"
          padding="20px"
          margin="20px 0px"
        >
          <FlexContainer>
            <FlexContainer direction="column">
              <TextTypo text={contact.name} fontWeight="600" fontSize="18px" />
              <TextTypo text={contact.date} fontWeight="400" fontSize="14px" />
            </FlexContainer>
            <FlexContainer direction="column">
              <TextTypo text={contact.number} fontWeight="600" fontSize="18px" textAlign="right" />
              <TextTypo text={contact.emailCont} fontWeight="400" fontSize="14px" textAlign="right" />
            </FlexContainer>
          </FlexContainer>
        </Container>
      ))}
      <TextBtn text="+ Add Contact Person" fontColor="#0076BE" padding="0px" onClick={() => setIsOpenAdd(!isOpenAdd)} />
      {isOpenAdd && (
        <Container>
          <FlexContainer>
            <CustomInput type="text" label="Name" value={name} placeholder="Enter contact person name" onChange={(e) => setName(e.target.value)} width="30%" required={true} />
            <CustomInput type="number" label="Number" value={number} placeholder="Enter contact person number" onChange={(e) => setNumber(e.target.value)} width="30%" required={true} />
            <CustomInput type="email" label="Email" value={emailCont} placeholder="Enter contact person email" onChange={(e) => setEmailCont(e.target.value)} width="30%" required={true} />
          </FlexContainer>
          <FilledBtn text="Add" onClick={handleAddContact} />
        </Container>
      )}
    </Container>
  );
};

export default ContactPersons;
