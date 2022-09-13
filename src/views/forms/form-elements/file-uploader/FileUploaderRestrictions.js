// ** React Imports
import { Fragment, useState } from 'react'
import axios from 'axios'

// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'

// ** Third Party Components
import toast from 'react-hot-toast'
import { useDropzone } from 'react-dropzone'
import FormData from "form-data"

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 250
  }
}))

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}))

const FileUploaderRestrictions = ({fileSrc}) => {

  // ** State
  const [files, setFiles] = useState([])
  fileSrc(JSON.stringify(files))

 
  // console.log(files);
  const handleChange = () => {
    console.log(888888)

  //   let siteName = "HH";  
  //   let siteCategory = "";  
  //   let siteType = "";  

  //   let operation = `{ "query": "mutation($site_logo: Upload) { settingUpdateOrCreate(data: {site_name: \\"${siteName}\\", site_category: \\"${siteCategory}\\", site_type: \\"${siteType}\\", site_logo: $site_logo}) {site_name, site_category, site_type, site_logo}}","variables": {"site_logo": null} }`
  //   var formData = new FormData();
  //   formData.append('operations', operation);
  //   formData.append('map', '{"0": ["variables.site_logo"]}');
  //   formData.append('0', files[0]);

  //   console.log("fordata---response")

  //   for (var key of formData.entries()) {
  //     console.log(key[0] + ", " + key[1]);
  // }

  //    axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT, formData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer '+window.localStorage.getItem('accessToken')
  //       }
  //   })
  //       .then(response => console.log(response))
  //       .catch(error => console.log(error));

    // axios({
    //   url: 'https://1jzxrj179.lp.gql.zone/graphql',
    //   method: 'post',
    //   data: {
    //     query: `
    //       query PostsForAuthor {
    //         author(id: 1) {
    //           firstName
    //             posts {
    //               title
    //               votes
    //             }
    //           }
    //         }
    //       `
    //   }
    // }).then((result) => {
    //   console.log(result.data)
    // });

  }



  
  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 2,
    maxSize: 2000000,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file)))
      
      // handleChange()

    },
    onDropRejected: () => {
      toast.error('You can only upload 2 files & maximum size of 2 MB.', {
        duration: 2000
      })
    }
  })

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {      
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />
    } else {
      return <FileDocumentOutline />
    }
  }

  const handleRemoveFile = file => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter(i => i.name !== file.name)
    setFiles([...filtered])
  }

  const fileList = files.map(file => (
    
    <ListItem key={file.name}>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
        <div>
          <Typography className='file-name'>{file.name}</Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(file.size / 100) / 10 > 1000
              ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
              : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <Close fontSize='small' />
      </IconButton>
    </ListItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  return (
    <Fragment>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>
          <Img width={150} alt='Upload img' src='/images/misc/upload.png' />
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>
            <HeadingTypography variant='h6'>Drop files here or click to upload.</HeadingTypography>
            <Typography color='textSecondary'>Allowed *.jpeg, *.jpg, *.png, *.gif</Typography>
            <Typography color='textSecondary'>Max 2 files and max size of 2 MB</Typography>
          </Box>
        </Box>
      </div>
      {files.length ? (
        <Fragment>
          <List>{fileList}</List>
          <div className='buttons'>
            <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
              Remove All
            </Button>
            <Button variant='contained'>Upload Files</Button>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  )
}

export default FileUploaderRestrictions
