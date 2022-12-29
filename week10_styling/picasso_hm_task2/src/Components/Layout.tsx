import { Grid, Page } from '@toptal/picasso'
import { useState } from 'react';
import { CreateHeroForm, InputHero } from './Box';
import { HeroesTable } from './HeroesTable';
import data from '../db';


export interface Hero extends InputHero {
    id: number,
    universe: string,
}

const Layout = () => {
    const [heroesList, setHeroesList] = useState<Hero[]>(data);
    return (
        <Page>
            <Page.TopBar title='Top heroes' />
            <Page.Content>
            <Grid justifyContent='space-around'>
                <Grid.Item small={4}>
                    <CreateHeroForm setHeroesList={setHeroesList}/>
                </Grid.Item>
                <Grid.Item small={5}>
                    <HeroesTable heroesList={heroesList} />
                </Grid.Item>
            </Grid> 
            </Page.Content>
        </Page>
    )
}

export default Layout;

