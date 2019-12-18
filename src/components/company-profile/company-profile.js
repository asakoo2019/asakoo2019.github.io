import React from 'react';
<<<<<<< HEAD
import { firestore } from '../firebase/db';
import DropzoneDialogBlock from '../image-uploader-block';

const user = firestore.collection('users').doc('IaRlvQrADIVN2lOxZytECU0fwGB3').get()
             .then(doc => doc.data());
console.log(user);
=======
// import { firestore } from '../firebase/db';
import DropzoneDialogBlock from '../image-uploader-block';

// const user = firestore.collection('users').doc('IaRlvQrADIVN2lOxZytECU0fwGB3').get()
//              .then(doc => doc.data());
>>>>>>> home
const CompanyProfile = () => {
  return (
    <div>
      <img src='' alt=''/>
      <DropzoneDialogBlock/>
    </div>
  );
};

export default CompanyProfile;