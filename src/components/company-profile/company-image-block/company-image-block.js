import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import { storage } from '../../firebase/db';

const CompanyImageBlock = (props) => {

	const { company, id } = props;
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
			const storageRef = storage.ref(`/${id}/${id}${fileName.slice(dotIndex)}`);
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
					props.setCompanyImage(downloadURL);
				});
			});
			setOpen(false);
	};

	return (
		<>
			{props.setCompanyImage ? <Button onClick={handleOpen}>
				<img src={company.companyImage} alt={company.companyName}/>
			</Button> : <img src={company.companyImage} alt={company.companyName}/>}
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

export default CompanyImageBlock;