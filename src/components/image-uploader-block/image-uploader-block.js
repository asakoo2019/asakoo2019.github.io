import React, { Component } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import { storage } from '../firebase/db';

export default class DropzoneDialogBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	};
	
	handleOpen() {
		this.setState({
			open: true,
		});
	};
	
	handleClose() {
		this.setState({
			open: false
		});
	};

	handleSave = (files) => {
		if (files.length === 1) {
			const selectedFile = files[0];
			const fileName = selectedFile.name;
			const storageRef = storage.ref('/user-image/' + fileName);
			const uploadTask = storageRef.put(selectedFile);
			uploadTask.on('state_changed', function(snapshot){
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case 'paused': // or 'paused'
						console.log('Upload is paused');
						break;
					case 'running': // or 'running'
						console.log('Upload is running');
						break;
					default: ;
				};
			}, function(error) {
				alert('Autorize please');
			}, () => {
				uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
					console.log('File available at', downloadURL);
					this.props.setDownloadURL(downloadURL);
				});
			});

			this.setState({
				open: false
			});
		} else {
			alert('Only one photo');
		};
	};

	render() {
		return (
			<div>
				<Button onClick={this.handleOpen.bind(this)}>
					Add Image
				</Button>
				<DropzoneDialog
					open={this.state.open}
					onSave={this.handleSave.bind(this)}
					acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
					showPreviews={true}
					maxFileSize={500000}
					onClose={this.handleClose.bind(this)}
				/>
			</div>
		);
	};
};