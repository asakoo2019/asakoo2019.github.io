import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import { storage, firestore } from '../../firebase/db';
import { connect } from 'react-redux';

const CompanyBackgroundBlock = (props) => {
	const { company, id, showItems, dispatch } = props;
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	
	const handleClose = () => {
		setOpen(false);
	};

	const handleSave = (files) => {
			const selectedFile = files[0];
			const fileName = selectedFile.name;
			const dotIndex = fileName.lastIndexOf('.');
			const storageRef = storage.ref(`/${id}-background/${id}-background${fileName.slice(dotIndex)}`);
			const uploadTask = storageRef.put(selectedFile);
			uploadTask.on('state_changed',function(snapshot){
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						console.log('Upload is running');
						break;
					default: ;
				};
			}, function(error) {
				alert('Autorize please');
			}, () => {
				uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
					if (downloadURL !== null) {
						firestore.collection("companies").doc(id)
						.update({
							companyBackground: downloadURL
						}).then(function() {
						}).catch(function(error) {
							console.error("Error updating document: ", error);
						});
					};
					dispatch({type: "SIGN-IN", payload: {...company, companyBackground: downloadURL}});
				});
			});
			setOpen(false);
	};

	return (
		<>
			{showItems && <Button variant='outlined' onClick={handleOpen}>Change background</Button>}
			<DropzoneDialog open={open}
				onSave={handleSave}
				acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
				showPreviews={true}
				filesLimit={1}
				maxFileSize={500000}
				onClose={handleClose} />
		</>
	);
};

export default connect()(CompanyBackgroundBlock);