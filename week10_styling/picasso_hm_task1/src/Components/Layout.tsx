import { Grid, Page } from '@toptal/picasso'
import { Box } from './Box';
import { HeroesTable } from './HeroesTable';

const Layout = () => {
    return (
        <Page>
            <Page.TopBar title='Top heroes' />
            <Page.Content>
            <Grid>
                <Grid.Item small={6}>
                    <Box />
                </Grid.Item>
                <Grid.Item small={6}>
                    <HeroesTable />
                </Grid.Item>
            </Grid> 
            </Page.Content>
        </Page>
    )
}

export default Layout;

