import { Code16, Container,Typography } from '@toptal/picasso';
export const Box = () => {
    return (
        <Container bordered rounded padded='medium' top='small'>
            <Container bordered rounded padded={'medium'}>
                <Typography variant='heading' color='black' size='large'>
                     Box 1 Title
                </Typography>
                <Code16 scale={1}/> 
                <Typography inline={true} color='green' size='xsmall'> Hover the icon for more info </Typography>
                <Container top='small'> 
                       <Typography color='black' weight='semibold' variant='body'>This is the content of the first box. It should be aligned to the left</Typography>
                       <Typography size='xsmall'>We will add a form here soon</Typography>
                </Container>
             
            </Container>  

            </Container>
            )

}