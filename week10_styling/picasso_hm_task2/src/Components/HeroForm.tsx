import { Container,Typography } from '@toptal/picasso';
import { Form } from '@toptal/picasso-forms';
import { Hero } from './Layout';

export interface InputHero {
    name: string,
    hero: string, 
    cape: string,
    universe?: string
}

export const HeroForm = ({ setHeroesList, heroesList }: { setHeroesList:  React.Dispatch<React.SetStateAction<Hero[]>>, heroesList: Hero[]}) => {

    const addHeroToDB = (value: InputHero) => {
        const obj = createHeroObject(value);
        setHeroesList(prev => [...prev, obj])
    }

    const validateName = (name: string) => {  
        const list =  heroesList.find(hero => hero.hero === name);
        console.log(list)
        if (list !== undefined) {
            return `${name} is already taken`
        }
    }
    
    return (
        <Container bordered rounded padded='medium' top='medium'>
            <Typography variant='heading' color='black' size='xlarge'>
                Create a new hero
            </Typography>
            <Form.ConfigProvider value={{validateOnSubmit: true}}>
                <Form onSubmit={(value: InputHero) => addHeroToDB(value)}>
                    <Form.Input 
                        required 
                        name='name'
                        label='Original Name' 
                        placeholder='Type the secret identity of our hero' 
                    />
                    <Form.Input
                        required
                        name='hero'
                        label='Hero Name'
                        placeholder='How do you want to call out hero?'
                        validate={validateName}
                    />
                    <Form.RadioGroup
                        required
                        name='cape'
                        label='Wears a cape?'>
                        <Form.Radio value='Yes' label='Yes' />
                        <Form.Radio value='No' label='No' />
                    </Form.RadioGroup>
                    <Form.Select
                        enableReset
                        name='universe'
                        label='Universe'
                        width='auto'
                        options={universeTypes}
                    />
                    <Container top='medium'> 
                        <Form.SubmitButton variant='positive'>Create</Form.SubmitButton>
                    </Container>
                </Form>
            </Form.ConfigProvider>
        </Container>
    )

}

const universeTypes = [
    {value: 'DC', text: 'DC'},
    {value: 'Marvel', text: 'Marvel'}
]


const createHeroObject = (value: InputHero): Hero => {
    const obj = {...value, universe: value.universe ? value.universe : '-', id: Math.floor(Math.random() * 1000)}
    return obj;
}

