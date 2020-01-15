import React, { useState } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import { storage } from '../../firebase/db';

const UserImageBlock = (props) => {

	const { user, id } = props;
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	
	const handleClose = () => {
		setOpen(false);
	};

	const handleSave = (files) => {
		if (files.length === 1) {
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
					props.setUserImage(downloadURL);
				});
			});
			setOpen(false);
		} else {
			alert('Only one photo');
		};
	};

	return (
		<>
			{props.setUserImage ? <Button onClick={handleOpen}>
				<img src={user.userImage} alt={user.userName}/>
			</Button> : <img src={user.userImage} alt={user.userName}/>}
			<DropzoneDialog open={open}
				onSave={handleSave}
				acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
				showPreviews={true}
				maxFileSize={500000}
				onClose={handleClose} />
		</>
	);
};

export default UserImageBlock;