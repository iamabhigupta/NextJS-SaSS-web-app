// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'

// ** Styled Component Import
import { EditorWrapper } from 'src/@core/styles/libs/react-draft-wysiwyg'

// ** Demo Components Imports
import EditorControlled from 'src/views/forms/form-elements/editor/EditorControlled'
import EditorUncontrolled from 'src/views/forms/form-elements/editor/EditorUncontrolled'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/editor/EditorSourceCode'

// ** Styles
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const NewCategoryContent = () => {
  return (
    <EditorWrapper>
      <Grid container spacing={6} className='match-height'>
        <Grid item xs={12}>
          <EditorControlled />
        </Grid>
      </Grid>
    </EditorWrapper>
  )
}

export default NewCategoryContent
