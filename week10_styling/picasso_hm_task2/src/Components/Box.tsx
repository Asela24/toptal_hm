import { Container,Typography } from '@toptal/picasso';
import { Form } from '@toptal/picasso-forms';
import { Hero } from './Layout';

export interface InputHero {
    name: string,
    hero: string, 
    cape: string,
    universe?: string
}

export const CreateHeroForm = ({ setHeroesList }: { setHeroesList:  React.Dispatch<React.SetStateAction<Hero[]>> }) => {

    const addHeroToDB = (value: InputHero) => {
        const obj = createHeroObject(value);
        setHeroesList(prev => [...prev, obj])
    }

    return (
        <Container bordered rounded padded='medium' top='medium'>
            <Typography variant='heading' color='black' size='xlarge'>
                Create a new hero
            </Typography>
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

