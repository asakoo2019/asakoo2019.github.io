<<<<<<< HEAD
import React, { Component } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import { storage } from '../firebase/db';

export default class DropzoneDialogBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			files: []
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

	handleSave(files) {
		if (files.length === 1) {
			// Create a root reference
			const selectedFile = files[0];
			const fileName = selectedFile.name;
			const storageRef = storage.ref('/user-image/' + fileName);
			const uploadTask = storageRef.put(selectedFile);
			// Register three observers:
			// 1. 'state_changed' observer, called any time the state changes
			// 2. Error observer, called on failure
			// 3. Completion observer, called on successful completion
			uploadTask.on('state_changed', function(snapshot){
				// Observe state change events such as progress, pause, and resume
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				// const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				// console.log('Upload is ' + progress + '% done');
				// switch (snapshot.state) {
				// 	case 'paused': // or 'paused'
				// 		console.log('Upload is paused');
				// 		break;
				// 	case 'running': // or 'running'
				// 		console.log('Upload is running');
				// 		break;
				// };
			}, function(error) {
				// Handle unsuccessful uploads
				alert('Autorize please');
			}, function() {
				// Handle successful uploads on complete
				// For instance, get the download URL: https://firebasestorage.googleapis.com/...
				uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
					console.log('File available at', downloadURL);
				});
			});

			//Saving files to state for further use and closing Modal.
			this.setState({
				files: files,
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
					maxFileSize={5000000}
					onClose={this.handleClose.bind(this)}
				/>
			</div>
		);
	};
};
=======
import React, { Component } from 'react'
import { DropzoneDialog } from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
 
export default class DropzoneDialogBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        };
    }
 
    handleClose() {
        this.setState({
            open: false
        });
    }
 
    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files, 
            open: false
        });
    }
 
    handleOpen() {
        this.setState({
            open: true,
        });
    }
 
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
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                />
            </div>
        );
    }
}
>>>>>>> 201601a32ab2f30ca7b5fdd4967a53985c9781d3
