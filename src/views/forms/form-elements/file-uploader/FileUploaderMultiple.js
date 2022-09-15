// ** React Imports
import { Fragment, useState } from 'react'
import axios from 'axios'

// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'

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

const FileUploaderMultiple = ({fileId}) => {
  // ** State
  const [files, setFiles] = useState([])

  // console.log("==========1111111111111111111=")
  // console.log(files)


  // console.log(files);
  const handleChange = (files) => {

    //  useEffect(() => {
   
  
   //   let operation = `{ "query": "mutation($site_logo: Upload) { settingUpdateOrCreate(data: {site_name: \\"${siteName}\\", site_category: \\"${siteCategory}\\", site_type: \\"${siteType}\\", site_logo: $site_logo}) {site_name, site_category, site_type, site_logo}}","variables": {"site_logo": null} }`
   
      let operation = `{ "query": "mutation($medias: [Upload]) { mediaUpdateOrCreate(data: {type: \\"Product\\", medias: $medias}) {id, type, src}}","variables": {"medias": [null]} }`
  
      var formData = new FormData();
      formData.append('operations', operation);
      formData.append('map', '{"0": ["variables.medias.0"]}');
      formData.append('0', files[0]);
  
      console.log("fordata---response")
  
      for (var key of formData.entries()) {
        console.log(key[0] + ", " + key[1]);
    }
  
       axios.post(process.env.NEXT_PUBLIC_API_ENDPOINT, formData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer '+window.localStorage.getItem('accessToken')
          }
      })
         .then((result) => {
                    
          fileId(result.data.data.mediaUpdateOrCreate[0].id)
          localStorage.setItem("productMediaId", result.data.data.mediaUpdateOrCreate[0].id);
         
  
      }).catch(err => {
  
  
        console.log(err)
      })
  
  
  //  }, []);
      
  
    }

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file)))

      setTimeout(
        () => handleChange(acceptedFiles.map(file => Object.assign(file))), 
        1000
      );

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

  const handleLinkClick = event => {
    event.preventDefault()
  }

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  return (
    <Fragment>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>
          <Img width={300} alt='Upload img' src='/images/misc/upload.png' />
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>
            <HeadingTypography variant='h5'>Drop files here or click to upload.</HeadingTypography>
            <Typography color='textSecondary'>
              Drop files here or click{' '}
              <Link href='/' onClick={handleLinkClick}>
                browse
              </Link>{' '}
              thorough your machine
            </Typography>
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

export default FileUploaderMultiple
