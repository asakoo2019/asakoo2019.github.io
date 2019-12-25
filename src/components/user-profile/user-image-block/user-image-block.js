import React, { Component } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import { storage, auth } from '../../firebase/db';

export default class UserImageBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			id: ' ',
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
			const dotIndex = fileName.lastIndexOf('.');
			const storageRef = storage.ref(`/${this.state.id}/${this.state.id}${fileName.slice(dotIndex)}`);
			const uploadTask = storageRef.put(selectedFile);

			uploadTask.on('state_changed', function(snapshot){
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
					console.log('File available at', downloadURL);
					this.props.setUserImage(downloadURL);
				});
			});
			this.setState({
				open: false
			});
		} else {
			alert('Only one photo');
		};
  };
  
	componentDidMount() {
		auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
					id: user.uid
				});
      } else {
        this.setState({
					id: ' '
				});
      };
    });
	};

	render() {
    const user = this.props.user;
		return (
			<div>
				{this.props.setUserImage ? <Button onClick={this.handleOpen.bind(this)}>
          										<img src={user.userImage} alt={user.userName}/>
												</Button> 
										 : <img src={user.userImage} alt={user.userName}/>}
				<DropzoneDialog open={this.state.open}
					onSave={this.handleSave.bind(this)}
					acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
					showPreviews={true}
					maxFileSize={500000}
					onClose={this.handleClose.bind(this)} />
			</div>
		);
	};
};