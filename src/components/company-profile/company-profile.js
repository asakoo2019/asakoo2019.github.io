import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
// import { firestore } from '../firebase/db';
import DropzoneDialogBlock from '../image-uploader-block';

// const user = firestore.collection('users').doc('IaRlvQrADIVN2lOxZytECU0fwGB3').get()
//              .then(doc => doc.data());
=======
import { firestore } from '../firebase/db';
import DropzoneDialogBlock from '../image-uploader-block';

const user = firestore.collection('users').doc('IaRlvQrADIVN2lOxZytECU0fwGB3').get()
             .then(doc => doc.data());
console.log(user);
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
=======
// import { firestore } from '../firebase/db';
import DropzoneDialogBlock from '../image-uploader-block';

// const user = firestore.collection('users').doc('IaRlvQrADIVN2lOxZytECU0fwGB3').get()
//              .then(doc => doc.data());
>>>>>>> aed63696f3bd2a220bd01da63ca67bfed503c205
const CompanyProfile = () => {
  return (
    <div>
      <img src='' alt=''/>
      <DropzoneDialogBlock/>
    </div>
  );
};

export default CompanyProfile;